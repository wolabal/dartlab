/**
 * DartLab API 클라이언트
 */

const BASE = "";  // 같은 origin (proxy or production)

/** LLM provider 상태 확인 */
export async function fetchStatus() {
	const res = await fetch(`${BASE}/api/status`);
	if (!res.ok) throw new Error("상태 확인 실패");
	return res.json();
}

/** LLM provider 설정 (api_key, base_url 지원) */
export async function configure(provider, model = null, apiKey = null) {
	const body = { provider };
	if (model) body.model = model;
	if (apiKey) body.api_key = apiKey;
	const res = await fetch(`${BASE}/api/configure`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	if (!res.ok) throw new Error("설정 실패");
	return res.json();
}

/** Provider별 모델 목록 조회 */
export async function fetchModels(provider) {
	const res = await fetch(`${BASE}/api/models/${encodeURIComponent(provider)}`);
	if (!res.ok) return { models: [] };
	return res.json();
}

/** Ollama 모델 다운로드 (SSE 진행률) */
export function pullOllamaModel(modelName, { onProgress, onDone, onError }) {
	const controller = new AbortController();
	fetch(`${BASE}/api/ollama/pull`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ model: modelName }),
		signal: controller.signal,
	})
	.then(async (res) => {
		if (!res.ok) { onError?.("다운로드 실패"); return; }
		const reader = res.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			buffer += decoder.decode(value, { stream: true });
			const lines = buffer.split("\n");
			buffer = lines.pop() || "";
			for (const line of lines) {
				if (line.startsWith("data:")) {
					try {
						const data = JSON.parse(line.slice(5).trim());
						if (data.total && data.completed !== undefined) {
							onProgress?.({ total: data.total, completed: data.completed, status: data.status });
						} else if (data.status) {
							onProgress?.({ status: data.status });
						}
					} catch {}
				}
			}
		}
		onDone?.();
	})
	.catch((err) => {
		if (err.name !== "AbortError") onError?.(err.message);
	});
	return { abort: () => controller.abort() };
}

/** 종목 검색 */
export async function searchCompany(query) {
	const res = await fetch(`${BASE}/api/search?q=${encodeURIComponent(query)}`);
	if (!res.ok) throw new Error("검색 실패");
	return res.json();
}

/** 기업 정보 */
export async function fetchCompany(code) {
	const res = await fetch(`${BASE}/api/company/${code}`);
	if (!res.ok) throw new Error("기업 정보 조회 실패");
	return res.json();
}

/** LLM 질문 (동기) */
export async function ask(company, question, options = {}) {
	const body = { company, question, stream: false, ...options };
	const res = await fetch(`${BASE}/api/ask`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		throw new Error(err.detail || "질문 실패");
	}
	return res.json();
}

/**
 * LLM 질문 (SSE 스트리밍)
 * @param {string} company
 * @param {string} question
 * @param {object} options
 * @param {function} onMeta - meta 이벤트 콜백
 * @param {function} onChunk - chunk 이벤트 콜백
 * @param {function} onDone - done 이벤트 콜백
 * @param {function} onError - error 이벤트 콜백
 */
export function askStream(company, question, options = {}, { onMeta, onChunk, onDone, onError }, history = null) {
	const body = { question, stream: true, ...options };
	if (company) body.company = company;
	if (history && history.length > 0) body.history = history;

	const controller = new AbortController();

	fetch(`${BASE}/api/ask`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
		signal: controller.signal,
	})
		.then(async (res) => {
			if (!res.ok) {
				const err = await res.json().catch(() => ({}));
				onError?.(err.detail || "스트리밍 실패");
				return;
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let buffer = "";
			let doneFired = false;

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() || "";

				for (const line of lines) {
					if (line.startsWith("event:")) {
						var currentEvent = line.slice(6).trim();
					} else if (line.startsWith("data:") && currentEvent) {
						const data = line.slice(5).trim();
						try {
							const parsed = JSON.parse(data);
							if (currentEvent === "meta") onMeta?.(parsed);
							else if (currentEvent === "chunk") onChunk?.(parsed.text);
							else if (currentEvent === "error") onError?.(parsed.error);
							else if (currentEvent === "done") { if (!doneFired) { doneFired = true; onDone?.(); } }
						} catch {
							// skip malformed JSON
						}
						currentEvent = null;
					}
				}
			}

			if (!doneFired) { doneFired = true; onDone?.(); }
		})
		.catch((err) => {
			if (err.name !== "AbortError") {
				onError?.(err.message);
			}
		});

	return { abort: () => controller.abort() };
}
