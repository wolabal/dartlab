"""종목 매칭/검색 로직 — 의도 분류 + 신뢰도 기반 매칭."""

from __future__ import annotations

from dartlab import Company

from .models import AskRequest, HistoryMessage

_COMPANY_SUFFIXES = ("차", "전자", "그룹", "건설", "화학", "제약", "바이오", "증권", "보험", "은행", "금융", "지주", "산업", "통신", "에너지")

_META_KEYWORDS = frozenset({
	"버전", "version", "도움말", "도움", "help", "사용법", "사용방법",
	"뭘할수있", "뭐할수있", "뭘 할 수", "뭐 할 수", "할수있", "기능",
	"데이터", "몇개", "몇 개", "개수", "목록", "리스트", "상태",
	"원본", "raw", "모듈", "module", "다운로드", "설치", "업데이트",
	"안녕", "반가", "고마", "감사", "안녕하세요", "hello", "hi", "thanks",
	"어떻게", "how", "what", "why",
	"설정", "config", "provider", "모델", "ollama",
	"문서", "docs", "파일", "저장",
})

_ANALYSIS_KEYWORDS = frozenset({
	"분석", "건전성", "수익성", "성장성", "배당", "실적", "재무",
	"매출", "영업이익", "순이익", "부채", "자산", "현금흐름",
	"ROE", "ROA", "PER", "PBR", "EPS", "EBITDA", "FCF",
	"리스크", "위험", "감사", "지배구조", "임원", "주주",
	"비교", "추세", "추이", "트렌드", "전망",
	"어때", "어떤가", "괜찮", "좋은가", "분석해", "알려줘", "알려 줘",
	"보여줘", "보여 줘", "해줘", "해 줘", "평가",
})


def is_meta_question(question: str) -> bool:
	"""라이브러리/시스템에 대한 메타 질문인지 판별."""
	q = question.lower().replace(" ", "")
	for kw in _META_KEYWORDS:
		if kw.replace(" ", "") in q:
			return True
	return False


def has_analysis_intent(question: str) -> bool:
	"""분석 의도가 있는 질문인지 판별."""
	for kw in _ANALYSIS_KEYWORDS:
		if kw in question:
			return True
	return False


def _search_strict(query: str) -> Company | None:
	"""신뢰도 높은 종목 매칭. 회사명이 쿼리와 정확히 일치하거나 쿼리를 포함해야 함."""
	if len(query) < 2:
		return None
	try:
		df = Company.search(query)
		if len(df) == 0:
			return None
		for row in df.to_dicts()[:5]:
			name = row.get("회사명", row.get("corpName", ""))
			code = row.get("종목코드", row.get("stockCode", ""))
			if not code:
				continue
			if name == query or query == name:
				return Company(code)
			if name.startswith(query) or query.startswith(name):
				return Company(code)
		return None
	except Exception:
		return None


def _search_fuzzy(query: str) -> Company | None:
	"""단일 쿼리로 Company.search → Company 반환. 정확도 검증 포함."""
	if len(query) < 2:
		return None
	try:
		df = Company.search(query)
		if len(df) == 0:
			return None
		row = df.to_dicts()[0]
		name = row.get("회사명", row.get("corpName", ""))
		code = row.get("종목코드", row.get("stockCode", ""))
		if not code:
			return None
		if name == query or query == name:
			return Company(code)
		if len(query) >= 2 and (name.startswith(query) or query.startswith(name)):
			return Company(code)
		if len(query) >= 3 and query in name:
			return Company(code)
		return None
	except Exception:
		return None


def _search_suggestions(question: str) -> list[dict[str, str]]:
	"""질문에서 단어를 추출하여 비슷한 종목 후보를 검색한다."""
	import re
	words = re.split(r'\s+', question)
	seen_codes: set[str] = set()
	suggestions: list[dict[str, str]] = []

	for word in words:
		if len(word) < 2:
			continue
		queries = [word]
		for suffix in _COMPANY_SUFFIXES:
			if word.endswith(suffix) and len(word) > len(suffix):
				queries.append(word[:-len(suffix)])
		for q in queries:
			try:
				df = Company.search(q)
				for row in df.head(3).to_dicts():
					code = row.get("종목코드", row.get("stockCode", ""))
					name = row.get("회사명", row.get("corpName", ""))
					if code and code not in seen_codes:
						seen_codes.add(code)
						suggestions.append({"corpName": name, "stockCode": code})
						if len(suggestions) >= 5:
							return suggestions
			except Exception:
				continue
	return suggestions


class ResolveResult:
	"""종목 검색 결과를 담는 컨테이너."""
	__slots__ = ("company", "not_found", "suggestions")

	def __init__(self, company: Company | None = None, *, not_found: bool = False, suggestions: list[dict[str, str]] | None = None):
		self.company = company
		self.not_found = not_found
		self.suggestions = suggestions or []


def build_not_found_msg(suggestions: list[dict[str, str]]) -> str:
	"""NOT_FOUND 안내 메시지. 후보가 있으면 목록 포함."""
	if not suggestions:
		return (
			"해당 종목을 찾을 수 없습니다. "
			"정확한 종목명(예: 삼성전자, 기아, LG에너지솔루션) 또는 "
			"6자리 종목코드(예: 005930)로 다시 질문해 주세요."
		)
	lines = ["해당 종목을 정확히 찾지 못했습니다. 혹시 아래 종목을 찾으시나요?\n"]
	for s in suggestions:
		lines.append(f"- **{s['corpName']}** ({s['stockCode']})")
	lines.append("\n종목명이나 종목코드를 정확히 입력하시면 바로 분석해 드리겠습니다.")
	return "\n".join(lines)


def try_resolve_company(req: AskRequest) -> ResolveResult:
	"""company 필드 또는 질문에서 종목을 찾는다.

	신뢰도 기반 매칭:
	- company 필드가 명시적으로 지정되면 그대로 사용
	- 6자리 종목코드는 항상 신뢰
	- 메타 질문(버전, 사용법, 데이터 현황)은 종목 매칭 스킵
	- 분석 의도 키워드 없이 종목명만 있으면 strict 매칭만 시도
	"""
	if req.company:
		try:
			return ResolveResult(company=Company(req.company))
		except Exception:
			suggestions = _search_suggestions(req.company)
			return ResolveResult(not_found=True, suggestions=suggestions)

	import re
	q = req.question

	if is_meta_question(q):
		return ResolveResult()

	code_match = re.search(r'\b(\d{6})\b', q)
	if code_match:
		try:
			return ResolveResult(company=Company(code_match.group(1)))
		except Exception:
			return ResolveResult(not_found=True)

	intent = has_analysis_intent(q)

	words = re.split(r'\s+', q)
	for length in range(min(4, len(words)), 0, -1):
		for i in range(len(words) - length + 1):
			candidate = " ".join(words[i:i + length])
			if intent:
				result = _search_fuzzy(candidate)
			else:
				result = _search_strict(candidate)
			if result:
				return ResolveResult(company=result)

	return ResolveResult()


def try_resolve_from_history(history: list[HistoryMessage]) -> Company | None:
	"""대화 히스토리에서 가장 최근 언급된 종목코드를 찾는다."""
	import re
	for msg in reversed(history):
		if not msg.text:
			continue
		code_match = re.search(r'\b(\d{6})\b', msg.text)
		if code_match:
			try:
				return Company(code_match.group(1))
			except Exception:
				continue
	return None
