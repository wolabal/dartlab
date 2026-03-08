"""데이터 릴리즈 중앙 설정.

태그명, 디렉토리, 라벨을 1곳에서 관리.
새 카테고리 추가 시 DATA_RELEASES에 한 줄만 추가하면 전체 반영.

finance는 GitHub Release 1000에셋 제한 때문에 종목코드 범위별 다중 태그 사용.
"""

REPO = "eddmpython/dartlab"
REPO_URL = f"https://github.com/{REPO}"

DATA_RELEASES: dict[str, dict] = {
    "docs": {
        "tag": "data-docs",
        "dir": "docsData",
        "label": "DART 공시 문서 데이터",
    },
    "finance": {
        "dir": "financeData",
        "label": "재무 숫자 데이터",
        "shards": [
            {"tag": "data-finance-1", "min": 0, "max": 49999},
            {"tag": "data-finance-2", "min": 50000, "max": 99999},
            {"tag": "data-finance-3", "min": 100000, "max": 199999},
            {"tag": "data-finance-4", "min": 200000, "max": 999999},
        ],
    },
}


def financeTag(stockCode: str) -> str:
    """종목코드 → 해당 finance shard 태그."""
    code = int(stockCode)
    for shard in DATA_RELEASES["finance"]["shards"]:
        if shard["min"] <= code <= shard["max"]:
            return shard["tag"]
    return DATA_RELEASES["finance"]["shards"][-1]["tag"]


def financeAllTags() -> list[str]:
    """finance 전체 shard 태그 목록."""
    return [s["tag"] for s in DATA_RELEASES["finance"]["shards"]]


def releaseBaseUrl(category: str = "docs", stockCode: str | None = None) -> str:
    if category == "finance" and stockCode:
        tag = financeTag(stockCode)
    elif category == "finance":
        tag = DATA_RELEASES["finance"]["shards"][0]["tag"]
    else:
        tag = DATA_RELEASES[category]["tag"]
    return f"{REPO_URL}/releases/download/{tag}"


def releaseApiUrl(category: str = "docs", tag: str | None = None) -> str:
    if tag is None:
        tag = DATA_RELEASES[category]["tag"]
    return f"https://api.github.com/repos/{REPO}/releases/tags/{tag}"
