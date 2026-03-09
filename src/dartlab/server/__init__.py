"""DartLab Web Server — FastAPI + SSE 스트리밍.

dartlab ai 명령으로 실행:
    dartlab ai              # http://localhost:8400
    dartlab ai --port 9000  # 커스텀 포트
"""

from __future__ import annotations

import asyncio
import json
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from sse_starlette.sse import EventSourceResponse

import dartlab
from dartlab import Company

from .models import AskRequest, ConfigureRequest
from .resolve import try_resolve_company, try_resolve_from_history, build_not_found_msg
from .chat import build_dynamic_chat_prompt, build_history_messages, build_snapshot, OLLAMA_MODEL_GUIDE
from .streaming import stream_ask


app = FastAPI(title="DartLab", version=dartlab.__version__ if hasattr(dartlab, "__version__") else "0.2.0")


@app.on_event("startup")
async def _preload_ollama():
	"""서버 시작 후 Ollama 모델을 백그라운드에서 미리 로딩 (cold start 제거)."""
	async def _do_preload():
		await asyncio.sleep(2)
		try:
			from dartlab.engines.ai.providers import create_provider
			from dartlab.engines.ai.types import LLMConfig

			config = LLMConfig(provider="ollama")
			provider = create_provider(config)
			if hasattr(provider, "preload") and provider.check_available():
				ok = await asyncio.to_thread(provider.preload)
				if ok:
					print(f"  Ollama 모델 preload 완료: {provider.resolved_model}")
		except Exception:
			pass
	asyncio.create_task(_do_preload())


app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_methods=["*"],
	allow_headers=["*"],
)


