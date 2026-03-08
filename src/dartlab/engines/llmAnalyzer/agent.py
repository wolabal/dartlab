"""Tool-use 에이전트 루프.

LLM이 필요한 도구를 직접 선택하여 반복적으로 분석을 수행한다.
OpenAI function calling 프로토콜을 사용.
"""

from __future__ import annotations

import json
from typing import Any, Callable

from dartlab.engines.llmAnalyzer.providers.base import BaseProvider
from dartlab.engines.llmAnalyzer.tools_registry import (
	execute_tool,
	get_tool_schemas,
	register_defaults,
)


def agent_loop(
	provider: BaseProvider,
	messages: list[dict],
	company: Any,
	*,
	max_turns: int = 5,
	on_tool_call: Callable[[str, dict], None] | None = None,
	on_tool_result: Callable[[str, str], None] | None = None,
) -> str:
	"""에이전트 루프: LLM ↔ 도구 반복 실행.

	1. LLM에 tools 스키마와 함께 호출
	2. tool_calls가 있으면 실행 후 결과를 messages에 추가
	3. tool_calls가 없으면 최종 답변 반환
	4. max_turns까지 반복

	Args:
		provider: LLM provider 인스턴스
		messages: 초기 메시지 (system + user)
		company: Company 인스턴스 (도구 바인딩용)
		max_turns: 최대 반복 횟수
		on_tool_call: 도구 호출 시 콜백 (UI용)
		on_tool_result: 도구 결과 시 콜백 (UI용)

	Returns:
		LLM의 최종 답변 텍스트
	"""
	register_defaults(company)
	tools = get_tool_schemas()

	last_answer = ""

	for _turn in range(max_turns):
		response = provider.complete_with_tools(messages, tools)
		last_answer = response.answer

		if not response.tool_calls:
			return response.answer

		# assistant 메시지 추가 (tool_calls 포함)
		assistant_msg: dict[str, Any] = {"role": "assistant"}
		if response.answer:
			assistant_msg["content"] = response.answer
		else:
			assistant_msg["content"] = None

		assistant_msg["tool_calls"] = [
			{
				"id": tc.id,
				"type": "function",
				"function": {
					"name": tc.name,
					"arguments": json.dumps(tc.arguments, ensure_ascii=False),
				},
			}
			for tc in response.tool_calls
		]
		messages.append(assistant_msg)

		# 도구 실행 + 결과 추가
		for tc in response.tool_calls:
			if on_tool_call:
				on_tool_call(tc.name, tc.arguments)

			result = execute_tool(tc.name, tc.arguments)

			if on_tool_result:
				on_tool_result(tc.name, result)

			messages.append({
				"role": "tool",
				"tool_call_id": tc.id,
				"content": result,
			})

	return last_answer


# 에이전트 모드 시스템 프롬프트 추가
AGENT_SYSTEM_ADDITION = """

## 도구 사용 안내

당신은 DartLab 분석 도구를 사용할 수 있습니다.
필요한 데이터를 도구를 통해 조회하고, 분석 결과를 종합하여 답변하세요.

### 사용 가능한 도구:
- `get_data`: 기업의 재무/공시 데이터 조회 (BS, IS, CF, dividend 등)
- `compute_ratios`: 재무비율 자동 계산 (부채비율, ROE 등)
- `detect_anomalies`: 이상치 탐지 (급격한 변동, 부호 반전)
- `compute_growth`: 성장률 매트릭스 (1Y/2Y/3Y/5Y CAGR)
- `yoy_analysis`: 전년 대비 변동 분석
- `get_summary`: 요약 통계 (평균, 추세, CAGR)
- `get_company_info`: 기업 기본 정보

### 분석 절차:
1. 질문을 이해하고 필요한 데이터를 파악
2. 도구로 데이터를 조회/분석
3. 결과를 종합하여 구조화된 답변 작성
4. 근거 데이터를 반드시 인용
"""
