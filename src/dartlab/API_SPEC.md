# dartlab API 스펙

## 공통 규칙

- 모든 pipeline 함수는 `stockCode: str` (6자리 종목코드)를 첫 번째 인자로 받는다
- 내부에서 `core.loadData(stockCode)` → DataFrame 로딩
- 반환 타입은 각 모듈의 Result dataclass 또는 None (데이터 부족 시)
- 모든 Result는 `corpName` 필드를 공통으로 가진다
- 시계열 모듈은 `nYears` (기간 수) 포함, 스냅샷 모듈은 `year` (기준연도) 포함

## 패키지 구조

```
dartlab/
├── core/                          # 데이터 로딩, 보고서 선택, 테이블 파싱
├── engines/
│   ├── dart/                      # L1: DART 데이터 소스
│   │   ├── docs/                  # 공시 문서 파싱
│   │   │   ├── finance/           # 정량 재무 데이터 (36개 모듈)
│   │   │   ├── disclosure/        # 공시 서술형 섹션 (4개 모듈)
│   │   │   └── notes.py           # K-IFRS 주석 통합 접근
│   │   ├── finance/               # XBRL 재무제표 정규화
│   │   └── report/                # 정기보고서 API 데이터
│   ├── sector/                    # L2: 섹터 분류 (WICS 11섹터)
│   ├── insight/                   # L2: 인사이트 등급 (7영역 + 이상치 + 요약)
│   ├── rank/                      # L2: 시장 규모 순위
│   └── ai/                        # L3: LLM 분석 (Ollama 등)
├── company.py                     # 통합 접근 래퍼 (property 기반)
└── config.py                      # 전역 설정 (verbose)
```

- `engines/dart/docs/finance/` — 공시 문서 기반 숫자·테이블: 재무제표, 배당, 주주, 자본 등
- `engines/dart/docs/disclosure/` — 공시 문서 기반 텍스트·서술: 사업의 내용, MD&A 등
- `engines/dart/finance/` — XBRL 재무제표 정규화: 계정 매핑, 시계열, 비율 계산
- `engines/dart/report/` — 정기보고서 API: 배당, 직원, 최대주주, 임원, 감사
- `engines/sector/` — WICS 섹터 분류: KSIC/키워드/오버라이드 3단계
- `engines/insight/` — 7영역 등급 분석 + 이상치 탐지 + 종합 요약
- `engines/rank/` — 매출/자산/성장률 전체+섹터내 순위
- `engines/ai/` — LLM 기반 대화형 분석

## 전역 설정

```python
import dartlab
dartlab.verbose = False   # 진행 표시 끄기 (기본 True)
```

---

## Company 클래스

```python
from dartlab import Company

c = Company("005930")       # 생성 시 데이터 로딩 + 기업명 추출
c = Company("삼성전자")      # 회사명으로도 생성 가능
c.corpName                  # "삼성전자"
```

종목코드 하나로 40개 분석 모듈에 접근하는 통합 래퍼.
**property로 바로 DataFrame에 접근** (lazy 로딩 + 캐싱).

### 사용 패턴

```python
c = Company("005930")

# 1. property → 바로 DataFrame (docsParser 기반)
c.BS                        # 재무상태표
c.dividend                  # 배당 시계열

# 2. notes → K-IFRS 주석 (영문 속성 + 한글 딕셔너리)
c.notes.inventory           # 재고자산
c.notes["재고자산"]          # 동일

# 3. financeEngine → 재무 숫자 시계열
s, p = c.timeseries         # 분기별 standalone (CFS 기본)
s, y = c.annual             # 연도별
s, p = c.cumulative         # 분기별 누적
r = c.ratios                # 재무비율 (RatioResult)

# 4. financeEngine → 커스텀 조회 (연결/별도, 기간)
s, p = c.getTimeseries("y", fsDivPref="OFS")  # 별도 연도별
r = c.getRatios("OFS")                         # 별도 비율

# 5. all() → 전체 dict
d = c.all()                 # {"BS": df, "dividend": df, "timeseries": ..., "annual": ..., "ratios": ..., ...}

# 6. get() → 모듈 전체 Result 객체 (복수 DataFrame 접근)
r = c.get("audit")          # AuditResult
r.opinionDf                 # 감사의견
r.feeDf                     # 감사보수

# 7. fsSummary() → 파라미터가 있는 메서드
r = c.fsSummary(period="q") # AnalysisResult
```

