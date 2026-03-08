---
title: "2. Financial Deep Dive"
---

# 2. Financial Deep Dive — 재무 심화 분석

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/eddmpython/dartlab/blob/master/notebooks/tutorials/02_financial.ipynb)

정기보고서에 포함된 재무 데이터를 깊이 있게 분석한다. 이 튜토리얼에서 다루는 내용은 다음과 같다.

- 배당 시계열 (DPS, 배당수익률, 배당성향)
- 직원 현황 (인원, 평균연봉, 근속연수)
- 최대주주와 지분 구조
- 부문별 매출
- 비용의 성격별 분류
- 주식의 총수와 자기주식

## 준비

```python
from dartlab import Company

samsung = Company("005930")
```

## 배당

배당 시계열을 조회한다. DPS, 배당수익률, 배당성향 등을 연도별로 확인한다.

```python
result = samsung.dividend()

print(result.timeSeries)
# year, netIncome, eps, totalDividend, payoutRatio, dividendYield, dps, dpsPreferred
```

## 직원 현황

직원수, 평균연봉, 근속연수의 시계열이다.

```python
result = samsung.employee()

print(result.timeSeries)
# year, totalEmployees, avgTenure, totalSalary, avgSalary
```

## 최대주주

최대주주명, 지분율, 특수관계인 목록을 조회한다.

```python
result = samsung.majorHolder()

result.majorHolder   # "이재용"
result.majorRatio    # 20.76
result.totalRatio    # 특수관계인 합계 지분율
```

### 특수관계인 목록

```python
for h in result.holders:
    print(f"{h.name} ({h.relation}): {h.ratioEnd}%")
```

### 지분율 시계열

```python
print(result.timeSeries)
```

## 주주 종합 현황

5% 이상 주주, 소액주주, 의결권 현황을 종합적으로 조회한다.

```python
result = samsung.holderOverview()

for bh in result.bigHolders:
    print(f"{bh.name}: {bh.ratio}%")

print(f"소액주주 비율: {result.minority.ratio}%")
print(f"의결권 행사 가능: {result.voting.exercisableShares}")
```

## 주식의 총수

발행주식, 자기주식, 유통주식을 조회한다.

```python
result = samsung.shareCapital()

result.authorizedShares   # 발행할 주식의 총수
result.issuedShares       # 발행한 주식의 총수
result.treasuryShares     # 자기주식
result.outstandingShares  # 유통주식
result.treasuryRatio      # 자사주 비율
```

시계열도 확인 가능하다.

```python
print(result.timeSeries)
```

## 부문별 매출

사업부문, 제품, 지역별 매출 구성을 분석한다.

```python
result = samsung.segments()

print(result.revenue)  # 부문별 매출 시계열
```

연도별 상세 테이블도 조회 가능하다.

```python
for year, tables in result.tables.items():
    for t in tables:
        print(f"[{year}] {t.tableType}: {t.columns}")
```

## 비용의 성격별 분류

원재료비, 인건비, 감가상각비 등 비용 항목별 시계열이다.

```python
result = samsung.costByNature()

print(result.timeSeries)  # 비용 항목별 시계열
print(result.ratios)      # 구성비
```

교차 검증 결과도 확인한다.

```python
print(result.crossCheck)
```

## 채무증권 발행실적

회사채, 기업어음 등 채무증권 발행 현황이다.

```python
result = samsung.bond()

for b in result.issuances:
    print(f"{b.bondType} | {b.amount}백만원 | {b.interestRate} | {b.rating}")

print(result.timeSeries)
# year, totalIssuances, totalAmount, unredeemedCount
```

## 타법인 출자

종속기업·관계기업 출자 현황이다.

```python
result = samsung.subsidiary()

for inv in result.investments[:5]:
    print(f"{inv.name}: {inv.endRatio}%, 장부가 {inv.endBook}")

print(result.timeSeries)
# year, totalCount, listedCount, unlistedCount, totalBook
```

## 다음 단계

- [3. Disclosure Text](./disclosure) — 사업의 내용, MD&A, 회사의 개요
- [4. Advanced Analysis](./advanced) — 주석 세부항목, 유형자산, 교차 분석
