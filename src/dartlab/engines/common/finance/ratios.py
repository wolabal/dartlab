"""재무비율 계산.

시계열 dict에서 핵심 비율을 계산한다.
시가총액이 없으면 PER/PBR/PSR/EV_EBITDA는 None.

연간 시계열(period="y")에서는 4분기 값이 이미 해당 연도의 누적 합계이므로,
IS/CF도 getLatest로 최신 연간값을 가져온다 (= TTM).
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Optional

from dartlab.engines.common.finance.extract import getLatest, getTTM, getRevenueGrowth3Y


@dataclass
class RatioResult:
    """비율 계산 결과."""

    revenueTTM: Optional[float] = None
    operatingIncomeTTM: Optional[float] = None
    netIncomeTTM: Optional[float] = None
    operatingCashflowTTM: Optional[float] = None
    investingCashflowTTM: Optional[float] = None

    totalAssets: Optional[float] = None
    totalEquity: Optional[float] = None
    totalLiabilities: Optional[float] = None
    currentAssets: Optional[float] = None
    currentLiabilities: Optional[float] = None
    cash: Optional[float] = None
    shortTermBorrowings: Optional[float] = None
    longTermBorrowings: Optional[float] = None
    bonds: Optional[float] = None

    roe: Optional[float] = None
    roa: Optional[float] = None
    operatingMargin: Optional[float] = None
    netMargin: Optional[float] = None
    debtRatio: Optional[float] = None
    currentRatio: Optional[float] = None
    fcf: Optional[float] = None
    revenueGrowth3Y: Optional[float] = None

    netDebt: Optional[float] = None
    netDebtRatio: Optional[float] = None
    equityRatio: Optional[float] = None

    per: Optional[float] = None
    pbr: Optional[float] = None
    psr: Optional[float] = None
    evEbitda: Optional[float] = None
    marketCap: Optional[float] = None

    warnings: list[str] = field(default_factory=list)


def calcRatios(
    series: dict[str, dict[str, list[Optional[float]]]],
    marketCap: Optional[float] = None,
) -> RatioResult:
    """시계열에서 재무비율 계산.

    Args:
        series: buildTimeseries() 결과.
        marketCap: 시가총액 (원 단위). None이면 밸류에이션 멀티플 건너뜀.

    Returns:
        RatioResult.
    """
    r = RatioResult()

    r.revenueTTM = getTTM(series, "IS", "revenue")
    r.operatingIncomeTTM = getTTM(series, "IS", "operating_income")
    r.netIncomeTTM = getTTM(series, "IS", "net_income")
    r.operatingCashflowTTM = getTTM(series, "CF", "operating_cashflow")
    r.investingCashflowTTM = getTTM(series, "CF", "investing_cashflow")

    r.totalAssets = getLatest(series, "BS", "total_assets")
    r.totalEquity = getLatest(series, "BS", "total_equity")
    r.totalLiabilities = getLatest(series, "BS", "total_liabilities")
    r.currentAssets = getLatest(series, "BS", "current_assets")
    r.currentLiabilities = getLatest(series, "BS", "current_liabilities")
    r.cash = getLatest(series, "BS", "cash_and_equivalents")
    r.shortTermBorrowings = getLatest(series, "BS", "short_term_borrowings") or 0
    r.longTermBorrowings = getLatest(series, "BS", "long_term_borrowings") or 0
    r.bonds = getLatest(series, "BS", "bonds") or 0

    _calcProfitability(r)
    _calcStability(r)
    _calcCashflow(r, series)

    if marketCap and marketCap > 0:
        r.marketCap = marketCap
        _calcValuation(r)

    return r


def _calcProfitability(r: RatioResult) -> None:
    """수익성 비율."""
    if r.netIncomeTTM is not None:
        if r.totalEquity and r.totalEquity > 0:
            raw = (r.netIncomeTTM / r.totalEquity) * 100
            if -500 <= raw <= 500:
                r.roe = round(raw, 2)
            else:
                r.warnings.append(f"ROE {raw:.0f}% 범위 초과")

        if r.totalAssets and r.totalAssets > 0:
            raw = (r.netIncomeTTM / r.totalAssets) * 100
            if -200 <= raw <= 200:
                r.roa = round(raw, 2)
            else:
                r.warnings.append(f"ROA {raw:.0f}% 범위 초과")

    if r.revenueTTM and r.revenueTTM > 0:
        if r.operatingIncomeTTM is not None:
            raw = (r.operatingIncomeTTM / r.revenueTTM) * 100
            if -500 <= raw <= 500:
                r.operatingMargin = round(raw, 2)

        if r.netIncomeTTM is not None:
            raw = (r.netIncomeTTM / r.revenueTTM) * 100
            if -500 <= raw <= 500:
                r.netMargin = round(raw, 2)


def _calcStability(r: RatioResult) -> None:
    """안정성 비율."""
    if r.totalLiabilities is not None and r.totalEquity and r.totalEquity > 0:
        raw = (r.totalLiabilities / r.totalEquity) * 100
        if raw <= 5000:
            r.debtRatio = round(raw, 2)

    if r.currentAssets is not None and r.currentLiabilities and r.currentLiabilities > 0:
        raw = (r.currentAssets / r.currentLiabilities) * 100
        if raw <= 10000:
            r.currentRatio = round(raw, 2)

    totalBorrowings = r.shortTermBorrowings + r.longTermBorrowings + r.bonds
    r.netDebt = totalBorrowings - (r.cash or 0)

    if r.totalEquity and r.totalEquity > 0:
        r.netDebtRatio = round((r.netDebt / r.totalEquity) * 100, 2)

    if r.totalAssets and r.totalAssets > 0 and r.totalEquity is not None:
        r.equityRatio = round((r.totalEquity / r.totalAssets) * 100, 2)


def _calcCashflow(
    r: RatioResult,
    series: dict[str, dict[str, list[Optional[float]]]],
) -> None:
    """FCF + 매출 성장률."""
    if r.operatingCashflowTTM is not None and r.investingCashflowTTM is not None:
        capex = abs(r.investingCashflowTTM) if r.investingCashflowTTM < 0 else 0
        r.fcf = r.operatingCashflowTTM - capex

    r.revenueGrowth3Y = getRevenueGrowth3Y(series)


def _calcValuation(r: RatioResult) -> None:
    """밸류에이션 멀티플 (시가총액 필요)."""
    mc = r.marketCap

    if r.netIncomeTTM and r.netIncomeTTM > 0:
        r.per = round(mc / r.netIncomeTTM, 2)

    if r.totalEquity and r.totalEquity > 0:
        r.pbr = round(mc / r.totalEquity, 2)

    if r.revenueTTM and r.revenueTTM > 0:
        r.psr = round(mc / r.revenueTTM, 2)

    totalDebt = r.shortTermBorrowings + r.longTermBorrowings + r.bonds
    netDebt = totalDebt - (r.cash or 0)
    ev = mc + netDebt

    if r.operatingIncomeTTM and r.operatingIncomeTTM > 0:
        ebitda = r.operatingIncomeTTM * 1.15
        if ebitda > 0:
            r.evEbitda = round(ev / ebitda, 2)
