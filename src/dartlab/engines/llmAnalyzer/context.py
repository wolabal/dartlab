"""Company 데이터를 LLM context로 변환.

메타데이터 기반 컬럼 설명, 파생 지표 자동계산, 분석 힌트를 포함하여
LLM이 정확하게 분석할 수 있는 구조화된 마크다운 컨텍스트를 생성한다.
"""

from __future__ import annotations

from typing import Any

import polars as pl

from dartlab.engines.llmAnalyzer.metadata import MODULE_META, ModuleMeta


def detect_year_range(company: Any, tables: list[str]) -> dict | None:
	"""포함될 데이터의 연도 범위 감지."""
	all_years: set[int] = set()
	for name in tables:
		try:
			data = getattr(company, name, None)
			if data is None:
				continue
			if isinstance(data, pl.DataFrame):
				if "year" in data.columns:
					years = data["year"].unique().to_list()
					all_years.update(int(y) for y in years if y)
				else:
					year_cols = [c for c in data.columns if c.isdigit() and len(c) == 4]
					all_years.update(int(c) for c in year_cols)
		except Exception:
			continue
	if not all_years:
		return None
	sorted_years = sorted(all_years)
	return {"min_year": sorted_years[0], "max_year": sorted_years[-1]}


# ══════════════════════════════════════
# 질문 키워드 → 자동 포함 데이터 매핑
# ══════════════════════════════════════

_TOPIC_MAP: dict[str, list[str]] = {
	# ── 재무제표 ──
	"재무": ["BS", "IS", "CF", "fsSummary", "costByNature"],
	"건전성": ["BS", "audit", "contingentLiability", "internalControl", "bond"],
	"수익": ["IS", "segment", "productService", "costByNature"],
	"실적": ["IS", "segment", "fsSummary", "productService", "salesOrder"],
	"매출": ["IS", "segment", "productService", "salesOrder"],
	"영업이익": ["IS", "fsSummary", "segment"],
	"순이익": ["IS", "fsSummary"],
	"현금": ["CF", "BS"],
	"자산": ["BS", "tangibleAsset", "investmentInOther"],
	"유형자산": ["tangibleAsset"],
	"성장": ["IS", "CF", "productService", "salesOrder", "rnd"],
	"원가": ["costByNature", "IS"],
	"비용": ["costByNature", "IS"],

	# ── 배당·자본 ──
	"배당": ["dividend", "IS", "shareCapital"],
	"자본": ["BS", "capitalChange", "shareCapital", "fundraising"],
	"증자": ["fundraising", "capitalChange", "shareCapital"],
	"감자": ["fundraising", "capitalChange"],
	"자기주식": ["shareCapital", "capitalChange"],
	"주식": ["shareCapital", "capitalChange", "fundraising"],

	# ── 주주·지배구조 ──
	"주주": ["majorHolder", "holderOverview", "dividend", "shareCapital", "shareholderMeeting"],
	"지배": ["majorHolder", "executive", "boardOfDirectors", "holderOverview"],
	"임원": ["executive", "executivePay", "boardOfDirectors"],
	"보수": ["executivePay", "employee"],
	"급여": ["employee", "executivePay"],
	"이사회": ["boardOfDirectors", "executive"],
	"사외이사": ["boardOfDirectors", "executive"],
	"직원": ["employee"],
	"주총": ["shareholderMeeting"],

	# ── 감사·통제·리스크 ──
	"감사": ["audit", "auditSystem", "internalControl"],
	"내부통제": ["internalControl", "auditSystem"],
	"리스크": ["contingentLiability", "sanction", "riskDerivative", "audit", "internalControl"],
	"소송": ["contingentLiability", "sanction"],
	"보증": ["contingentLiability"],
	"제재": ["sanction"],
	"파생": ["riskDerivative"],
	"환율": ["riskDerivative"],
	"환위험": ["riskDerivative"],

	# ── 투자·사업 ──
	"투자": ["CF", "rnd", "subsidiary", "investmentInOther", "tangibleAsset"],
	"연구": ["rnd"],
	"연구개발": ["rnd"],
	"R&D": ["rnd"],
	"기술": ["rnd", "business"],
	"자회사": ["subsidiary", "affiliateGroup", "investmentInOther"],
	"계열사": ["affiliateGroup", "relatedPartyTx", "subsidiary"],
	"계열": ["affiliateGroup", "relatedPartyTx"],
	"관계사": ["affiliateGroup", "relatedPartyTx", "subsidiary"],
	"출자": ["investmentInOther"],
	"제품": ["productService"],
	"수주": ["salesOrder"],
	"설비": ["tangibleAsset", "rawMaterial"],
	"원재료": ["rawMaterial", "costByNature"],
	"채무증권": ["bond"],
	"사채": ["bond"],
	"부채": ["BS", "bond", "contingentLiability", "capitalChange"],

	# ── 서술·개요 ──
	"사업": ["business", "companyOverview", "companyOverviewDetail", "companyHistory"],
	"개요": ["companyOverviewDetail", "companyOverview"],
	"연혁": ["companyHistory"],
	"정관": ["articlesOfIncorporation"],
	"MD&A": ["mdna"],
	"경영진단": ["mdna"],
	"대손": ["otherFinance"],
	"재고": ["otherFinance"],

	# ── 복합 분석 ──
	"ROE": ["IS", "BS", "fsSummary"],
	"부문": ["segment"],
	"세그먼트": ["segment"],
	"ESG": ["employee", "boardOfDirectors", "sanction", "internalControl"],
	"신용등급": ["companyOverview"],
	"전반": ["BS", "IS", "CF", "fsSummary", "audit", "majorHolder"],
	"종합": ["BS", "IS", "CF", "fsSummary", "audit", "majorHolder"],
}

