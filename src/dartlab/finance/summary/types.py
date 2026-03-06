from __future__ import annotations

from dataclasses import dataclass, field
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import polars as pl


@dataclass
class YearAccounts:
    year: str
    accounts: dict[str, list[float | None]]
    order: list[str]


@dataclass
class BridgeResult:
    curYear: str
    prevYear: str
    rate: float
    matched: int
    total: int
    yearGap: int
    pairs: dict[str, str]


@dataclass
class Segment:
    startYear: str
    endYear: str
    nYears: int
    matched: int
    total: int
    rate: float | None


@dataclass
class AnalysisResult:
    corpName: str | None
    nYears: int
    nPairs: int
    nBreakpoints: int
    nSegments: int
    allRate: float | None
    allMatched: int
    allTotal: int
    contRate: float | None
    contMatched: int
    contTotal: int
    segments: list[Segment]
    breakpoints: list[BridgeResult]
    pairResults: list[BridgeResult]
    yearAccounts: dict[str, YearAccounts]
    dataframe: pl.DataFrame | None = None