### 인덱스·메타

| 메서드 | 파라미터 | 반환 타입 | 설명 |
|--------|----------|-----------|------|
| `Company.listing()` | forceRefresh | DataFrame | KRX 전체 상장법인 목록 (static) |
| `Company.search()` | keyword | DataFrame | 회사명 부분 검색 (static) |
| `Company.status()` | - | DataFrame | 로컬 보유 전체 종목 인덱스 (static) |
| `Company.resolve()` | codeOrName | str \| None | 종목코드/회사명 → 종목코드 변환 (static) |
| `Company.codeName()` | stockCode | str \| None | 종목코드 → 회사명 변환 (static) |
| `docs()` | - | DataFrame | 이 종목의 공시 문서 목록 + DART 뷰어 링크 |

### property — 재무제표

| property | 반환 타입 | 설명 |
|----------|-----------|------|
| `BS` | DataFrame \| None | 재무상태표 |
| `IS` | DataFrame \| None | 손익계산서 |
| `CF` | DataFrame \| None | 현금흐름표 |

### property — 정기보고서

| property | 반환 타입 | 모듈 | 설명 |
|----------|-----------|------|------|
| `dividend` | DataFrame | dividend | 배당 시계열 |
| `majorHolder` | DataFrame | majorHolder | 최대주주 시계열 |
| `employee` | DataFrame | employee | 직원 현황 시계열 |
| `subsidiary` | DataFrame | subsidiary | 자회사 투자 시계열 |
| `bond` | DataFrame | bond | 채무증권 시계열 |
| `shareCapital` | DataFrame | shareCapital | 주식 현황 시계열 |
| `executive` | DataFrame | executive | 등기임원 시계열 |
| `executivePay` | DataFrame | executivePay | 임원 보수 시계열 |
| `audit` | DataFrame | audit | 감사의견 시계열 |
| `boardOfDirectors` | DataFrame | boardOfDirectors | 이사회 시계열 |
| `capitalChange` | DataFrame | capitalChange | 자본금 변동 시계열 |
| `contingentLiability` | DataFrame | contingentLiability | 우발부채 시계열 |
| `internalControl` | DataFrame | internalControl | 내부통제 시계열 |
| `relatedPartyTx` | DataFrame | relatedPartyTx | 관계자거래 시계열 |
| `rnd` | DataFrame | rnd | R&D 비용 시계열 |
| `sanction` | DataFrame | sanction | 제재 현황 |
| `affiliateGroup` | DataFrame | affiliateGroup | 계열사 목록 |
| `fundraising` | DataFrame | fundraising | 증자/감자 이력 |
| `productService` | DataFrame | productService | 주요 제품/서비스 |
| `salesOrder` | DataFrame | salesOrder | 매출/수주 |
| `riskDerivative` | DataFrame | riskDerivative | 위험관리/파생거래 |
| `articlesOfIncorporation` | DataFrame | articlesOfIncorporation | 정관 변경이력 |
| `otherFinance` | DataFrame | otherFinance | 기타 재무 |
| `companyHistory` | DataFrame | companyHistory | 회사 연혁 |
| `shareholderMeeting` | DataFrame | shareholderMeeting | 주주총회 안건 |
| `auditSystem` | DataFrame | auditSystem | 감사제도 |
| `investmentInOther` | DataFrame | investmentInOther | 타법인출자 |
| `companyOverviewDetail` | dict | companyOverviewDetail | 회사 개요 상세 |
| `holderOverview` | HolderOverview | majorHolder | 5% 주주·소액주주·의결권 |

### property — 공시 서술

| property | 반환 타입 | 모듈 | 설명 |
|----------|-----------|------|------|
| `business` | list | business | 사업의 내용 섹션 목록 |
| `overview` | OverviewResult | companyOverview | 회사 개요 정량 |
| `mdna` | str | mdna | MD&A 개요 텍스트 |
| `rawMaterial` | RawMaterialResult | rawMaterial | 원재료/설비 |

### notes — K-IFRS 주석

