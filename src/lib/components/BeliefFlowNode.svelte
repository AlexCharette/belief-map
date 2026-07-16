<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import type { BeliefNode, Segment } from '$lib/types';
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import DonutChart from './DonutChart.svelte';
	import Icon from './Icon.svelte';

	// Flow passes our payload in `data`; everything else on NodeProps is ignored here.
	let { data }: NodeProps = $props();
	const node = $derived(data.node as BeliefNode);
	const collapsed = $derived(data.collapsed as boolean);

	let hovered = $state(false);

	const NORMAL_R = 25;
	const INFLATED_R = 37;
	const radius = $derived(hovered ? INFLATED_R : NORMAL_R);

	const hasChildren = $derived((node.children?.length ?? 0) > 0);

	// One segment per category present among the children (taxonomy order). Arc
	// opacity = the average confidence of the children in that category group.
	const segments = $derived.by<Segment[]>(() => {
		if (!hasChildren) return [];
		const agg = new Map<string, { count: number; opacitySum: number }>();
		for (const child of node.children) {
			const cur = agg.get(child.source) ?? { count: 0, opacitySum: 0 };
			cur.count += 1;
			cur.opacitySum += maps.confidenceOpacity(child.confidence);
			agg.set(child.source, cur);
		}
		return maps.categories
			.filter((c) => agg.has(c.id))
			.map((c) => {
				const { count, opacitySum } = agg.get(c.id)!;
				return { source: c.id, count, colorHex: c.colorHex, opacity: opacitySum / count };
			});
	});

	const label = $derived(node.name.length > 100 ? node.name.slice(0, 99) + '…' : node.name);

	function open() {
		ui.select(node.id);
	}
	function toggleCollapse(e: MouseEvent) {
		e.stopPropagation();
		ui.toggleCollapse(node.id);
	}
	function editNode(e: MouseEvent) {
		e.stopPropagation();
		ui.openEditForm(node.id);
	}
</script>

<div
	class="belief-node"
	class:selected={ui.selectedId === node.id}
	role="button"
	tabindex="0"
	aria-label={i18n.m.node.belief({ name: node.name })}
	title={node.name}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), open())}
>
	<Handle type="target" position={Position.Top} />

	<svg class="glyph" viewBox="-50 -50 100 100" width="100" height="100">
		<DonutChart
			{segments}
			ownColorHex={maps.categoryMeta(node.source).colorHex}
			ownOpacity={maps.confidenceOpacity(node.confidence)}
			{radius}
		/>
	</svg>

	<!-- Edit affordance (revealed on hover), stacked above the collapse badge. -->
	{#if hovered}
		<button class="badge edit" onclick={editNode} tabindex="-1" aria-label={i18n.m.node.editBelief}>
			<Icon name="edit" size={12} />
		</button>
	{/if}

	{#if hasChildren}
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<span
			class="badge collapse"
			onclick={toggleCollapse}
			role="button"
			tabindex="-1"
			aria-label={collapsed ? i18n.m.node.expand : i18n.m.node.collapse}
		>
			{collapsed ? '+' : '−'}
		</span>
	{/if}

	<div class="label">{label}</div>

	<Handle type="source" position={Position.Bottom} />
</div>

<style>
	.belief-node {
		width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		position: relative;
		background: transparent;
		border: none;
	}
	.glyph {
		overflow: visible;
		filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
	}
	.glyph :global(circle),
	.glyph :global(path) {
		transition:
			r 0.18s ease,
			stroke-width 0.18s ease;
	}
	.label {
		font-size: 12px;
		font-weight: 500;
		color: var(--text);
		text-align: center;
		margin-top: 2px;
		max-width: 100px;
		line-height: 1.15;
	}
	.belief-node.selected .label {
		color: var(--accent);
		font-weight: 700;
	}
	.badge {
		position: absolute;
		right: 12px;
		width: 18px;
		height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		line-height: 1;
		padding: 0;
		color: var(--text-muted);
		background: var(--surface-raised);
		border: 1.5px solid var(--border);
		border-radius: 50%;
		cursor: pointer;
		z-index: 2;
	}
	.badge.collapse {
		top: 52px;
	}
	.badge.edit {
		top: 30px;
	}
	.badge:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
	/* Connection handles are drop targets for reconnection — kept invisible until
	   the node is hovered, but always hittable so edges can be dropped on them.
	   Both are pinned to the donut's center so edges emanate from the node center
	   (running edge-to-edge under the glyph) rather than from below the label. */
	.belief-node :global(.svelte-flow__handle) {
		top: 50px !important;
		bottom: auto !important;
		left: 50% !important;
		transform: translate(-50%, -50%) !important;
		opacity: 0;
		width: 10px;
		height: 10px;
		background: var(--accent);
		border: none;
		transition: opacity 0.15s ease;
	}
	.belief-node:hover :global(.svelte-flow__handle) {
		opacity: 0.55;
	}
</style>
