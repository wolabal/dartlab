"""
실험 ID: 019-01
실험명: 감사의견 + 감사보수 파서

목적:
- DART 공시의 "외부감사에 관한 사항" 섹션에서 감사의견·감사보수 테이블 파싱
- 시계열 DataFrame(연도별 감사인, 감사의견, 보수, 시간) 생성 가능성 검증

가설:
1. 감사의견 테이블은 2가지 패턴 존재
   - 패턴A: 8열 (사업연도/구분/감사인/감사의견/의견변형사유/계속기업/강조사항/핵심감사사항)
   - 패턴B: 5열 축약 (사업연도/감사인/감사의견/강조사항/핵심감사사항)
2. 감사용역(보수) 테이블은 7열 (사업연도/감사인/내용/계약보수/계약시간/실제보수/실제시간)
3. 267개 기업 95% 이상에서 파싱 성공

방법:
1. 섹션 타이틀로 감사 섹션 필터링
2. 마크다운 테이블 파싱
3. 감사의견/감사보수 테이블 분리 추출
4. 연도(제N기 → year) 매핑
5. 267개 대량 테스트

결과 (실험 후 작성):

결론:

실험일: 2026-03-07
"""
import os
import re
import sys

import polars as pl

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "..", "src"))

DATA_DIR = r"C:\Users\MSI\OneDrive\Desktop\sideProject\nicegui\eddmpython\data\dartData\docsData"

AUDIT_SECTION_PATTERNS = [
    "외부감사에 관한 사항",
    "감사인의 감사의견",
    "회계감사인의 감사의견",
    "감사인(공인회계사)의 감사의견",
]

FEE_SECTION_PATTERNS = [
    "감사인의 보수",
    "외부감사인에게 지급한 보수",
]


def findAuditSection(df: pl.DataFrame, year: str) -> str | None:
    """사업보고서에서 감사의견 포함 섹션을 찾아 내용 반환."""
    report = df.filter(
        (pl.col("year") == year)
        & (pl.col("report_type").str.contains("사업보고서"))
        & (~pl.col("report_type").str.contains("기재정정|첨부"))
    )
    if report.height == 0:
        return None

    for row in report.iter_rows(named=True):
        title = row["section_title"]
        for pat in AUDIT_SECTION_PATTERNS:
            if pat in title:
                return row["section_content"]

    for row in report.iter_rows(named=True):
        content = row["section_content"] or ""
        if "감사인" in content and "감사의견" in content and "|" in content:
            return content

    return None


def extractMarkdownTables(text: str) -> list[list[list[str]]]:
    """마크다운 텍스트에서 테이블들을 추출. 각 테이블은 행의 리스트, 각 행은 셀의 리스트."""
    tables = []
    currentTable = []
    for line in text.split("\n"):
        stripped = line.strip()
        if stripped.startswith("|") and stripped.endswith("|"):
            cells = [c.strip() for c in stripped.split("|")[1:-1]]
            if all(re.match(r"^-+$|^:?-+:?$", c) for c in cells if c):
                continue
            currentTable.append(cells)
        else:
            if currentTable and len(currentTable) >= 2:
                tables.append(currentTable)
            currentTable = []
    if currentTable and len(currentTable) >= 2:
        tables.append(currentTable)
    return tables


_PERIOD_RE = re.compile(r"제?(\d+)기")


def parseAuditOpinionTable(table: list[list[str]], year: str) -> list[dict] | None:
    """감사의견 테이블 파싱.

    반환: [{"fiscalPeriod": "제56기", "reportType": "감사보고서|연결감사보고서",
            "auditor": str, "opinion": str, "goingConcern": str,
            "emphasis": str, "keyAuditMatters": str}]
    """
    if len(table) < 2:
        return None

    header = table[0]
    headerStr = " ".join(header)

    if "감사의견" not in headerStr and "감사인" not in headerStr:
        return None

    results = []
    currentFiscalPeriod = ""

    nCols = len(header)

    for row in table[1:]:
        if len(row) < 3:
            continue

        while len(row) < nCols:
            row.append("")

        if nCols >= 7:
            period, reportType, auditor, opinion = row[0], row[1], row[2], row[3]
            goingConcern = row[5] if nCols > 5 else ""
            emphasis = row[6] if nCols > 6 else ""
            keyMatters = row[7] if nCols > 7 else ""
        else:
            period, auditor, opinion = row[0], row[1], row[2]
            reportType = ""
            goingConcern = ""
            emphasis = row[3] if len(row) > 3 else ""
            keyMatters = row[4] if len(row) > 4 else ""

        if period and period.strip():
            currentFiscalPeriod = period.strip()
        else:
            period = ""

        fiscalPeriod = currentFiscalPeriod

        if not auditor or auditor.strip() in ("-", "", "※"):
            continue

        results.append({
            "fiscalPeriod": fiscalPeriod,
            "reportType": reportType.strip() if reportType else "",
            "auditor": auditor.strip(),
            "opinion": opinion.strip(),
            "goingConcern": goingConcern.strip(),
            "emphasis": emphasis.strip(),
            "keyAuditMatters": keyMatters.strip(),
        })

    return results if results else None


