"""23개 키워드별 패턴(A/B/C/D) 분포 분석.

시계열 비교 가능 여부:
- Pattern A/B/C: 당기/전기 구분 → 시계열 비교 가능
- Pattern D: 단일 시점 ("현재") → 연도별 비교는 가능하나 기간 내 당기/전기 비교 불가
"""

import os
import sys

sys.path.insert(0, "src")

from dartlab.core.dataLoader import loadData
from dartlab.core.notesExtractor import extractNotesContent, findNumberedSection
from dartlab.core.reportSelector import selectReport
from dartlab.core.tableParser import parseNotesTable

DATA_DIR = r"C:\Users\MSI\OneDrive\Desktop\sideProject\nicegui\eddmpython\data\dartData\docsData"

ALL_KEYWORDS = [
    "재고자산", "주당이익", "충당부채", "차입금", "매출채권",
    "리스", "투자부동산", "무형자산",
    "법인세", "특수관계자", "약정사항", "금융자산", "공정가치",
    "이익잉여금", "금융부채", "기타포괄손익", "사채",
    "종업원급여", "퇴직급여", "확정급여", "재무위험", "우발부채", "담보",
]

if __name__ == "__main__":
    codes = sorted(
        f.replace(".parquet", "")
        for f in os.listdir(DATA_DIR)
        if f.endswith(".parquet")
    )

    print(f"{'키워드':12s}  {'섹션':>4s}  {'파싱':>4s}  {'A':>3s}  {'B':>3s}  {'C':>3s}  {'D':>3s}  {'시계열%':>7s}  {'판정':6s}")
    print("-" * 72)

    for kw in ALL_KEYWORDS:
        found = 0
        parsed = 0
        patternCounts = {"A": 0, "B": 0, "C": 0, "D": 0}

        for code in codes:
            df = loadData(code)
            years = sorted(df["year"].unique().to_list(), reverse=True)
            report = selectReport(df, years[0], reportKind="annual")
            if report is None:
                continue
            contents = extractNotesContent(report)
            if not contents:
                continue
            section = findNumberedSection(contents, kw)
            if section is None:
                continue
            found += 1

            result = parseNotesTable(section)
            if not result:
                continue
            parsed += 1

            # 각 블록의 패턴 집계
            patterns = set()
            for block in result:
                p = block.get("pattern", "?")
                patterns.add(p)
            # 기업 단위로 판정: A/B/C 중 하나라도 있으면 시계열
            hasTimeSeries = bool(patterns & {"A", "B", "C"})
            if hasTimeSeries:
                for p in patterns & {"A", "B", "C"}:
                    patternCounts[p] += 1
            else:
                patternCounts["D"] += 1

        if found == 0:
            continue

        tsCount = patternCounts["A"] + patternCounts["B"] + patternCounts["C"]
        dCount = patternCounts["D"]
        tsRate = tsCount / parsed * 100 if parsed > 0 else 0

        if tsRate >= 80:
            verdict = "◎ 시계열"
        elif tsRate >= 50:
            verdict = "○ 혼합"
        elif tsRate > 0:
            verdict = "△ 일부"
        else:
            verdict = "✕ 단일"

        print(
            f"{kw:12s}  {found:4d}  {parsed:4d}  "
            f"{patternCounts['A']:3d}  {patternCounts['B']:3d}  {patternCounts['C']:3d}  {patternCounts['D']:3d}  "
            f"{tsRate:6.1f}%  {verdict}"
        )