# 항상 포함되는 기본 컨텍스트
_BASE_CONTEXT = ["fsSummary"]


def _get_sector(company: Any) -> str | None:
	"""Company에서 업종명 추출."""
	try:
		overview = getattr(company, "companyOverview", None)
		if isinstance(overview, dict):
			sector = overview.get("indutyName") or overview.get("sector")
			if sector:
				return sector

		detail = getattr(company, "companyOverviewDetail", None)
		if isinstance(detail, dict):
			sector = detail.get("sector") or detail.get("indutyName")
			if sector:
				return sector
	except Exception:
		pass

	return None


# ══════════════════════════════════════
# DataFrame → 마크다운 변환
# ══════════════════════════════════════

def df_to_markdown(
	df: pl.DataFrame,
	max_rows: int = 30,
	meta: ModuleMeta | None = None,
) -> str:
	"""Polars DataFrame → 메타데이터 주석 포함 Markdown 테이블."""
	if df is None or df.height == 0:
		return "(데이터 없음)"

	effective_max = meta.maxRows if meta else max_rows

	# year 컬럼이 있으면 최신순 정렬
	if "year" in df.columns:
		df = df.sort("year", descending=True)

	if df.height > effective_max:
		display_df = df.head(effective_max)
		truncated = True
	else:
		display_df = df
		truncated = False

	parts = []

	# 단위 표기
	if meta and meta.unit and meta.unit != "백만원":
		parts.append(f"(단위: {meta.unit})")

	# 컬럼 설명 주석
	if meta and meta.columns:
		col_map = {c.name: c for c in meta.columns}
		described = []
		for col in display_df.columns:
			if col in col_map:
				c = col_map[col]
				desc = f"`{col}`: {c.description}"
				if c.unit:
					desc += f" ({c.unit})"
				described.append(desc)
		if described:
			parts.append(" | ".join(described))

	# 테이블 헤더 (메타데이터 있으면 설명 병기)
	cols = display_df.columns
	if meta and meta.columns:
		col_map = {c.name: c for c in meta.columns}
		header_cells = []
		for col in cols:
			if col in col_map:
				header_cells.append(f"{col} ({col_map[col].description})")
			else:
				header_cells.append(col)
		header = "| " + " | ".join(header_cells) + " |"
	else:
		header = "| " + " | ".join(cols) + " |"

	sep = "| " + " | ".join(["---"] * len(cols)) + " |"

	rows = []
	for row in display_df.iter_rows():
		cells = []
		for val in row:
			if val is None:
				cells.append("-")
			elif isinstance(val, float):
				if abs(val) >= 1:
					cells.append(f"{val:,.0f}")
				else:
					cells.append(f"{val:.4f}")
			else:
				cells.append(str(val))
		rows.append("| " + " | ".join(cells) + " |")

	parts.append("\n".join([header, sep] + rows))

	if truncated:
		parts.append(f"(상위 {effective_max}행 표시, 전체 {df.height}행)")

	return "\n".join(parts)