```python
c.notes.receivables           # 매출채권
c.notes.inventory             # 재고자산
c.notes.tangibleAsset         # 유형자산
c.notes.intangibleAsset       # 무형자산
c.notes.investmentProperty    # 투자부동산
c.notes.affiliates            # 관계기업
c.notes.borrowings            # 차입금
c.notes.provisions            # 충당부채
c.notes.eps                   # 주당이익
c.notes.lease                 # 리스
c.notes.segments              # 부문정보
c.notes.costByNature          # 비용의성격별분류

c.notes["재고자산"]            # 한글 키로도 접근 가능
c.notes.keys()                # 영문 속성명 목록
c.notes.keys_kr()             # 한글 키워드 목록
c.notes.all()                 # 전체 dict
```

### property — financeEngine

| property | 반환 타입 | 설명 |
|----------|-----------|------|
| `timeseries` | (series, periods) \| None | 분기별 standalone 시계열 (CFS) |
| `annual` | (series, years) \| None | 연도별 시계열 (CFS) |
| `cumulative` | (series, periods) \| None | 분기별 누적 시계열 (CFS) |
| `ratios` | RatioResult \| None | 재무비율 (CFS) |

series 구조: `{"BS": {"snakeId": [값...]}, "IS": {...}, "CF": {...}}`

### 메서드

| 메서드 | 파라미터 | 반환 타입 | 설명 |
|--------|----------|-----------|------|
| `getTimeseries()` | period("q"/"y"/"cum"), fsDivPref("CFS"/"OFS") | (series, periods) \| None | 커스텀 시계열 조회 |
| `getRatios()` | fsDivPref("CFS"/"OFS") | RatioResult \| None | 커스텀 비율 계산 |
| `fsSummary()` | ifrsOnly, period | AnalysisResult | 요약재무정보 + 브릿지 매칭 |
| `all()` | - | dict | 전체 데이터 dict (progress bar 포함) |
| `get(name)` | name, **kwargs | Result 객체 | 모듈 전체 Result 접근 |
| `docs()` | - | DataFrame | 공시 문서 목록 |

---

## finance 모듈

### finance.summary — fsSummary

```python
from dartlab.engines.dart.docs.finance.summary import fsSummary
result = fsSummary("005930", ifrsOnly=True, period="y")
```

#### AnalysisResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 기간 수 |
| period | str | "y" \| "q" \| "h" |
| allRate | float \| None | 전체 매칭률 |
| contRate | float \| None | 연속 구간 매칭률 |
| segments | list[Segment] | 구간 목록 |
| breakpoints | list[BridgeResult] | 전환점 목록 |
| FS | DataFrame \| None | 전체 재무제표 |
| BS | DataFrame \| None | 재무상태표 |
| IS | DataFrame \| None | 손익계산서 |

### finance.statements

```python
from dartlab.engines.dart.docs.finance.statements import statements
result = statements("005930", ifrsOnly=True, period="y")
```

#### StatementsResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 기간 수 |
| period | str | "y" \| "q" \| "h" |
| BS | DataFrame \| None | 재무상태표 |
| IS | DataFrame \| None | 손익계산서 |
| CF | DataFrame \| None | 현금흐름표 |

### finance.dividend

#### DividendResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| timeSeries | DataFrame \| None | year, netIncome, eps, totalDividend, payoutRatio, dividendYield, dps, dpsPreferred |

### finance.majorHolder

#### MajorHolderResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| majorHolder | str \| None | 최대주주명 |
| majorRatio | float \| None | 최대주주 지분율 (%) |
| totalRatio | float \| None | 특수관계인 합계 지분율 (%) |
| holders | list[Holder] | 특수관계인 목록 |
| timeSeries | DataFrame \| None | year, majorHolder, majorRatio, totalRatio, holderCount |

#### HolderOverview

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| year | int \| None | 기준 사업연도 |
| bigHolders | list[BigHolder] | 5% 이상 주주 |
| minority | Minority \| None | 소액주주 현황 |
| voting | VotingRights \| None | 의결권 현황 |

### finance.employee

#### EmployeeResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| timeSeries | DataFrame \| None | year, totalEmployees, avgTenure, totalSalary, avgSalary |

### finance.subsidiary

#### SubsidiaryResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| investments | list[SubsidiaryInvestment] | 최신 연도 투자 목록 |
| timeSeries | DataFrame \| None | year, totalCount, listedCount, unlistedCount, totalBook |

### finance.bond

#### BondResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| issuances | list[BondIssuance] | 최신 연도 채무증권 목록 |
| timeSeries | DataFrame \| None | year, totalIssuances, totalAmount, unredeemedCount |

### finance.shareCapital

#### ShareCapitalResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| authorizedShares | float \| None | 발행할 주식의 총수 |
| outstandingShares | float \| None | 발행주식의 총수 |
| treasuryShares | float \| None | 자기주식수 |
| floatingShares | float \| None | 유통주식수 |
| timeSeries | DataFrame \| None | year, outstandingShares, treasuryShares, floatingShares, treasuryRatio |

### finance.audit

#### AuditResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| opinionDf | DataFrame \| None | year, auditor, opinion, keyAuditMatters |
| feeDf | DataFrame \| None | year, auditor, contractFee, contractHours, actualFee, actualHours |

### finance.executive

#### ExecutiveResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| executiveDf | DataFrame \| None | year, totalRegistered, insideDirectors, outsideDirectors, ... |
| unregPayDf | DataFrame \| None | year, headcount, totalSalary, avgSalary |

### finance.executivePay

#### ExecutivePayResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| payByTypeDf | DataFrame \| None | year, category, headcount, totalPay, avgPay |
| topPayDf | DataFrame \| None | year, name, position, totalPay |

### finance.boardOfDirectors

#### BoardResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| boardDf | DataFrame \| None | year, totalDirectors, outsideDirectors, meetingCount, avgAttendanceRate |
| committeeDf | DataFrame \| None | year, committeeName, composition, members |

### finance.capitalChange

#### CapitalChangeResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| capitalDf | DataFrame \| None | year, commonShares, preferredShares, commonCapital, ... |
| shareTotalDf | DataFrame \| None | year, authorizedTotal, issuedTotal, outstandingTotal, ... |
| treasuryDf | DataFrame \| None | year, totalBegin, totalEnd |

### finance.contingentLiability

#### ContingentLiabilityResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| guaranteeDf | DataFrame \| None | year, totalGuaranteeAmount, lineCount |
| lawsuitDf | DataFrame \| None | year, filingDate, parties, description, amount, status |

### finance.internalControl

#### InternalControlResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| controlDf | DataFrame \| None | year, period, opinion, auditor, hasWeakness |

### finance.relatedPartyTx

#### RelatedPartyTxResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| guaranteeDf | DataFrame \| None | year, entity, relationship, amount |
| assetTxDf | DataFrame \| None | year, entity, txType, amount |
| revenueTxDf | DataFrame \| None | year, entity, sales, purchases |

### finance.rnd

#### RndResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| rndDf | DataFrame \| None | year, rndExpense, revenueRatio |

### finance.sanction

#### SanctionResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| sanctionDf | DataFrame \| None | year, date, agency, subject, action, amount, reason |

### finance.affiliateGroup

#### AffiliateGroupResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| groupName | str \| None | 기업집단명 |
| totalCount | int \| None | 계열사 수 |
| affiliateDf | DataFrame \| None | name, listed |

### finance.fundraising

#### FundraisingResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| noData | bool | 발행 실적 없음 |
| issuanceDf | DataFrame \| None | date, issueType, stockType, quantity, parValue, issuePrice, note |

### finance.productService

#### ProductServiceResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| unit | str | 단위 (백만원) |
| productDf | DataFrame \| None | label, amount, ratio |

### finance.salesOrder

#### SalesOrderResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| salesDf | DataFrame \| None | 매출 현황 |
| orderDf | DataFrame \| None | 수주 현황 |

### finance.riskDerivative

#### RiskDerivativeResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| fxDf | DataFrame \| None | currency, upImpact, downImpact |
| derivativeDf | DataFrame \| None | 파생상품 현황 |

### finance.articlesOfIncorporation

#### ArticlesResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| changesDf | DataFrame \| None | 정관 변경이력 |
| purposesDf | DataFrame \| None | 사업 목적 |

