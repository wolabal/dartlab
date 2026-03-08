<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	const modules = [
		{ name: 'analyze', desc: 'Summary financials time series', category: 'finance', status: 'released' },
		{ name: 'statements', desc: 'Consolidated BS / IS / CF', category: 'finance', status: 'released' },
		{ name: 'segments', desc: 'Revenue by segment', category: 'finance', status: 'released' },
		{ name: 'costByNature', desc: 'Cost breakdown by nature', category: 'finance', status: 'released' },
		{ name: 'majorHolder', desc: 'Largest shareholder stake', category: 'finance', status: 'released' },
		{ name: 'holderOverview', desc: '5%+ holders, minority, voting rights', category: 'finance', status: 'released' },
		{ name: 'shareCapital', desc: 'Total shares outstanding', category: 'finance', status: 'released' },
		{ name: 'dividend', desc: 'Dividend data', category: 'finance', status: 'released' },
		{ name: 'employee', desc: 'Employee statistics', category: 'finance', status: 'released' },
		{ name: 'subsidiary', desc: 'Investments in other entities', category: 'finance', status: 'released' },
		{ name: 'affiliates', desc: 'Associates & joint ventures', category: 'finance', status: 'released' },
		{ name: 'tangibleAsset', desc: 'Tangible asset movement', category: 'finance', status: 'released' },
		{ name: 'notesDetail', desc: 'Notes detail items (23 keywords)', category: 'finance', status: 'released' },
		{ name: 'bond', desc: 'Debt securities issuance', category: 'finance', status: 'released' },
		{ name: 'rawMaterial', desc: 'Raw materials & CAPEX', category: 'disclosure', status: 'released' },
		{ name: 'business', desc: 'Business description', category: 'disclosure', status: 'released' },
		{ name: 'overview', desc: 'Company overview', category: 'disclosure', status: 'released' },
		{ name: 'mdna', desc: "MD&A (Management Discussion)", category: 'disclosure', status: 'released' },
	];

	const financeModules = modules.filter(m => m.category === 'finance');
	const disclosureModules = modules.filter(m => m.category === 'disclosure');
</script>

<section class="py-24 px-6">
	<div class="max-w-5xl mx-auto">
		<div class="text-center mb-16">
			<span class="text-xs font-semibold uppercase tracking-widest text-dl-primary mb-3 block">Module Catalog</span>
			<h2 class="text-3xl md:text-4xl font-bold text-dl-text mb-4">{modules.length} Analysis Modules</h2>
			<p class="text-dl-text-muted text-lg">Access every module with a single stock code</p>
		</div>

		<div class="space-y-10">
			<div>
				<div class="flex items-center gap-3 mb-4">
					<h3 class="text-sm font-semibold text-dl-text uppercase tracking-wider">Finance</h3>
					<span class="text-xs text-dl-text-dim font-mono">{financeModules.length} modules</span>
					<div class="flex-1 h-px bg-dl-border"></div>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{#each financeModules as m}
						<div class="group flex items-start gap-3 px-4 py-3 rounded-lg border border-dl-border bg-dl-bg-card/50 hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all">
							<div class="shrink-0 mt-0.5">
								<span class="w-1.5 h-1.5 rounded-full bg-dl-primary block"></span>
							</div>
							<div class="min-w-0">
								<span class="text-sm font-mono text-dl-text group-hover:text-dl-primary transition-colors">.{m.name}()</span>
								<p class="text-xs text-dl-text-dim mt-0.5 truncate">{m.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<div class="flex items-center gap-3 mb-4">
					<h3 class="text-sm font-semibold text-dl-text uppercase tracking-wider">Disclosure Text</h3>
					<span class="text-xs text-dl-text-dim font-mono">{disclosureModules.length} modules</span>
					<div class="flex-1 h-px bg-dl-border"></div>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{#each disclosureModules as m}
						<div class="group flex items-start gap-3 px-4 py-3 rounded-lg border border-dl-border bg-dl-bg-card/50 hover:border-dl-accent/30 hover:bg-dl-bg-card transition-all">
							<div class="shrink-0 mt-0.5">
								<span class="w-1.5 h-1.5 rounded-full bg-dl-accent block"></span>
							</div>
							<div class="min-w-0">
								<span class="text-sm font-mono text-dl-text group-hover:text-dl-accent transition-colors">.{m.name}()</span>
								<p class="text-xs text-dl-text-dim mt-0.5 truncate">{m.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-10 text-center">
			<Badge variant="success">
				<span class="w-1.5 h-1.5 rounded-full bg-dl-success animate-pulse"></span>
				All Modules Released
			</Badge>
		</div>
	</div>
</section>
