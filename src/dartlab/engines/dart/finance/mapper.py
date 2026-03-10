"""계정명 → snakeId 매핑.

eddmpython v6 매핑 파이프라인 재현:
1. account_id prefix 제거 → normalizedId
2. ID_SYNONYMS 로 영문 ID 동의어 통합
3. ACCOUNT_NAME_SYNONYMS 로 한글명 동의어 통합
4. CORE_MAP (IFRS_TO_SNAKE) 으로 핵심 계정 오버라이드
5. accountMappings.json (standardAccounts + learnedSynonyms) 조회
6. 괄호 제거 후 재조회
7. 미매핑 → None
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Optional

_DATA_DIR = Path(__file__).parent / "mapperData"

_PREFIX_RE = re.compile(r"^(?:ifrs-full_|ifrs_|dart_|ifrs-smes_)")
_PAREN_RE = re.compile(r"\([^)]*\)")

ID_SYNONYMS: dict[str, str] = {
    "ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod": "ProfitsOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "OtherIncomeExpenseFromSubsidiariesJointlyControlledEntitiesAndAssociates": "ProfitsOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "RevenueFromOperations": "Revenue",
    "SalesRevenue": "Revenue",
    "OperatingRevenue": "Revenue",
    "GrossProfitLoss": "GrossProfit",
    "OperatingIncome": "OperatingIncomeLoss",
    "OperatingProfit": "OperatingIncomeLoss",
    "ProfitFromOperations": "OperatingIncomeLoss",
    "NonoperatingIncome": "OtherIncome",
    "NonoperatingExpenses": "OtherExpenses",
    "ProfitBeforeTax": "ProfitLossBeforeTax",
    "ProfitBeforeIncomeTax": "ProfitLossBeforeTax",
    "IncomeTaxExpenseBenefit": "IncomeTaxExpense",
    "Profit": "ProfitLoss",
    "NetIncome": "ProfitLoss",
    "NetProfit": "ProfitLoss",
    "EarningsPerShare": "BasicEarningsLossPerShare",
    "EPS": "BasicEarningsLossPerShare",
    "TotalAssets": "Assets",
    "TotalCurrentAssets": "CurrentAssets",
    "Cash": "CashAndCashEquivalents",
    "CashEquivalents": "CashAndCashEquivalents",
    "TradeReceivables": "TradeAndOtherCurrentReceivables",
    "AccountsReceivable": "TradeAndOtherCurrentReceivables",
    "Inventories": "CurrentInventories",
    "Stock": "CurrentInventories",
    "TotalNoncurrentAssets": "NoncurrentAssets",
    "FixedAssets": "NoncurrentAssets",
    "PPE": "PropertyPlantAndEquipment",
    "TangibleAssets": "PropertyPlantAndEquipment",
    "IntangibleAssets": "IntangibleAssetsOtherThanGoodwill",
    "InvestmentInAssociates": "InvestmentsInAssociatesAndJointVentures",
    "TotalLiabilities": "Liabilities",
    "TotalCurrentLiabilities": "CurrentLiabilities",
    "TradePayables": "TradeAndOtherCurrentPayables",
    "AccountsPayable": "TradeAndOtherCurrentPayables",
    "ShortTermBorrowings": "CurrentBorrowings",
    "ShortTermDebt": "CurrentBorrowings",
    "TotalNoncurrentLiabilities": "NoncurrentLiabilities",
    "LongTermBorrowings": "NoncurrentBorrowings",
    "LongTermDebt": "NoncurrentBorrowings",
    "DeferredTax": "DeferredTaxLiabilities",
    "TotalEquity": "Equity",
    "ShareholdersEquity": "Equity",
    "Capital": "IssuedCapital",
    "ShareCapital": "IssuedCapital",
    "AccumulatedProfits": "RetainedEarnings",
    "OperatingCashFlows": "CashFlowsFromOperatingActivities",
    "CashFromOperations": "CashFlowsFromOperatingActivities",
    "InvestingCashFlows": "CashFlowsFromInvestingActivities",
    "CashFromInvesting": "CashFlowsFromInvestingActivities",
    "FinancingCashFlows": "CashFlowsFromFinancingActivities",
    "CashFromFinancing": "CashFlowsFromFinancingActivities",
    "NetCashFlow": "IncreaseDecreaseInCashAndCashEquivalents",
    "CashIncrease": "IncreaseDecreaseInCashAndCashEquivalents",
    "OCI": "OtherComprehensiveIncome",
    "TotalComprehensiveIncome": "ComprehensiveIncome",
}

ACCOUNT_NAME_SYNONYMS: dict[str, str] = {
    "영업이익(손실)": "영업이익",
    "당기순이익(손실)": "당기순이익",
    "법인세비용차감전순이익(손실)": "법인세비용차감전순이익",
    "매출총이익(손실)": "매출총이익",
    "기본주당이익(손실)": "기본주당이익",
    "희석주당이익(손실)": "희석주당이익",
    "총포괄손익": "총포괄이익",
    "매출": "매출액",
    "수익": "매출액",
    "매출액합계": "매출액",
    "영업수익": "매출액",
    "상품매출": "매출액",
    "제품매출": "매출액",
    "용역매출": "매출액",
    "매출원가합계": "매출원가",
    "제조원가": "매출원가",
    "상품매출원가": "매출원가",
    "판매관리비": "판매비와관리비",
    "판관비": "판매비와관리비",
    "판매비": "판매비와관리비",
    "관리비": "판매비와관리비",
    "판매비및관리비": "판매비와관리비",
    "판매및관리비": "판매비와관리비",
    "매출총손익": "매출총이익",
    "영업손익": "영업이익",
    "당기순손익": "당기순이익",
    "순이익": "당기순이익",
    "순손익": "당기순이익",
    "법인세차감전순이익": "법인세비용차감전순이익",
    "세전이익": "법인세비용차감전순이익",
    "법인세비용차감전이익": "법인세비용차감전순이익",
    "기타영업외수익": "기타수익",
    "영업외수익": "기타수익",
    "기타영업외비용": "기타비용",
    "영업외비용": "기타비용",
    "이자수익": "금융수익",
    "이자비용": "금융비용",
    "유동자산합계": "유동자산",
    "비유동자산합계": "비유동자산",
    "고정자산": "비유동자산",
    "자산합계": "자산총계",
    "총자산": "자산총계",
    "현금": "현금및현금성자산",
    "현금성자산": "현금및현금성자산",
    "매출채권": "매출채권및기타채권",
    "단기매출채권": "매출채권및기타채권",
    "재고": "재고자산",
    "상품": "재고자산",
    "제품": "재고자산",
    "유형자산합계": "유형자산",
    "무형자산합계": "무형자산",
    "영업권및무형자산": "무형자산",
    "관계기업투자": "관계기업및공동기업투자",
    "관계회사투자": "관계기업및공동기업투자",
    "유동부채합계": "유동부채",
    "비유동부채합계": "비유동부채",
    "고정부채": "비유동부채",
    "부채합계": "부채총계",
    "총부채": "부채총계",
    "매입채무": "매입채무및기타채무",
    "단기매입채무": "매입채무및기타채무",
    "단기빌림": "단기차입금",
    "유동성장기부채": "단기차입금",
    "장기빌림": "장기차입금",
    "이연법인세": "이연법인세부채",
    "자본합계": "자본총계",
    "총자본": "자본총계",
    "보통주자본금": "자본금",
    "우선주자본금": "자본금",
    "이익잉여금합계": "이익잉여금",
    "미처분이익잉여금": "이익잉여금",
    "기타포괄손익누계액": "기타자본구성요소",
    "영업활동으로인한현금흐름": "영업활동현금흐름",
    "영업활동현금흐름합계": "영업활동현금흐름",
    "영업에서창출된현금흐름": "영업활동현금흐름",
    "투자활동으로인한현금흐름": "투자활동현금흐름",
    "투자활동현금흐름합계": "투자활동현금흐름",
    "재무활동으로인한현금흐름": "재무활동현금흐름",
    "재무활동현금흐름합계": "재무활동현금흐름",
    "현금증가": "현금및현금성자산증감",
    "현금감소": "현금및현금성자산증감",
    "기타포괄이익": "기타포괄손익",
    "포괄손익": "총포괄이익",
    "주당이익": "기본주당이익",
    "주당순이익": "기본주당이익",
    "EPS": "기본주당이익",
    "희석EPS": "희석주당이익",
    "법인세": "법인세비용",
    "법인세등": "법인세비용",
    "당기법인세": "법인세비용",
    "지분법이익": "지분법손익",
    "지분법평가손익": "지분법손익",
    "유형자산감가상각비": "감가상각비",
    "무형자산상각비": "감가상각비",
    "대손비용": "대손상각비",
    "현금배당": "배당금",
    "주식배당": "배당금",
    "매출 액": "매출액",
    "영업 이익": "영업이익",
    "당기 순이익": "당기순이익",
    "자산 총계": "자산총계",
    "부채 총계": "부채총계",
    "자본 총계": "자본총계",
}

CORE_MAP: dict[str, str] = {
    "Revenue": "revenue",
    "CostOfSales": "cost_of_sales",
    "GrossProfit": "gross_profit",
    "ProfitLossFromOperatingActivities": "operating_income",
    "OperatingIncomeLoss": "operating_income",
    "ProfitLoss": "net_income",
    "Assets": "total_assets",
    "CurrentAssets": "current_assets",
    "NoncurrentAssets": "non_current_assets",
    "CashAndCashEquivalents": "cash_and_equivalents",
    "Liabilities": "total_liabilities",
    "CurrentLiabilities": "current_liabilities",
    "NoncurrentLiabilities": "non_current_liabilities",
    "CurrentBorrowings": "short_term_borrowings",
    "ShorttermBorrowings": "short_term_borrowings",
    "NoncurrentBorrowings": "long_term_borrowings",
    "LongTermBorrowingsGross": "long_term_borrowings",
    "Bonds": "bonds",
    "BondsIssued": "bonds",
    "Equity": "equity_including_nci",
    "EquityAttributableToOwnersOfParent": "total_equity",
    "CashFlowsFromUsedInOperatingActivities": "operating_cashflow",
    "CashFlowsFromUsedInInvestingActivities": "investing_cashflow",
    "CashFlowsFromUsedInFinancingActivities": "financing_cashflow",
    "CashFlowsFromOperatingActivities": "operating_cashflow",
    "CashFlowsFromInvestingActivities": "investing_cashflow",
    "CashFlowsFromFinancingActivities": "financing_cashflow",
    "매출액": "revenue",
    "매출원가": "cost_of_sales",
    "매출총이익": "gross_profit",
    "판매비와관리비": "selling_and_administrative_expenses",
    "영업이익": "operating_income",
    "기타수익": "other_income",
    "기타비용": "other_expenses",
    "금융수익": "finance_income",
    "금융비용": "finance_cost",
    "법인세비용차감전순이익": "profit_before_tax",
    "법인세비용": "income_tax_expense",
    "당기순이익": "net_income",
    "총포괄이익": "comprehensive_income",
    "기타포괄손익": "other_comprehensive_income",
    "기본주당이익": "basic_eps",
    "희석주당이익": "diluted_eps",
    "지분법손익": "equity_method_income",
    "감가상각비": "depreciation",
    "자산총계": "total_assets",
    "유동자산": "current_assets",
    "비유동자산": "non_current_assets",
    "현금및현금성자산": "cash_and_equivalents",
    "단기금융상품": "shortterm_financial_instruments",
    "매출채권및기타채권": "trade_receivables",
    "재고자산": "inventories",
    "유형자산": "ppe",
    "무형자산": "intangible_assets",
    "관계기업및공동기업투자": "investments_in_associates",
    "부채총계": "total_liabilities",
    "유동부채": "current_liabilities",
    "비유동부채": "non_current_liabilities",
    "단기차입금": "short_term_borrowings",
    "장기차입금": "long_term_borrowings",
    "사채": "bonds",
    "매입채무및기타채무": "trade_payables",
    "이연법인세부채": "deferred_tax_liabilities",
    "자본총계": "equity_including_nci",
    "지배기업 소유주지분": "total_equity",
    "비지배지분": "equity_nci",
    "자본금": "issued_capital",
    "주식발행초과금": "share_premium",
    "이익잉여금": "retained_earnings",
    "자기주식": "treasury_stock",
    "기타자본구성요소": "other_equity_components",
    "영업활동현금흐름": "operating_cashflow",
    "투자활동현금흐름": "investing_cashflow",
    "재무활동현금흐름": "financing_cashflow",
    "현금및현금성자산증감": "net_cash_increase",
    "배당금": "dividends_paid",
}


def _stripPrefix(accountId: str) -> str:
    return _PREFIX_RE.sub("", accountId)


class AccountMapper:
    """계정명 매핑기 (eddmpython v6 파이프라인).

    1. account_id prefix 제거 → normalizedId
    2. ID_SYNONYMS 적용 (동의어 ID 통합)
    3. ACCOUNT_NAME_SYNONYMS 적용 (동의어 한글명 통합)
    4. CORE_MAP 조회 (핵심 계정 오버라이드)
    5. accountMappings.json 조회
    6. 괄호 제거 후 재조회
    """

    _instance: Optional[AccountMapper] = None
    _mappings: Optional[dict[str, str]] = None

    @classmethod
    def get(cls) -> AccountMapper:
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    def __init__(self):
        if AccountMapper._mappings is None:
            path = _DATA_DIR / "accountMappings.json"
            with open(path, encoding="utf-8") as f:
                data = json.load(f)
            AccountMapper._mappings = data["mappings"]

    def map(self, accountId: str, accountNm: str) -> Optional[str]:
        """account_id + account_nm → snakeId.

        Returns:
            snakeId 또는 None (미매핑).
        """
        stripped = _stripPrefix(accountId) if accountId else ""
        normalizedId = ID_SYNONYMS.get(stripped, stripped)

        normalizedNm = ACCOUNT_NAME_SYNONYMS.get(accountNm, accountNm) if accountNm else ""

        if normalizedId in CORE_MAP:
            return CORE_MAP[normalizedId]
        if normalizedNm in CORE_MAP:
            return CORE_MAP[normalizedNm]

        if normalizedId and normalizedId in self._mappings:
            return self._mappings[normalizedId]

        if normalizedNm and normalizedNm in self._mappings:
            return self._mappings[normalizedNm]

        if normalizedNm:
            stripped_paren = _PAREN_RE.sub("", normalizedNm).replace(" ", "")
            if stripped_paren != normalizedNm and stripped_paren in self._mappings:
                return self._mappings[stripped_paren]

        return None

    def labelMap(self) -> dict[str, str]:
        """snakeId → 대표 한글명 매핑 (캐싱).

        우선순위:
        1. CORE_MAP 한글 항목의 역방향
        2. accountMappings.json에서 한글명 중 가장 짧은 것
        """
        if hasattr(self, "_labelMap"):
            return self._labelMap

        result: dict[str, str] = {}

        for name, snakeId in CORE_MAP.items():
            if any("\uac00" <= ch <= "\ud7a3" for ch in name):
                if snakeId not in result:
                    result[snakeId] = name

        if self._mappings:
            reverse: dict[str, list[str]] = {}
            for name, snakeId in self._mappings.items():
                if any("\uac00" <= ch <= "\ud7a3" for ch in name):
                    reverse.setdefault(snakeId, []).append(name)
            for snakeId, names in reverse.items():
                if snakeId not in result:
                    result[snakeId] = min(names, key=len)

        self._labelMap = result
        return result
