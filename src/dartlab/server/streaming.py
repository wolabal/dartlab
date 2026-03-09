"""SSE 스트리밍 generator — 분석/대화 응답 생성."""

from __future__ import annotations

import asyncio
import json
from typing import Any

from dartlab import Company

from .models import AskRequest
from .resolve import has_analysis_intent
from .chat import build_dynamic_chat_prompt, build_history_messages, build_snapshot


async def stream_ask(c: Company | None, req: AskRequest, *, not_found_msg: str | None = None):
	"""SSE 스트리밍 generator.

	이벤트 흐름:
	  meta → snapshot → context (모듈별, 여러 번) → chunk... → done
	  tool_call/tool_result 이벤트는 agent_loop 사용 시 추가
	"""
	from dartlab.engines.ai import get_config
	from dartlab.engines.ai.providers import create_provider

	if not_found_msg:
		yield {
			"event": "meta",
			"data": json.dumps({"company": None, "stockCode": None}, ensure_ascii=False),
		}
		yield {
			"event": "chunk",
			"data": json.dumps({"text": not_found_msg}, ensure_ascii=False),
		}
		yield {"event": "done", "data": "{}"}
		return

	yield {
		"event": "meta",
		"data": json.dumps({
			"company": c.corpName if c else None,
			"stockCode": c.stockCode if c else None,
		}, ensure_ascii=False),
	}

	try:
		config_ = get_config()
		overrides: dict[str, Any] = {}
		if req.provider:
			overrides["provider"] = req.provider
		if req.model:
			overrides["model"] = req.model
		if overrides:
			config_ = config_.merge(overrides)

		use_compact = config_.provider in ("ollama", "codex", "claude-code")
		history_msgs = build_history_messages(req.history)

		if c and not has_analysis_intent(req.question):
			snapshot = await asyncio.to_thread(build_snapshot, c)
			if snapshot:
				yield {
					"event": "snapshot",
					"data": json.dumps(snapshot, ensure_ascii=False),
				}

			light_prompt = (
				build_dynamic_chat_prompt()
				+ f"\n\n## 현재 대화 종목\n"
				f"사용자가 **{c.corpName}** ({c.stockCode})에 대해 이야기하고 있습니다.\n"
				f"아직 구체적 분석 요청은 아닙니다. 가볍게 대화하되, "
				f"분석이 필요하면 어떤 분석을 원하는지 물어보세요.\n"
				f"예: '어떤 분석을 원하시나요? 재무 건전성, 수익성, 배당, 종합 분석 등을 해드릴 수 있습니다.'"
			)
			messages = [{"role": "system", "content": light_prompt}]
			messages.extend(history_msgs)
			messages.append({"role": "user", "content": req.question})

			yield {
				"event": "system_prompt",
				"data": json.dumps({"text": light_prompt}, ensure_ascii=False),
			}

			llm = create_provider(config_)
			def _gen_light():
				yield from llm.stream(messages)
			gen = _gen_light()
			while True:
				chunk = await asyncio.to_thread(next, gen, None)
				if chunk is None:
					break
				yield {
					"event": "chunk",
					"data": json.dumps({"text": chunk}, ensure_ascii=False),
				}
			yield {"event": "done", "data": "{}"}
			return

		elif c:
			from dartlab.engines.ai.context import (
				build_context_by_module,
				detect_year_range, _get_sector,
			)
			from dartlab.engines.ai.prompts import build_system_prompt, _classify_question_multi
			from dartlab.engines.ai.metadata import MODULE_META

			snapshot = await asyncio.to_thread(build_snapshot, c)
			if snapshot:
				yield {
					"event": "snapshot",
					"data": json.dumps(snapshot, ensure_ascii=False),
				}

			modules_dict, included_tables, header_text = await asyncio.to_thread(
				build_context_by_module, c, req.question,
				req.include, req.exclude, use_compact,
			)

			if "_full" in modules_dict:
				context_text = modules_dict["_full"]
				yield {
					"event": "context",
					"data": json.dumps({
						"module": "_full",
						"label": "전체 데이터",
						"text": context_text,
					}, ensure_ascii=False),
				}
			else:
				for mod_name in included_tables:
					mod_text = modules_dict.get(mod_name, "")
					if not mod_text:
						continue
					meta_info = MODULE_META.get(mod_name)
					label = meta_info.label if meta_info else mod_name
					yield {
						"event": "context",
						"data": json.dumps({
							"module": mod_name,
							"label": label,
							"text": mod_text,
						}, ensure_ascii=False),
					}
				parts = [header_text] if header_text else []
				for name in included_tables:
					if name in modules_dict:
						parts.append(modules_dict[name])
				context_text = "\n".join(parts)

			if not use_compact:
				from dartlab.engines.ai.pipeline import run_pipeline
				pipeline_result = await asyncio.to_thread(
					run_pipeline, c, req.question, included_tables,
				)
				if pipeline_result:
					context_text = context_text + pipeline_result

			meta_payload: dict[str, Any] = {"includedModules": included_tables}
			if not use_compact:
				year_range = await asyncio.to_thread(detect_year_range, c, included_tables)
				if year_range:
					meta_payload["dataYearRange"] = year_range
			yield {
				"event": "meta",
				"data": json.dumps(meta_payload, ensure_ascii=False),
			}

			sector = _get_sector(c)
			question_types = _classify_question_multi(req.question)
			system = build_system_prompt(
				config_.system_prompt,
				included_modules=included_tables,
				sector=sector,
				question_types=question_types,
				compact=use_compact,
			)
			messages = [{"role": "system", "content": system}]
			messages.extend(history_msgs)
			user_content = f"{context_text}\n\n---\n\n질문: {req.question}"
			messages.append({"role": "user", "content": user_content})

			yield {
				"event": "system_prompt",
				"data": json.dumps({"text": system, "userContent": user_content}, ensure_ascii=False),
			}
		else:
			chat_prompt = build_dynamic_chat_prompt()
			messages = [{"role": "system", "content": chat_prompt}]
			messages.extend(history_msgs)
			messages.append({"role": "user", "content": req.question})

			yield {
				"event": "system_prompt",
				"data": json.dumps({"text": chat_prompt}, ensure_ascii=False),
			}

		llm = create_provider(config_)

		use_guided = (
			use_compact
			and c is not None
			and hasattr(llm, "complete_json")
		)
		use_tools = c is not None and not use_guided and hasattr(llm, "complete_with_tools")

		full_response_parts: list[str] = []
		done_payload: dict[str, Any] = {}

		if use_guided:
			from dartlab.engines.ai.prompts import GUIDED_SCHEMA, guided_json_to_markdown

			resp = await asyncio.to_thread(llm.complete_json, messages, GUIDED_SCHEMA)
			raw_json = resp.answer
			try:
				parsed = json.loads(raw_json)
				md_text = guided_json_to_markdown(parsed)
				done_payload["guidedRaw"] = parsed
				if parsed.get("grade"):
					done_payload["responseMeta"] = {
						"grade": parsed["grade"],
						"has_conclusion": bool(parsed.get("conclusion")),
						"signals": {
							"positive": [p[:20] for p in parsed.get("positives", [])[:3]],
							"negative": [r.get("description", "")[:20] for r in parsed.get("risks", [])[:3] if isinstance(r, dict)],
						},
						"tables_count": 1,
					}
			except (json.JSONDecodeError, ValueError):
				md_text = raw_json

			full_response_parts.append(md_text)
			yield {
				"event": "chunk",
				"data": json.dumps({"text": md_text}, ensure_ascii=False),
			}

		elif use_tools:
			from dartlab.engines.ai.agent import agent_loop, AGENT_SYSTEM_ADDITION

			messages[0]["content"] += AGENT_SYSTEM_ADDITION

			queue: asyncio.Queue = asyncio.Queue()
			loop = asyncio.get_event_loop()

			def _on_tool_call(name: str, args: dict):
				loop.call_soon_threadsafe(
					queue.put_nowait,
					{"event": "tool_call", "name": name, "arguments": args},
				)

			def _on_tool_result(name: str, result: str):
				loop.call_soon_threadsafe(
					queue.put_nowait,
					{"event": "tool_result", "name": name, "result": result[:2000]},
				)

			async def _run_agent():
				ans = await asyncio.to_thread(
					agent_loop,
					llm, messages, c,
					max_turns=5,
					on_tool_call=_on_tool_call,
					on_tool_result=_on_tool_result,
				)
				await queue.put({"event": "_done", "answer": ans})

			task = asyncio.create_task(_run_agent())

			while True:
				ev = await queue.get()
				if ev["event"] == "_done":
					if ev.get("answer"):
						full_response_parts.append(ev["answer"])
						yield {
							"event": "chunk",
							"data": json.dumps({"text": ev["answer"]}, ensure_ascii=False),
						}
					break
				yield {
					"event": ev["event"],
					"data": json.dumps(ev, ensure_ascii=False),
				}

			await task
		else:
			def _gen():
				yield from llm.stream(messages)

			gen = _gen()
			while True:
				chunk = await asyncio.to_thread(next, gen, None)
				if chunk is None:
					break
				full_response_parts.append(chunk)
				yield {
					"event": "chunk",
					"data": json.dumps({"text": chunk}, ensure_ascii=False),
				}

		if c and full_response_parts:
			from dartlab.engines.ai.prompts import extract_response_meta
			full_text = "".join(full_response_parts)
			response_meta = extract_response_meta(full_text)
			if response_meta.get("grade") or response_meta.get("has_conclusion"):
				done_payload["responseMeta"] = response_meta

	except Exception as e:
		yield {
			"event": "error",
			"data": json.dumps({"error": str(e)}, ensure_ascii=False),
		}

	yield {"event": "done", "data": json.dumps(done_payload, ensure_ascii=False)}