# ══════════════════════════════════════
# 파생 지표 자동계산
# ══════════════════════════════════════

def _find_account_value(df: pl.DataFrame, keyword: str, year_col: str) -> float | None:
	"""계정명에서 키워드를 포함하는 행의 값 추출."""
	if "계정명" not in df.columns or year_col not in df.columns:
		return None
	matched = df.filter(pl.col("계정명").str.contains(keyword))
	if matched.height == 0:
		return None
	val = matched.row(0, named=True).get(year_col)
	return val if isinstance(val, (int, float)) else None


def _compute_derived_metrics(name: str, df: pl.DataFrame) -> str | None:
	"""핵심 재무제표에서 YoY 성장률/비율 자동계산."""
	if name not in ("BS", "IS", "CF") or df is None or df.height == 0:
		return None

	year_cols = sorted(
		[c for c in df.columns if c.isdigit() and len(c) == 4],
		reverse=True,
	)
	if len(year_cols) < 2:
		return None

	lines = []

	if name == "IS":
		targets = {
			"매출액": "매출 성장률",
			"영업이익": "영업이익 성장률",
			"당기순이익": "순이익 성장률",
		}
		for acct, label in targets.items():
			metrics = []
			for i in range(min(len(year_cols) - 1, 3)):
				cur = _find_account_value(df, acct, year_cols[i])
				prev = _find_account_value(df, acct, year_cols[i + 1])
				if cur is not None and prev is not None and prev != 0:
					yoy = (cur - prev) / abs(prev) * 100
					metrics.append(f"{year_cols[i]}/{year_cols[i + 1]}: {yoy:+.1f}%")
			if metrics:
				lines.append(f"- {label}: {', '.join(metrics)}")

		# 영업이익률, 순이익률
		latest = year_cols[0]
		rev = _find_account_value(df, "매출액", latest)
		oi = _find_account_value(df, "영업이익", latest)
		ni = _find_account_value(df, "당기순이익", latest)
		if rev and rev != 0:
			if oi is not None:
				lines.append(f"- {latest} 영업이익률: {oi / rev * 100:.1f}%")
			if ni is not None:
				lines.append(f"- {latest} 순이익률: {ni / rev * 100:.1f}%")

	elif name == "BS":
		latest = year_cols[0]
		debt = _find_account_value(df, "부채총계", latest)
		equity = _find_account_value(df, "자본총계", latest)
		ca = _find_account_value(df, "유동자산", latest)
		cl = _find_account_value(df, "유동부채", latest)

		if debt is not None and equity is not None and equity != 0:
			lines.append(f"- {latest} 부채비율: {debt / equity * 100:.1f}%")
		if ca is not None and cl is not None and cl != 0:
			lines.append(f"- {latest} 유동비율: {ca / cl * 100:.1f}%")

		# 총자산 증가율
		for i in range(min(len(year_cols) - 1, 2)):
			cur = _find_account_value(df, "자산총계", year_cols[i])
			prev = _find_account_value(df, "자산총계", year_cols[i + 1])
			if cur is not None and prev is not None and prev != 0:
				yoy = (cur - prev) / abs(prev) * 100
				lines.append(f"- 총자산 증가율 {year_cols[i]}/{year_cols[i + 1]}: {yoy:+.1f}%")

	elif name == "CF":
		for i in range(min(len(year_cols) - 1, 2)):
			cur = _find_account_value(df, "영업활동", year_cols[i])
			prev = _find_account_value(df, "영업활동", year_cols[i + 1])
			if cur is not None and prev is not None and prev != 0:
				yoy = (cur - prev) / abs(prev) * 100
				lines.append(f"- 영업활동CF 변동 {year_cols[i]}/{year_cols[i + 1]}: {yoy:+.1f}%")

	if not lines:
		return None

	return "### 주요 지표 (자동계산)\n" + "\n".join(lines)


# ══════════════════════════════════════
# 토픽 매핑
# ══════════════════════════════════════

