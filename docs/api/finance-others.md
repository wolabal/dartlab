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
| `movements` | `dict` | {연도: [TangibleMovement]} |
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

주석 세부항목 테이블. 8개 키워드 지원.

```python
result = company.notesDetail("재고자산")
result.tables     # dict[str, list[NotesPeriod]]
result.tableDf    # pl.DataFrame - 항목별 시계열
```

지원 키워드: `재고자산`, `주당이익`, `충당부채`, `차입금`, `매출채권`, `리스`, `투자부동산`, `무형자산`

| 속성 | 타입 | 설명 |
|------|------|------|
| `corpName` | `str \| None` | 기업명 |
| `keyword` | `str` | 조회한 키워드 |
| `nYears` | `int` | 연도 수 |
| `unit` | `float` | 단위 (1.0 = 백만원) |
| `tables` | `dict` | {연도: [NotesPeriod]} 기간별 테이블 |
| `tableDf` | `pl.DataFrame \| None` | 항목별 시계열 |

### NotesPeriod

| 속성 | 타입 | 설명 |
|------|------|------|
| `pattern` | `str` | 감지된 패턴 ("A" / "B" / "C") |
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
