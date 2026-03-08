"""DartLab 공통 도구 — 차트, 테이블, 텍스트 분석.

AI 에이전트, 보고서 생성, 대화형 분석에서 재사용하는 빌딩블록.

사용법::

    from dartlab.tools import chart, table, text

    # 차트
    fig = chart.line(c.dividend, y=["dps"])
    fig.show()

    # 테이블 가공
    df = table.yoy_change(c.dividend, value_cols=["dps", "totalDividend"])

    # 텍스트 분석
    kw = text.extract_keywords(c.mdna)
"""

from dartlab.tools import chart, table, text

__all__ = ["chart", "table", "text"]
