"""DartLab Web Server — FastAPI + SSE 스트리밍.

dartlab ui 명령으로 실행:
    dartlab ui              # http://localhost:8400
    dartlab ui --port 9000  # 커스텀 포트
"""

from __future__ import annotations

import asyncio
import importlib.resources
import json
import traceback
from pathlib import Path
from typing import Any, Generator

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sse_starlette.sse import EventSourceResponse

import dartlab
from dartlab import Company


app = FastAPI(title="DartLab", version=dartlab.__version__ if hasattr(dartlab, "__version__") else "0.2.0")

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_methods=["*"],
	allow_headers=["*"],
)


# ── Models ──

class HistoryMessage(BaseModel):
	role: str  # "user" | "assistant"
	text: str


class AskRequest(BaseModel):
	company: str | None = None
	question: str
	provider: str | None = None
	model: str | None = None
	include: list[str] | None = None
	exclude: list[str] | None = None
	stream: bool = False
	history: list[HistoryMessage] | None = None  # 이전 대화 기록


class ConfigureRequest(BaseModel):
	provider: str = "codex"
	model: str | None = None
	api_key: str | None = None
	base_url: str | None = None


# ── API Routes ──

@app.get("/api/status")
def api_status():
	"""LLM provider 상태 확인 (설치/인증/모델 포함)."""
	from dartlab.engines.llmAnalyzer.providers import create_provider
	from dartlab.engines.llmAnalyzer.types import LLMConfig

	# TODO: claude-code, codex, openai, claude — CLI/API 키 문제 해결 후 복원
	# providers_list = ["codex", "claude-code", "ollama", "openai", "claude"]
	providers_list = ["ollama"]
	results = {}

	# Provider별 메타 정보
	meta = {
		# "openai": {"label": "OpenAI", "desc": "GPT-5.4, o4-mini 등", "auth": "api_key", "envKey": "OPENAI_API_KEY"},
		# "claude": {"label": "Anthropic Claude", "desc": "Opus 4.6, Sonnet 4.6 등", "auth": "api_key", "envKey": "ANTHROPIC_API_KEY"},
		"ollama": {"label": "Ollama (로컬)", "desc": "무료, 오프라인, 프라이빗", "auth": "none"},
		# "claude-code": {"label": "Claude Code", "desc": "Claude CLI 기반", "auth": "cli"},
		# "codex": {"label": "OpenAI Codex", "desc": "Codex CLI 기반", "auth": "cli"},
	}

	for prov in providers_list:
		info = {"available": False, "model": None, **(meta.get(prov, {}))}
		try:
			config = LLMConfig(provider=prov)
			provider = create_provider(config)
			available = provider.check_available()
			info["available"] = available
			info["model"] = provider.resolved_model
		except Exception:
			pass
		results[prov] = info

	# Ollama 추가 상태 (설치/실행/GPU)
	ollama_detail = {}
	try:
		from dartlab.engines.llmAnalyzer.ollama_setup import detect_ollama, get_install_guide
		ollama_info = detect_ollama()
		ollama_detail["installed"] = ollama_info.get("installed", False)
		ollama_detail["running"] = ollama_info.get("running", False)
		ollama_detail["gpu"] = ollama_info.get("gpu", None)
		if not ollama_info.get("installed"):
			ollama_detail["installGuide"] = get_install_guide()
	except Exception:
		ollama_detail["installed"] = False
		ollama_detail["running"] = False

	return {"providers": results, "ollama": ollama_detail}


