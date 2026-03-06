# core

## 개요
모든 DART 공시 분석에서 공통으로 사용하는 기반 모듈.

## 파일 목록
| 파일 | 설명 |
|------|------|
| __init__.py | 공개 API |
| constants.py | 단위 스케일(UNIT_SCALE), 자산총계 키워드(ASSET_TOTAL_KEYWORDS) |
| reportSelector.py | 연도별 사업보고서 선택 (원본 > 기재정정 > 첨부) |
| tableParser.py | 마크다운 테이블 파싱, 금액 파싱, 단위 정규화, 계정 추출 |

## 현황
- 2026-03-06: finance/에서 공통 모듈 분리