@app.get("/api/status")
def api_status():
	"""LLM provider 상태 확인 (설치/인증/모델 포함)."""
	from dartlab.engines.ai.providers import create_provider
	from dartlab.engines.ai.types import LLMConfig

	providers_list = ["chatgpt", "codex", "ollama", "openai"]
	results = {}

	meta = {
		"chatgpt": {"label": "ChatGPT (구독)", "desc": "ChatGPT Plus/Pro 구독, 브라우저 로그인으로 사용", "auth": "oauth"},
		"codex": {"label": "GPT (Codex CLI)", "desc": "ChatGPT Plus/Pro 구독, Codex CLI 필요", "auth": "cli"},
		"ollama": {"label": "Ollama (로컬)", "desc": "무료, 오프라인, 프라이빗", "auth": "none"},
		"openai": {"label": "OpenAI API", "desc": "GPT-5.4, o4 등 전체 모델", "auth": "api_key", "envKey": "OPENAI_API_KEY"},
		"claude": {"label": "Claude API", "desc": "Opus, Sonnet 등 전체 모델", "auth": "api_key", "envKey": "ANTHROPIC_API_KEY"},
		"claude-code": {"label": "Claude Code CLI", "desc": "Claude Pro/Max 구독, API 키 불필요", "auth": "cli"},
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

	ollama_detail = {}
	try:
		from dartlab.engines.ai.ollama_setup import detect_ollama, get_install_guide
		ollama_info = detect_ollama()
		ollama_detail["installed"] = ollama_info.get("installed", False)
		ollama_detail["running"] = ollama_info.get("running", False)
		ollama_detail["gpu"] = ollama_info.get("gpu", None)
		if not ollama_info.get("installed"):
			ollama_detail["installGuide"] = get_install_guide()
	except Exception:
		ollama_detail["installed"] = False
		ollama_detail["running"] = False

	codex_detail = {}
	try:
		from dartlab.engines.ai.cli_setup import detect_codex
		codex_info = detect_codex()
		codex_detail["installed"] = codex_info.get("installed", False)
		codex_detail["version"] = codex_info.get("version")
	except Exception:
		codex_detail["installed"] = False

	chatgpt_detail = {}
	try:
		from dartlab.engines.ai.oauthToken import is_authenticated, load_token
		chatgpt_detail["authenticated"] = is_authenticated()
		token_data = load_token()
		if token_data:
			chatgpt_detail["expiresAt"] = token_data.get("expires_at")
	except Exception:
		chatgpt_detail["authenticated"] = False

	version = dartlab.__version__ if hasattr(dartlab, "__version__") else "unknown"
	return {
		"providers": results,
		"ollama": ollama_detail,
		"codex": codex_detail,
		"chatgpt": chatgpt_detail,
		"version": version,
	}


@app.post("/api/configure")
def api_configure(req: ConfigureRequest):
	"""LLM provider 설정. API 키 검증 포함."""
	from dartlab.engines.ai import configure, get_config
	from dartlab.engines.ai.providers import create_provider
	from dartlab.engines.ai.types import LLMConfig

	current = get_config()
	kwargs: dict[str, Any] = {"provider": req.provider}
	if req.model:
		kwargs["model"] = req.model
	if req.api_key:
		kwargs["api_key"] = req.api_key
	elif current.api_key and current.provider == req.provider:
		kwargs["api_key"] = current.api_key
	if req.base_url:
		kwargs["base_url"] = req.base_url
	elif current.base_url and current.provider == req.provider:
		kwargs["base_url"] = current.base_url
	configure(**kwargs)

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
	from dartlab.engines.ai.providers import create_provider
	from dartlab.engines.ai.types import LLMConfig

	STATIC_MODELS = {
		"claude-code": [
			"sonnet", "opus", "haiku",
			"claude-sonnet-4-6", "claude-opus-4-6",
			"claude-sonnet-4-5", "claude-opus-4-5",
			"claude-haiku-4-5-20251001",
		],
		"codex": [
			"gpt-4.1",
		],
		"chatgpt": [
			"gpt-5.4", "gpt-5.3", "gpt-5.3-codex",
			"gpt-5.2", "gpt-5.2-codex",
			"gpt-5.1", "gpt-5.1-codex", "gpt-5.1-codex-mini",
			"o3", "o4-mini",
			"gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano",
		],
	}
	if provider in STATIC_MODELS:
		return {"models": STATIC_MODELS[provider]}

	if provider == "ollama":
		try:
			config = LLMConfig(provider="ollama")
			prov = create_provider(config)
			installed = prov.get_installed_models()
			return {"models": installed, "recommendations": OLLAMA_MODEL_GUIDE}
		except Exception:
			return {"models": [], "recommendations": OLLAMA_MODEL_GUIDE}

	if provider == "openai":
		models = _fetch_openai_models()
		if models:
			return {"models": models}
		return {"models": [
			"o3", "gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano",
			"o4-mini", "o3-mini",
			"gpt-4o", "gpt-4o-mini",
		]}

	if provider == "claude":
		models = _fetch_anthropic_models()
		if models:
			return {"models": models}
		return {"models": [
			"claude-opus-4-6", "claude-sonnet-4-6",
			"claude-opus-4-5", "claude-sonnet-4-5",
			"claude-haiku-4-5-20251001",
		]}

	return {"models": []}


def _get_api_key(provider: str) -> str | None:
	"""글로벌 config 또는 환경변수에서 API 키를 가져온다."""
	import os
	from dartlab.engines.ai import get_config
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
		chat_prefixes = ("gpt-5", "gpt-4", "gpt-3.5", "o1", "o3", "o4")
		exclude = ("realtime", "audio", "search", "instruct", "embedding", "tts", "whisper", "dall-e", "davinci", "babbage", "transcribe")
		models = []
		for m in raw:
			mid = m.id
			if any(mid.startswith(p) for p in chat_prefixes):
				if not any(x in mid for x in exclude):
					models.append(mid)
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
	"""Anthropic REST API로 모델 목록을 가져온다."""
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


@app.get("/api/oauth/authorize")
def api_oauth_authorize():
	"""ChatGPT OAuth 인증 시작 — 브라우저 로그인 URL 반환 + 로컬 콜백 서버 시작."""
	from dartlab.engines.ai.oauthToken import build_auth_url, OAUTH_REDIRECT_PORT

	auth_url, verifier, state = build_auth_url()

	_oauth_state["verifier"] = verifier
	_oauth_state["state"] = state
	_oauth_state["done"] = False
	_oauth_state["error"] = None

	_start_oauth_callback_server(OAUTH_REDIRECT_PORT)

	return {"authUrl": auth_url, "state": state}


@app.get("/api/oauth/status")
def api_oauth_status():
	"""OAuth 인증 완료 여부 폴링."""
	if _oauth_state.get("error"):
		return {"done": True, "error": _oauth_state["error"]}
	if _oauth_state.get("done"):
		return {"done": True, "error": None}
	return {"done": False}


@app.post("/api/oauth/logout")
def api_oauth_logout():
	"""OAuth 토큰 제거."""
	from dartlab.engines.ai.oauthToken import revoke_token
	revoke_token()
	return {"ok": True}


_oauth_state: dict = {}


def _start_oauth_callback_server(port: int):
	"""OAuth 콜백을 받을 임시 HTTP 서버를 백그라운드 스레드로 시작."""
	import threading
	from http.server import HTTPServer, BaseHTTPRequestHandler
	from urllib.parse import urlparse, parse_qs

	class CallbackHandler(BaseHTTPRequestHandler):
		def do_GET(self):
			parsed = urlparse(self.path)
			if parsed.path != "/auth/callback":
				self.send_response(404)
				self.end_headers()
				return

			params = parse_qs(parsed.query)
			code = params.get("code", [None])[0]
			state = params.get("state", [None])[0]
			error = params.get("error", [None])[0]

			if error:
				_oauth_state["error"] = error
				_oauth_state["done"] = True
				self._respond_html("인증 실패", f"오류: {error}")
				return

			if state != _oauth_state.get("state"):
				_oauth_state["error"] = "state_mismatch"
				_oauth_state["done"] = True
				self._respond_html("인증 실패", "보안 검증 실패 (state mismatch)")
				return

			if not code:
				_oauth_state["error"] = "no_code"
				_oauth_state["done"] = True
				self._respond_html("인증 실패", "인증 코드를 받지 못했습니다")
				return

			try:
				from dartlab.engines.ai.oauthToken import exchange_code
				exchange_code(code, _oauth_state["verifier"])
				_oauth_state["done"] = True
				self._respond_html("인증 성공", "DartLab 인증이 완료되었습니다. 이 창을 닫아주세요.")
			except Exception as e:
				_oauth_state["error"] = str(e)
				_oauth_state["done"] = True
				self._respond_html("인증 실패", f"토큰 교환 실패: {e}")

		def _respond_html(self, title: str, message: str):
			html = (
				"<!DOCTYPE html><html><head><meta charset='utf-8'>"
				f"<title>{title}</title>"
				"<style>body{font-family:system-ui;display:flex;align-items:center;"
				"justify-content:center;min-height:100vh;margin:0;background:#050811;color:#e5e5e5}"
				"div{text-align:center;padding:2rem}"
				"h1{font-size:1.5rem;margin-bottom:1rem}"
				"</style></head><body>"
				f"<div><h1>{title}</h1><p>{message}</p></div>"
				"<script>setTimeout(()=>window.close(),3000)</script>"
				"</body></html>"
			)
			self.send_response(200)
			self.send_header("Content-Type", "text/html; charset=utf-8")
			self.end_headers()
			self.wfile.write(html.encode("utf-8"))

		def log_message(self, fmt, *args):
			pass

	def _run_server():
		server = HTTPServer(("127.0.0.1", port), CallbackHandler)
		server.timeout = 120
		server.handle_request()
		server.server_close()

	thread = threading.Thread(target=_run_server, daemon=True)
	thread.start()


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
		return {"stockCode": c.stockCode, "corpName": c.corpName}
	except Exception as e:
		raise HTTPException(status_code=404, detail=str(e))


@app.get("/api/company/{code}/modules")
def api_company_modules(code: str):
	"""기업의 사용 가능한 데이터 모듈 목록."""
	try:
		from dartlab.engines.ai.context import scan_available_modules
		c = Company(code)
		modules = scan_available_modules(c)
		return {"stockCode": c.stockCode, "corpName": c.corpName, "modules": modules}
	except Exception as e:
		raise HTTPException(status_code=404, detail=str(e))


@app.get("/api/data/stats")
def api_data_stats():
	"""로컬 데이터 현황 — 문서/재무 파일 수, dartlab 버전."""
	from dartlab.core.dataLoader import _dataDir
	stats: dict[str, Any] = {
		"version": dartlab.__version__ if hasattr(dartlab, "__version__") else "unknown",
	}
	for category in ("docs", "finance"):
		try:
			d = _dataDir(category)
			if d.exists():
				files = list(d.glob("*.parquet"))
				stats[category] = {"count": len(files), "path": str(d)}
			else:
				stats[category] = {"count": 0, "path": str(d)}
		except Exception:
			stats[category] = {"count": 0, "path": ""}
	return stats


@app.post("/api/ask")
async def api_ask(req: AskRequest):
	"""LLM 질문 — 종목이 있으면 데이터 기반 분석, 없으면 순수 대화."""
	dartlab.verbose = False

	if req.provider or req.model:
		from dartlab.engines.ai import configure, get_config
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
		configure(**overrides)

	resolved = try_resolve_company(req)
	c: Company | None = resolved.company
	if not c and not resolved.not_found and req.history:
		c = try_resolve_from_history(req.history)

	if req.stream:
		return EventSourceResponse(
			stream_ask(c, req, not_found_msg=build_not_found_msg(resolved.suggestions) if resolved.not_found else None),
			media_type="text/event-stream",
		)

	if resolved.not_found:
		return {"answer": build_not_found_msg(resolved.suggestions)}

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


async def _plain_chat(req: AskRequest):
	"""종목 없는 순수 LLM 대화."""
	from dartlab.engines.ai import get_config
	from dartlab.engines.ai.providers import create_provider

	config_ = get_config()
	overrides: dict[str, Any] = {}
	if req.provider:
		overrides["provider"] = req.provider
	if req.model:
		overrides["model"] = req.model
	if overrides:
		config_ = config_.merge(overrides)

	messages = [{"role": "system", "content": build_dynamic_chat_prompt()}]
	messages.extend(build_history_messages(req.history))
	messages.append({"role": "user", "content": req.question})

	llm = create_provider(config_)
	try:
		answer = await asyncio.to_thread(llm.complete, messages)
		return {"answer": answer}
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))


# ── Static Files (Svelte build) ──

_UI_DIR = Path(__file__).parent.parent / "ui" / "build"

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
		print(f"  다른 포트를 사용하세요: dartlab ai --port {port + 1}\n", file=sys.stderr)
		return

	uvicorn.run("dartlab.server:app", host=host, port=port, log_level="info")
