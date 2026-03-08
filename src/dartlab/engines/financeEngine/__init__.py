"""재무 숫자 데이터 엔진.

OpenDART 재무제표 parquet에서 시계열을 추출하고,
표준계정 매핑 → 피벗 → 비율 계산까지 처리한다.
"""

from dartlab.engines.financeEngine.pivot import buildTimeseries, buildAnnual, buildCumulative
from dartlab.engines.financeEngine.extract import getTTM, getLatest, getAnnualValues, getRevenueGrowth3Y
from dartlab.engines.financeEngine.ratios import calcRatios
from dartlab.engines.financeEngine.mapper import AccountMapper

__all__ = [
    "buildTimeseries",
    "buildAnnual",
    "buildCumulative",
    "getTTM",
    "getLatest",
    "getAnnualValues",
    "getRevenueGrowth3Y",
    "calcRatios",
    "AccountMapper",
]
