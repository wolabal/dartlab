"""
실험 ID: 029
실험명: 계열회사 현황 파서

목적:
- 상세표 "2. 계열회사 현황(상세)"에서 계열사 목록 추출
- 요약 테이블에서 상장/비상장 수 추출
- 267개 배치 테스트

가설:
1. 상세표에서 기업명+상장여부 목록 추출 가능
2. 요약에서 그룹명, 상장수, 비상장수, 합계 추출 가능
3. 200/267 이상에서 데이터 추출 가능

방법:
1. 상세표 파서 (계열사 목록)
2. 요약 파서 (그룹명, 상장/비상장 수)
3. 배치 테스트

결과 (실험 후 작성):
-

결론:
-

실험일: 2026-03-08
"""

import os
import re
import sys

sys.path.insert(0, r"C:\Users\MSI\OneDrive\Desktop\sideProject\dartlab\src")

DATA_DIR = r"C:\Users\MSI\OneDrive\Desktop\sideProject\nicegui\eddmpython\data\dartData\docsData"

from dartlab.core.dataLoader import extractCorpName, loadData
from dartlab.core.reportSelector import selectReport


def splitCells(line: str) -> list[str]:
    cells = [c.strip() for c in line.split("|")]
    while cells and cells[0] == "":
        cells.pop(0)
    while cells and cells[-1] == "":
        cells.pop()
    return cells


def isSeparatorRow(line: str) -> bool:
    cells = splitCells(line)
    return all(re.match(r"^-+$", c.strip()) for c in cells if c.strip())


def parseGroupSummary(content: str) -> dict | None:
    """요약 테이블에서 그룹명, 상장수, 비상장수 추출.

    | 기업집단의 명칭 | 계열회사의 수 | | |
    | --- | --- | --- | --- |
    | 상장 | 비상장 | 계 | |
    | 삼성 | 17 | 46 | 63 |
    """
    lines = content.split("\n")

    groupName = None
    listedCount = None
    unlistedCount = None
    totalCount = None

    for i, line in enumerate(lines):
        stripped = line.strip()
        if "|" not in stripped:
            continue
        cells = splitCells(stripped)

        # "삼성 | 17 | 46 | 63" 패턴 찾기
        # 그룹명 + 숫자 3개
        if len(cells) >= 4 and groupName is None:
            # 첫 셀이 비숫자(그룹명), 나머지가 숫자
            name = cells[0].strip()
            nums = []
            for c in cells[1:]:
                c = c.strip().replace(",", "")
                if re.match(r"^\d+$", c):
                    nums.append(int(c))

            if len(nums) >= 3 and not re.match(r"^\d+$", name) and name not in ("상장", "비상장", "계", "상장여부", "기업집단의 명칭", "---"):
                groupName = name
                listedCount = nums[0]
                unlistedCount = nums[1]
                totalCount = nums[2]

        # 3셀 패턴: "삼성 | 17 | 46 | 63" 중 마지막이 합계
        if len(cells) == 3 and groupName is None:
            name = cells[0].strip()
            nums = []
            for c in cells[1:]:
                c = c.strip().replace(",", "")
                if re.match(r"^\d+$", c):
                    nums.append(int(c))

            if len(nums) == 2 and not re.match(r"^\d+$", name) and name not in ("상장", "비상장", "계", "상장여부"):
                groupName = name
                listedCount = nums[0]
                unlistedCount = nums[1]
                totalCount = nums[0] + nums[1]

    if groupName is None:
        return None

    return {
        "groupName": groupName,
        "listedCount": listedCount,
        "unlistedCount": unlistedCount,
        "totalCount": totalCount,
    }


def _isCompanyName(text: str) -> bool:
    """텍스트가 기업명인지 판별."""
    if not text or len(text) < 2:
        return False
    # 숫자/하이픈만
    if re.match(r"^[\d\-−–]+$", text):
        return False
    # 법인등록번호 (10자리 이상 숫자)
    if re.match(r"^\d{10,}$", text.replace("-", "")):
        return False
    # 특수 값
    if text in ("-", "−", "–", "없음", "해당없음"):
        return False
    # 주석/참고
    if text.startswith("※") or "참조" in text or "본문 위치" in text:
        return False
    return True


def parseAffiliateList(content: str) -> list[dict]:
    """상세표에서 국내 계열사 목록 추출.

    | 상장여부 | 회사수 | 기업명 | 법인등록번호 |
    | 상장 | 17 | 삼성물산(주) | 1101110015762 |
    | 삼성바이오로직스(주) | 1201110566317 | | |

    멀티라인 구조: 첫 행에 "상장 | N | 첫기업" 이후 나머지 기업은 기업명만 있음.
    해외계열회사 섹션 이전까지만 파싱.
    """
    # 해외 섹션 이전까지만 사용
    cutoff = len(content)
    for marker in ["해외계열회사", "해외 계열회사", "나. 해외", "2) 해외법인", "2) 해외"]:
        idx = content.find(marker)
        if idx > 0:
            cutoff = min(cutoff, idx)

    lines = content[:cutoff].split("\n")
    results: list[dict] = []

    currentStatus = None  # "상장" or "비상장"

    for line in lines:
        stripped = line.strip()
        if "|" not in stripped or isSeparatorRow(stripped):
            continue

        cells = splitCells(stripped)
        if len(cells) < 2:
            continue

        # 헤더 행 건너뛰기
        if any(c in ("상장여부", "기업명", "회사수") for c in cells):
            continue
        # 안내 행 건너뛰기
        if any("본문 위치" in c or "기준일" in c or "단위" in c for c in cells):
            continue

        # "상장 | 17 | 삼성물산(주) | 1101110015762" 패턴
        first = cells[0].strip()

        if first in ("상장", "비상장"):
            currentStatus = first
            # 이 행에 기업명이 있을 수 있음
            for c in cells[1:]:
                c = c.strip()
                # 숫자만인 셀(회사수)은 건너뛰기
                if re.match(r"^\d+$", c):
                    continue
                if _isCompanyName(c):
                    results.append({
                        "name": c,
                        "listed": currentStatus == "상장",
                    })
            continue

        # 이후 행: "삼성바이오로직스(주) | 1201110566317 | |" 패턴
        if currentStatus is not None:
            name = first
            if _isCompanyName(name):
                results.append({
                    "name": name,
                    "listed": currentStatus == "상장",
                })

    return results


