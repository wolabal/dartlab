# 049 EDGAR Engine — dartlab 흡수 실험

## 목적
eddmpython의 EDGAR 모듈을 dartlab `engines/edgar/`로 흡수.
DART와 동일한 snakeId 체계를 공유하여 L2 엔진(insight, rank)이 소스 무관하게 동작하도록 한다.

## 소스 분석 (eddmpython core/edgar/)

### 데이터 수집 (getEdgar/)
| 파일 | 역할 | dartlab 대응 |
|------|------|-------------|
| ticker.py | SEC API → ticker↔CIK 매핑, 24h parquet 캐시 | **완료** (006 실험) |
| bulkDownloader.py | companyfacts.zip → 개별 CIK parquet | **완료** (006 실험) |
| datasetDownloader.py | sub/pre/tag/num 데이터셋 다운로드 | 불필요 (벌크 전용) |
| edgarFinance.py | 위 3개 통합 인터페이스 | 불필요 (벌크 전용) |

### 매핑/검색 (searchEdgar/finance/)
| 파일 | 역할 | dartlab 대응 |
|------|------|-------------|
| standardAccounts.json | 179개 표준계정 (US-GAAP 기반) | mapperData/standardAccounts.json |
| learnedSynonyms.json | 11,375개 학습된 태그→snakeId | mapperData/learnedSynonyms.json |
| standardMapping.py | tag→learned→fuzzy 3단계 매핑 | mapper.py (commonTag→learned→DART alias) |
| synonymLearner.py | 미매핑 분석/학습 | 향후 학습 파이프라인 실험 |
| search.py | facts+sub+pre 병합 → 표준화 → 피벗 | pivot.py |

### 정규화 규칙
| 항목 | EDGAR (eddmpython) | EDGAR (dartlab) | DART (dartlab) |
|------|-------------------|-----------------|----------------|
| FY/Q1 | max() 선택 | end 내림차순 최신 | N/A (원본이 개별) |
| Q2/Q3 IS | min() 선택 (YTD 배제) | duration ≤100일 standalone | thstrm_add_amount 누적→standalone |
| Q2/Q3 CF | min() 선택 | YTD deaccumulate | thstrm_amount 차분 |
| Q4 | FY - Q1 - Q2 - Q3 | FY - Q1 - Q2 - Q3 | thstrm_amount 차분 |
| BS | Q4 = FY 그대로 | end 내림차순 최신 | 시점 잔액 그대로 |

### 의존성
| eddmpython | dartlab 정책 |
|-----------|-------------|
| pandas | polars only |
| polars | OK |
| requests | requests (유지) |
| rapidfuzz | 필요시 추가 |
| tqdm | alive_bar 패턴 |

## 실험 현황

### Phase 1 — 데이터 확보 & 구조 파악
| # | 실험 | 상태 |
|---|------|------|
| 001 | companyfacts.zip 벌크 덤프 → polars parquet | **완료** (16,601 CIK, 665MB) |
| 002 | DART↔EDGAR snakeId 정렬 분석 | **완료** (alias 13개 도출) |
| 003 | 피벗/정규화 재현 (IS/CF/BS 3-way + Q4 역산) | **완료** (3사 Revenue/NI 0.00%) |

### Phase 2 — 매핑 체계 통합
| # | 실험 | 상태 |
|---|------|------|
| 004 | EDGAR 표준계정 → DART canonical 매핑 | **완료** (97.06% row-weighted, 500사) |
| 005 | 전체 파이프라인 통합 프로토타입 | **완료** (24/24 분기값 OK, 26/29 L2) |

### Phase 3 — 패키지 배치
| # | 상태 |
|---|------|
| engines/edgar/finance/ 패키지 배치 | **완료** (mapper.py + pivot.py + 18 tests) |
| engines/common/finance/ 공통 분리 | **완료** (extract.py + ratios.py, DART↔EDGAR 독립) |
| 데이터 경로 개선 | **완료** (data/dart/, data/edgar/ 분리) |

### Phase 4 — 벌크 파이프라인
| # | 실험 | 상태 |
|---|------|------|
| 006 | 벌크 다운로드 + ticker 매핑 + 갱신 체크 | **완료** |

### Phase 5 — 패키지 배치 (벌크 + ticker)
| # | 상태 |
|---|------|
| engines/edgar/ticker.py 배치 | 예정 |
| engines/edgar/bulk.py 배치 | 예정 |
| CLI 통합 (dartlab edgar setup/update/status) | 예정 |
| L2 insight 호환성 검증 | 예정 |

### Phase 6 — 학습 파이프라인 (예정)
| # | 실험 | 상태 |
|---|------|------|
| 007 | EDGAR SynonymLearner 포팅 (16,601사 학습) | 예정 |

## 핵심 설계 결정

1. **데이터 소스** — companyfacts.zip 벌크 전용 (API 단건 미사용, 포맷 차이)
2. **매핑 전략** — commonTags(344) + learnedSynonyms(11,375) 병합, commonTag 우선
3. **snakeId 정렬** — EDGAR→DART alias 14개 + STMT_OVERRIDES 2개 (NetIncomeLoss IS/CF 분리)
4. **equity 매핑** — EDGAR total_equity → DART equity_including_nci, total_equity 역산
5. **인터페이스** — DART와 동일한 dict 형식 → common/finance/ extract.py/ratios.py 공유
6. **데이터 경로** — data/dart/ + data/edgar/ 상위 분리
7. **갱신 체크** — HEAD 요청 Last-Modified 비교 (meta.json 저장)

## 패키지 구조

```
src/dartlab/engines/
├── common/
│   └── finance/
│       ├── extract.py         # getTTM, getLatest (소스 독립)
│       └── ratios.py          # calcRatios, RatioResult (소스 독립)
└── edgar/
    ├── __init__.py
    ├── ticker.py              # TickerMap (예정)
    ├── bulk.py                # BulkDownloader (예정)
    └── finance/
        ├── __init__.py
        ├── mapper.py          # EdgarMapper (commonTag+learned+alias)
        ├── pivot.py           # buildTimeseries, buildAnnual
        └── mapperData/
            ├── standardAccounts.json   # 179개 표준계정
            └── learnedSynonyms.json    # 11,375개 태그 매핑
```

## 데이터 경로

```
data/
├── dart/
│   ├── docs/          # DART 공시 문서 parquet
│   ├── finance/       # DART 재무 parquet
│   └── report/        # DART 정기보고서 parquet
└── edgar/
    ├── finance/       # CIK별 companyfacts parquet (16,601개)
    ├── tickers.parquet   # ticker↔CIK 매핑 (24h 캐시)
    └── meta.json      # 벌크 다운로드 메타데이터
```

## 시작일
2026-03-09
