# src/dartlab

## 개요
DART 공시 데이터 활용 라이브러리.

## 구조
```
dartlab/
├── core/                    # 공통 기반 (보고서 선택, 테이블 파싱)
├── finance/                 # 재무제표
│   └── summary/             # 요약재무정보 시계열 추출
│   # balanceSheet/          # 향후: 재무상태표
│   # incomeStatement/       # 향후: 손익계산서
│   # cashFlow/              # 향후: 현금흐름표
│   # notes/                 # 향후: 주석
# governance/                # 향후: 지배구조
# audit/                     # 향후: 감사의견
# text/                      # 향후: 공시 텍스트 분석
```

## 현황
- 2026-03-06: core/ + finance/summary/ 초기 구축