@app.post("/api/configure")
def api_configure(req: ConfigureRequest):
	"""LLM provider 설정. API 키 검증 포함."""
	from dartlab.engines.llmAnalyzer import get_config
	from dartlab.engines.llmAnalyzer.providers import create_provider
	from dartlab.engines.llmAnalyzer.types import LLMConfig

	# 기존 설정을 유지하면서 새 값만 오버라이드
	current = get_config()
	kwargs: dict[str, Any] = {"provider": req.provider}
	if req.model:
		kwargs["model"] = req.model
	if req.api_key:
		kwargs["api_key"] = req.api_key
	elif current.api_key and current.provider == req.provider:
		# 같은 provider면 기존 API 키 유지
		kwargs["api_key"] = current.api_key
	if req.base_url:
		kwargs["base_url"] = req.base_url
	elif current.base_url and current.provider == req.provider:
		kwargs["base_url"] = current.base_url
	dartlab.llm.configure(**kwargs)

	# 설정 후 실제 사용 가능한지 체크
	available = False
	model = None
	try:
		config = LLMConfig(**kwargs)
		provider = create_provider(config)
		available = provider.check_available()
		model = provider.resolved_model
	except Exception:
		pass

	return {"ok": True, "provider": req.provider, "available": available, "model": model}


@app.get("/api/models/{provider}")
def api_models(provider: str):
	"""Provider별 사용 가능한 모델 목록 — SDK/API 자동 조회, 실패시 fallback."""
	from dartlab.engines.llmAnalyzer.providers import create_provider
	from dartlab.engines.llmAnalyzer.types import LLMConfig

	# CLI 기반 provider: 별칭 + 주요 모델ID
	CLI_MODELS = {
		"claude-code": [
			"opus",               # 최신 Opus (현재 4.6)
			"sonnet",             # 최신 Sonnet (현재 4.6)
			"haiku",              # 최신 Haiku (현재 4.5)
			"claude-opus-4-6",
			"claude-sonnet-4-6",
			"claude-haiku-4-5-20251001",
			"claude-opus-4-5",
			"claude-sonnet-4-5",
		],
		"codex": [
			"gpt-5.4",
			"gpt-5.4-pro",
			"gpt-5.3-codex",
			"gpt-5.2",
			"gpt-5.2-codex",
			"o4-mini",
			"o3",
			"gpt-4.1",
			"gpt-4.1-mini",
		],
	}
	if provider in CLI_MODELS:
		return {"models": CLI_MODELS[provider]}

	# Ollama: 로컬 설치된 모델 조회
	if provider == "ollama":
		try:
			config = LLMConfig(provider="ollama")
			prov = create_provider(config)
			return {"models": prov.get_installed_models()}
		except Exception:
			return {"models": []}

	# OpenAI: SDK의 models.list() 사용
	if provider == "openai":
		models = _fetch_openai_models()
		if models:
			return {"models": models}
		# API 키 없거나 실패시 fallback
		return {"models": [
			"gpt-5.4", "gpt-5.4-pro",
			"gpt-5.2", "gpt-5.2-pro",
			"gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano",
			"o4-mini", "o3", "o3-mini",
			"gpt-4o", "gpt-4o-mini",
		]}

	# Claude: REST API로 조회
	if provider == "claude":
		models = _fetch_anthropic_models()
		if models:
			return {"models": models}
		return {"models": [
			"claude-opus-4-6",
			"claude-sonnet-4-6",
			"claude-opus-4-5",
			"claude-sonnet-4-5",
			"claude-haiku-4-5-20251001",
		]}

	return {"models": []}


def _get_api_key(provider: str) -> str | None:
	"""글로벌 config 또는 환경변수에서 API 키를 가져온다."""
	import os
	from dartlab.engines.llmAnalyzer import get_config
	config = get_config()
	if config.api_key and config.provider == provider:
		return config.api_key
	env_map = {"openai": "OPENAI_API_KEY", "claude": "ANTHROPIC_API_KEY"}
	return os.environ.get(env_map.get(provider, ""))


