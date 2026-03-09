"""ChatGPT OAuth 기반 Codex provider — 진짜 SSE 스트리밍.

ChatGPT Plus/Pro 구독 계정의 OAuth 토큰으로
chatgpt.com/backend-api 엔드포인트에 직접 SSE 스트리밍 요청.
Codex CLI 없이 동작하며, 토큰 단위 실시간 스트리밍을 지원한다.

참고: opencode-openai-codex-auth 프로젝트의 접근법.
"""

from __future__ import annotations

import json
from typing import Generator

import requests

from dartlab.engines.ai.providers.base import BaseProvider
from dartlab.engines.ai.types import LLMResponse
from dartlab.engines.ai import oauthToken


CODEX_API_BASE = "https://chatgpt.com/backend-api"
CODEX_RESPONSES_PATH = "/codex/responses"

AVAILABLE_MODELS = [
    "gpt-5.4",
    "gpt-5.3",
    "gpt-5.3-codex",
    "gpt-5.2",
    "gpt-5.2-codex",
    "gpt-5.1",
    "gpt-5.1-codex",
    "gpt-5.1-codex-mini",
    "o3",
    "o4-mini",
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
]


class OAuthCodexProvider(BaseProvider):
    """ChatGPT OAuth 기반 Codex provider."""

    @property
    def default_model(self) -> str:
        return "gpt-5.4"

    def check_available(self) -> bool:
        return oauthToken.is_authenticated()

    def _build_headers(self, token: str) -> dict[str, str]:
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "originator": "codex_cli_rs",
            "OpenAI-Beta": "responses=experimental",
            "accept": "text/event-stream",
        }
        account_id = oauthToken.get_account_id()
        if account_id:
            headers["chatgpt-account-id"] = account_id
        return headers

    def _build_body(self, messages: list[dict[str, str]]) -> dict:
        system_parts = []
        input_items = []

        for m in messages:
            if m["role"] == "system":
                system_parts.append(m["content"])
            elif m["role"] == "assistant":
                input_items.append({
                    "type": "message",
                    "role": "assistant",
                    "content": [{"type": "output_text", "text": m["content"]}],
                })
            else:
                input_items.append({
                    "type": "message",
                    "role": "user",
                    "content": [{"type": "input_text", "text": m["content"]}],
                })

        body: dict = {
            "model": self.resolved_model,
            "stream": True,
            "store": False,
            "input": input_items,
            "include": ["reasoning.encrypted_content"],
        }

        if system_parts:
            body["instructions"] = "\n\n".join(system_parts)

        return body

    def complete(self, messages: list[dict[str, str]]) -> LLMResponse:
        token = oauthToken.get_valid_token()
        if not token:
            raise PermissionError("ChatGPT OAuth 인증이 필요합니다. 설정에서 로그인하세요.")

        url = f"{CODEX_API_BASE}{CODEX_RESPONSES_PATH}"
        headers = self._build_headers(token)
        body = self._build_body(messages)

        resp = requests.post(url, headers=headers, json=body, timeout=300)

        if resp.status_code == 401:
            refreshed = oauthToken.refresh_access_token()
            if refreshed:
                headers = self._build_headers(refreshed["access_token"])
                resp = requests.post(url, headers=headers, json=body, timeout=300)

        if resp.status_code != 200:
            resp.encoding = "utf-8"
            raise RuntimeError(f"ChatGPT API 오류 (HTTP {resp.status_code}): {resp.text[:500]}")

        resp.encoding = "utf-8"
        answer = self._parse_sse_response(resp.text)
        if not answer:
            raise RuntimeError("ChatGPT API에서 응답을 추출할 수 없습니다.")

        return LLMResponse(
            answer=answer,
            provider="chatgpt",
            model=self.resolved_model,
        )

    def stream(self, messages: list[dict[str, str]]) -> Generator[str, None, None]:
        token = oauthToken.get_valid_token()
        if not token:
            raise PermissionError("ChatGPT OAuth 인증이 필요합니다. 설정에서 로그인하세요.")

        url = f"{CODEX_API_BASE}{CODEX_RESPONSES_PATH}"
        headers = self._build_headers(token)
        body = self._build_body(messages)

        resp = requests.post(url, headers=headers, json=body, stream=True, timeout=300)

        if resp.status_code == 401:
            refreshed = oauthToken.refresh_access_token()
            if refreshed:
                headers = self._build_headers(refreshed["access_token"])
                resp = requests.post(url, headers=headers, json=body, stream=True, timeout=300)

        if resp.status_code != 200:
            resp.encoding = "utf-8"
            err_body = resp.text[:500] if hasattr(resp, "text") else ""
            raise RuntimeError(f"ChatGPT API 오류 (HTTP {resp.status_code}): {err_body}")

        resp.encoding = "utf-8"
        for raw_line in resp.iter_lines(decode_unicode=True):
            if not raw_line:
                continue
            line = raw_line if isinstance(raw_line, str) else raw_line.decode("utf-8")
            if not line.startswith("data: "):
                continue

            data_str = line[6:]
            if data_str == "[DONE]":
                break

            try:
                event = json.loads(data_str)
            except json.JSONDecodeError:
                continue

            event_type = event.get("type", "")

            if event_type == "response.output_text.delta":
                delta = event.get("delta", "")
                if delta:
                    yield delta

            elif event_type == "response.content_part.delta":
                delta = event.get("delta", {})
                text = delta.get("text", "") if isinstance(delta, dict) else ""
                if text:
                    yield text

            elif event_type == "response.output_item.done":
                item = event.get("item", {})
                if item.get("type") == "message":
                    for content in item.get("content", []):
                        if content.get("type") == "output_text":
                            text = content.get("text", "")
                            if text:
                                yield text

    def _parse_sse_response(self, raw: str) -> str:
        """완료된 SSE 응답에서 최종 텍스트 추출."""
        answer = ""
        for line in raw.split("\n"):
            if not line.startswith("data: "):
                continue
            data_str = line[6:]
            if data_str == "[DONE]":
                break
            try:
                event = json.loads(data_str)
            except json.JSONDecodeError:
                continue

            if event.get("type") == "response.completed":
                resp_obj = event.get("response", {})
                for output in resp_obj.get("output", []):
                    if output.get("type") == "message":
                        for content in output.get("content", []):
                            if content.get("type") == "output_text":
                                answer = content.get("text", "")
            elif event.get("type") == "response.output_text.delta":
                answer += event.get("delta", "")

        return answer
