---
title: 기타 모듈
---

# 기타 Finance 모듈

## finance.dividend

배당 시계열. DPS, 배당성향, 배당수익률 등.

```python
result = company.dividend()
result.timeSeries  # year, netIncome, eps, totalDividend, payoutRatio, dividendYield, dps, dpsPreferred
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `timeSeries` | `pl.DataFrame \| None` | 배당 시계열 |

---

## finance.employee

직원 현황 시계열. 직원수, 평균연봉, 근속연수.

```python
result = company.employee()
result.timeSeries  # year, totalEmployees, avgTenure, totalSalary, avgSalary
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `timeSeries` | `pl.DataFrame \| None` | 직원 현황 시계열 |

---

## finance.majorHolder

최대주주와 특수관계인 지분율.

```python
result = company.majorHolder()
result.majorHolder   # "이재용"
result.majorRatio    # 20.76
result.totalRatio    # 특수관계인 포함 합계
result.holders       # list[Holder] - 개별 주주 목록
result.timeSeries    # 지분율 시계열
```

### Holder

| 속성 | 타입 | 설명 |
|------|------|------|
| `name` | `str` | 주주명 |
| `relation` | `str` | 관계 |
| `stockType` | `str` | 주식 종류 |
| `sharesEnd` | `float \| None` | 기말 주식수 |
| `ratioEnd` | `float \| None` | 기말 지분율 |

### holderOverview(stockCode)

5% 이상 주주, 소액주주, 의결권 현황을 종합.

```python
result = company.holderOverview()
result.bigHolders    # list[BigHolder]
result.minority      # Minority (소액주주 현황)
result.voting        # VotingRights (의결권 현황)
```

---

## finance.shareCapital

주식의 총수. 발행주식, 자기주식, 유통주식.

```python
result = company.shareCapital()
result.authorizedShares    # 발행할 주식의 총수
result.issuedShares        # 발행한 주식의 총수
result.treasuryShares      # 자기주식
result.outstandingShares   # 유통주식
result.treasuryRatio       # 자사주 비율
result.timeSeries          # 시계열
```

---

## finance.segment

부문별 매출. 사업부문, 제품, 지역별.

```python
result = company.segments()
result.tables     # dict[str, list[SegmentTable]] - 연도별 부문 테이블
result.revenue    # pl.DataFrame - 부문별 매출 시계열
```

### SegmentTable

| 속성 | 타입 | 설명 |
|------|------|------|
| `period` | `str` | 기간 ("당기" / "전기") |
| `tableType` | `str` | "segment" / "product" / "region" |
| `columns` | `list[str]` | 열 이름 |
| `rows` | `dict[str, list]` | 부문명 → 값 |

---

## finance.affiliate

관계기업/공동기업 투자. 지분율, 장부가, 변동내역.

```python
result = company.affiliates()
result.profiles     # dict[str, list[AffiliateProfile]] - 연도별 프로필
result.movements    # dict[str, list[AffiliateMovement]] - 연도별 변동
result.movementDf   # pl.DataFrame - 변동 시계열
```

---

## finance.subsidiary

타법인 출자 현황.

```python
result = company.subsidiary()
result.investments   # list[SubsidiaryInvestment]
result.timeSeries    # year, totalCount, listedCount, unlistedCount, totalBook
```

---

## finance.bond

채무증권 발행실적. 회사채, 기업어음 등.

```python
result = company.bond()
result.issuances    # list[BondIssuance]
result.timeSeries   # year, totalIssuances, totalAmount, unredeemedCount
```

---

## finance.costByNature

비용의 성격별 분류. 원재료비, 인건비, 감가상각비 등.

```python
result = company.costByNature()
result.timeSeries   # 비용 항목별 시계열
result.ratios       # 비용 비율
result.crossCheck   # 교차 검증 결과
```

---

## finance.audit

감사의견 + 감사보수 시계열.

```python
result = company.audit()
result.opinionDf   # year, auditor, opinion, keyAuditMatters
result.feeDf       # year, auditor, contractFee, contractHours, actualFee, actualHours
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `opinionDf` | `pl.DataFrame \| None` | 감사의견 시계열 |
| `feeDf` | `pl.DataFrame \| None` | 감사보수 시계열 (단위: 백만원) |

---

## finance.executive

임원 현황. 등기임원 집계 + 미등기임원 보수.

```python
result = company.executive()
result.executiveDf  # year, totalRegistered, insideDirectors, outsideDirectors, ...
result.unregPayDf   # year, headcount, totalSalary, avgSalary
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `executiveDf` | `pl.DataFrame \| None` | 등기임원 집계 시계열 |
| `unregPayDf` | `pl.DataFrame \| None` | 미등기임원 보수 시계열 |

### executiveDf 컬럼

