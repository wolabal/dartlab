"""원본 finance parquet → 분기별 시계열 dict 피벗.

정규화 로직:
1. CFS 우선 선택 (행 단위 중복 제거)
2. IS/CIS/CF 누적 → standalone 변환
3. BS 그대로 (시점 잔액)
4. 분기별 period 컬럼 생성

결과 구조::

    {
        "BS":  {"total_assets": [v1, v2, ...], ...},
        "IS":  {"sales": [...], ...},
        "CF":  {"operating_cashflow": [...], ...},
    }

periods = ["2016_Q1", "2016_Q2", ..., "2024_Q4"]

snakeId는 standardAccounts.json 기준 그대로 사용.
"""

from __future__ import annotations

from typing import Optional

import polars as pl

from dartlab.engines.dart.finance.mapper import AccountMapper

QUARTER_ORDER = {"1분기": 1, "2분기": 2, "3분기": 3, "4분기": 4}


def _loadAndNormalize(
	stockCode: str,
	fsDivPref: str = "CFS",
) -> Optional[tuple[pl.DataFrame, list[str]]]:
	"""finance parquet → 정규화된 DataFrame + periods (내부용)."""
	from dartlab.core.dataLoader import loadData

	df = loadData(stockCode, category="finance")
	if df is None or df.is_empty():
		return None

	if "sj_div" not in df.columns:
		return None

	df = df.filter(pl.col("sj_div").is_in(["BS", "IS", "CIS", "CF"]))
	if df.is_empty():
		return None

	df = _applyCfsPriority(df, fsDivPref)
	df = _normalizeQ4(df)

	periods = _buildPeriods(df)
	return df, periods


def buildTimeseries(
	stockCode: str,
	fsDivPref: str = "CFS",
) -> Optional[tuple[dict[str, dict[str, list[Optional[float]]]], list[str]]]:
	"""finance parquet → 분기별 standalone 시계열.

	Args:
		stockCode: 종목코드 (예: "005930")
		fsDivPref: "CFS" (연결) 또는 "OFS" (별도). CFS 없으면 OFS fallback.

	Returns:
		(series, periods) 또는 None.
		series = {"BS": {"snakeId": [값...]}, "IS": {...}, "CF": {...}}
		periods = ["2016_Q1", "2016_Q2", ..., "2024_Q4"]
	"""
	result = _loadAndNormalize(stockCode, fsDivPref)
	if result is None:
		return None

	df, periods = result
	series = _pivotToSeries(df, periods)

	return series, periods


def buildAnnual(
	stockCode: str,
	fsDivPref: str = "CFS",
) -> Optional[tuple[dict[str, dict[str, list[Optional[float]]]], list[str]]]:
	"""finance parquet → 연도별 시계열.

	IS/CF: 해당 연도 분기별 standalone 합산.
	BS: 해당 연도 마지막 분기(Q4 우선) 시점잔액.

	Args:
		stockCode: 종목코드 (예: "005930")
		fsDivPref: "CFS" (연결) 또는 "OFS" (별도).

	Returns:
		(series, years) 또는 None.
		series = {"BS": {"snakeId": [값...]}, "IS": {...}, "CF": {...}}
		years = ["2016", "2017", ..., "2024"]
	"""
	qResult = buildTimeseries(stockCode, fsDivPref)
	if qResult is None:
		return None

	qSeries, qPeriods = qResult
	return _aggregateAnnual(qSeries, qPeriods)


def buildCumulative(
	stockCode: str,
	fsDivPref: str = "CFS",
) -> Optional[tuple[dict[str, dict[str, list[Optional[float]]]], list[str]]]:
	"""finance parquet → 분기별 누적 시계열.

	IS/CF: 해당 연도 시작부터 누적합 (Q1, Q1+Q2, Q1+Q2+Q3, Q1+Q2+Q3+Q4).
	BS: 시점잔액 그대로.

	Args:
		stockCode: 종목코드 (예: "005930")
		fsDivPref: "CFS" (연결) 또는 "OFS" (별도).

	Returns:
		(series, periods) 또는 None.
		series = {"BS": {"snakeId": [값...]}, "IS": {...}, "CF": {...}}
		periods = ["2016_Q1", "2016_Q2", ..., "2024_Q4"]
	"""
	qResult = buildTimeseries(stockCode, fsDivPref)
	if qResult is None:
		return None

	qSeries, qPeriods = qResult
	return _aggregateCumulative(qSeries, qPeriods)