def parseAffiliateGroup(stockCode: str) -> dict | None:
    """계열회사 현황 통합 파서."""
    try:
        df = loadData(stockCode)
    except Exception:
        return None

    corpName = extractCorpName(df)
    years = sorted(df["year"].unique().to_list(), reverse=True)

    for year in years[:2]:
        report = selectReport(df, year, reportKind="annual")
        if report is None:
            continue

        # 1. 상세표에서 계열사 목록
        affiliates = []
        for row in report.iter_rows(named=True):
            title = row.get("section_title", "") or ""
            if "계열회사 현황" in title and "상세" in title:
                content = row.get("section_content", "") or ""
                if len(content) > 30:
                    affiliates = parseAffiliateList(content)
                break

        # 2. 본문에서 요약 (그룹명, 상장/비상장 수)
        summary = None
        for row in report.iter_rows(named=True):
            title = row.get("section_title", "") or ""
            if re.search(r"계열회사.*사항", title):
                content = row.get("section_content", "") or ""
                if len(content) > 30:
                    summary = parseGroupSummary(content)
                break

        if affiliates or summary:
            listedCompanies = [a for a in affiliates if a["listed"]]
            unlistedCompanies = [a for a in affiliates if not a["listed"]]

            return {
                "corpName": corpName,
                "year": year,
                "groupName": summary["groupName"] if summary else None,
                "listedCount": summary["listedCount"] if summary else len(listedCompanies),
                "unlistedCount": summary["unlistedCount"] if summary else len(unlistedCompanies),
                "totalCount": summary["totalCount"] if summary else len(affiliates),
                "affiliates": affiliates,
            }

    return None


# ──────────────────────────────────────────────
# 테스트
# ──────────────────────────────────────────────

def testSingle(stockCode: str):
    result = parseAffiliateGroup(stockCode)
    if result is None:
        print(f"  {stockCode}: 데이터 없음")
        return

    print(f"\n=== {result['corpName']} ({stockCode}) ===")
    print(f"  그룹: {result['groupName']}")
    print(f"  상장: {result['listedCount']}, 비상장: {result['unlistedCount']}, 계: {result['totalCount']}")
    print(f"  추출 계열사: {len(result['affiliates'])}개")

    listed = [a for a in result["affiliates"] if a["listed"]]
    unlisted = [a for a in result["affiliates"] if not a["listed"]]
    print(f"  상장사 ({len(listed)}):")
    for a in listed[:5]:
        print(f"    {a['name']}")
    if len(listed) > 5:
        print(f"    ... 외 {len(listed)-5}개")

    print(f"  비상장사 ({len(unlisted)}):")
    for a in unlisted[:5]:
        print(f"    {a['name']}")
    if len(unlisted) > 5:
        print(f"    ... 외 {len(unlisted)-5}개")

    # 크로스체크
    if result["listedCount"] and len(listed) != result["listedCount"]:
        print(f"  ⚠ 상장 수 불일치: 요약={result['listedCount']}, 추출={len(listed)}")
    if result["unlistedCount"] and len(unlisted) != result["unlistedCount"]:
        print(f"  ⚠ 비상장 수 불일치: 요약={result['unlistedCount']}, 추출={len(unlisted)}")


def batchTest():
    codes = sorted([f.replace(".parquet", "") for f in os.listdir(DATA_DIR) if f.endswith(".parquet")])

    ok = noData = errors = 0
    listMismatch = 0
    totalAffiliates = 0

    for code in codes:
        try:
            result = parseAffiliateGroup(code)
            if result is None:
                noData += 1
            else:
                ok += 1
                totalAffiliates += len(result["affiliates"])

                # 크로스체크
                listed = [a for a in result["affiliates"] if a["listed"]]
                unlisted = [a for a in result["affiliates"] if not a["listed"]]
                if result["listedCount"] and len(listed) != result["listedCount"]:
                    listMismatch += 1
                if result["unlistedCount"] and len(unlisted) != result["unlistedCount"]:
                    listMismatch += 1
        except Exception as e:
            errors += 1
            print(f"  ERROR {code}: {e}")

    print(f"\n=== 배치 테스트 결과 ({len(codes)}개) ===")
    print(f"성공: {ok} ({ok/len(codes)*100:.1f}%), 데이터없음: {noData}, 에러: {errors}")
    print(f"총 추출 계열사: {totalAffiliates:,}개")
    print(f"수 불일치: {listMismatch}건")


if __name__ == "__main__":
    testSingle("005930")
    testSingle("005380")
    testSingle("035720")
    testSingle("068270")
    print()
    batchTest()