### finance.otherFinance

#### OtherFinanceResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| badDebtDf | DataFrame \| None | 대손충당금 |
| inventoryDf | DataFrame \| None | 재고자산 현황 |

### finance.companyHistory

#### CompanyHistoryResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| events | list[dict] | 연혁 이벤트 목록 |
| eventsDf | DataFrame \| None | 연혁 DataFrame |

### finance.shareholderMeeting

#### ShareholderMeetingResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| agendas | list[dict] | 안건 목록 |
| agendaDf | DataFrame \| None | 안건 DataFrame |

### finance.auditSystem

#### AuditSystemResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| committeeDf | DataFrame \| None | 감사위원회 구성 |
| activityDf | DataFrame \| None | 감사 활동 내역 |

### finance.investmentInOther

#### InvestmentInOtherResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| investments | list[dict] | 투자 목록 |
| investmentDf | DataFrame \| None | 투자 현황 DataFrame |

### finance.companyOverviewDetail

#### CompanyOverviewDetailResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| foundedDate | str \| None | 설립일 |
| listedDate | str \| None | 상장일 |
| address | str \| None | 본사 주소 |
| ceo | str \| None | 대표이사 |
| mainBusiness | str \| None | 주요 사업 |
| website | str \| None | 홈페이지 |

### finance.notesDetail

```python
from dartlab.engines.dart.docs.finance.notesDetail import notesDetail
result = notesDetail("005930", keyword="재고자산")
```

#### NotesDetailResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| keyword | str | 검색 키워드 |
| nYears | int | 연도 수 |
| tableDf | DataFrame \| None | 주석 시계열 (항목, 연도별 금액) |

지원 키워드 (23개): 재고자산, 매출채권, 무형자산, 차입금, 충당부채, 주당이익, 리스, 투자부동산, 특수관계자, 우발부채, ...

### finance.tangibleAsset

#### TangibleAssetResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| reliability | str | "high" \| "low" |
| movementDf | DataFrame \| None | 유형자산 변동 시계열 |

### finance.segment

#### SegmentsResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| tables | dict | {year: [SegmentTable]} |
| revenue | DataFrame \| None | 부문별 매출 시계열 |

### finance.affiliate

#### AffiliatesResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| profiles | dict | {year: [AffiliateProfile]} |
| movements | dict | {year: [AffiliateMovement]} |
| movementDf | DataFrame \| None | 기업별 변동 시계열 |

### finance.costByNature

#### CostByNatureResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 기간 수 |
| timeSeries | DataFrame \| None | 비용 시계열 (account, 연도별 금액) |
| crossCheck | dict | 교차검증 결과 |
| ratios | DataFrame \| None | 비용 구성비 |

---

## disclosure 모듈

### disclosure.business

#### BusinessResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| year | int | 기준 사업연도 |
| sections | list[BusinessSection] | 하위 섹션 목록 |
| changes | list[BusinessChange] | 연도별 변경 정보 |

### disclosure.companyOverview

#### OverviewResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| year | int | 기준 사업연도 |
| founded | str \| None | 설립일자 |
| address | str \| None | 본사 주소 |
| homepage | str \| None | 홈페이지 |
| subsidiaryCount | int \| None | 종속기업 수 |
| creditRatings | list[CreditRating] | 신용등급 목록 |

### disclosure.mdna

#### MdnaResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| nYears | int | 연도 수 |
| sections | list[MdnaSection] | 섹션 목록 |
| overview | str \| None | 개요 텍스트 |

### disclosure.rawMaterial

#### RawMaterialResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str \| None | 기업명 |
| year | int \| None | 기준 사업연도 |
| materials | list[RawMaterial] | 원재료 매입 항목 |
| equipment | Equipment \| None | 유형자산 기말잔액 |
| capexItems | list[CapexItem] | 시설투자 항목 |

---

## financeEngine

재무 숫자 데이터 엔진. OpenDART 재무제표 parquet에서 XBRL 계정 표준화 → 시계열 빌드 → 비율 계산.

### 시계열 빌드

```python
from dartlab.engines.dart.finance import buildTimeseries, buildAnnual, buildCumulative
```