def _fetch_openai_models() -> list[str]:
	"""OpenAI SDK로 모델 목록을 가져온다."""
	api_key = _get_api_key("openai")
	if not api_key:
		return []
	try:
		from openai import OpenAI
		client = OpenAI(api_key=api_key)
		raw = client.models.list()
		# 채팅 가능한 모델만 필터링
		chat_prefixes = ("gpt-5", "gpt-4", "gpt-3.5", "o1", "o3", "o4")
		exclude = ("realtime", "audio", "search", "instruct", "embedding", "tts", "whisper", "dall-e", "davinci", "babbage", "transcribe")
		models = []
		for m in raw:
			mid = m.id
			if any(mid.startswith(p) for p in chat_prefixes):
				if not any(x in mid for x in exclude):
					models.append(mid)
		# 정렬: 최신/인기 순
		priority = [
			"gpt-5.4", "gpt-5.4-pro", "gpt-5.3-codex", "gpt-5.2", "gpt-5.2-pro", "gpt-5.2-codex",
			"gpt-5.1", "gpt-5", "gpt-5-mini",
			"gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano",
			"gpt-4o", "gpt-4o-mini",
			"o4-mini", "o3", "o3-mini", "o1", "o1-mini",
		]
		def sort_key(name):
			for i, p in enumerate(priority):
				if name == p or name.startswith(p + "-"):
					return (i, name)
			return (100, name)
		models.sort(key=sort_key)
		return models
	except Exception:
		return []


def _fetch_anthropic_models() -> list[str]:
	"""Anthropic REST API로 모델 목록을 가져온다 (SDK에 models.list 없음)."""
	api_key = _get_api_key("claude")
	if not api_key:
		return []
	try:
		import requests
		resp = requests.get(
			"https://api.anthropic.com/v1/models",
			headers={"x-api-key": api_key, "anthropic-version": "2023-06-01"},
			timeout=5,
		)
		if resp.status_code != 200:
			return []
		data = resp.json()
		models = [m["id"] for m in data.get("data", []) if "claude" in m.get("id", "")]
		# 정렬: 최신 먼저
		priority = ["claude-opus-4-6", "claude-sonnet-4-6", "claude-opus-4-5", "claude-sonnet-4-5", "claude-opus-4-1", "claude-sonnet-4-0", "claude-haiku-4", "claude-3-"]
		def sort_key(name):
			for i, p in enumerate(priority):
				if name.startswith(p):
					return (i, name)
			return (100, name)
		models.sort(key=sort_key)
		return models
	except Exception:
		return []


@app.post("/api/ollama/pull")
async def api_ollama_pull(req: dict):
	"""Ollama 모델 다운로드 (SSE 스트리밍 진행률)."""
	model_name = req.get("model")
	if not model_name:
		raise HTTPException(400, "model name required")

	async def _stream_pull():
		import requests
		try:
			resp = requests.post(
				"http://localhost:11434/api/pull",
				json={"model": model_name, "stream": True},
				stream=True,
				timeout=600,
			)
			for line in resp.iter_lines():
				if line:
					yield {
						"event": "progress",
						"data": line.decode("utf-8"),
					}
			yield {"event": "done", "data": "{}"}
		except Exception as e:
			yield {"event": "error", "data": json.dumps({"error": str(e)})}

	return EventSourceResponse(_stream_pull(), media_type="text/event-stream")


@app.get("/api/search")
def api_search(q: str = Query(..., min_length=1)):
	"""종목 검색."""
	try:
		df = Company.search(q)
		rows = df.to_dicts() if len(df) > 0 else []
		# 한글 컬럼명 → 영문 매핑
		mapped = []
		for r in rows[:20]:
			mapped.append({
				"corpName": r.get("회사명", r.get("corpName", "")),
				"stockCode": r.get("종목코드", r.get("stockCode", "")),
				"market": r.get("시장구분", ""),
				"sector": r.get("업종", ""),
			})
		return {"results": mapped}
	except Exception as e:
		raise HTTPException(status_code=400, detail=str(e))


@app.get("/api/company/{code}")
def api_company(code: str):
	"""기업 기본 정보."""
	try:
		c = Company(code)
		return {
			"stockCode": c.stockCode,
			"corpName": c.corpName,
		}
	except Exception as e:
		raise HTTPException(status_code=404, detail=str(e))


