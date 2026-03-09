"""모듈별 LLM 컨텍스트 메타데이터.

각 파서 모듈의 한글 라벨, 설명, 단위, 컬럼 설명, 분석 힌트를 정의하여
LLM이 데이터를 정확하게 해석할 수 있도록 지원한다.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ColumnMeta:
	"""DataFrame 컬럼 메타데이터."""

	name: str
	description: str
	unit: str = ""


@dataclass(frozen=True)
class ModuleMeta:
	"""모듈 메타데이터."""

	label: str
	description: str
	unit: str = "백만원"
	columns: tuple[ColumnMeta, ...] = ()
	analysisHints: tuple[str, ...] = ()
	relatedModules: tuple[str, ...] = ()
	maxRows: int = 30


MODULE_META: dict[str, ModuleMeta] = {
	# ══════════════════════════════════════
	# 재무제표
	# ══════════════════════════════════════
	"BS": ModuleMeta(
		label="재무상태표",
		description="K-IFRS 연결 재무상태표. 계정명 × 연도별 기말 잔액.",
		columns=(
			ColumnMeta("계정명", "K-IFRS 재무상태표 계정과목"),
		),
		analysisHints=(
			"부채비율(부채총계/자본총계) 추이",
			"유동비율(유동자산/유동부채) 확인",
			"자산 구성 변화 (유형 vs 무형 비중)",
			"IFRS 16 리스부채 영향 고려",
		),
		relatedModules=("IS", "CF", "fsSummary"),
		maxRows=50,
	),
	"IS": ModuleMeta(
		label="손익계산서",
		description="K-IFRS 연결 손익계산서. 계정명 × 연도별 누적 금액.",
		columns=(
			ColumnMeta("계정명", "K-IFRS 손익계산서 계정과목"),
		),
		analysisHints=(
			"매출 성장률(YoY) 계산",
			"영업이익률(영업이익/매출액) 추이",
			"순이익률(당기순이익/매출액) 추이",
			"매출원가율 변동 확인",
		),
		relatedModules=("BS", "CF", "fsSummary", "segment"),
		maxRows=50,
	),
	"CF": ModuleMeta(
		label="현금흐름표",
		description="K-IFRS 연결 현금흐름표. 계정명 × 연도별 현금흐름.",
		columns=(
			ColumnMeta("계정명", "K-IFRS 현금흐름표 계정과목"),
		),
		analysisHints=(
			"영업활동CF가 양수인지 확인 (음수 = 위험)",
			"FCF = 영업활동CF - 자본적지출",
			"재무활동CF로 차입/상환 패턴 파악",
			"영업CF > 순이익이면 이익의 질 양호",
		),
		relatedModules=("BS", "IS"),
		maxRows=50,
	),
	"fsSummary": ModuleMeta(
		label="요약재무정보",
		description="DART 공시 요약재무정보. 다년간 주요 재무지표 비교.",
		analysisHints=(
			"전체 재무 추세의 출발점으로 활용",
		),
		relatedModules=("BS", "IS", "CF"),
		maxRows=50,
	),
	"segment": ModuleMeta(
		label="부문정보",
		description="사업부문별 매출·이익 데이터. 부문간 수익성 비교 가능.",
		analysisHints=(
			"부문별 매출 비중과 성장률",
			"부문별 수익성 차이와 성장 기여도",
		),
		relatedModules=("IS", "productService"),
	),
	"tangibleAsset": ModuleMeta(
		label="유형자산",
		description="유형자산 변동표. 취득/처분/감가상각 내역.",
		analysisHints=(
			"CAPEX 수준과 감가상각 비교",
			"자산 처분 규모 확인",
		),
		relatedModules=("CF", "BS"),
	),
	"costByNature": ModuleMeta(
		label="비용성격별분류",
		description="비용을 성격별로 분류한 시계열. 원재료비, 인건비, 감가상각비 등.",
		analysisHints=(
			"비용 구조 변화 추적 (인건비 비중 등)",
			"원재료비 변동이 매출원가율에 미치는 영향",
		),
		relatedModules=("IS", "rawMaterial"),
	),

	# ══════════════════════════════════════
	# 정기보고서 — 재무 관련
	# ══════════════════════════════════════
	"dividend": ModuleMeta(
		label="배당",
		description="배당 시계열. 연도별 DPS, 배당총액, 배당성향, 배당수익률.",
		unit="원 (DPS), 백만원 (총액), % (배당성향·수익률)",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("netIncome", "당기순이익", "백만원"),
			ColumnMeta("eps", "주당순이익", "원"),
			ColumnMeta("totalDividend", "현금배당금총액", "백만원"),
			ColumnMeta("payoutRatio", "현금배당성향", "%"),
			ColumnMeta("dividendYield", "현금배당수익률", "%"),
			ColumnMeta("dps", "보통주 주당현금배당금", "원"),
		),
		analysisHints=(
			"DPS 증감 추이 확인",
			"배당성향(DPS/EPS) 안정성 — 100% 초과 시 과배당 우려",
			"배당수익률 변화",
		),
		relatedModules=("IS", "shareCapital"),
	),
	"bond": ModuleMeta(
		label="채무증권",
		description="사채, CP 등 채무증권 발행·상환 시계열.",
		analysisHints=(
			"만기 도래 시점의 차환 리스크",
			"이자율 수준과 신용등급 연계",
		),
		relatedModules=("BS", "CF", "contingentLiability"),
	),
	"shareCapital": ModuleMeta(
		label="주식현황",
		description="발행주식수, 자기주식, 유통주식수 시계열.",
		unit="주",
		analysisHints=(
			"자기주식 비율과 소각 여부",
			"유통주식수 변동이 주가에 미치는 영향",
		),
		relatedModules=("capitalChange", "fundraising", "dividend"),
	),
	"capitalChange": ModuleMeta(
		label="자본변동",
		description="자본금 변동 시계열. 보통주/우선주 주식수·액면 변동.",
		unit="주 (주식수), 원 (액면)",
		analysisHints=(
			"증자/감자 이벤트와 지분 희석 효과",
		),
		relatedModules=("shareCapital", "fundraising"),
	),
	"fundraising": ModuleMeta(
		label="증자감자",
		description="유상증자, 무상증자, 감자 이력.",
		analysisHints=(
			"증자 빈도와 목적 (시설/운영/차환)",
			"감자 이유 확인",
		),
		relatedModules=("capitalChange", "shareCapital"),
	),
	"subsidiary": ModuleMeta(
		label="자회사투자",
		description="종속회사 투자 시계열. 지분율, 장부가액 변동.",
		unit="백만원 (금액), % (지분율)",
		analysisHints=(
			"자회사 손익이 연결 실적에 미치는 영향",
			"주요 자회사 지분율 변동",
		),
		relatedModules=("investmentInOther", "affiliateGroup"),
	),
	"contingentLiability": ModuleMeta(
		label="우발부채",
		description="채무보증, 소송 현황. 잠재적 재무 리스크 지표.",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("totalGuaranteeAmount", "채무보증 총액", "백만원"),
			ColumnMeta("lineCount", "보증 건수", "건"),
		),
		analysisHints=(
			"채무보증 총액 대비 자기자본 비율",
			"소송 규모와 진행 상태",
		),
		relatedModules=("BS", "sanction"),
	),
	"relatedPartyTx": ModuleMeta(
		label="관계자거래",
		description="대주주 등과의 매출·매입 거래 시계열. 이전가격 리스크 확인.",
		analysisHints=(
			"관계자 거래 비중이 매출의 10%+ 이면 주의",
		),
		relatedModules=("affiliateGroup", "majorHolder"),
	),
	"otherFinance": ModuleMeta(
		label="기타재무",
		description="대손충당금, 재고자산 관련 기타 재무 데이터.",
		analysisHints=(
			"대손충당금 적립률 추이",
			"재고자산 회전율 변동",
		),
		relatedModules=("BS", "IS"),
	),
	"riskDerivative": ModuleMeta(
		label="위험관리",
		description="환율·이자율·상품가격 리스크 관리. 파생상품 보유 현황.",
		analysisHints=(
			"환위험 노출 규모와 헤지 비율",
			"파생상품 평가손익 추이",
		),
		relatedModules=("IS", "BS"),
	),

	# ══════════════════════════════════════
	# 정기보고서 — 인적·지배구조
	# ══════════════════════════════════════
	"majorHolder": ModuleMeta(
		label="최대주주",
		description="최대주주 지분율 시계열. 지분 변동은 경영권 안정성의 핵심 지표.",
		unit="% (지분율), 주 (주식수)",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("majorHolder", "최대주주명"),
			ColumnMeta("majorRatio", "최대주주 지분율", "%"),
			ColumnMeta("totalRatio", "특수관계인 포함 총 지분율", "%"),
			ColumnMeta("holderCount", "주요주주 수", "명"),
		),
		analysisHints=(
			"최대주주 지분율 변동 확인",
			"특수관계인 포함 총 지분율 30% 이상이면 경영권 안정",
		),
		relatedModules=("holderOverview", "executive"),
	),
	"holderOverview": ModuleMeta(
		label="주주현황",
		description="5% 이상 대주주, 소액주주, 의결권 현황.",
		unit="%",
		analysisHints=(
			"소액주주 비율과 의결권 구조",
			"외국인 지분율 변동",
		),
		relatedModules=("majorHolder", "shareCapital"),
	),
	"employee": ModuleMeta(
		label="직원현황",
		description="직원 수, 평균 근속연수, 평균 연봉 시계열.",
		unit="명 (인원), 년 (근속), 백만원 (연봉)",
		analysisHints=(
			"직원 수 증감과 매출 성장의 관계",
			"평균 연봉 수준 및 변화",
		),
		relatedModules=("IS", "executivePay"),
	),
	"executive": ModuleMeta(
		label="임원현황",
		description="등기임원 구성 시계열. 사내이사/사외이사/비상무이사 구분.",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("totalRegistered", "등기임원 총원", "명"),
			ColumnMeta("insideDirectors", "사내이사", "명"),
			ColumnMeta("outsideDirectors", "사외이사", "명"),
			ColumnMeta("otherNonexec", "기타비상무이사", "명"),
			ColumnMeta("maleCount", "남성 임원", "명"),
			ColumnMeta("femaleCount", "여성 임원", "명"),
		),
		analysisHints=(
			"사외이사 비율 1/3 이상은 법적 요건",
		),
		relatedModules=("boardOfDirectors", "executivePay"),
	),
	"executivePay": ModuleMeta(
		label="임원보수",
		description="임원 유형별 보수 시계열. 등기이사/사외이사/감사 구분.",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("category", "임원 유형"),
			ColumnMeta("headcount", "인원수", "명"),
			ColumnMeta("totalPay", "보수총액", "백만원"),
			ColumnMeta("avgPay", "1인당 평균보수", "백만원"),
		),
		analysisHints=(
			"평균 보수 대비 실적 적정성 판단",
		),
		relatedModules=("executive", "employee"),
	),
	"boardOfDirectors": ModuleMeta(
		label="이사회",
		description="이사회 구성 및 활동 시계열. 개최횟수, 출석률 포함.",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("totalDirectors", "이사 총원", "명"),
			ColumnMeta("outsideDirectors", "사외이사", "명"),
			ColumnMeta("meetingCount", "이사회 개최횟수", "회"),
			ColumnMeta("avgAttendanceRate", "평균 출석률", "%"),
		),
		analysisHints=(
			"이사회 활동성(개최횟수)과 출석률 확인",
		),
		relatedModules=("executive", "auditSystem"),
	),

	# ══════════════════════════════════════
	# 정기보고서 — 감사·통제
	# ══════════════════════════════════════
	"audit": ModuleMeta(
		label="감사의견",
		description="외부감사인의 감사의견과 감사보수 시계열. 적정 외 의견은 중대 위험 신호.",
		unit="백만원 (보수)",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("auditor", "감사인 (회계법인)"),
			ColumnMeta("opinion", "감사의견 (적정/한정/부적정/의견거절)"),
			ColumnMeta("keyAuditMatters", "핵심감사사항"),
		),
		analysisHints=(
			"적정 외 의견은 중대 리스크 신호",
			"감사인 교체 빈번 여부 확인",
			"핵심감사사항의 반복 패턴",
		),
		relatedModules=("auditSystem", "internalControl"),
	),
	"auditSystem": ModuleMeta(
		label="감사제도",
		description="감사위원회 구성 및 활동 현황.",
		analysisHints=(
			"감사위원회 전원 사외이사 여부 확인",
		),
		relatedModules=("audit", "boardOfDirectors"),
	),
	"internalControl": ModuleMeta(
		label="내부통제",
		description="내부회계관리제도 감사의견 시계열.",
		analysisHints=(
			"내부통제 취약점은 재무제표 신뢰성 리스크",
		),
		relatedModules=("audit", "auditSystem"),
	),
	"sanction": ModuleMeta(
		label="제재현황",
		description="행정제재, 과징금, 영업정지 등 규제 조치 이력.",
		analysisHints=(
			"제재 이력은 규제 리스크 신호",
			"반복 제재 패턴 확인",
		),
		relatedModules=("contingentLiability",),
	),

	# ══════════════════════════════════════
	# 정기보고서 — 사업·투자
	# ══════════════════════════════════════
	"rnd": ModuleMeta(
		label="R&D",
		description="연구개발비용 시계열. 기술 투자 강도 판단.",
		columns=(
			ColumnMeta("year", "사업연도"),
			ColumnMeta("rndExpense", "연구개발비", "백만원"),
			ColumnMeta("revenueRatio", "매출 대비 R&D 비율", "%"),
		),
		analysisHints=(
			"매출 대비 R&D 비율의 업종 적정성",
			"R&D 투자 추세와 매출 성장의 관계",
		),
		relatedModules=("IS", "productService"),
	),
	"productService": ModuleMeta(
		label="주요제품",
		description="주요 제품/서비스별 매출액과 비중.",
		analysisHints=(
			"매출 집중도(단일 제품 의존도) 확인",
		),
		relatedModules=("segment", "salesOrder"),
	),
	"salesOrder": ModuleMeta(
		label="매출수주",
		description="매출실적 및 수주 현황.",
		analysisHints=(
			"수주잔고 추이로 미래 매출 가시성 확인",
		),
		relatedModules=("IS", "productService"),
	),
	"affiliateGroup": ModuleMeta(
		label="계열사",
		description="기업집단 소속 계열회사 현황. 상장/비상장 구분.",
		analysisHints=(
			"그룹 규모와 계열사 변동 추적",
		),
		relatedModules=("relatedPartyTx", "subsidiary"),
		maxRows=15,
	),
	"investmentInOther": ModuleMeta(
		label="타법인출자",
		description="타법인 출자 현황. 투자목적, 지분율, 장부가 등.",
		analysisHints=(
			"비핵심 투자 비중과 수익성",
		),
		relatedModules=("subsidiary", "affiliateGroup"),
		maxRows=20,
	),
	"articlesOfIncorporation": ModuleMeta(
		label="정관",
		description="정관 변경 이력. 사업목적 추가·변경으로 신사업 진출 파악.",
		analysisHints=(
			"사업목적 추가/변경 사항 확인",
		),
	),
	"companyHistory": ModuleMeta(
		label="연혁",
		description="회사 주요 연혁 이벤트 목록.",
		analysisHints=(
			"최근 M&A, 사업 전환, 상장 등 주요 이벤트",
		),
		maxRows=20,
	),
	"shareholderMeeting": ModuleMeta(
		label="주주총회",
		description="주주총회 안건 및 의결 결과.",
		analysisHints=(
			"안건 부결 여부, 특수 안건 확인",
		),
		relatedModules=("majorHolder",),
	),

	# ══════════════════════════════════════
	# 정기보고서 — 기업 개요
	# ══════════════════════════════════════
	"companyOverviewDetail": ModuleMeta(
		label="회사개요",
		description="설립일, 상장일, 대표이사, 주소, 주요사업 등 기본 정보.",
	),

	# ══════════════════════════════════════
	# 공시 서술
	# ══════════════════════════════════════
	"business": ModuleMeta(
		label="사업의내용",
		description="사업보고서 '사업의 내용' 서술. 사업 구조와 현황 파악.",
		analysisHints=(
			"핵심 사업모델과 경쟁력 파악",
			"산업 리스크 요인 확인",
		),
		maxRows=5,
	),
	"companyOverview": ModuleMeta(
		label="회사개요정량",
		description="공시 기반 회사 정량 개요 데이터.",
	),
	"mdna": ModuleMeta(
		label="MD&A",
		description="이사의 경영진단 및 분석의견. 경영진 시각의 실적 평가와 전망.",
		analysisHints=(
			"경영진의 실적 자기평가와 전망",
			"언급된 리스크 요인",
		),
	),
	"rawMaterial": ModuleMeta(
		label="원재료설비",
		description="원재료 매입, 유형자산 현황, 시설투자 데이터.",
		analysisHints=(
			"원재료 조달 집중도",
			"시설투자 규모 추이",
		),
		relatedModules=("costByNature", "tangibleAsset"),
	),

	# ══════════════════════════════════════
	# financeEngine 파생
	# ══════════════════════════════════════
	"ratios": ModuleMeta(
		label="핵심 재무비율",
		description="financeEngine이 자동계산한 수익성·안정성·밸류에이션 비율.",
		unit="%",
	),
}


def get_meta(name: str) -> ModuleMeta | None:
	"""모듈명으로 메타데이터 조회."""
	return MODULE_META.get(name)
