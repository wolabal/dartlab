<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		goto(`${base}/docs/getting-started/quickstart`, { replaceState: true });
	});
</script>

<svelte:head>
	<title>DartLab 문서 — DART 전자공시 분석 가이드</title>
	<meta name="description" content="DartLab 설치부터 API 레퍼런스까지. DART 전자공시 문서를 파싱하고 재무제표를 시계열로 정렬하는 방법을 안내한다." />
	<meta http-equiv="refresh" content="0;url={base}/docs/getting-started/quickstart" />
</svelte:head>