def _try_resolve_company(req: AskRequest) -> Company | None:
	"""company 필드 또는 질문에서 종목을 찾는다. 못 찾으면 None."""
	if req.company:
		try:
			return Company(req.company)
		except Exception:
			return None

	import re
	q = req.question
	code_match = re.search(r'\b(\d{6})\b', q)
	if code_match:
		try:
			return Company(code_match.group(1))
		except Exception:
			return None

	words = re.split(r'\s+', q)
	for length in range(min(4, len(words)), 0, -1):
		for i in range(len(words) - length + 1):
			candidate = " ".join(words[i:i + length])
			if len(candidate) < 2:
				continue
			try:
				df = Company.search(candidate)
				if len(df) > 0:
					row = df.to_dicts()[0]
					code = row.get("종목코드", row.get("stockCode", ""))
					if code:
						return Company(code)
			except Exception:
				continue

	return None


@app.post("/api/ask")
async def api_ask(req: AskRequest):
	"""LLM 질문 — 종목이 있으면 데이터 기반 분석, 없으면 순수 대화."""
	dartlab.verbose = False

	if req.provider or req.model:
		# 기존 설정을 유지하면서 provider/model만 오버라이드
		from dartlab.engines.llmAnalyzer import get_config
		current = get_config()
		overrides: dict[str, Any] = {
			"provider": req.provider or current.provider,
		}
		if req.model:
			overrides["model"] = req.model
		if current.api_key:
			overrides["api_key"] = current.api_key
		if current.base_url:
			overrides["base_url"] = current.base_url
		dartlab.llm.configure(**overrides)

	c = _try_resolve_company(req)

	if req.stream:
		return EventSourceResponse(
			_stream_ask(c, req),
			media_type="text/event-stream",
		)

	if c is None:
		return await _plain_chat(req)

	try:
		answer = await asyncio.to_thread(
			c.ask,
			req.question,
			include=req.include,
			exclude=req.exclude,
		)
		return {
			"company": c.corpName,
			"stockCode": c.stockCode,
			"answer": answer,
		}
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))


_CHAT_SYSTEM_PROMPT = (
	"당신은 DartLab의 금융 분석 AI 어시스턴트입니다. "
	"한국 주식시장과 DART 공시 데이터에 대해 전문적으로 답변합니다. "
	"특정 종목을 분석하려면 종목명을 알려달라고 안내하세요.\n\n"
	"답변 시 수치 데이터가 포함되면 반드시 마크다운 테이블(|표)을 적극 활용하세요. "
	"시계열 데이터(연도별 매출, 이익률 추이 등)는 테이블로 정리하고, "
	"비교 데이터도 테이블로 제시하세요. 핵심 수치는 **굵게** 표시하세요."
)

# 멀티턴 히스토리에서 최근 N턴만 포함 (토큰 절약)
_MAX_HISTORY_TURNS = 10


def _build_history_messages(history: list[HistoryMessage] | None) -> list[dict[str, str]]:
	"""클라이언트의 대화 기록을 LLM messages 포맷으로 변환. 최근 N턴만 유지."""
	if not history:
		return []
	# 최근 N*2 메시지만 (user+assistant 1쌍 = 2메시지)
	trimmed = history[-(_MAX_HISTORY_TURNS * 2):]
	msgs = []
	for h in trimmed:
		role = h.role if h.role in ("user", "assistant") else "user"
		text = h.text.strip()
		if text:
			msgs.append({"role": role, "content": text})
	return msgs


async def _plain_chat(req: AskRequest):
	"""종목 없는 순수 LLM 대화."""
	from dartlab.engines.llmAnalyzer import get_config
	from dartlab.engines.llmAnalyzer.providers import create_provider

	config_ = get_config()
	overrides: dict[str, Any] = {}
	if req.provider:
		overrides["provider"] = req.provider
	if req.model:
		overrides["model"] = req.model
	if overrides:
		config_ = config_.merge(overrides)

	messages = [{"role": "system", "content": _CHAT_SYSTEM_PROMPT}]
	messages.extend(_build_history_messages(req.history))
	messages.append({"role": "user", "content": req.question})

	llm = create_provider(config_)
	try:
		answer = await asyncio.to_thread(llm.complete, messages)
		return {"answer": answer}
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))


