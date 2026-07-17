<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import type { BeliefNode } from '$lib/types';
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { computeSegments } from '$lib/tree/segments';
	import Icon from './Icon.svelte';

	let { data }: NodeProps = $props();
	const node = $derived(data.node as BeliefNode);
	const collapsed = $derived(data.collapsed as boolean);

	let hovered = $state(false);

	const hasChildren = $derived((node.children?.length ?? 0) > 0);

	// The donut "unrolled": children's source mix as a linear bar.
	const segments = $derived.by(() => computeSegments(node));
	// This belief's own source (icon + hue) at its own confidence opacity.
	const own = $derived(maps.categoryMeta(node.source));
	const ownOpacity = $derived(maps.confidenceOpacity(node.confidence));

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
	class="card"
	class:selected={ui.selectedId === node.id}
	role="button"
	tabindex="0"
	aria-label={i18n.m.node.belief({ description: node.description })}
	title={node.description}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), open())}
>
	<Handle type="target" position={Position.Top} />

	{#if segments.length > 0}
		<!-- Children source mix — the donut, linearised. -->
		<div class="mix" aria-hidden="true">
			{#each segments as seg (seg.source)}
				<span style="flex: {seg.count}; background: {seg.colorHex}; opacity: {seg.opacity};"></span>
			{/each}
		</div>
	{/if}

	<span class="own" style="color: {own.colorHex}; opacity: {ownOpacity};" aria-hidden="true">
		<Icon name={own.icon} size={15} />
	</span>

	<div class="description">{node.description}</div>

	<!-- Edit affordance (hover), stacked above the collapse badge. -->
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
			<Icon name={collapsed ? 'chevrons-up-down' : 'chevrons-down-up'} size={12} />
		</span>
	{/if}

	<Handle type="source" position={Position.Bottom} />
</div>

<style>
	.card {
		position: relative;
		box-sizing: border-box;
		width: max-content;
		min-width: 120px;
		max-width: 210px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 10px 14px;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.45);
		cursor: pointer;
		transition:
			border-color 0.16s ease,
			background 0.16s ease;
	}
	.card:hover {
		border-color: var(--accent);
		background: color-mix(in srgb, var(--accent) 8%, var(--surface-raised));
	}
	.card.selected {
		border-color: var(--accent);
		box-shadow:
			0 4px 10px rgba(0, 0, 0, 0.45),
			0 0 0 1px var(--accent);
	}

	.mix {
		display: flex;
		width: 100%;
		height: 5px;
		gap: 2px;
		border-radius: 3px;
		overflow: hidden;
	}
	.mix span {
		display: block;
		min-width: 3px;
		border-radius: 2px;
	}

	.own {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
	}

	.description {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		overflow: hidden;
		text-align: center;
		text-wrap: balance;
		word-break: break-word;
		font-size: 13px;
		font-weight: 500;
		line-height: 1.25;
		color: var(--text);
	}
	.card.selected .description {
		color: var(--accent);
		font-weight: 700;
	}

	.badge {
		position: absolute;
		right: -8px;
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
	.badge.edit {
		top: -8px;
	}
	.badge.collapse {
		top: 14px;
	}
	.badge:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	/* Handles centered on the card so edges meet at node centers. */
	.card :global(.svelte-flow__handle) {
		top: 50% !important;
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
	.card:hover :global(.svelte-flow__handle) {
		opacity: 0.55;
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.card :global(.svelte-flow__handle) {
			transition: none;
		}
	}
</style>
