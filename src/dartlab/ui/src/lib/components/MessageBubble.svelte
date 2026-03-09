<script>
	import { cn } from "$lib/utils.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import {
		Database, X, FileText, Code, Wrench, Loader2,
		AlertTriangle, Clock, Eye, Brain, ChevronDown, ChevronUp
	} from "lucide-svelte";

	let { message } = $props();
	let openModal = $state(null);
	let modalType = $state("context");
	let contextTab = $state("raw");
	let showTransparency = $state(false);

	let loadingPhase = $derived.by(() => {
		if (!message.loading) return "";
		if (message.text) return "응답 작성 중";
		if (message.toolEvents?.length > 0) return "도구 실행 중";
		if (message.contexts?.length > 0) {
			const last = message.contexts[message.contexts.length - 1];
			return `데이터 분석 중 — ${last?.label || last?.module || ""}`;
		}
		if (message.snapshot) return "핵심 수치 확인 완료, 데이터 검색 중";
		if (message.meta?.company) return `${message.meta.company} 데이터 검색 중`;
		if (message.meta?.includedModules) return "분석 모듈 선택 완료";
		return "생각 중";
	});

	let hasTransparencyData = $derived(
		message.systemPrompt || message.contexts?.length > 0 || message.meta?.includedModules
	);

	let dataYearRange = $derived(message.meta?.dataYearRange);

	function isNumericCell(text) {
		const s = text.replace(/<\/?strong>/g, '').replace(/\*\*/g, '').trim();
		return /^[−\-+]?[\d,]+\.?\d*[%조억만원배x]*$/.test(s) || s === '-' || s === '0';
	}

	function renderMarkdown(text) {
		if (!text) return "";

		let tableBlocks = [];
		let processed = text.replace(/((?:^\|.+\|$\n?)+)/gm, (block) => {
			const lines = block.trim().split('\n').filter(l => l.trim());
			let headerLine = null;
			let sepIdx = -1;
			let dataLines = [];

			for (let i = 0; i < lines.length; i++) {
				const cells = lines[i].slice(1, -1).split('|').map(c => c.trim());
				if (cells.every(c => /^[\-:]+$/.test(c))) {
					sepIdx = i;
					break;
				}
			}

			if (sepIdx > 0) {
				headerLine = lines[sepIdx - 1];
				dataLines = lines.slice(sepIdx + 1);
			} else if (sepIdx === 0) {
				dataLines = lines.slice(1);
			} else {
				headerLine = lines[0];
				dataLines = lines.slice(1);
			}

			let tableHtml = '<table>';
			if (headerLine) {
				const hCells = headerLine.slice(1, -1).split('|').map(c => c.trim());
				tableHtml += '<thead><tr>' + hCells.map(c => {
					let rendered = c.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
					return `<th>${rendered}</th>`;
				}).join('') + '</tr></thead>';
			}

			if (dataLines.length > 0) {
				tableHtml += '<tbody>';
				for (const line of dataLines) {
					const cells = line.slice(1, -1).split('|').map(c => c.trim());
					tableHtml += '<tr>' + cells.map(c => {
						let rendered = c.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
						const align = isNumericCell(c) ? ' class="num"' : '';
						return `<td${align}>${rendered}</td>`;
					}).join('') + '</tr>';
				}
				tableHtml += '</tbody>';
			}
			tableHtml += '</table>';

			let idx = tableBlocks.length;
			tableBlocks.push(tableHtml);
			return `\n%%TABLE_${idx}%%\n`;
		});

		let html = processed
			.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			.replace(/^### (.+)$/gm, '<h3>$1</h3>')
			.replace(/^## (.+)$/gm, '<h2>$1</h2>')
			.replace(/^# (.+)$/gm, '<h1>$1</h1>')
			.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
			.replace(/\*([^*]+)\*/g, '<em>$1</em>')
			.replace(/^[•\-\*] (.+)$/gm, '<li>$1</li>')
			.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
			.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
			.replace(/\n\n/g, '</p><p>')
			.replace(/\n/g, '<br>');
		html = html.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g, m => '<ul>' + m.replace(/<br>/g, '') + '</ul>');

		for (let i = 0; i < tableBlocks.length; i++) {
			html = html.replace(`%%TABLE_${i}%%`, tableBlocks[i]);
		}

		return '<p>' + html + '</p>';
	}

	function openContextModal(idx) {
		openModal = idx;
		modalType = "context";
		contextTab = "rendered";
	}

	function openSystemPromptModal() {
		openModal = 0;
		modalType = "system";
		contextTab = "raw";
	}

	function closeModal() {
		openModal = null;
	}
</script>

{#if message.role === "user"}
	<div class="flex items-start gap-3 animate-fadeIn">
		<div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">
			You
		</div>
		<div class="flex-1 pt-0.5">
			<p class="text-[15px] text-dl-text leading-relaxed">{message.text}</p>
		</div>
	</div>
{:else}
	<div class="flex items-start gap-3 animate-fadeIn">
		<img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5" />
		<div class="flex-1 pt-0.5 min-w-0">
			{#if message.company || dataYearRange}
				<div class="flex flex-wrap items-center gap-1.5 mb-2">
					{#if message.company}
						<Badge variant="muted">{message.company}</Badge>
					{/if}
					{#if dataYearRange}
						<Badge variant="accent">{dataYearRange}</Badge>
					{/if}
				</div>
			{/if}

			{#if message.snapshot?.items?.length > 0}
				<div class="mb-3 rounded-xl border border-dl-border/50 bg-dl-bg-card/30 overflow-hidden animate-fadeIn">
					<div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
						{#each message.snapshot.items as item}
							{@const statusColor = item.status === "good" ? "text-dl-success" : item.status === "danger" ? "text-dl-primary-light" : item.status === "caution" ? "text-amber-400" : "text-dl-text"}
							<div class="px-3 py-2 bg-dl-bg-card/50">
								<div class="text-[10px] text-dl-text-dim leading-tight">{item.label}</div>
								<div class={cn("text-[14px] font-semibold leading-snug mt-0.5", statusColor)}>
									{item.value}
								</div>
							</div>
						{/each}
					</div>
					{#if message.snapshot.warnings?.length > 0}
						<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2">
							{#each message.snapshot.warnings as warn}
								<span class="flex items-center gap-1 text-[10px] text-amber-400">
									<AlertTriangle size={10} />
									{warn}
								</span>
							{/each}
						</div>
					{/if}
				</div>
			{/if}

			{#if message.contexts?.length > 0}
				<div class="mb-3">
					<div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim">
						<Database size={11} />
						<span>분석에 사용된 데이터</span>
					</div>
					<div class="flex flex-wrap items-center gap-1.5">
						{#each message.contexts as ctx, i}
							<button
								class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dl-border/60 bg-dl-bg-card/60 text-[11px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all"
								onclick={() => openContextModal(i)}
							>
								<Database size={11} class="flex-shrink-0" />
								<span>{ctx.label || ctx.module}</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}

			{#if message.toolEvents?.length > 0}
				<div class="mb-3">
					<div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim">
						<Wrench size={11} />
						<span>사용된 도구</span>
					</div>
					<div class="flex flex-wrap items-center gap-1.5">
						{#each message.toolEvents as ev}
							{#if ev.type === "call"}
								<span class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dl-accent/30 bg-dl-accent/5 text-[11px] text-dl-accent">
									<Wrench size={11} />
									{ev.name}
								</span>
							{/if}
						{/each}
					</div>
				</div>
			{/if}

			{#if message.loading && !message.text}
				<div class="flex items-center gap-2 h-6 text-[12px] text-dl-text-dim animate-fadeIn">
					<Loader2 size={14} class="animate-spin flex-shrink-0" />
					<span>{loadingPhase}</span>
				</div>
			{:else}
				{#if message.loading}
					<div class="flex items-center gap-2 mb-2 text-[11px] text-dl-text-dim">
						<Loader2 size={12} class="animate-spin flex-shrink-0" />
						<span>{loadingPhase}</span>
					</div>
				{/if}
				<div class={cn("prose-dartlab text-[15px] leading-[1.75]", message.error && "text-dl-primary")}>
					{@html renderMarkdown(message.text)}
				</div>

				{#if !message.loading && (message.duration || hasTransparencyData)}
					<div class="flex items-center gap-3 mt-3 pt-2 border-t border-dl-border/20">
						{#if message.duration}
							<span class="flex items-center gap-1 text-[10px] text-dl-text-dim">
								<Clock size={10} />
								{message.duration}초
							</span>
						{/if}

						{#if hasTransparencyData}
							<button
								class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-text-muted transition-colors"
								onclick={() => showTransparency = !showTransparency}
							>
								<Eye size={10} />
								<span>LLM에 제공된 데이터 보기</span>
								{#if showTransparency}
									<ChevronUp size={10} />
								{:else}
									<ChevronDown size={10} />
								{/if}
							</button>
						{/if}
					</div>

					{#if showTransparency && hasTransparencyData}
						<div class="mt-2 p-3 rounded-xl border border-dl-border/30 bg-dl-bg-card/30 space-y-2 animate-fadeIn">
							{#if message.meta?.includedModules}
								<div class="flex items-start gap-2">
									<span class="text-[10px] text-dl-text-dim flex-shrink-0 mt-0.5 w-20">포함 모듈</span>
									<div class="flex flex-wrap gap-1">
										{#each message.meta.includedModules as mod}
											<span class="px-1.5 py-0.5 rounded text-[9px] bg-dl-bg-card-hover text-dl-text-dim border border-dl-border/50">{mod}</span>
										{/each}
									</div>
								</div>
							{/if}

							{#if dataYearRange}
								<div class="flex items-center gap-2">
									<span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">데이터 기간</span>
									<span class="text-[10px] text-dl-text-muted">{dataYearRange}</span>
								</div>
							{/if}

							{#if message.systemPrompt}
								<div class="flex items-center gap-2">
									<span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">시스템 프롬프트</span>
									<button
										class="flex items-center gap-1 text-[10px] text-dl-primary-light hover:underline"
										onclick={openSystemPromptModal}
									>
										<Brain size={10} />
										전문 보기 ({message.systemPrompt.length.toLocaleString()}자)
									</button>
								</div>
							{/if}

							{#if message.userContent}
								<div class="flex items-center gap-2">
									<span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">LLM 입력</span>
									<button
										class="flex items-center gap-1 text-[10px] text-dl-accent hover:underline"
										onclick={() => { openModal = 0; modalType = "userContent"; contextTab = "raw"; }}
									>
										<FileText size={10} />
										전문 보기 ({message.userContent.length.toLocaleString()}자)
									</button>
								</div>
							{/if}

							{#if message.contexts?.length > 0}
								<div class="flex items-start gap-2">
									<span class="text-[10px] text-dl-text-dim flex-shrink-0 mt-0.5 w-20">데이터 모듈</span>
									<div class="flex flex-wrap gap-1">
										{#each message.contexts as ctx, i}
											<button
												class="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] bg-dl-bg-card-hover text-dl-text-muted border border-dl-border/50 hover:border-dl-primary/30 hover:text-dl-text transition-colors"
												onclick={() => openContextModal(i)}
											>
												<Database size={8} />
												{ctx.label || ctx.module}
											</button>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/if}
				{/if}
			{/if}
		</div>
	</div>
{/if}

<!-- ═══ Modal: Context / System Prompt / User Content ═══ -->
{#if openModal !== null}
	{@const isSystemPrompt = modalType === "system"}
	{@const isUserContent = modalType === "userContent"}
	{@const isContext = modalType === "context"}
	{@const ctx = isContext ? message.contexts?.[openModal] : null}
	{@const modalTitle = isSystemPrompt ? "시스템 프롬프트" : isUserContent ? "LLM에 전달된 입력" : (ctx?.label || ctx?.module || "")}
	{@const modalText = isSystemPrompt ? message.systemPrompt : isUserContent ? message.userContent : ctx?.text}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
		onclick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
		onkeydown={(e) => { if (e.key === "Escape") closeModal(); }}
	>
		<div class="w-full max-w-3xl max-h-[80vh] mx-4 bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
			<div class="flex-shrink-0 border-b border-dl-border/50">
				<div class="flex items-center justify-between px-5 pt-4 pb-3">
					<div class="flex items-center gap-2 text-[14px] font-medium text-dl-text">
						{#if isSystemPrompt}
							<Brain size={15} class="text-dl-primary-light flex-shrink-0" />
						{:else if isUserContent}
							<FileText size={15} class="text-dl-accent flex-shrink-0" />
						{:else}
							<Database size={15} class="flex-shrink-0" />
						{/if}
						<span>{modalTitle}</span>
						{#if isSystemPrompt}
							<span class="text-[10px] text-dl-text-dim">({modalText?.length?.toLocaleString()}자)</span>
						{/if}
					</div>
					<div class="flex items-center gap-2">
						{#if isContext}
							<div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5">
								<button
									class={cn(
										"flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",
										contextTab === "rendered"
											? "bg-dl-bg-card text-dl-text shadow-sm"
											: "text-dl-text-dim hover:text-dl-text-muted"
									)}
									onclick={() => contextTab = "rendered"}
								>
									<FileText size={11} />
									렌더링
								</button>
								<button
									class={cn(
										"flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",
										contextTab === "raw"
											? "bg-dl-bg-card text-dl-text shadow-sm"
											: "text-dl-text-dim hover:text-dl-text-muted"
									)}
									onclick={() => contextTab = "raw"}
								>
									<Code size={11} />
									원문
								</button>
							</div>
						{/if}
						<button
							class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"
							onclick={closeModal}
						>
							<X size={18} />
						</button>
					</div>
				</div>

				{#if isContext && message.contexts?.length > 1}
					<div class="px-5 pb-2.5 overflow-x-auto scrollbar-hide">
						<div class="flex items-center gap-1.5">
							{#each message.contexts as _, idx}
								<button
									class={cn(
										"px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",
										idx === openModal
											? "bg-dl-primary/20 text-dl-primary-light font-medium"
											: "bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-darker/80"
									)}
									onclick={() => { openModal = idx; }}
								>
									{message.contexts[idx].label || message.contexts[idx].module}
								</button>
							{/each}
						</div>
					</div>
				{/if}

				{#if !isContext}
					<div class="px-5 pb-2.5">
						<div class="flex items-center gap-1.5">
							{#if message.systemPrompt}
								<button
									class={cn(
										"px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",
										isSystemPrompt
											? "bg-dl-primary/20 text-dl-primary-light font-medium"
											: "bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"
									)}
									onclick={() => { modalType = "system"; }}
								>
									시스템 프롬프트
								</button>
							{/if}
							{#if message.userContent}
								<button
									class={cn(
										"px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",
										isUserContent
											? "bg-dl-accent/20 text-dl-accent font-medium"
											: "bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"
									)}
									onclick={() => { modalType = "userContent"; }}
								>
									LLM 입력
								</button>
							{/if}
						</div>
					</div>
				{/if}
			</div>

			<div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0">
				{#if isContext && contextTab === "rendered"}
					<div class="prose-dartlab text-[13px] leading-[1.7] pt-3">
						{@html renderMarkdown(ctx?.text)}
					</div>
				{:else}
					<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 mt-3 overflow-x-auto whitespace-pre-wrap break-words">{modalText}</pre>
				{/if}
			</div>
		</div>
	</div>
{/if}
