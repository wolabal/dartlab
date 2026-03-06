import polars as pl


def selectReport(df: pl.DataFrame, year: str) -> pl.DataFrame | None:
    """해당 연도 사업보고서 선택. 원본 우선, 없으면 기재정정/첨부 중 가장 나중 접수."""
    bizReports = df.filter(
        (pl.col("year") == year)
        & (pl.col("report_type").str.contains("사업보고서"))
    )
    if bizReports.height == 0:
        return None

    orig = bizReports.filter(
        ~pl.col("report_type").str.contains("기재정정|첨부")
    )
    if orig.height > 0:
        return orig

    latest = bizReports.sort("rcept_date", descending=True).head(1)
    latestType = latest["report_type"][0]
    return bizReports.filter(pl.col("report_type") == latestType)