async def _stream_ask(c: Company | None, req: AskRequest):
	"""SSE 스트리밍 generator."""
	from dartlab.engines.llmAnalyzer import get_config
	from dartlab.engines.llmAnalyzer.providers import create_provider

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

		history_msgs = _build_history_messages(req.history)

		if c:
			from dartlab.engines.llmAnalyzer.context import build_context, detect_year_range, _get_sector
			from dartlab.engines.llmAnalyzer.pipeline import run_pipeline
			from dartlab.engines.llmAnalyzer.prompts import build_system_prompt, _classify_question

			context_text, included_tables = await asyncio.to_thread(
				build_context, c, req.question,
				req.include, req.exclude,
			)

			# 연도 범위를 meta 이벤트로 보충 전송
			year_range = await asyncio.to_thread(detect_year_range, c, included_tables)
			if year_range:
				yield {
					"event": "meta",
					"data": json.dumps({
						"dataYearRange": year_range,
					}, ensure_ascii=False),
				}

			pipeline_result = await asyncio.to_thread(
				run_pipeline, c, req.question, included_tables,
			)
			if pipeline_result:
				context_text = context_text + pipeline_result

			sector = _get_sector(c)
			question_type = _classify_question(req.question)
			system = build_system_prompt(
				config_.system_prompt,
				included_modules=included_tables,
				sector=sector,
				question_type=question_type,
			)
			messages = [{"role": "system", "content": system}]
			messages.extend(history_msgs)
			messages.append({"role": "user", "content": f"{context_text}\n\n---\n\n질문: {req.question}"})
		else:
			messages = [{"role": "system", "content": _CHAT_SYSTEM_PROMPT}]
			messages.extend(history_msgs)
			messages.append({"role": "user", "content": req.question})

		llm = create_provider(config_)

		# 스트리밍 (blocking generator → async)
		def _gen():
			yield from llm.stream(messages)

		gen = _gen()
		while True:
			chunk = await asyncio.to_thread(next, gen, None)
			if chunk is None:
				break
			yield {
				"event": "chunk",
				"data": json.dumps({"text": chunk}, ensure_ascii=False),
			}

	except Exception as e:
		yield {
			"event": "error",
			"data": json.dumps({"error": str(e)}, ensure_ascii=False),
		}

	yield {"event": "done", "data": "{}"}


# ── Static Files (Svelte build) ──

_UI_DIR = Path(__file__).parent / "ui" / "build"

if _UI_DIR.exists():
	app.mount("/assets", StaticFiles(directory=str(_UI_DIR / "assets")), name="assets")


@app.get("/{path:path}")
def serve_spa(path: str = ""):
	"""SPA fallback — index.html 반환."""
	if not _UI_DIR.exists():
		return HTMLResponse(
			"<h2>DartLab UI not built</h2>"
			"<p>Run: <code>cd src/dartlab/ui && npm install && npm run build</code></p>",
			status_code=503,
		)

	file = _UI_DIR / path
	if path and file.is_file():
		return FileResponse(file)

	index = _UI_DIR / "index.html"
	if index.exists():
		return FileResponse(index, media_type="text/html")

	return HTMLResponse("<h2>index.html not found</h2>", status_code=404)


def run_server(host: str = "0.0.0.0", port: int = 8400):
	"""서버 실행."""
	import socket
	import sys

	import uvicorn

	sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	try:
		sock.bind(("127.0.0.1", port))
		sock.close()
	except OSError:
		print(f"\n  오류: 포트 {port}이 이미 사용 중입니다.", file=sys.stderr)
		print(f"  다른 포트를 사용하세요: dartlab ui --port {port + 1}\n", file=sys.stderr)
		return

	uvicorn.run(app, host=host, port=port, log_level="info")
