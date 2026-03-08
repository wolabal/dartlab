"""회사의 개요 파서."""

import re


def splitCells(line: str) -> list[str]:
    """파이프(|)로 구분된 셀을 분리."""
    cells = [c.strip() for c in line.split("|")]
    while cells and cells[0] == "":
        cells.pop(0)
    while cells and cells[-1] == "":
        cells.pop()
    return cells


def isSeparatorRow(line: str) -> bool:
    """구분선 행인지 확인."""
    cells = splitCells(line)
    return all(re.match(r"^-+$", c.strip()) for c in cells if c.strip())


def parseCompanyInfo(content: str) -> dict:
    """회사 기본정보 테이블 파싱."""
    lines = content.split("\n")
    info: dict = {}

    for line in lines:
        stripped = line.strip()
        if "|" not in stripped or isSeparatorRow(stripped):
            continue

        cells = splitCells(stripped)
        if len(cells) < 2:
            continue

        for i, c in enumerate(cells):
            c_clean = c.strip()
            if "설립일" in c_clean and i + 1 < len(cells):
                info["foundedDate"] = cells[i + 1].strip()
            elif "상장일" in c_clean and i + 1 < len(cells):
                info["listedDate"] = cells[i + 1].strip()
            elif "본점소재지" in c_clean and i + 1 < len(cells):
                info["address"] = cells[i + 1].strip()
            elif "대표이사" in c_clean and i + 1 < len(cells):
                info["ceo"] = cells[i + 1].strip()
            elif "주요사업" in c_clean and i + 1 < len(cells):
                info["mainBusiness"] = cells[i + 1].strip()
            elif "홈페이지" in c_clean and i + 1 < len(cells):
                info["website"] = cells[i + 1].strip()

    return info