| 함수 | 시그니처 | 설명 |
|------|----------|------|
| `buildTimeseries` | `(stockCode, fsDivPref="CFS") → (series, periods) \| None` | 분기별 standalone |
| `buildAnnual` | `(stockCode, fsDivPref="CFS") → (series, years) \| None` | 연도별 집계 |
| `buildCumulative` | `(stockCode, fsDivPref="CFS") → (series, periods) \| None` | 분기별 누적 |

**series 구조:**
```python
{
    "BS": {"total_assets": [v1, v2, ...], "total_equity": [...], ...},
    "IS": {"revenue": [...], "operating_income": [...], ...},
    "CF": {"operating_cashflow": [...], ...},
}
```

**fsDivPref:** `"CFS"` (연결, 기본) 또는 `"OFS"` (별도). 없으면 자동 fallback.

### 값 추출

```python
from dartlab.engines.dart.finance import getTTM, getLatest, getAnnualValues, getRevenueGrowth3Y
```

| 함수 | 시그니처 | 설명 |
|------|----------|------|
| `getTTM` | `(series, sjDiv, snakeId) → float \| None` | 최근 4분기 합 (IS/CF용) |
| `getLatest` | `(series, sjDiv, snakeId) → float \| None` | 최신 non-null 값 (BS용) |
| `getAnnualValues` | `(series, sjDiv, snakeId) → list` | 전체 시계열 값 리스트 |
| `getRevenueGrowth3Y` | `(series) → float \| None` | 매출 3년 CAGR (%) |

### 비율 계산

```python
from dartlab.engines.dart.finance import calcRatios
```

| 함수 | 시그니처 | 설명 |
|------|----------|------|
| `calcRatios` | `(series, marketCap=None) → RatioResult` | 재무비율 계산 |

#### RatioResult

| 필드 | 타입 | 설명 |
|------|------|------|
| revenueTTM | float \| None | 매출 TTM |
| operatingIncomeTTM | float \| None | 영업이익 TTM |
| netIncomeTTM | float \| None | 순이익 TTM |
| operatingCashflowTTM | float \| None | 영업CF TTM |
| totalAssets | float \| None | 총자산 |
| totalEquity | float \| None | 총자본 |
| totalLiabilities | float \| None | 총부채 |
| currentAssets | float \| None | 유동자산 |
| currentLiabilities | float \| None | 유동부채 |
| cash | float \| None | 현금 |
| roe | float \| None | 자기자본이익률 (%) |
| roa | float \| None | 총자산이익률 (%) |
| operatingMargin | float \| None | 영업이익률 (%) |
| netMargin | float \| None | 순이익률 (%) |
| debtRatio | float \| None | 부채비율 (%) |
| currentRatio | float \| None | 유동비율 (%) |
| fcf | float \| None | 잉여현금흐름 |
| revenueGrowth3Y | float \| None | 매출 3년 CAGR (%) |
| per | float \| None | 주가수익비율 (시가총액 필요) |
| pbr | float \| None | 주가순자산비율 (시가총액 필요) |
| psr | float \| None | 주가매출비율 (시가총액 필요) |
| evEbitda | float \| None | EV/EBITDA (시가총액 필요) |
| warnings | list[str] | 경고 메시지 |

### 계정 매핑

```python
from dartlab.engines.dart.finance import AccountMapper

mapper = AccountMapper.get()
snakeId = mapper.map("ifrs-full_Revenue", "매출액")  # → "revenue"
```

매핑 파이프라인: ID prefix 제거 → ID_SYNONYMS → ACCOUNT_NAME_SYNONYMS → CORE_MAP → accountMappings.json → 괄호 제거 재시도

---

## reportEngine (정기보고서)

OpenDART 정기보고서 API parquet에서 배당, 직원, 최대주주, 임원, 감사 등 구조화된 데이터를 추출한다.

```python
from dartlab.engines.dart.report import extractResult, pivotDividend, pivotEmployee
```

### 추출 파이프라인

| 함수 | 시그니처 | 설명 |
|------|----------|------|
| `extractRaw` | `(stockCode) → DataFrame \| None` | 원본 parquet 로드 |
| `extractClean` | `(stockCode) → DataFrame \| None` | 정제된 DataFrame |
| `extractAnnual` | `(stockCode, apiType) → DataFrame \| None` | apiType별 연도별 추출 |
| `extractResult` | `(stockCode, apiType) → DataFrame \| None` | 최종 정제 결과 |

