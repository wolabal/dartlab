---
title: 시장 순위
---

# 시장 순위

전체 상장사의 매출, 자산, 성장률 기준 순위를 산출한다. 시장 전체 순위와 섹터 내 순위를 모두 제공한다.

## 사용법

```python
from dartlab.engines.rank import getRankOrBuild

rank = getRankOrBuild("005930")

rank.corpName              # "삼성전자"
rank.sector                # "IT"
rank.industryGroup         # "반도체"

# 매출 순위
rank.revenueRank           # 3 (전체 시장)
rank.revenueTotal          # 2508 (전체 종목 수)
rank.revenueRankInSector   # 1 (IT 섹터 내)
rank.revenueSectorTotal    # 122 (IT 섹터 종목 수)

# 자산 순위
rank.assetRank             # 5
rank.assetRankInSector     # 2

# 성장률 순위
rank.growthRank            # 320
rank.growthRankInSector    # 45

# 규모 등급
rank.sizeClass             # "large"
```

## 함수

### getRankOrBuild()

```python
getRankOrBuild(stockCode: str, *, verbose: bool = True) -> RankInfo | None
```

캐시가 있으면 즉시 반환하고, 없으면 전체 스냅샷을 빌드한 후 반환한다.

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `stockCode` | str | 종목코드 |
| `verbose` | bool | 빌드 시 진행 상황 출력 |

### getRank()

```python
getRank(stockCode: str) -> RankInfo | None
```

캐시에서만 조회한다. 캐시가 없으면 `None`.

### buildSnapshot()

```python
buildSnapshot(*, verbose: bool = True) -> dict[str, RankInfo]
```

전체 종목 스냅샷을 새로 빌드하고 로컬 캐시에 저장한다. 2,500+ 종목 기준 약 2분 소요.

프로세스:
1. KRX 전체 종목 목록 로드
2. 각 종목별 섹터 분류 + 재무 시계열 수집
3. 매출/자산/성장률 기준 전체 정렬
4. 섹터 내 순위 별도 계산
5. 규모 등급 산정
6. JSON 캐시 저장 (`{dataDir}/_cache/rank_snapshot.json`)

## RankInfo

| 필드 | 타입 | 설명 |
|------|------|------|
| `stockCode` | str | 종목코드 |
| `corpName` | str | 회사명 |
| `sector` | str | 섹터명 (한글) |
| `industryGroup` | str | 산업군명 (한글) |
| **재무 지표** | | |
| `revenue` | float (선택) | TTM 매출 (원) |
| `totalAssets` | float (선택) | 총자산 (원) |
| `revenueGrowth3Y` | float (선택) | 3년 매출 CAGR (%) |
| **매출 순위** | | |
| `revenueRank` | int (선택) | 전체 시장 순위 |
| `revenueTotal` | int | 전체 순위 종목 수 |
| `revenueRankInSector` | int (선택) | 섹터 내 순위 |
| `revenueSectorTotal` | int | 섹터 내 종목 수 |
| **자산 순위** | | |
| `assetRank` | int (선택) | 전체 시장 순위 |
| `assetTotal` | int | 전체 순위 종목 수 |
| `assetRankInSector` | int (선택) | 섹터 내 순위 |
| `assetSectorTotal` | int | 섹터 내 종목 수 |
| **성장률 순위** | | |
| `growthRank` | int (선택) | 전체 시장 순위 |
| `growthTotal` | int | 전체 순위 종목 수 |
| `growthRankInSector` | int (선택) | 섹터 내 순위 |
| `growthSectorTotal` | int | 섹터 내 종목 수 |
| **분류** | | |
| `sizeClass` | str | 규모 등급 |

### 규모 등급

| 등급 | 기준 |
|------|------|
| `large` | 매출 상위 10% |
| `mid` | 매출 상위 10~30% |
| `small` | 매출 상위 30% 이하 |

## 예시

```python
from dartlab.engines.rank import getRankOrBuild, buildSnapshot

# 단일 종목 조회
rank = getRankOrBuild("000660")
print(f"{rank.corpName}: 매출 {rank.revenueRank}/{rank.revenueTotal}")
print(f"  섹터({rank.sector}): {rank.revenueRankInSector}/{rank.revenueSectorTotal}")
print(f"  규모: {rank.sizeClass}")

# 전체 스냅샷 빌드 (최초 1회)
snapshot = buildSnapshot()
print(f"총 {len(snapshot)}개 종목 순위 산출")

# 특정 섹터 Top 10
it_stocks = [(k, v) for k, v in snapshot.items() if v.sector == "IT" and v.revenueRankInSector]
it_stocks.sort(key=lambda x: x[1].revenueRankInSector)
for code, r in it_stocks[:10]:
    print(f"  {r.revenueRankInSector}위: {r.corpName} ({code})")
```

## 캐시

스냅샷은 `{dataDir}/_cache/rank_snapshot.json`에 저장된다. `getRankOrBuild()`는 캐시가 있으면 즉시 로드하고, 없으면 빌드한다.

캐시를 갱신하려면 `buildSnapshot()`을 직접 호출한다.
