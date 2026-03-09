---
title: 섹터 분류
---

# 섹터 분류

WICS(Wise Industry Classification Standard) 기준으로 기업의 투자 섹터를 분류한다. 3단계 우선순위로 분류하며, 섹터별 밸류에이션 파라미터를 제공한다.

## 사용법

```python
from dartlab.engines.sector import classify, getParams

info = classify("삼성전자", kindIndustry="통신 및 방송 장비 제조업")
info.sector          # Sector.IT
info.industryGroup   # IndustryGroup.SEMICONDUCTOR
info.confidence      # 1.0
info.source          # "override"

params = getParams(info)
params.discountRate  # 13.0 (%)
params.perMultiple   # 15
params.label         # "반도체"
```

## classify()

```python
classify(companyName: str, kindIndustry: str = None, mainProducts: str = None) -> SectorInfo
```

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `companyName` | str | 회사명 |
| `kindIndustry` | str (선택) | KIND 업종명 (KSIC 기반) |
| `mainProducts` | str (선택) | 주요제품 텍스트 |

### 3단계 분류 우선순위

| 단계 | 방법 | 신뢰도 | 적용 대상 |
|------|------|--------|----------|
| 1 | 수동 오버라이드 | 0.95~1.0 | 대형주 ~100개 (삼성전자, SK하이닉스 등) |
| 2 | 키워드 분석 | 0.6~0.9 | 주요제품 텍스트에서 키워드 매칭 |
| 3 | KSIC 매핑 | 0.7 | KIND 업종명 → WICS 매핑 (200+ 항목) |

모든 단계에서 매칭되지 않으면 `Sector.UNKNOWN` (신뢰도 0.0)을 반환한다.

## SectorInfo

| 필드 | 타입 | 설명 |
|------|------|------|
| `sector` | Sector | WICS 대분류 (11개) |
| `industryGroup` | IndustryGroup | WICS 중분류 (47개) |
| `confidence` | float | 신뢰도 (0.0~1.0) |
| `source` | str | 분류 근거 ("override", "keyword", "ksic", "unknown") |

## Sector (대분류 11개)

| 값 | 한글 |
|----|------|
| `ENERGY` | 에너지 |
| `MATERIALS` | 소재 |
| `INDUSTRIALS` | 산업재 |
| `CONSUMER_DISC` | 경기관련소비재 |
| `CONSUMER_STAPLES` | 필수소비재 |
| `HEALTHCARE` | 건강관리 |
| `FINANCIALS` | 금융 |
| `IT` | IT |
| `COMMUNICATION` | 커뮤니케이션서비스 |
| `UTILITIES` | 유틸리티 |
| `REAL_ESTATE` | 부동산 |

## getParams()

```python
getParams(sectorInfo: SectorInfo) -> SectorParams
```

중분류 파라미터가 있으면 우선 사용하고, 없으면 대분류 파라미터로 fallback한다.

## SectorParams

| 필드 | 타입 | 설명 |
|------|------|------|
| `discountRate` | float | 할인율 (%) |
| `growthRate` | float | 성장률 (%) |
| `perMultiple` | float | PER 멀티플 |
| `pbrMultiple` | float | PBR 멀티플 |
| `evEbitdaMultiple` | float | EV/EBITDA 멀티플 |
| `label` | str | 섹터 라벨 (한글) |

섹터별 파라미터는 업종 특성을 반영한 벤치마크 값이다. DCF, PER/PBR 밴드 분석 등에 활용된다.

## 예시

```python
from dartlab.engines.sector import classify, getParams, Sector

# 대형주 — 수동 오버라이드로 즉시 분류
info = classify("SK하이닉스")
print(info)  # SectorInfo(IT/반도체, conf=1.00, src=override)

# 중소형주 — 키워드 기반 분류
info = classify("에코프로비엠", mainProducts="양극재, 이차전지 소재")
print(info)  # SectorInfo(IT/2차전지, conf=0.90, src=keyword)

# KSIC 기반 분류
info = classify("미래에셋증권", kindIndustry="증권 중개업")
print(info)  # SectorInfo(FINANCIALS/증권, conf=0.70, src=ksic)

# 밸류에이션 파라미터
params = getParams(info)
print(f"PER: {params.perMultiple}, 할인율: {params.discountRate}%")
```