def _applyCfsPriority(df: pl.DataFrame, pref: str) -> pl.DataFrame:
	"""CFS/OFS 행 단위 중복 제거. pref 우선."""
	if "fs_div" not in df.columns:
		return df

	available = set(df["fs_div"].drop_nulls().unique().to_list())
	if pref not in available:
		if pref == "CFS" and "OFS" in available:
			pref = "OFS"
		elif pref == "OFS" and "CFS" in available:
			pref = "CFS"
		elif available:
			pref = next(iter(available))
		else:
			return df

	prefPriority = 1
	otherPriority = 2

	df = df.with_columns(
		pl.when(pl.col("fs_div") == pref)
		.then(pl.lit(prefPriority))
		.otherwise(pl.lit(otherPriority))
		.alias("_fsPriority")
	)

	df = df.sort(["bsns_year", "reprt_nm", "sj_div", "account_id", "_fsPriority"])
	df = df.unique(
		["bsns_year", "reprt_nm", "sj_div", "account_id", "account_nm"],
		keep="first",
	)
	df = df.drop("_fsPriority")

	return df


def _normalizeQ4(df: pl.DataFrame) -> pl.DataFrame:
	"""IS/CIS/CF 누적값 → standalone 변환. BS는 시점 잔액이므로 그대로."""
	df = df.with_columns(
		pl.col("reprt_nm").replace(QUARTER_ORDER).cast(pl.Int32).alias("_qOrd")
	)

	for col in ["thstrm_amount", "thstrm_add_amount"]:
		if col in df.columns:
			df = df.with_columns(
				pl.when(
					pl.col(col).is_not_null()
					& (pl.col(col).str.strip_chars() != "")
					& (pl.col(col).str.strip_chars() != "-")
				)
				.then(pl.col(col).str.strip_chars().str.replace_all(",", "").cast(pl.Float64, strict=False))
				.otherwise(pl.lit(None).cast(pl.Float64))
				.alias(col)
			)
		else:
			df = df.with_columns(pl.lit(None).cast(pl.Float64).alias(col))

	groupKey = ["bsns_year", "sj_div", "account_id"]
	df = df.sort(groupKey + ["_qOrd"])

	df = df.with_columns(
		pl.col("thstrm_add_amount").shift(1).over(groupKey).alias("_prevAdd")
	)

	df = df.with_columns(
		pl.when(
			pl.col("sj_div").is_in(["IS", "CIS"])
			& (pl.col("reprt_nm") == "4분기")
			& pl.col("thstrm_add_amount").is_null()
		)
		.then(pl.col("thstrm_amount"))
		.otherwise(pl.col("thstrm_add_amount"))
		.alias("thstrm_add_amount")
	)

	df = df.with_columns(
		pl.col("thstrm_add_amount").shift(1).over(groupKey).alias("_prevAdd")
	)

	df = df.with_columns(
		pl.col("thstrm_amount").shift(1).over(groupKey).alias("_prevAmount")
	)

	df = df.with_columns(
		pl.when(pl.col("sj_div") == "BS")
		.then(pl.col("thstrm_amount"))

		.when(pl.col("sj_div") == "CF")
		.then(
			pl.when(pl.col("_qOrd") == 1)
			.then(pl.col("thstrm_amount"))
			.otherwise(pl.col("thstrm_amount") - pl.col("_prevAmount").fill_null(0))
		)

		.when(
			(pl.col("reprt_nm") == "1분기")
			& pl.col("thstrm_amount").is_null()
		)
		.then(pl.col("thstrm_add_amount"))
		.when(
			(pl.col("reprt_nm") != "1분기")
			& (
				pl.col("thstrm_amount").is_null()
				| (pl.col("thstrm_amount") == pl.col("thstrm_add_amount"))
			)
		)
		.then(pl.col("thstrm_add_amount") - pl.col("_prevAdd").fill_null(0))
		.when(
			(pl.col("reprt_nm") == "4분기")
			& pl.col("thstrm_add_amount").is_null()
		)
		.then(pl.col("thstrm_amount") - pl.col("_prevAdd").fill_null(0))
		.otherwise(pl.col("thstrm_amount"))
		.alias("_normalized_amount")
	)

	df = df.drop(["_prevAdd", "_prevAmount", "thstrm_add_amount", "_qOrd"])

	return df


def _buildPeriods(df: pl.DataFrame) -> list[str]:
	"""분기별 period 리스트 생성."""
	pairs = df.select("bsns_year", "reprt_nm").unique()
	result = []
	for row in pairs.iter_rows(named=True):
		y = row["bsns_year"]
		q = row["reprt_nm"]
		qNum = QUARTER_ORDER.get(q, 0)
		if qNum == 0:
			continue
		result.append((y, qNum, f"{y}_Q{qNum}"))

	result.sort(key=lambda x: (x[0], x[1]))
	return [r[2] for r in result]