| 컬럼 | 설명 |
|------|------|
| `totalRegistered` | 등기임원 총 수 |
| `insideDirectors` | 사내이사 |
| `outsideDirectors` | 사외이사 |
| `otherNonexec` | 기타비상무이사 |
| `fullTimeCount` | 상근 |
| `partTimeCount` | 비상근 |
| `maleCount` | 남성 |
| `femaleCount` | 여성 |

---

## finance.executivePay

임원 보수. 유형별(등기이사/사외이사/감사위원) + 5억 초과 개인별.

```python
result = company.executivePay()
result.payByTypeDf  # year, category, headcount, totalPay, avgPay
result.topPayDf     # year, name, position, totalPay
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `payByTypeDf` | `pl.DataFrame \| None` | 유형별 보수 시계열 |
| `topPayDf` | `pl.DataFrame \| None` | 5억 초과 개인별 보수 |

---

## finance.tangibleAsset

유형자산 변동표. 토지, 건물, 기계장치 등 카테고리별 취득/처분/감가상각.

```python
result = company.tangibleAsset()
result.reliability  # "high" | "low"
result.warnings     # list[str] - 신뢰도 경고
result.movements    # dict[str, list[TangibleMovement]]
result.movementDf   # pl.DataFrame - 카테고리별 기초/기말 시계열
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `reliability` | `str` | `"high"` (합계 컬럼 있음) \| `"low"` (없음) |
| `warnings` | `list[str]` | 신뢰도 관련 경고 메시지 |
| `movements` | `dict` | `{연도: [TangibleMovement]}` |
| `movementDf` | `pl.DataFrame \| None` | 카테고리별 기초/기말 시계열 |

### TangibleMovement

| 속성 | 타입 | 설명 |
|------|------|------|
| `period` | `str` | "당기" / "전기" |
| `categories` | `list[str]` | 자산 카테고리 (토지, 건물, ...) |
| `rows` | `list[dict]` | 변동 행 (기초, 취득, 처분, 감가상각, 기말 등) |
| `unit` | `float` | 단위 (1.0 = 백만원) |

---

## finance.notesDetail

주석 세부항목 테이블. 23개 키워드 지원.

```python
result = company.notesDetail("재고자산")
result.tables     # dict[str, list[NotesPeriod]]
result.tableDf    # pl.DataFrame - 항목별 시계열
```

지원 키워드 (23개): `재고자산`, `주당이익`, `충당부채`, `차입금`, `매출채권`, `리스`, `투자부동산`, `무형자산`, `법인세`, `특수관계자`, `약정사항`, `금융자산`, `공정가치`, `이익잉여금`, `금융부채`, `기타포괄손익`, `사채`, `종업원급여`, `퇴직급여`, `확정급여`, `재무위험`, `우발부채`, `담보`

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `keyword` | `str` | 조회한 키워드 |
| `nYears` | `int` | 연도 수 |
| `unit` | `float` | 단위 (1.0 = 백만원) |
| `tables` | `dict` | `{연도: [NotesPeriod]}` 기간별 테이블 |
| `tableDf` | `pl.DataFrame \| None` | 항목별 시계열 |

### NotesPeriod

| 속성 | 타입 | 설명 |
|------|------|------|
| `pattern` | `str` | 감지된 패턴 ("A" / "B" / "C" / "D") |
| `period` | `str` | 기간명 ("당기말", "전기말" 등) |
| `headers` | `list[str]` | 컬럼 헤더 |
| `items` | `list[NotesItem]` | 행 데이터 (name, values) |

---

## finance.rawMaterial

원재료 매입, 유형자산, 설비투자 현황.

```python
result = company.rawMaterial()
result.materials     # list[RawMaterial] - 원재료 목록
result.equipment     # Equipment - 유형자산 현황
result.capexItems    # list[CapexItem] - 설비투자 항목
```

---

## finance.mdna

이사의 경영진단 및 분석의견. 텍스트 섹션별로 분류.

```python
result = company.mdna()
result.sections    # list[MdnaSection]
result.overview    # 사업 개요 텍스트
```

### MdnaSection

| 속성 | 타입 | 설명 |
|------|------|------|
| `title` | `str` | 섹션 제목 |
| `category` | `str` | 분류 (overview/forecast/financials/liquidity 등) |
| `text` | `str` | 본문 텍스트 |
| `textLines` | `int` | 텍스트 줄 수 |
| `tableLines` | `int` | 테이블 줄 수 |

---

## finance.boardOfDirectors

이사회 구성, 개최 횟수, 출석률, 위원회 구성.

