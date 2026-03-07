"""공통 픽스처 — 데이터가 없으면 skip."""

import os

import pytest

DATA_DIR = os.path.join(
    os.path.expanduser("~"),
    "OneDrive", "Desktop", "sideProject", "nicegui",
    "eddmpython", "data", "dartData", "docsData",
)

SAMSUNG = "005930"
HYUNDAI = "005380"


def _has_data(code: str) -> bool:
    return os.path.isfile(os.path.join(DATA_DIR, f"{code}.parquet"))


requires_samsung = pytest.mark.skipif(
    not _has_data(SAMSUNG), reason="삼성전자 데이터 없음"
)
requires_hyundai = pytest.mark.skipif(
    not _has_data(HYUNDAI), reason="현대자동차 데이터 없음"
)
