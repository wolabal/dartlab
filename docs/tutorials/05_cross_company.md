---
title: "5. Cross-Company Comparison"
---

# 5. 기업 간 비교 — 계정 표준화와 시계열

DartLab의 계정 표준화 엔진을 활용해 서로 다른 기업의 재무 데이터를 직접 비교하는 방법을 다룬다.

- 왜 계정 표준화가 필요한가
- 시계열 생성과 비교
- 재무비율 비교
- 섹터 분류와 인사이트 등급
- 시장 내 순위 확인

---

## 준비

```python
from dartlab import Company
```

---

## 왜 계정 표준화가 필요한가

한국 상장사 2,700+개는 XBRL로 재무제표를 공시하지만, 같은 "매출"이라는 개념이 회사마다 다른 ID와 이름으로 존재한다.

```
ifrs-full_Revenue          → 삼성전자
dart_OperatingIncomeLoss   → LG화학
dart_ConstructionRevenue   → 현대건설
수익(매출액)               → 카카오
영업수익                   → KB금융
```

DartLab은 7단계 매핑 파이프라인으로 이를 하나의 `revenue`로 통합한다. 전체 2,564종목, 1,585만 행 중 **98.7%**가 표준 계정으로 매핑된다.

---

## 시계열 생성

`Company.timeseries` property로 분기별 시계열을 받는다.

```python
samsung = Company("005930")
sk = Company("000660")

s1, p1 = samsung.timeseries
s2, p2 = sk.timeseries
```

반환 구조는 동일하다.

```python
s1 = {
    "BS": {"total_assets": [v1, v2, ...], "current_assets": [...], ...},
    "IS": {"revenue": [...], "operating_income": [...], ...},
    "CF": {"operating_cashflow": [...], ...},
}
p1 = ["2016_Q1", "2016_Q2", ..., "2024_Q4"]
```

동일한 snakeId 체계를 사용하므로 **어떤 두 기업이든 동일한 키로 비교**할 수 있다.

### 매출 시계열 비교

```python
samsung_rev = s1["IS"]["revenue"]
sk_rev = s2["IS"]["revenue"]

for i, period in enumerate(p1[-4:], len(p1)-4):
    s_val = samsung_rev[i]
    k_val = sk_rev[i] if i < len(sk_rev) else None
    s_str = f"{s_val/1e8:,.0f}억" if s_val else "N/A"
    k_str = f"{k_val/1e8:,.0f}억" if k_val else "N/A"
    print(f"{period}: 삼성전자 {s_str} / SK하이닉스 {k_str}")
```

### TTM 비교

최근 4분기 합산(Trailing Twelve Months)으로 비교한다.

```python
from dartlab.engines.dart.finance import getTTM, getLatest

companies = [Company("005930"), Company("000660"), Company("035420")]

for c in companies:
    s, _ = c.timeseries
    rev = getTTM(s, "IS", "revenue")
    oi = getTTM(s, "IS", "operating_income")
    assets = getLatest(s, "BS", "total_assets")
    print(f"{c.corpName}: 매출 {rev/1e8:,.0f}억 / 영업이익 {oi/1e8:,.0f}억 / 자산 {assets/1e8:,.0f}억")
```

---

## 연간 시계열

분기별이 아닌 연도별 합산 시계열도 생성할 수 있다.

```python
from dartlab.engines.dart.finance import buildAnnual

s1, years1 = buildAnnual("005930")
s2, years2 = buildAnnual("000660")

for year in years1[-5:]:
    idx1 = years1.index(year)
    idx2 = years2.index(year) if year in years2 else None
    r1 = s1["IS"]["revenue"][idx1]
    r2 = s2["IS"]["revenue"][idx2] if idx2 is not None else None
    print(f"{year}: 삼성전자 {r1/1e8:,.0f}억 / SK하이닉스 {r2/1e8:,.0f}억" if r2 else f"{year}: 삼성전자 {r1/1e8:,.0f}억")
```

---

## 재무비율 비교

`Company.ratios`는 시계열에서 자동 계산된 재무비율을 반환한다.

