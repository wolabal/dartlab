<script>
	import { cn } from "$lib/utils.js";
	import { ArrowUp, Square } from "lucide-svelte";
	import MessageBubble from "./MessageBubble.svelte";

	let {
		messages = [],
		isLoading = false,
		inputText = $bindable(""),
		scrollTrigger = 0,
		onSend,
		onStop,
	} = $props();

	let chatContainer;
	let userScrolledUp = false;
	let lastScrollHeight = 0;

	function onScroll() {
		if (!chatContainer) return;
		const { scrollTop, scrollHeight, clientHeight } = chatContainer;
		userScrolledUp = scrollHeight - scrollTop - clientHeight > 80;
	}

	$effect(() => {
		scrollTrigger;
		if (!chatContainer || userScrolledUp) return;
		requestAnimationFrame(() => {
			if (!chatContainer) return;
			chatContainer.scrollTop = chatContainer.scrollHeight;
		});
	});

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
</script>

<div class="flex flex-col h-full min-h-0">
	<div class="flex-1 overflow-y-auto min-h-0" bind:this={chatContainer} onscroll={onScroll}>
		<div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8">
			{#each messages as msg}
				<MessageBubble message={msg} />
			{/each}
		</div>
	</div>

	<div class="flex-shrink-0 px-5 pb-4 pt-2">
		<div class="max-w-[720px] mx-auto">
			<div class="input-box">
				<textarea
					bind:value={inputText}
					placeholder="메시지를 입력하세요..."
					rows="1"
					onkeydown={handleKeydown}
					oninput={autoResize}
					class="input-textarea"
				></textarea>
				{#if isLoading}
					<button class="send-btn active" onclick={onStop}>
						<Square size={14} />
					</button>
				{:else}
					<button
						class={cn("send-btn", inputText.trim() && "active")}
						onclick={onSend}
						disabled={!inputText.trim()}
					>
						<ArrowUp size={16} strokeWidth={2.5} />
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