```python
result = company.boardOfDirectors()
result.boardDf      # year, totalDirectors, outsideDirectors, meetingCount, avgAttendanceRate
result.committeeDf  # year, committeeName, composition, members
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `boardDf` | `pl.DataFrame \| None` | 이사회 시계열 |
| `committeeDf` | `pl.DataFrame \| None` | 위원회 구성 |

---

## finance.capitalChange

자본금 변동, 주식의 총수, 자기주식 변동.

```python
result = company.capitalChange()
result.capitalDf     # year, commonShares, preferredShares, commonParValue, ...
result.shareTotalDf  # year, authorizedCommon, issuedCommon, outstandingCommon, ...
result.treasuryDf    # year, totalBegin, totalEnd
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `capitalDf` | `pl.DataFrame \| None` | 자본금 변동 시계열 |
| `shareTotalDf` | `pl.DataFrame \| None` | 주식의 총수 시계열 |
| `treasuryDf` | `pl.DataFrame \| None` | 자기주식 변동 시계열 |

---

## finance.contingentLiability

우발부채·채무보증·소송 현황.

```python
result = company.contingentLiability()
result.guaranteeDf  # year, totalGuaranteeAmount, lineCount
result.lawsuitDf    # year, filingDate, parties, description, amount, amountValue, status
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `guaranteeDf` | `pl.DataFrame \| None` | 채무보증 시계열 |
| `lawsuitDf` | `pl.DataFrame \| None` | 소송 현황 |

---

## finance.relatedPartyTx

대주주 등과의 거래내용. 채무보증, 매출입 거래.

```python
result = company.relatedPartyTx()
result.guaranteeDf  # year, entity, relationship, amount
result.assetTxDf    # year, entity, txType, amount
result.revenueTxDf  # year, entity, sales, purchases
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `guaranteeDf` | `pl.DataFrame \| None` | 채무보증 시계열 |
| `assetTxDf` | `pl.DataFrame \| None` | 자산 거래 시계열 |
| `revenueTxDf` | `pl.DataFrame \| None` | 매출입 거래 시계열 |

---

## finance.sanction

제재·처벌 현황.

```python
result = company.sanction()
result.sanctionDf  # year, date, agency, subject, action, amount, reason
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `sanctionDf` | `pl.DataFrame \| None` | 제재 현황 |

---

## finance.rnd

연구개발비용과 매출액 대비 비율.

```python
result = company.rnd()
result.rndDf  # year, rndExpense, revenueRatio
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `rndDf` | `pl.DataFrame \| None` | R&D 비용 시계열 |

---

## finance.internalControl

내부회계관리제도 운영 실태 평가.

```python
result = company.internalControl()
result.controlDf  # year, opinion, auditor, hasWeakness
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `controlDf` | `pl.DataFrame \| None` | 내부통제 평가 시계열 |

---

## finance.affiliateGroup

계열회사 현황 — 기업집단명, 상장/비상장 계열사 목록.

```python
result = company.affiliateGroup()
result.groupName     # "삼성"
result.affiliateDf   # name | listed
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `groupName` | `str \| None` | 기업집단명 |
| `listedCount` | `int \| None` | 상장 계열사 수 |
| `unlistedCount` | `int \| None` | 비상장 계열사 수 |
| `totalCount` | `int \| None` | 총 계열사 수 |
| `affiliates` | `list[dict]` | 계열사 목록 `[{name, listed}]` |
| `affiliateDf` | `pl.DataFrame \| None` | 계열사 DataFrame |

---

## finance.fundraising

증자(감자) 현황 — 발행일자, 형태, 종류, 수량, 발행가.

```python
result = company.fundraising()
result.issuanceDf  # date | issueType | stockType | quantity | parValue | issuePrice | note
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `issuances` | `list[dict]` | 발행 이력 |
| `noData` | `bool` | 발행 실적 없음 여부 |
| `issuanceDf` | `pl.DataFrame \| None` | 발행 이력 DataFrame |

---

## finance.salesOrder

매출실적(부문/제품별) + 수주상황.

```python
result = company.salesOrder()
result.salesDf  # label | v1 | v2 | v3
result.orderDf  # 수주상황 DataFrame
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `unit` | `str` | 단위 (억원, 백만원 등) |
| `sales` | `list[dict]` | 매출실적 `[{label, values}]` |
| `orders` | `list[dict]` | 수주상황 `[{label, values}]` |
| `noData` | `bool` | 해당사항 없음 |
| `salesDf` | `pl.DataFrame \| None` | 매출실적 DataFrame |
| `orderDf` | `pl.DataFrame \| None` | 수주상황 DataFrame |

---

## finance.productService

주요 제품 및 서비스 현황 — 매출액, 비중.

