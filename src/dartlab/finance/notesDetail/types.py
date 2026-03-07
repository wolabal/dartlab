"""주석 세부항목 타입 정의."""

from __future__ import annotations

from dataclasses import dataclass
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import polars as pl


NOTES_KEYWORDS: dict[str, list[str]] = {
    "재고자산": ["재고자산"],
    "주당이익": ["주당이익", "주당순이익"],
    "충당부채": ["충당부채"],
    "차입금": ["차입금"],
    "매출채권": ["매출채권"],
    "리스": ["리스"],
    "투자부동산": ["투자부동산"],
    "무형자산": ["무형자산"],
}


@dataclass
class NotesItem:
    """주석 테이블의 한 행."""

    name: str
    values: list[str]


@dataclass
class NotesPeriod:
    """주석 테이블의 한 기간 블록."""

    pattern: str
    period: str
    headers: list[str]
    items: list[NotesItem]


@dataclass
class NotesDetailResult:
    """주석 세부항목 분석 결과."""

    corpName: str | None
    keyword: str
    nYears: int = 0
    unit: float = 1.0
    tables: dict[str, list[NotesPeriod]] | None = None
    tableDf: pl.DataFrame | None = None