def _pivotToSeries(
	df: pl.DataFrame,
	periods: list[str],
) -> dict[str, dict[str, list[Optional[float]]]]:
	"""DataFrame → {sjDiv: {snakeId: [값...]}} 피벗."""
	mapper = AccountMapper.get()
	periodIdx = {p: i for i, p in enumerate(periods)}
	nPeriods = len(periods)

	result: dict[str, dict[str, list[Optional[float]]]] = {
		"BS": {}, "IS": {}, "CF": {},
	}

	for row in df.iter_rows(named=True):
		sjDiv = row.get("sj_div", "")
		if sjDiv == "CIS":
			sjDiv = "IS"
		if sjDiv not in result:
			continue

		accountId = row.get("account_id", "") or ""
		accountNm = row.get("account_nm", "") or ""
		snakeId = mapper.map(accountId, accountNm)
		if snakeId is None:
			continue

		amount = row.get("_normalized_amount")

		year = row.get("bsns_year", "")
		reprtNm = row.get("reprt_nm", "")
		qNum = QUARTER_ORDER.get(reprtNm, 0)
		pKey = f"{year}_Q{qNum}"

		idx = periodIdx.get(pKey)
		if idx is None:
			continue

		target = result[sjDiv]
		if snakeId not in target:
			target[snakeId] = [None] * nPeriods

		if target[snakeId][idx] is None:
			target[snakeId][idx] = amount

	_sortByStandard(result, mapper)
	return result


def _sortByStandard(
	series: dict[str, dict[str, list[Optional[float]]]],
	mapper: AccountMapper,
) -> None:
	"""K-IFRS 기준 sortOrder로 sj_div별 dict를 재정렬 (in-place)."""
	for sjDiv in list(series.keys()):
		order = mapper.sortOrder(sjDiv)
		if not order:
			continue
		maxOrd = len(order)
		sortedItems = sorted(
			series[sjDiv].items(),
			key=lambda kv: order.get(kv[0], maxOrd),
		)
		series[sjDiv] = dict(sortedItems)


def _aggregateAnnual(
	qSeries: dict[str, dict[str, list[Optional[float]]]],
	qPeriods: list[str],
) -> tuple[dict[str, dict[str, list[Optional[float]]]], list[str]]:
	"""분기별 standalone → 연도별 집계."""
	yearSet: dict[str, list[int]] = {}
	for i, p in enumerate(qPeriods):
		year = p.split("_")[0]
		yearSet.setdefault(year, []).append(i)

	years = sorted(yearSet.keys())
	nYears = len(years)
	yearIdx = {y: i for i, y in enumerate(years)}

	result: dict[str, dict[str, list[Optional[float]]]] = {"BS": {}, "IS": {}, "CF": {}}

	for sjDiv in qSeries:
		for snakeId, vals in qSeries[sjDiv].items():
			annual: list[Optional[float]] = [None] * nYears

			for year, qIndices in yearSet.items():
				yIdx = yearIdx[year]

				if sjDiv == "BS":
					lastIdx = max(qIndices)
					annual[yIdx] = vals[lastIdx] if lastIdx < len(vals) else None
				else:
					qVals = [vals[qi] for qi in qIndices if qi < len(vals) and vals[qi] is not None]
					annual[yIdx] = sum(qVals) if qVals else None

			result[sjDiv][snakeId] = annual

	return result, years


def _aggregateCumulative(
	qSeries: dict[str, dict[str, list[Optional[float]]]],
	qPeriods: list[str],
) -> tuple[dict[str, dict[str, list[Optional[float]]]], list[str]]:
	"""분기별 standalone → 분기별 누적."""
	yearStarts: dict[str, int] = {}
	for i, p in enumerate(qPeriods):
		year = p.split("_")[0]
		if year not in yearStarts:
			yearStarts[year] = i

	result: dict[str, dict[str, list[Optional[float]]]] = {"BS": {}, "IS": {}, "CF": {}}
	nPeriods = len(qPeriods)

	for sjDiv in qSeries:
		for snakeId, vals in qSeries[sjDiv].items():
			cum: list[Optional[float]] = [None] * nPeriods

			if sjDiv == "BS":
				cum = list(vals)
			else:
				for i, p in enumerate(qPeriods):
					year = p.split("_")[0]
					startIdx = yearStarts[year]
					qVals = [vals[j] for j in range(startIdx, i + 1) if j < len(vals) and vals[j] is not None]
					cum[i] = sum(qVals) if qVals else None

			result[sjDiv][snakeId] = cum

	return result, list(qPeriods)
