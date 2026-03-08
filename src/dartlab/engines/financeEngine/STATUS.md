# financeEngine 현황

## 개요
OpenDART 재무제표 parquet에서 시계열을 추출하고, 표준계정 매핑 후 재무비율을 계산하는 엔진.

## 파일 목록

| 파일 | 역할 |
|------|------|
| `__init__.py` | public API export |
| `mapper.py` | 계정명 → snakeId 매핑 (XBRL 태그 + 한글명) |
| `pivot.py` | 원본 parquet → 시계열 dict 피벗 + 동의어 병합 |
| `extract.py` | getLatest, getTTM, getRevenueGrowth3Y 값 추출 |
| `ratios.py` | ROE, ROA, 마진, 부채비율, FCF 등 비율 계산 |
| `data/accountMappings.json` | 표준계정 + 동의어 매핑 테이블 (34,175개) |

## 매핑 구조

1. **XBRL_TAG_MAP** (mapper.py) — `ifrs-full_Revenue` → `revenue` (약 60개, 핵심 계정)
2. **accountMappings.json** (data/) — 한글 계정명 → snakeId (34K개, standardAccounts + learnedSynonyms 통합)
3. **SNAKE_ALIASES** (pivot.py) — 동의어 시계열 병합 (`sales` → `revenue` 등)

## 검증 결과 (삼성전자 005930, 2024)

| 지표 | 계산값 | 비고 |
|------|--------|------|
| Revenue | 300.9T | 정확 |
| Operating Income | 32.7T | 정확 |
| Net Income | 34.5T | 정확 |
| ROE | 8.57% | |
| ROA | 6.70% | |
| Operating Margin | 10.88% | |
| Debt Ratio | 27.93% | |
| Current Ratio | 243.30% | |

## 미완료

- [ ] Company 통합 (property 등록)
- [ ] 분기별 시계열 검증 (period="q")
- [ ] 다른 종목 추가 검증 (은행, 보험 등 업종별)
- [ ] finance parquet GitHub Release 재업로드 (rate limit 해소 후)