```python
codes = ["005930", "000660", "035420", "051910"]

for code in codes:
    c = Company(code)
    r = c.ratios
    if r is None:
        continue
    print(f"\n{c.corpName}")
    print(f"  ROE: {r.roe:.1f}%  ROA: {r.roa:.1f}%")
    print(f"  영업이익률: {r.operatingMargin:.1f}%  순이익률: {r.netMargin:.1f}%")
    print(f"  부채비율: {r.debtRatio:.1f}%  유동비율: {r.currentRatio:.1f}%")
    if r.fcf:
        print(f"  FCF: {r.fcf/1e8:,.0f}억")
```

---

## 섹터 분류

DartLab은 WICS 11섹터 체계로 기업을 자동 분류한다. 같은 섹터 내 기업끼리 비교할 때 유용하다.

```python
from dartlab.engines.sector import classify

for code in ["005930", "000660", "035420", "051910"]:
    info = classify(code)
    print(f"{info.corpName}: {info.sector} > {info.industryGroup} (신뢰도: {info.confidence})")
```

### 섹터별 벤치마크

각 섹터는 고유한 벤치마크 파라미터를 가진다.

```python
from dartlab.engines.sector import getParams

params = getParams("005930")
print(f"섹터: {params.sector}")
print(f"할인율: {params.discountRate}%")
print(f"성장률: {params.growthRate}%")
print(f"PER 멀티플: {params.perMultiple}x")
```

---

## 인사이트 등급

7영역을 A~F로 등급화하여 기업의 강점과 약점을 한눈에 비교한다.

```python
from dartlab.engines.insight import analyze

for code in ["005930", "000660", "035420"]:
    result = analyze(code)
    if result is None:
        continue
    grades = result.grades()
    grade_str = " / ".join(f"{k}:{v}" for k, v in grades.items())
    print(f"{result.company.corpName} [{result.profile}]: {grade_str}")
```

### 등급 항목

| 영역 | 설명 |
|------|------|
| performance | 매출/영업이익 성장률 |
| profitability | 영업이익률, ROE |
| health | 부채비율, 유동비율 |
| cashflow | 영업CF, FCF |
| governance | 최대주주 지분, 감사의견 |
| risk | 이상치, 우발부채, 관계자거래 |
| opportunity | 성장 포텐셜 |

---

## 시장 내 순위

전체 상장사 중 해당 기업의 위치를 확인한다.

```python
from dartlab.engines.rank import getRankOrBuild

for code in ["005930", "000660", "035420"]:
    rank = getRankOrBuild(code)
    if rank is None:
        continue
    print(f"\n{rank.corpName} ({rank.sector})")
    print(f"  매출 순위: {rank.revenueRank}/{rank.revenueTotal} (섹터 내 {rank.revenueRankInSector}/{rank.revenueSectorTotal})")
    print(f"  자산 순위: {rank.assetRank}/{rank.assetTotal}")
    print(f"  규모: {rank.sizeClass}")
```

---

## 종합 비교 예시

여러 지표를 하나의 테이블로 정리하는 패턴이다.

```python
import polars as pl
from dartlab import Company
from dartlab.engines.dart.finance import getTTM, getLatest
from dartlab.engines.sector import classify

codes = ["005930", "000660", "035420", "051910", "006400"]
rows = []

for code in codes:
    c = Company(code)
    r = c.ratios
    sector = classify(code)
    if r is None:
        continue
    rows.append({
        "기업": c.corpName,
        "섹터": sector.sector if sector else "",
        "매출(억)": round(r.revenueTTM / 1e8) if r.revenueTTM else None,
        "영업이익률(%)": round(r.operatingMargin, 1) if r.operatingMargin else None,
        "ROE(%)": round(r.roe, 1) if r.roe else None,
        "부채비율(%)": round(r.debtRatio, 1) if r.debtRatio else None,
        "FCF(억)": round(r.fcf / 1e8) if r.fcf else None,
    })

df = pl.DataFrame(rows)
print(df)
```

---

## 다음 단계

- [계정 표준화와 시계열](../api/timeseries) — 7단계 매핑, snakeId 목록, 정규화 방식 상세
- [섹터 분류](../api/sector) — 분류 기준과 벤치마크 파라미터
- [인사이트 등급](../api/insight) — 7영역 등급 기준과 이상치 탐지
- [시장 순위](../api/rank) — 전체/섹터 내 순위 산출