def parseAuditFeeTable(table: list[list[str]]) -> list[dict] | None:
    """감사용역 체결 현황 테이블 파싱.

    반환: [{"fiscalPeriod": str, "auditor": str, "content": str,
            "contractFee": float|None, "contractHours": float|None,
            "actualFee": float|None, "actualHours": float|None}]
    """
    if len(table) < 2:
        return None

    header = table[0]
    headerStr = " ".join(header)

    if "보수" not in headerStr and "시간" not in headerStr:
        return None
    if "감사" not in headerStr and "감사인" not in headerStr:
        return None

    headerRow = 0
    for i, row in enumerate(table):
        rowStr = " ".join(row)
        if "보수" in rowStr and "시간" in rowStr and i > 0:
            headerRow = i
            break

    results = []
    currentFiscalPeriod = ""

    for row in table[headerRow + 1:]:
        if len(row) < 4:
            continue

        if all(c.strip() in ("-", "", "※") for c in row):
            continue

        if row[0] and row[0].strip() and "기" in row[0]:
            currentFiscalPeriod = row[0].strip()

        auditor = row[1].strip() if len(row) > 1 else ""
        content = row[2].strip() if len(row) > 2 else ""

        contractFee = _parseNum(row[3]) if len(row) > 3 else None
        contractHours = _parseNum(row[4]) if len(row) > 4 else None
        actualFee = _parseNum(row[5]) if len(row) > 5 else None
        actualHours = _parseNum(row[6]) if len(row) > 6 else None

        if not auditor or auditor in ("-", ""):
            continue

        results.append({
            "fiscalPeriod": currentFiscalPeriod,
            "auditor": auditor,
            "content": content,
            "contractFee": contractFee,
            "contractHours": contractHours,
            "actualFee": actualFee,
            "actualHours": actualHours,
        })

    return results if results else None


def _parseNum(s: str) -> float | None:
    """숫자 문자열 파싱. 콤마 제거, 괄호 음수."""
    if not s:
        return None
    s = s.strip()
    if s in ("-", "", "해당사항없음", "해당사항 없음"):
        return None
    neg = False
    if s.startswith("(") and s.endswith(")"):
        neg = True
        s = s[1:-1]
    s = s.replace(",", "").replace(" ", "")
    try:
        v = float(s)
        return -v if neg else v
    except ValueError:
        return None


def classifyTable(table: list[list[str]]) -> str:
    """테이블을 분류: "opinion", "fee", "nonAuditFee", "schedule", "unknown"."""
    if len(table) < 2:
        return "unknown"

    allText = " ".join(" ".join(row) for row in table[:3])

    if "감사의견" in allText or ("감사인" in allText and "의견" in allText):
        if "보수" not in allText and "시간" not in allText:
            return "opinion"

    if ("보수" in allText and "시간" in allText) or "감사계약" in allText:
        if "비감사" not in allText:
            return "fee"

    if "비감사" in allText:
        return "nonAuditFee"

    if "검토기간" in allText or "일 정" in allText or "사전검토" in allText:
        return "schedule"

    return "unknown"


def parseAuditSection(content: str, year: str) -> dict:
    """감사 섹션 전체를 파싱하여 의견/보수 데이터 추출."""
    tables = extractMarkdownTables(content)

    result = {
        "opinions": [],
        "fees": [],
        "nTables": len(tables),
    }

    for table in tables:
        kind = classifyTable(table)
        if kind == "opinion":
            parsed = parseAuditOpinionTable(table, year)
            if parsed:
                result["opinions"].extend(parsed)
        elif kind == "fee":
            parsed = parseAuditFeeTable(table)
            if parsed:
                result["fees"].extend(parsed)

    return result


def fiscalPeriodToYear(fiscalPeriod: str, baseYear: str) -> str | None:
    """'제56기(당기)' 등을 실제 연도로 변환.

    baseYear = 보고서의 year (가장 최근), fiscalPeriod에서 당기/전기 판정.
    """
    base = int(baseYear)

    if re.search(r"당기|당분기|당반기|당 기", fiscalPeriod):
        return str(base)
    if re.search(r"전전기|전전 기", fiscalPeriod):
        return str(base - 2)
    if re.search(r"전기|전 기", fiscalPeriod):
        return str(base - 1)

    return None


if __name__ == "__main__":
    targets = [
        ("005930", "삼성전자"),
        ("005380", "현대자동차"),
        ("000660", "SK하이닉스"),
        ("035720", "카카오"),
        ("003550", "LG"),
        ("055550", "신한지주"),
    ]

    for code, name in targets:
        path = os.path.join(DATA_DIR, f"{code}.parquet")
        if not os.path.exists(path):
            continue
        df = pl.read_parquet(path)
        years = sorted(df["year"].unique().to_list(), reverse=True)

        print(f"\n{'='*60}")
        print(f"{name} ({code})")
        print(f"{'='*60}")

        for year in years[:2]:
            content = findAuditSection(df, year)
            if content is None:
                print(f"  {year}: 감사 섹션 없음")
                continue

            result = parseAuditSection(content, year)
            print(f"\n  [{year}] 테이블 {result['nTables']}개")

            if result["opinions"]:
                print(f"  감사의견 {len(result['opinions'])}건:")
                for op in result["opinions"]:
                    fy = fiscalPeriodToYear(op["fiscalPeriod"], year)
                    print(f"    {op['fiscalPeriod']} → {fy} | {op['reportType']} | {op['auditor']} | {op['opinion']}")
                    if op["keyAuditMatters"] and op["keyAuditMatters"] not in ("해당사항 없음", "-", "해당사항없음"):
                        print(f"      핵심감사: {op['keyAuditMatters'][:80]}...")

            if result["fees"]:
                print(f"  감사보수 {len(result['fees'])}건:")
                for fee in result["fees"]:
                    fy = fiscalPeriodToYear(fee["fiscalPeriod"], year)
                    print(f"    {fee['fiscalPeriod']} → {fy} | {fee['auditor']} | 계약보수={fee['contractFee']} | 실제보수={fee['actualFee']} | 시간={fee['actualHours']}")
