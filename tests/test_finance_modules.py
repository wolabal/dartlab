"""나머지 finance 모듈 통합 테스트."""

import polars as pl

from tests.conftest import SAMSUNG, requires_samsung


@requires_samsung
class TestDividend:
    def test_basic(self):
        from dartlab.finance.dividend import dividend
        r = dividend(SAMSUNG)
        assert r is not None
        assert r.timeSeries is not None
        assert isinstance(r.timeSeries, pl.DataFrame)


@requires_samsung
class TestEmployee:
    def test_basic(self):
        from dartlab.finance.employee import employee
        r = employee(SAMSUNG)
        assert r is not None
        assert r.timeSeries is not None


@requires_samsung
class TestMajorHolder:
    def test_basic(self):
        from dartlab.finance.majorHolder import majorHolder
        r = majorHolder(SAMSUNG)
        assert r is not None
        assert r.majorHolder is not None
        assert r.majorRatio > 0

    def test_holder_overview(self):
        from dartlab.finance.majorHolder import holderOverview
        r = holderOverview(SAMSUNG)
        assert r is not None


@requires_samsung
class TestShareCapital:
    def test_basic(self):
        from dartlab.finance.shareCapital import shareCapital
        r = shareCapital(SAMSUNG)
        assert r is not None
        assert r.outstandingShares > 0


@requires_samsung
class TestSubsidiary:
    def test_basic(self):
        from dartlab.finance.subsidiary import subsidiary
        r = subsidiary(SAMSUNG)
        assert r is not None
        assert r.investments is not None


@requires_samsung
class TestBond:
    def test_basic(self):
        from dartlab.finance.bond import bond
        r = bond(SAMSUNG)
        # 삼성전자는 채무증권이 없을 수 있음
        # None이어도 에러 없이 반환만 확인


@requires_samsung
class TestSegment:
    def test_basic(self):
        from dartlab.finance.segment import segments
        r = segments(SAMSUNG)
        assert r is not None
        assert r.tables is not None


@requires_samsung
class TestCostByNature:
    def test_basic(self):
        from dartlab.finance.costByNature import costByNature
        r = costByNature(SAMSUNG)
        assert r is not None
        assert r.timeSeries is not None


@requires_samsung
class TestAffiliate:
    def test_basic(self):
        from dartlab.finance.affiliate import affiliates
        r = affiliates(SAMSUNG)
        assert r is not None
        assert r.profiles is not None