### Pivot 함수

| 함수 | 시그니처 | 반환 타입 | 설명 |
|------|----------|-----------|------|
| `pivotDividend` | `(stockCode) → DividendResult \| None` | 배당 시계열 |
| `pivotEmployee` | `(stockCode) → EmployeeResult \| None` | 직원 현황 시계열 |
| `pivotMajorHolder` | `(stockCode) → MajorHolderResult \| None` | 최대주주 시계열 |
| `pivotExecutive` | `(stockCode) → ExecutiveResult \| None` | 임원 현황 시계열 |
| `pivotAudit` | `(stockCode) → AuditResult \| None` | 감사 현황 시계열 |

### API_TYPES

| apiType | 설명 |
|---------|------|
| `dividend` | 배당 |
| `employee` | 직원 |
| `majorShareholder` | 최대주주 |
| `executive` | 임원 |
| `auditOpinion` | 감사의견 |

---

## sectorEngine (섹터 분류)

KIND 업종명 + 주요제품 키워드로 WICS 11섹터 투자 관점 분류.

```python
from dartlab.engines.sector import classify, getParams
```

### classify

```python
info = classify("삼성전자", kindIndustry="통신 및 방송 장비 제조업")
```

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `corpName` | str | 기업명 |
| `kindIndustry` | str \| None | KIND 업종명 |
| `products` | str \| None | 주요제품 (키워드 분석용) |

반환: `SectorInfo`

3단계 분류 우선순위
1. **수동 오버라이드** — 대형주 ~100종목 (confidence=1.0)
2. **주요제품 키워드** — 300+ 키워드 패턴 매칭 (confidence=0.75)
3. **KSIC 업종명 매핑** — KIND 업종코드 기반 (confidence=0.5)

### SectorInfo

| 필드 | 타입 | 설명 |
|------|------|------|
| sector | Sector | WICS 대분류 (11 + UNKNOWN) |
| industryGroup | IndustryGroup | WICS 중분류 |
| confidence | float | 분류 신뢰도 (0.0 ~ 1.0) |
| source | str | 분류 근거 ("override", "keyword", "ksic") |

### Sector (Enum)

`ENERGY`, `MATERIALS`, `INDUSTRIALS`, `CONSUMER_DISC`, `CONSUMER_STAPLES`, `HEALTHCARE`, `FINANCIALS`, `IT`, `COMMUNICATION`, `UTILITIES`, `REAL_ESTATE`, `UNKNOWN`

### getParams

```python
params = getParams(info)
params.discountRate    # 13.0
params.perMultiple     # 15
```

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `sectorInfo` | SectorInfo | 분류 결과 |

반환: `SectorParams` (중분류 우선, 없으면 대분류 fallback)

### SectorParams

| 필드 | 타입 | 설명 |
|------|------|------|
| discountRate | float | 할인율 (%) |
| growthRate | float | 성장률 (%) |
| perMultiple | float | PER 멀티플 |
| pbrMultiple | float | PBR 멀티플 |
| evEbitdaMultiple | float | EV/EBITDA 멀티플 |
| label | str | 섹터 라벨 |

---

## insightEngine (인사이트 등급)

7영역 등급 분석 + 이상치 탐지 + 종합 요약.

```python
from dartlab.engines.insight import analyze

result = analyze("005930")
result.grades()        # {'performance': 'A', 'profitability': 'B', ...}
result.anomalies       # [Anomaly(...), ...]
result.summary         # "삼성전자는 실적, 재무건전성 등..."
result.profile         # "premium"
```

### analyze

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `stockCode` | str | 종목코드 (6자리) |
| `company` | Company \| None | Company 인스턴스 (None이면 내부 생성) |

반환: `AnalysisResult | None` (데이터 부족 시 None)

### AnalysisResult

