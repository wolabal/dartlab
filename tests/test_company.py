"""Company 클래스 기본 테스트."""

import polars as pl
import pytest

from tests.conftest import SAMSUNG, requires_samsung


@requires_samsung
class TestCompany:
    def test_init_by_code(self):
        from dartlab import Company
        c = Company(SAMSUNG)
        assert c.stockCode == SAMSUNG
        assert c.corpName == "삼성전자"

    def test_repr(self):
        import dartlab
        dartlab.verbose = False
        c = dartlab.Company(SAMSUNG)
        assert "005930" in repr(c)
        assert "삼성전자" in repr(c)
        dartlab.verbose = True

    def test_docs(self):
        from dartlab import Company
        c = Company(SAMSUNG)
        docs = c.docs()
        assert isinstance(docs, pl.DataFrame)
        assert len(docs) > 0
        assert "dartUrl" in docs.columns

    def test_invalid_name_raises(self):
        from dartlab import Company
        with pytest.raises(ValueError):
            Company("존재하지않는회사명zzz")
