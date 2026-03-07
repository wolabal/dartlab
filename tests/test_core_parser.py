"""core.tableParser 순수 함수 테스트 (데이터 의존 없음)."""

from dartlab.core.tableParser import parseAmount, detectUnit


class TestParseAmount:
    def test_positive(self):
        assert parseAmount("1,234,567") == 1234567.0

    def test_negative_paren(self):
        assert parseAmount("(1,234)") == -1234.0

    def test_dash(self):
        assert parseAmount("-") is None

    def test_empty(self):
        assert parseAmount("") is None

    def test_decimal(self):
        assert parseAmount("12.34") == 12.34

    def test_negative_sign(self):
        # parseAmount는 음수 부호 "-"를 별도 처리하지 않음 (괄호만 음수)
        v = parseAmount("-5,000")
        assert v is not None
        assert v == 5000.0


class TestDetectUnit:
    def test_million(self):
        assert detectUnit("(단위: 백만원)") == 1.0

    def test_thousand(self):
        assert detectUnit("(단위: 천원)") == 0.001

    def test_won(self):
        assert detectUnit("(단위 : 원)") == 0.000001

    def test_default(self):
        assert detectUnit("테이블 내용만 있음") == 1.0