| 필드 | 타입 | 설명 |
|------|------|------|
| corpName | str | 기업명 |
| stockCode | str | 종목코드 |
| isFinancial | bool | 금융업 여부 |
| performance | InsightResult | 실적 분석 (매출/영업이익 성장률) |
| profitability | InsightResult | 수익성 분석 (영업이익률, ROE) |
| health | InsightResult | 재무건전성 분석 (부채비율, 유동비율) |
| cashflow | InsightResult | 현금흐름 분석 (영업CF, FCF) |
| governance | InsightResult | 지배구조 분석 (감사의견, 사외이사) |
| risk | InsightResult | 리스크 종합 |
| opportunity | InsightResult | 기회 종합 |
| anomalies | list[Anomaly] | 이상치 목록 |
| summary | str | 종합 요약 텍스트 |
| profile | str | 투자 프로파일 ("premium", "growth", "value", "turnaround", "caution") |

#### grades()

```python
result.grades()
# {'performance': 'A', 'profitability': 'B', 'health': 'A',
#  'cashflow': 'B', 'governance': 'A', 'risk': 'B', 'opportunity': 'B'}
```

등급 체계: A (우수) → B (양호) → C (보통) → D (주의) → F (위험)

### InsightResult

| 필드 | 타입 | 설명 |
|------|------|------|
| grade | str | 등급 (A/B/C/D/F) |
| summary | str | 요약 텍스트 |
| details | list[str] | 상세 근거 |
| risks | list[Flag] | 리스크 플래그 |
| opportunities | list[Flag] | 기회 플래그 |

### Anomaly

| 필드 | 타입 | 설명 |
|------|------|------|
| severity | str | 심각도 ("high", "medium", "low") |
| category | str | 카테고리 |
| text | str | 설명 텍스트 |
| value | float \| None | 관련 수치 |

### Flag

| 필드 | 타입 | 설명 |
|------|------|------|
| level | str | 레벨 |
| category | str | 카테고리 |
| text | str | 설명 |

---

## rankEngine (시장 규모 순위)

전체 시장 + 섹터 내 순위를 산출한다. 매출, 자산, 성장률 3개 축으로 전체 순위와 섹터 내 순위를 계산한다.

```python
from dartlab.engines.rank import getRank, getRankOrBuild, buildSnapshot

rank = getRankOrBuild("005930")
rank.revenueRank        # 매출 전체 순위
rank.sizeClass          # "large" | "mid" | "small"
```

### buildSnapshot

전체 종목을 순회하여 랭크 스냅샷을 생성하고 로컬 캐시에 저장한다. (소요 시간 ~2분)

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `verbose` | bool | 진행 표시 (기본 True) |

반환: `dict[str, RankInfo]` (stockCode → RankInfo 매핑)

### getRank

캐시된 스냅샷에서 조회. 스냅샷이 없으면 None.

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `stockCode` | str | 종목코드 |

반환: `RankInfo | None`

### getRankOrBuild

캐시된 스냅샷에서 조회. 없으면 buildSnapshot 후 조회.

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `stockCode` | str | 종목코드 |
| `verbose` | bool | 진행 표시 (기본 True) |

반환: `RankInfo | None`

### RankInfo

| 필드 | 타입 | 설명 |
|------|------|------|
| stockCode | str | 종목코드 |
| corpName | str | 기업명 |
| sector | str | WICS 대분류 |
| industryGroup | str | WICS 중분류 |
| revenue | float \| None | 매출 |
| totalAssets | float \| None | 총자산 |
| revenueGrowth3Y | float \| None | 매출 3년 CAGR |
| revenueRank | int \| None | 매출 전체 순위 |
| revenueTotal | int | 매출 순위 모수 |
| revenueRankInSector | int \| None | 매출 섹터 내 순위 |
| revenueSectorTotal | int | 섹터 내 모수 |
| assetRank | int \| None | 자산 전체 순위 |
| assetTotal | int | 자산 순위 모수 |
| assetRankInSector | int \| None | 자산 섹터 내 순위 |
| assetSectorTotal | int | 섹터 내 모수 |
| growthRank | int \| None | 성장률 전체 순위 |
| growthTotal | int | 성장률 순위 모수 |
| growthRankInSector | int \| None | 성장률 섹터 내 순위 |
| growthSectorTotal | int | 섹터 내 모수 |
| sizeClass | str | 규모 ("large" \| "mid" \| "small") |

sizeClass 기준: 매출 상위 10% → large, 30% → mid, 나머지 → small
