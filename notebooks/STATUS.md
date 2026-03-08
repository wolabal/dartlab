# Notebooks 현황

## 개요
Jupyter 노트북. Google Colab에서 바로 실행 가능. `docs/tutorials/`의 문서와 1:1 매칭.

## 폴더 구조

```
notebooks/
└── tutorials/     # 튜토리얼 노트북 (Colab 우선)
    ├── 01_quickstart.ipynb
    ├── 02_financial.ipynb
    ├── 03_disclosure.ipynb
    └── 04_advanced.ipynb
```

## Colab 링크 패턴
```
https://colab.research.google.com/github/eddmpython/dartlab/blob/master/notebooks/tutorials/{filename}.ipynb
```

## 규칙
- 파일명: `XX_camelCase.ipynb`
- 첫 셀: 제목 + Colab 배지 + 학습 내용
- 두 번째 셀: `!pip install -q dartlab`
- 각 셀은 독립적으로 이해 가능하게 작성
- docs/tutorials/와 동일한 구조 유지
