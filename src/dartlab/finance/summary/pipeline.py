from pathlib import Path

import polars as pl

from dartlab.finance.summary.types import AnalysisResult, YearAccounts
from dartlab.core.reportSelector import selectReport
from dartlab.finance.summary.contentExtractor import extractSummaryContent
from dartlab.core.tableParser import extractAccounts
from dartlab.finance.summary.bridgeMatcher import numberBridgeMatch
from dartlab.finance.summary.segmentation import detectBreakpoints


def loadYearData(df: pl.DataFrame) -> dict[str, YearAccounts]:
    """parquet DataFrame → {year: YearAccounts} 딕셔너리."""
    yearData: dict[str, YearAccounts] = {}
    years = sorted(df["year"].unique().to_list(), reverse=True)

    for year in years:
        report = selectReport(df, year)
        if report is None:
            continue

        content = extractSummaryContent(report)
        if content is None:
            continue

        accounts, order = extractAccounts(content)
        if accounts:
            yearData[year] = YearAccounts(year=year, accounts=accounts, order=order)

    return yearData


def analyze(
    source: str | Path | pl.DataFrame,
    ifrsOnly: bool = True,
) -> AnalysisResult | None:
    """단일 기업 분석: 연도별 매칭률, 전환점 탐지, 구간 분리.

    Args:
        source: parquet 파일 경로 또는 polars DataFrame
        ifrsOnly: True면 K-IFRS 이후(2011~)만 분석

    Returns:
        AnalysisResult 또는 데이터 부족 시 None
    """
    if isinstance(source, (str, Path)):
        df = pl.read_parquet(str(source))
    else:
        df = source

    corpName = None
    if "corp_name" in df.columns:
        names = df["corp_name"].unique().to_list()
        if names:
            corpName = names[0]

    yearData = loadYearData(df)

    if len(yearData) < 2:
        return None

    sortedYears = sorted(yearData.keys(), reverse=True)

    if ifrsOnly:
        sortedYears = [y for y in sortedYears if int(y) >= 2011]
        if len(sortedYears) < 2:
            return None

    pairResults = []
    for i in range(len(sortedYears) - 1):
        curYear = sortedYears[i]
        prevYear = sortedYears[i + 1]
        accCur = yearData[curYear].accounts
        accPrev = yearData[prevYear].accounts

        result = numberBridgeMatch(accCur, accPrev, curYear=curYear, prevYear=prevYear)
        pairResults.append(result)

    segments, breakpoints = detectBreakpoints(pairResults, sortedYears)

    contPairs = [p for p in pairResults if p.yearGap == 1]
    contMatched = sum(p.matched for p in contPairs)
    contTotal = sum(p.total for p in contPairs)
    contRate = contMatched / contTotal if contTotal > 0 else None

    allMatched = sum(p.matched for p in pairResults)
    allTotal = sum(p.total for p in pairResults)
    allRate = allMatched / allTotal if allTotal > 0 else None

    analysisResult = AnalysisResult(
        corpName=corpName,
        nYears=len(sortedYears),
        nPairs=len(pairResults),
        nBreakpoints=len(breakpoints),
        nSegments=len(segments),
        allRate=allRate,
        allMatched=allMatched,
        allTotal=allTotal,
        contRate=contRate,
        contMatched=contMatched,
        contTotal=contTotal,
        segments=segments,
        breakpoints=breakpoints,
        pairResults=pairResults,
        yearAccounts=yearData,
    )

    analysisResult.dataframe = _buildDataFrame(sortedYears, yearData, pairResults, segments)
    return analysisResult


def _buildDataFrame(
    sortedYears: list[str],
    yearData: dict[str, YearAccounts],
    pairResults: list["BridgeResult"],
    segments: list["Segment"],
) -> pl.DataFrame:
    """매칭 결과를 기반으로 계정명 × 연도 DataFrame 생성.

    최신 연도 계정명을 기준으로, pairs 체인을 따라가며 과거 연도의
    당기(idx=0) 금액을 수집한다. 구간(segment)별로 독립 처리.
    """
    nameChains: dict[str, dict[str, float | None]] = {}
    accountOrder: list[str] = []

    for seg in segments:
        if seg.nYears < 1:
            continue

        segYears = []
        for y in sortedYears:
            if seg.nYears == 1:
                if y == seg.startYear:
                    segYears.append(y)
            else:
                if int(seg.startYear) >= int(y) >= int(seg.endYear):
                    segYears.append(y)

        if not segYears:
            continue

        latestYear = segYears[0]
        if latestYear not in yearData:
            continue

        latestAccounts = yearData[latestYear]
        for name in latestAccounts.order:
            if name not in nameChains:
                nameChains[name] = {}
                accountOrder.append(name)
            amt = latestAccounts.accounts[name][0] if latestAccounts.accounts[name] else None
            nameChains[name][latestYear] = amt

        curNames = {name: name for name in latestAccounts.order}

        for pr in pairResults:
            if pr.curYear not in segYears or pr.prevYear not in segYears:
                continue

            nextNames: dict[str, str] = {}
            for baseName, curName in curNames.items():
                if curName in pr.pairs:
                    prevName = pr.pairs[curName]
                    nextNames[baseName] = prevName

                    if prevName in yearData[pr.prevYear].accounts:
                        prevAmts = yearData[pr.prevYear].accounts[prevName]
                        amt = prevAmts[0] if prevAmts else None
                        nameChains[baseName][pr.prevYear] = amt

            curNames = nextNames

    rows = []
    for name in accountOrder:
        row: dict[str, object] = {"계정명": name}
        for year in sortedYears:
            row[year] = nameChains[name].get(year)
        rows.append(row)

    if not rows:
        return pl.DataFrame()

    schema = {"계정명": pl.Utf8}
    for year in sortedYears:
        schema[year] = pl.Float64
    return pl.DataFrame(rows, schema=schema)