```python
result = company.productService()
result.productDf  # label | amount | ratio
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `unit` | `str` | 단위 |
| `products` | `list[dict]` | 제품 목록 `[{label, amount, ratio}]` |
| `noData` | `bool` | 해당사항 없음 |
| `productDf` | `pl.DataFrame \| None` | 제품 DataFrame |

---

## finance.riskDerivative

위험관리 및 파생거래 — 환율 민감도, 파생상품 계약 현황.

```python
result = company.riskDerivative()
result.fxDf          # currency | upImpact | downImpact
result.derivativeDf  # 파생상품 계약 DataFrame
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `unit` | `str` | 단위 |
| `fxSensitivity` | `list[dict]` | 환율 민감도 `[{currency, upImpact, downImpact}]` |
| `derivatives` | `list[dict]` | 파생상품 `[{label, values}]` |
| `noData` | `bool` | 해당사항 없음 |
| `textOnly` | `bool` | 서술형만 존재 |
| `fxDf` | `pl.DataFrame \| None` | 환율 민감도 DataFrame |
| `derivativeDf` | `pl.DataFrame \| None` | 파생상품 DataFrame |

---

## finance.articlesOfIncorporation

정관에 관한 사항 — 정관 변경 이력, 사업목적 현황.

```python
result = company.articlesOfIncorporation()
result.changesDf     # date | meetingName | changes | reason
result.purposesDf    # purpose | active
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `changes` | `list[dict]` | 정관 변경 이력 `[{date, meetingName, changes, reason}]` |
| `purposes` | `list[dict]` | 사업목적 `[{purpose, active}]` |
| `noData` | `bool` | 해당사항 없음 여부 |
| `changesDf` | `pl.DataFrame \| None` | 변경 이력 DataFrame |
| `purposesDf` | `pl.DataFrame \| None` | 사업목적 DataFrame |

---

## finance.otherFinance

기타 재무에 관한 사항 — 대손충당금, 재고자산 현황.

```python
result = company.otherFinance()
result.badDebtDf     # account | period | totalDebt | provision
result.inventoryDf   # item | values
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `badDebt` | `list[dict]` | 대손충당금 `[{account, period, totalDebt, provision}]` |
| `inventory` | `list[dict]` | 재고자산 `[{item, values}]` |
| `noData` | `bool` | 해당사항 없음 여부 |
| `badDebtDf` | `pl.DataFrame \| None` | 대손충당금 DataFrame |
| `inventoryDf` | `pl.DataFrame \| None` | 재고자산 DataFrame |

---

## finance.companyHistory

회사의 연혁 — 연혁 이벤트 시계열.

```python
result = company.companyHistory()
result.eventsDf      # date | event
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `events` | `list[dict]` | 연혁 이벤트 `[{date, event}]` |
| `eventsDf` | `pl.DataFrame \| None` | 연혁 DataFrame |

---

## finance.shareholderMeeting

주주총회 등에 관한 사항 — 안건, 결의 결과.

```python
result = company.shareholderMeeting()
result.agendaDf      # agenda | result
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `agendas` | `list[dict]` | 안건 `[{agenda, result}]` |
| `textOnly` | `bool` | 테이블 없이 텍스트만 존재 |
| `agendaDf` | `pl.DataFrame \| None` | 안건 DataFrame |

---

## finance.auditSystem

감사제도에 관한 사항 — 감사위원회 구성, 감사활동 내역.

```python
result = company.auditSystem()
result.committeeDf   # name | role | detail
result.activityDf    # date | agenda | result
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `committee` | `list[dict]` | 감사위원 `[{name, role, detail}]` |
| `activity` | `list[dict]` | 감사활동 `[{date, agenda, result}]` |
| `textOnly` | `bool` | 테이블 없이 텍스트만 존재 |
| `committeeDf` | `pl.DataFrame \| None` | 감사위원 DataFrame |
| `activityDf` | `pl.DataFrame \| None` | 감사활동 DataFrame |

---

## finance.investmentInOther

타법인출자 현황 — 투자법인 목록, 지분율, 장부가.

```python
result = company.investmentInOther()
result.investmentDf  # name | v1 | v2 | ...
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `investments` | `list[dict]` | 투자법인 `[{name, values}]` |
| `noData` | `bool` | 해당사항 없음 여부 |
| `investmentDf` | `pl.DataFrame \| None` | 투자 DataFrame |

---

## finance.companyOverviewDetail

회사의 개요 — 설립일, 상장일, 대표이사, 본점소재지.

```python
result = company.companyOverviewDetail()
result.foundedDate   # "1969년 01월 13일"
result.ceo           # "한종희"
```

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `nYears` | `int` | 연도 수 |
| `foundedDate` | `str \| None` | 설립일 |
| `listedDate` | `str \| None` | 상장일 |
| `address` | `str \| None` | 본점소재지 |
| `ceo` | `str \| None` | 대표이사 |
| `mainBusiness` | `str \| None` | 주요사업 |
| `website` | `str \| None` | 홈페이지 |
