<script>
	import { cn } from "$lib/utils.js";
	import { ArrowUp } from "lucide-svelte";

	let { onSend, inputText = $bindable("") } = $props();

	let textareaEl;

	const examples = [
		"삼성전자 재무 건전성 분석해줘",
		"LG에너지솔루션 배당 추세는?",
		"카카오 부채 리스크 평가해줘",
		"현대차 영업이익률 추이 분석",
	];

	function handleKeydown(e) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			onSend?.();
		}
	}

	function autoResize(e) {
		e.target.style.height = "auto";
		e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
	}

	function useExample(text) {
		inputText = text;
		if (textareaEl) textareaEl.focus();
	}
</script>

<div class="flex-1 flex flex-col items-center justify-center px-5">
	<div class="w-full max-w-[620px] flex flex-col items-center">
		<img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10" />
		<h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1>
		<p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p>

		<div class="input-box large">
			<textarea
				bind:this={textareaEl}
				bind:value={inputText}
				placeholder="삼성전자 재무 건전성을 분석해줘..."
				rows="1"
				onkeydown={handleKeydown}
				oninput={autoResize}
				class="input-textarea"
			></textarea>
			<button
				class={cn("send-btn", inputText.trim() && "active")}
				onclick={onSend}
				disabled={!inputText.trim()}
			>
				<ArrowUp size={18} strokeWidth={2.5} />
			</button>
		</div>

		<div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]">
			{#each examples as example}
				<button
					class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"
					onclick={() => useExample(example)}
				>
					{example}
				</button>
			{/each}
		</div>
	</div>
</div>
