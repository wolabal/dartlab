<script>
	import { cn } from "$lib/utils.js";
	import { Badge } from "$lib/components/ui/badge/index.js";

	let { message } = $props();

	function renderMarkdown(text) {
		if (!text) return "";
		let html = text
			.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
			.replace(/`([^`]+)`/g, '<code>$1</code>')
			.replace(/^### (.+)$/gm, '<h3>$1</h3>')
			.replace(/^## (.+)$/gm, '<h2>$1</h2>')
			.replace(/^# (.+)$/gm, '<h1>$1</h1>')
			.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
			.replace(/\*([^*]+)\*/g, '<em>$1</em>')
			.replace(/^[•\-\*] (.+)$/gm, '<li>$1</li>')
			.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
			.replace(/^\|(.+)\|$/gm, (match) => {
				const cells = match.slice(1, -1).split('|').map(c => c.trim());
				if (cells.every(c => /^[\-:]+$/.test(c))) return '';
				return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
			})
			.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
			.replace(/\n\n/g, '</p><p>')
			.replace(/\n/g, '<br>');
		html = html.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g, m => '<ul>' + m.replace(/<br>/g, '') + '</ul>');
		html = html.replace(/(<tr>.*?<\/tr>(\s*<br>)?)+/g, m => '<table>' + m.replace(/<br>/g, '') + '</table>');
		return '<p>' + html + '</p>';
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
			{#if message.company}
				<Badge variant="muted" class="mb-2">{message.company}</Badge>
			{/if}
			{#if message.loading && !message.text}
				<div class="flex items-center gap-1.5 h-6">
					<span class="typing-dot"></span>
					<span class="typing-dot delay-1"></span>
					<span class="typing-dot delay-2"></span>
				</div>
			{:else}
				<div class={cn("prose-dartlab text-[15px] leading-[1.75]", message.error && "text-dl-primary")}>
					{@html renderMarkdown(message.text)}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.typing-dot {
		width: 8px; height: 8px; border-radius: 50%;
		background: var(--color-dl-text-dim);
		display: inline-block;
		animation: typing 1.2s infinite;
	}
	.typing-dot.delay-1 { animation-delay: 0.2s; }
	.typing-dot.delay-2 { animation-delay: 0.4s; }
</style>
