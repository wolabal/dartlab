<script lang="ts">
	import { base } from '$app/paths';
	import { posts } from '$lib/blog/posts';
	import { ArrowRight, Calendar } from 'lucide-svelte';

	function formatDate(iso: string): string {
		return new Date(iso).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog — DartLab</title>
	<meta name="description" content="DartLab 블로그 — DART 전자공시, 재무제표 분석, Python 자동화에 관한 깊은 글." />
</svelte:head>

<div class="blog-index">
	<div class="blog-index-header">
		<h1 class="blog-index-title">Blog</h1>
		<p class="blog-index-desc">DART 전자공시, 재무제표 분석, Python 자동화에 관한 깊은 글.</p>
	</div>

	<div class="blog-post-grid">
		{#each posts as post}
			<a href="{base}/blog/{post.slug}" class="blog-card">
				<div class="blog-card-thumb">
					<img src="{base}{post.thumbnail}" alt={post.title} width="80" height="80" />
				</div>
				<div class="blog-card-body">
					<div class="blog-card-date">
						<Calendar size={12} />
						{formatDate(post.date)}
					</div>
					<h2 class="blog-card-title">{post.title}</h2>
					<p class="blog-card-desc">{post.description}</p>
					<span class="blog-card-read">
						읽기 <ArrowRight size={14} />
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.blog-index {
		max-width: 800px;
		margin: 0 auto;
	}

	.blog-index-header {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(30, 36, 51, 0.8);
	}

	.blog-index-title {
		font-size: 2.5rem;
		font-weight: 800;
		background: linear-gradient(135deg, #f1f5f9, #94a3b8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 0.75rem;
	}

	.blog-index-desc {
		color: #64748b;
		font-size: 1rem;
		line-height: 1.6;
	}

	.blog-post-grid {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.blog-card {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		background: #0f1219;
		border: 1px solid #1e2433;
		border-radius: 12px;
		padding: 1.5rem;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
	}
	.blog-card:hover {
		border-color: rgba(234, 70, 71, 0.4);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(234, 70, 71, 0.06);
	}

	.blog-card-thumb img {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
		border: 2px solid rgba(30, 36, 51, 0.8);
	}

	.blog-card-body {
		flex: 1;
		min-width: 0;
	}

	.blog-card-date {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.75rem;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.blog-card-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #f1f5f9;
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.blog-card-desc {
		font-size: 0.875rem;
		color: #64748b;
		line-height: 1.65;
		margin-bottom: 0.75rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.blog-card-read {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.8rem;
		font-weight: 600;
		color: #ea4647;
	}

	@media (max-width: 560px) {
		.blog-card { flex-direction: column; }
		.blog-card-thumb img { width: 56px; height: 56px; }
	}
</style>
