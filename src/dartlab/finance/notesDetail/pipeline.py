"""주석 세부항목 파이프라인."""

import re

import polars as pl

from dartlab.core.dataLoader import PERIOD_KINDS, extractCorpName, loadData
from dartlab.core.notesExtractor import extractNotesContent, findNumberedSection
from dartlab.core.reportSelector import selectReport
from dartlab.core.tableParser import detectUnit, parseAmount, parseNotesTable
from dartlab.finance.notesDetail.types import (
    NOTES_KEYWORDS,
    NotesDetailResult,
    NotesItem,
    NotesPeriod,
)


def notesDetail(
    stockCode: str,
    keyword: str,
    period: str = "y",
) -> NotesDetailResult | None:
    """주석 세부항목 테이블 추출.

    Args:
        stockCode: 종목코드 (6자리)
        keyword: 주석 키워드 (재고자산, 주당이익, 충당부채, 차입금, 매출채권, 리스, 투자부동산, 무형자산)
        period: "y" (연간) | "q" (분기) | "h" (반기)

    Returns:
        NotesDetailResult 또는 데이터 부족 시 None
    """
    df = loadData(stockCode)
    corpName = extractCorpName(df)

    keywords = NOTES_KEYWORDS.get(keyword, [keyword])
    kinds = PERIOD_KINDS.get(period, PERIOD_KINDS["y"])
    years = sorted(df["year"].unique().to_list(), reverse=True)

    allTables: dict[str, list[NotesPeriod]] = {}
    latestUnit = 1.0

    for year in years:
        for kind in kinds:
            report = selectReport(df, year, reportKind=kind)
            if report is None:
                continue

            contents = extractNotesContent(report)
            if not contents:
                continue

            section = None
            for kw in keywords:
                section = findNumberedSection(contents, kw)
                if section is not None:
                    break
            if section is None:
                continue

            parsed = parseNotesTable(section)
            if not parsed:
                continue

            unit = detectUnit(section)
            if not allTables:
                latestUnit = unit

            periods = []
            for block in parsed:
                items = [
                    NotesItem(name=it["name"], values=it["values"])
                    for it in block["items"]
                ]
                periods.append(NotesPeriod(
                    pattern=block["pattern"],
                    period=block["period"],
                    headers=block["headers"],
                    items=items,
                ))

            if periods:
                allTables[year] = periods
            break

    if not allTables:
        return None

    tableDf = _buildTableDf(allTables)

    return NotesDetailResult(
        corpName=corpName,
        keyword=keyword,
        nYears=len(allTables),
        unit=latestUnit,
        tables=allTables,
        tableDf=tableDf,
    )


def _normalizeName(name: str) -> str:
    """항목명 정규화. 한글 사이 공백 제거."""
    return re.sub(r"(?<=[\uAC00-\uD7A3])\s+(?=[\uAC00-\uD7A3])", "", name.strip())


def _pickValue(values: list[str]) -> str:
    """값 리스트에서 대표값 선택. 마지막 유효 숫자를 사용."""
    for v in reversed(values):
        if v and v.strip() and v.strip() not in ("-", ""):
            return v
    return values[0] if values else ""


def _buildTableDf(
    allTables: dict[str, list[NotesPeriod]],
) -> pl.DataFrame | None:
    """항목별 시계열 DataFrame 생성.

    각 기간의 마지막 유효 값(보통 장부금액/합계)을 대표값으로 사용.
    항목명은 공백 정규화하여 중복 방지.
    """
    itemData: dict[str, dict[str, str]] = {}
    colOrder: list[str] = []

    for year in sorted(allTables.keys(), reverse=True):
        periods = allTables[year]
        for p in periods:
            colName = f"{year}_{p.period}"
            if colName not in colOrder:
                colOrder.append(colName)
            for item in p.items:
                normalized = _normalizeName(item.name)
                if normalized not in itemData:
                    itemData[normalized] = {}
                if item.values:
                    itemData[normalized][colName] = _pickValue(item.values)

    if not itemData:
        return None

    rows = []
    for name, vals in itemData.items():
        row: dict[str, object] = {"항목": name}
        for col in colOrder:
            raw = vals.get(col, "")
            row[col] = parseAmount(raw)
        rows.append(row)

    schema: dict[str, type] = {"항목": pl.Utf8}
    for col in colOrder:
        schema[col] = pl.Float64
    return pl.DataFrame(rows, schema=schema)
