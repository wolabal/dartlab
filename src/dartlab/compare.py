"""복수 기업 비교 분석 클래스.

Company(DART)와 USCompany(EDGAR) 모두 지원.

사용법::

    from dartlab import Company, Compare

    c = Compare(
        Company("005930"),
        Company("000660"),
        Company("AAPL"),
    )
    c.ratios       # DataFrame — 기업별 재무비율 비교
    c.insights     # DataFrame — 기업별 등급 비교
    c.revenue      # DataFrame — 기업별 매출 시계열
"""

from __future__ import annotations

from typing import Any, Union

import polars as pl

from dartlab.company import KRCompany
from dartlab.usCompany import USCompany

AnyCompany = Union[KRCompany, USCompany]


class Compare:
    """복수 기업 비교 분석.

    Example::

        c = Compare(Company("005930"), Company("AAPL"))
        c.ratios       # 비율 비교 DataFrame
        c.insights     # 등급 비교 DataFrame
    """

    def __init__(self, *companies: AnyCompany):
        if len(companies) < 2:
            raise ValueError("비교하려면 최소 2개 기업이 필요합니다")
        self.companies = list(companies)
        self._cache: dict[str, Any] = {}

    def __repr__(self):
        names = [c.corpName for c in self.companies]
        return f"Compare({', '.join(names)})"

    def _getName(self, c: AnyCompany) -> str:
        return c.corpName

    def _getMarket(self, c: AnyCompany) -> str:
        return c.market

    def _getId(self, c: AnyCompany) -> str:
        if isinstance(c, USCompany):
            return c.ticker
        return c.stockCode

    @property
    def ratios(self) -> pl.DataFrame:
        """기업별 재무비율 비교 테이블."""
        if "_ratios" in self._cache:
            return self._cache["_ratios"]

        rows = []
        for c in self.companies:
            r = c.ratios
            row = {
                "name": self._getName(c),
                "market": self._getMarket(c),
                "id": self._getId(c),
            }
            if r is not None:
                row["roe"] = r.roe
                row["roa"] = r.roa
                row["operatingMargin"] = r.operatingMargin
                row["netMargin"] = r.netMargin
                row["debtRatio"] = r.debtRatio
                row["currentRatio"] = r.currentRatio
                row["revenueGrowth3Y"] = r.revenueGrowth3Y
            rows.append(row)

        df = pl.DataFrame(rows)
        self._cache["_ratios"] = df
        return df

    @property
    def insights(self) -> pl.DataFrame:
        """기업별 인사이트 등급 비교 테이블."""
        if "_insights" in self._cache:
            return self._cache["_insights"]

        areas = [
            "performance", "profitability", "health",
            "cashflow", "governance", "risk", "opportunity",
        ]
        rows = []
        for c in self.companies:
            ins = c.insights
            row = {
                "name": self._getName(c),
                "market": self._getMarket(c),
                "id": self._getId(c),
            }
            if ins is not None:
                for area in areas:
                    result = getattr(ins, area, None)
                    row[area] = result.grade if result else None
                row["profile"] = ins.profile
            rows.append(row)

        df = pl.DataFrame(rows)
        self._cache["_insights"] = df
        return df

    @property
    def revenue(self) -> pl.DataFrame:
        """기업별 연도별 매출 비교 테이블."""
        return self._annualMetric("IS", "sales")

    @property
    def netIncome(self) -> pl.DataFrame:
        """기업별 연도별 순이익 비교 테이블."""
        return self._annualMetric("IS", "net_profit")

    @property
    def totalAssets(self) -> pl.DataFrame:
        """기업별 연도별 총자산 비교 테이블."""
        return self._annualMetric("BS", "total_assets")

    def _annualMetric(self, stmt: str, snakeId: str) -> pl.DataFrame:
        """연도별 단일 지표 비교."""
        cacheKey = f"_annual_{stmt}_{snakeId}"
        if cacheKey in self._cache:
            return self._cache[cacheKey]

        allYears: set[str] = set()
        companyData: list[tuple[str, dict[str, float | None]]] = []

        for c in self.companies:
            annual = c.annual
            if annual is None:
                companyData.append((self._getName(c), {}))
                continue
            aSeries, years = annual
            vals = aSeries.get(stmt, {}).get(snakeId, [])
            yearMap = {}
            for i, y in enumerate(years):
                if i < len(vals):
                    yearMap[y] = vals[i]
            allYears.update(yearMap.keys())
            companyData.append((self._getName(c), yearMap))

        sortedYears = sorted(allYears)
        rows = []
        for name, yearMap in companyData:
            row = {"name": name}
            for y in sortedYears:
                row[y] = yearMap.get(y)
            rows.append(row)

        df = pl.DataFrame(rows)
        self._cache[cacheKey] = df
        return df
