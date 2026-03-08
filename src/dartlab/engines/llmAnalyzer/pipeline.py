"""분석 파이프라인 — LLM 호출 전 자동 pre-computation.

질문을 분류하고, 결정론적으로 분석 도구를 실행하여
pre-computed 결과를 LLM context에 추가한다.
"""

from __future__ import annotations

from typing import Any

import polars as pl

from dartlab.engines.llmAnalyzer.prompts import _classify_question


def classify_question(question: str) -> str:
	"""질문을 유형별로 분류.

	Returns:
		"건전성" | "수익성" | "성장성" | "배당" | "지배구조" | "리스크" | "종합"
	"""
	result = _classify_question(question)
	return result or "종합"


def run_pipeline(company: Any, question: str, included_tables: list[str]) -> str:
	"""질문 유형에 따라 pre-computation 실행.

	Returns:
		추가 context 문자열 (마크다운). 빈 문자열이면 추가 context 없음.
	"""
	q_type = classify_question(question)

	runners = _PIPELINE_MAP.get(q_type, [])
	sections: list[str] = []
	for runner in runners:
		try:
			result = runner(company, included_tables)
			if result:
				sections.append(result)
		except Exception:
			continue

	if not sections:
		return ""
	return "\n\n## 자동 분석 결과\n\n" + "\n\n".join(sections)


# ══════════════════════════════════════
# 유형별 파이프라인
# ══════════════════════════════════════

def _df_to_simple_md(df: pl.DataFrame, max_rows: int = 10) -> str:
	"""간단한 DataFrame → 마크다운 변환."""
	if df is None or df.height == 0:
		return ""

	display = df.head(max_rows)
	cols = display.columns
	header = "| " + " | ".join(cols) + " |"
	sep = "| " + " | ".join(["---"] * len(cols)) + " |"

	rows = []
	for row in display.iter_rows():
		cells = []
		for val in row:
			if val is None:
				cells.append("-")
			elif isinstance(val, float):
				cells.append(f"{val:,.1f}" if abs(val) >= 1 else f"{val:.4f}")
			else:
				cells.append(str(val))
		rows.append("| " + " | ".join(cells) + " |")

	return "\n".join([header, sep] + rows)


def _run_health_analysis(company: Any, tables: list[str]) -> str | None:
	"""재무건전성: ratio_table + anomaly detection."""
	from dartlab.tools.table import ratio_table
	from dartlab.engines.llmAnalyzer.aiParser import detect_anomalies

	bs = getattr(company, "BS", None)
	is_ = getattr(company, "IS", None)
	if not isinstance(bs, pl.DataFrame) or not isinstance(is_, pl.DataFrame):
		return None

	parts: list[str] = []

	# 재무비율 계산
	ratios = ratio_table(bs, is_)
	if ratios.height > 0:
		parts.append("### 핵심 재무비율")
		parts.append(_df_to_simple_md(ratios))

	# 이상치 탐지 (BS)
	anomalies = detect_anomalies(bs, use_llm=False, threshold_pct=50.0)
	if anomalies:
		parts.append("### BS 이상치")
		for a in anomalies[:5]:
			parts.append(
				f"- [{a.severity}] {a.column} {a.year}: "
				f"{a.description} (변동 {a.change_pct:+.1f}%)"
			)

	return "\n".join(parts) if parts else None


def _run_profitability_analysis(company: Any, tables: list[str]) -> str | None:
	"""수익성: IS 피벗 + YoY + 요약통계."""
	from dartlab.tools.table import pivot_accounts, yoy_change, summary_stats

	is_ = getattr(company, "IS", None)
	if not isinstance(is_, pl.DataFrame):
		return None

	parts: list[str] = []

	# IS 피벗 → year | 매출액 | 영업이익 | ...
	pivoted = pivot_accounts(is_)
	if "year" not in pivoted.columns:
		return None

	# 핵심 수익성 지표 YoY
	target_cols = [c for c in pivoted.columns if c in ("매출액", "영업이익", "당기순이익")]
	if target_cols:
		yoy = yoy_change(pivoted, value_cols=target_cols)
		if yoy.height > 0:
			parts.append("### 수익성 YoY 변동")
			parts.append(_df_to_simple_md(yoy))

	# 요약통계
	stats = summary_stats(pivoted)
	if stats.height > 0:
		parts.append("### 수익성 요약")
		parts.append(_df_to_simple_md(stats))

	return "\n".join(parts) if parts else None


def _run_growth_analysis(company: Any, tables: list[str]) -> str | None:
	"""성장성: growth_matrix."""
	from dartlab.tools.table import pivot_accounts, growth_matrix

	is_ = getattr(company, "IS", None)
	if not isinstance(is_, pl.DataFrame):
		return None

	parts: list[str] = []

	pivoted = pivot_accounts(is_)
	if "year" not in pivoted.columns:
		return None

	target_cols = [c for c in pivoted.columns if c in ("매출액", "영업이익", "당기순이익")]
	if target_cols:
		gm = growth_matrix(pivoted, value_cols=target_cols)
		if gm.height > 0:
			parts.append("### 성장률 매트릭스 (CAGR)")
			parts.append(_df_to_simple_md(gm))

	return "\n".join(parts) if parts else None


def _run_dividend_analysis(company: Any, tables: list[str]) -> str | None:
	"""배당: dividend 데이터 YoY + 요약통계."""
	from dartlab.tools.table import yoy_change, summary_stats

	div = getattr(company, "dividend", None)
	if not isinstance(div, pl.DataFrame) or div.height == 0:
		return None

	parts: list[str] = []

	# DPS 등 배당 지표 YoY
	numeric_cols = [
		c for c in div.columns
		if c != "year" and div[c].dtype in (pl.Float64, pl.Float32, pl.Int64, pl.Int32)
	]
	if numeric_cols:
		yoy = yoy_change(div, value_cols=numeric_cols)
		if yoy.height > 0:
			parts.append("### 배당 지표 YoY 변동")
			parts.append(_df_to_simple_md(yoy))

		stats = summary_stats(div)
		if stats.height > 0:
			parts.append("### 배당 요약")
			parts.append(_df_to_simple_md(stats))

	return "\n".join(parts) if parts else None


def _run_risk_analysis(company: Any, tables: list[str]) -> str | None:
	"""리스크: 주요 테이블 이상치 탐지."""
	from dartlab.engines.llmAnalyzer.aiParser import detect_anomalies

	parts: list[str] = []
	checked_modules = ["BS", "IS", "CF"]

	for mod_name in checked_modules:
		data = getattr(company, mod_name, None)
		if not isinstance(data, pl.DataFrame):
			continue

		anomalies = detect_anomalies(data, use_llm=False, threshold_pct=40.0)
		if anomalies:
			parts.append(f"### {mod_name} 이상치")
			for a in anomalies[:5]:
				parts.append(
					f"- [{a.severity}] {a.column} {a.year}: "
					f"{a.description} (변동 {a.change_pct:+.1f}%)"
				)

	return "\n".join(parts) if parts else None


_PIPELINE_MAP: dict[str, list] = {
	"건전성": [_run_health_analysis],
	"수익성": [_run_profitability_analysis],
	"성장성": [_run_growth_analysis],
	"배당": [_run_dividend_analysis],
	"리스크": [_run_risk_analysis],
	"종합": [_run_health_analysis, _run_profitability_analysis, _run_growth_analysis],
}
