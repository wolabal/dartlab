---
title: 인사이트 등급
---

# 인사이트 등급

기업의 재무 상태를 7개 영역으로 분석하여 A~F 등급을 부여하고, 이상치를 탐지하고, 종합 프로필을 분류한다.

## 사용법

```python
from dartlab.engines.insight import analyze

result = analyze("005930")

# 7영역 등급
result.grades()
# {
#   "performance": "A",
#   "profitability": "A",
#   "health": "A",
#   "cashflow": "B",
#   "governance": "A",
#   "risk": "B",
#   "opportunity": "A"
# }

# 종합
result.profile   # "premium"
result.summary   # "삼성전자는 실적, 수익성, 재무건전성 등 대부분..."
result.anomalies # [] (이상치 없음)
```

## analyze()

```python
analyze(stockCode: str, company: Company = None) -> AnalysisResult | None
```

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `stockCode` | str | 종목코드 (6자리) |
| `company` | Company (선택) | Company 인스턴스. None이면 내부 생성 |

데이터가 부족하면 `None`을 반환한다.

### 분석 과정

1. 분기/연간 재무 시계열 구축
2. 재무비율 계산
3. 금융업 자동 감지 (부채비율, 이자수익 등 6개 신호)
4. 7영역 등급 분석
5. 이상치 탐지 (6가지 규칙)
6. 프로필 분류
7. 한국어 종합 요약 생성

## 7개 분석 영역

### performance (실적 성장성)

매출과 영업이익의 성장률, 변동성을 분석한다.

| 등급 | 기준 |
|------|------|
| A | 매출 + 영업이익 모두 성장, 변동성 낮음 |
| B | 한쪽 성장 또는 변동성 보통 |
| C | 정체 |
| D | 역성장 |
| F | 지속적 감소 |

### profitability (수익성)

영업이익률, 순이익률, ROE, ROA를 분석한다. 섹터 벤치마크 대비 가감점이 적용된다.

| 등급 | 기준 |
|------|------|
| A | 영업이익률 10%+, ROE 15%+ |
| B | 영업이익률 5%+, ROE 8%+ |
| C | 영업이익률 양수, ROE 양수 |
| D | 영업이익률 or ROE 마이너스 |
| F | 모두 대폭 마이너스 |

### health (재무건전성)

부채비율, 유동비율을 분석한다. 금융업은 별도 기준 적용.

| 등급 | 일반기업 기준 |
|------|-------------|
| A | 부채비율 50% 미만, 유동비율 200% 초과 |
| B | 부채비율 100% 미만, 유동비율 150% 초과 |
| C | 부채비율 200% 미만, 유동비율 100% 초과 |
| D | 부채비율 400% 미만 |
| F | 부채비율 400% 초과 또는 자본잠식 |

### cashflow (현금흐름)

영업현금흐름, 자유현금흐름(FCF), FCF 마진, 추세를 분석한다.

| 등급 | 기준 |
|------|------|
| A | 영업CF 양수 + FCF 양수 + 추세 개선 |
| B | 영업CF 양수 + FCF 양수 |
| C | 영업CF 양수, FCF 음수 |
| D | 영업CF 음수 |
| F | 영업CF 지속 음수 |

### governance (지배구조)

최대주주 지분율, 감사의견, 배당 여부를 분석한다.

| 등급 | 기준 |
|------|------|
| A | 적정의견 + 안정 지분 + 배당 |
| B | 적정의견 + 일부 충족 |
| C | 적정의견, 나머지 미충족 |
| D | 감사의견 관련 경고 |
| F | 부적정/의견거절 |

### risk (종합 리스크)

나머지 6개 영역의 리스크 플래그를 종합한다.

### opportunity (투자 기회)

나머지 6개 영역의 기회 플래그를 종합한다.

## AnalysisResult

| 필드 | 타입 | 설명 |
|------|------|------|
| `corpName` | str | 회사명 |
| `stockCode` | str | 종목코드 |
| `isFinancial` | bool | 금융업 여부 |
| `performance` | InsightResult | 실적 성장성 |
| `profitability` | InsightResult | 수익성 |
| `health` | InsightResult | 재무건전성 |
| `cashflow` | InsightResult | 현금흐름 |
| `governance` | InsightResult | 지배구조 |
| `risk` | InsightResult | 종합 리스크 |
| `opportunity` | InsightResult | 투자 기회 |
| `anomalies` | list[Anomaly] | 이상치 목록 |
| `summary` | str | 한국어 종합 요약 |
| `profile` | str | 기업 프로필 |

### grades() 메서드

```python
result.grades() -> dict[str, str]
```

7개 영역의 등급을 dict로 반환한다.

## InsightResult

각 영역의 분석 결과.

| 필드 | 타입 | 설명 |
|------|------|------|
| `grade` | str | 등급 (A/B/C/D/F, N=데이터없음) |
| `summary` | str | 한글 요약 |
| `details` | list[str] | 상세 분석 항목 |
| `risks` | list[Flag] | 리스크 플래그 |
| `opportunities` | list[Flag] | 기회 플래그 |

## 이상치 탐지

6가지 규칙으로 재무 이상 신호를 감지한다.

| 카테고리 | 탐지 항목 |
|---------|----------|
| `earningsQuality` | 영업이익 증가인데 영업CF 감소 |
| `workingCapital` | 매출채권/재고자산 급증 |
| `balanceSheetShift` | 부채/차입금/자본 ±50% 이상 변동, 자본잠식 |
| `cashBurn` | 현금 급감, 영업CF 적자 + 재무CF 양수 (차입 의존) |
| `marginDivergence` | 영업이익률 ±5%p 급변, 영업외손익 급변 |
| `financialSector` | 금융업 부채비율 급변, 순이익 급감 |

```python
for a in result.anomalies:
    print(f"[{a.severity}] {a.category}: {a.text}")
    # [warning] earningsQuality: 영업이익은 증가했으나 영업CF는 감소
```

## Anomaly

| 필드 | 타입 | 설명 |
|------|------|------|
| `severity` | str | "danger", "warning", "info" |
| `category` | str | 이상치 유형 |
| `text` | str | 상세 설명 |
| `value` | float (선택) | 수치 값 |

## 기업 프로필

등급 조합으로 기업을 6가지 프로필 중 하나로 분류한다.

| 프로필 | 조건 |
|--------|------|
| `premium` | 평균 등급 높음 + 리스크 낮음 |
| `growth` | 실적/수익성/기회 모두 상위 |
| `stable` | 건전성/리스크/수익성 모두 안정 |
| `caution` | 리스크 D/F 또는 건전성 F |
| `distress` | 대부분 영역 하위 등급 |
| `mixed` | 위 조건에 해당하지 않음 |

## 예시

```python
from dartlab.engines.insight import analyze

result = analyze("005930")

# 등급 확인
for area, grade in result.grades().items():
    print(f"{area}: {grade}")

# 수익성 상세
print(result.profitability.summary)
for d in result.profitability.details:
    print(f"  - {d}")

# 리스크 플래그
for flag in result.risk.risks:
    print(f"[{flag.level}] {flag.category}: {flag.text}")

# 이상치
if result.anomalies:
    print("=== 이상치 발견 ===")
    for a in result.anomalies:
        print(f"  [{a.severity}] {a.text}")

# 종합
print(f"프로필: {result.profile}")
print(result.summary)
```