def _resolve_tables(question: str, include: list[str] | None, exclude: list[str] | None) -> list[str]:
	"""질문과 include/exclude로 포함할 테이블 목록 결정."""
	tables: list[str] = list(_BASE_CONTEXT)

	if include:
		tables.extend(include)
	else:
		for keyword, table_names in _TOPIC_MAP.items():
			if keyword in question:
				for t in table_names:
					if t not in tables:
						tables.append(t)

		# 매핑 안 됐으면 기본 재무제표 포함
		if len(tables) == len(_BASE_CONTEXT):
			tables.extend(["BS", "IS", "CF"])

	if exclude:
		tables = [t for t in tables if t not in exclude]

	return tables


# ══════════════════════════════════════
# 컨텍스트 조립
# ══════════════════════════════════════

def build_context(
	company: Any,
	question: str,
	include: list[str] | None = None,
	exclude: list[str] | None = None,
	max_rows: int = 30,
) -> tuple[str, list[str]]:
	"""질문과 Company 인스턴스로부터 LLM context 텍스트 조립.

	Returns:
		(context_text, included_table_names)
	"""
	tables_to_include = _resolve_tables(question, include, exclude)

	from dartlab import config

	orig_verbose = config.verbose
	config.verbose = False

	sections = []
	included = []

	# ── 회사 헤더 ──
	sections.append(f"# {company.corpName} ({company.stockCode})")

	# 회사 기본 정보 (가능하면)
	try:
		detail = getattr(company, "companyOverviewDetail", None)
		if detail and isinstance(detail, dict):
			info_parts = []
			if detail.get("ceo"):
				info_parts.append(f"대표: {detail['ceo']}")
			if detail.get("mainBusiness"):
				info_parts.append(f"주요사업: {detail['mainBusiness']}")
			if detail.get("foundedDate"):
				info_parts.append(f"설립: {detail['foundedDate']}")
			if info_parts:
				sections.append("> " + " | ".join(info_parts))
	except Exception:
		pass

	# ── 데이터 연도 범위 ──
	year_range = detect_year_range(company, tables_to_include)
	if year_range:
		sections.append(f"\n**데이터 기준: {year_range['min_year']}~{year_range['max_year']}년** (가장 최근: {year_range['max_year']}년)")
		sections.append(f"⚠️ {year_range['max_year']}년 이후 데이터는 포함되어 있지 않습니다.\n")

	sections.append("")
	sections.append("모든 금액은 별도 표기 없으면 백만원(millions KRW) 단위입니다.")
	sections.append("")

	# ── 데이터 섹션 ──
	for name in tables_to_include:
		try:
			data = getattr(company, name, None)
			if data is None:
				continue

			meta = MODULE_META.get(name)
			label = meta.label if meta else name
			desc = meta.description if meta else ""

			# 섹션 헤더
			section_parts = [f"\n## {label}"]
			if desc:
				section_parts.append(desc)

			if isinstance(data, pl.DataFrame):
				md = df_to_markdown(data, max_rows=max_rows, meta=meta)
				section_parts.append(md)

				# 파생 지표
				derived = _compute_derived_metrics(name, data)
				if derived:
					section_parts.append(derived)

			elif isinstance(data, dict):
				dict_lines = []
				for k, v in data.items():
					dict_lines.append(f"- {k}: {v}")
				section_parts.append("\n".join(dict_lines))

			elif isinstance(data, list):
				effective_max = meta.maxRows if meta else 20
				list_lines = []
				for item in data[:effective_max]:
					if hasattr(item, "title") and hasattr(item, "chars"):
						list_lines.append(f"- **{item.title}** ({item.chars}자)")
					else:
						list_lines.append(f"- {item}")
				if len(data) > effective_max:
					list_lines.append(f"(... 상위 {effective_max}건, 전체 {len(data)}건)")
				section_parts.append("\n".join(list_lines))

			else:
				section_parts.append(str(data)[:2000])

			# 분석 힌트
			if meta and meta.analysisHints:
				hints = " | ".join(meta.analysisHints)
				section_parts.append(f"> 분석 포인트: {hints}")

			sections.append("\n".join(section_parts))
			included.append(name)

		except Exception:
			continue

	# ── 미포함 모듈 안내 ──
	not_included = set(MODULE_META.keys()) - set(included) - set(tables_to_include)
	if not_included and len(included) < 8:
		available = sorted(
			MODULE_META[n].label for n in not_included if n in MODULE_META
		)[:10]
		if available:
			sections.append(
				f"\n---\n참고: 이 외에도 조회 가능한 데이터: {', '.join(available)}"
			)

	config.verbose = orig_verbose

	return "\n".join(sections), included
