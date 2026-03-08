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
├── core/          # 데이터 로딩, 보고서 선택, 테이블 파싱
├── finance/       # 정량 재무 데이터 (36개 모듈)
├── disclosure/    # 공시 서술형 섹션 (4개 모듈)
├── company.py     # 통합 접근 래퍼 (property 기반)
├── notes.py       # K-IFRS 주석 통합 접근
└── config.py      # 전역 설정 (verbose)
```

- `finance/` — 숫자·테이블 중심: 재무제표, 배당, 주주, 자본, 부문별 매출 등
- `disclosure/` — 텍스트·서술 중심: 사업의 내용, 경영진단의견, 원재료, 회사의 개요 등

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

# 1. property → 바로 DataFrame
c.BS                        # 재무상태표
c.dividend                  # 배당 시계열

# 2. notes → K-IFRS 주석 (영문 속성 + 한글 딕셔너리)
c.notes.inventory           # 재고자산
c.notes["재고자산"]          # 동일

# 3. all() → 전체 dict
d = c.all()                 # {"BS": df, "dividend": df, "notes": {...}, ...}

# 4. get() → 모듈 전체 Result 객체 (복수 DataFrame 접근)
r = c.get("audit")          # AuditResult
r.opinionDf                 # 감사의견
r.feeDf                     # 감사보수

# 5. fsSummary() → 파라미터가 있는 유일한 메서드
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

### 메서드

| 메서드 | 파라미터 | 반환 타입 | 설명 |
|--------|----------|-----------|------|
| `fsSummary()` | ifrsOnly, period | AnalysisResult | 요약재무정보 + 브릿지 매칭 |
| `all()` | - | dict | 전체 데이터 dict (progress bar 포함) |
| `get(name)` | name, **kwargs | Result 객체 | 모듈 전체 Result 접근 |
| `docs()` | - | DataFrame | 공시 문서 목록 |

---

## finance 모듈

### finance.summary — fsSummary

```python
from dartlab.finance.summary import fsSummary
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
from dartlab.finance.statements import statements
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
from dartlab.finance.notesDetail import notesDetail
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
