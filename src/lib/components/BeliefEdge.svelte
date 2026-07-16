<script lang="ts">
	import {
		BaseEdge,
		EdgeLabel,
		EdgeReconnectAnchor,
		getBezierPath,
		type EdgeProps
	} from '@xyflow/svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';

	let {
		source,
		target,
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition
	}: EdgeProps = $props();

	const bezier = $derived(
		getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })
	);
	const path = $derived(bezier[0]);
	const labelX = $derived(bezier[1]);
	const labelY = $derived(bezier[2]);

	let reconnecting = $state(false);
</script>

{#if !reconnecting}
	<BaseEdge {path} style="stroke: var(--link-line); stroke-width: 2; cursor: pointer;" />
{/if}

<!-- Drag the parent (source) end onto another belief to re-parent this one. -->
<EdgeReconnectAnchor bind:reconnecting type="source" position={{ x: sourceX, y: sourceY }} />

<!-- Always-present "+" — click to insert a belief on this connection. -->
<EdgeLabel x={labelX} y={labelY} transparent>
	<button class="hint" title={i18n.m.edge.insertHere} onclick={() => ui.openInsertForm(source, target)}>
		<Icon name="plus" size={14} />
	</button>
</EdgeLabel>

<style>
	/* Always-present click-to-insert "+" on the edge midpoint. Subtle by default,
	   emphasized on its own hover — stable (never remounts), so it never flickers. */
	.hint {
		pointer-events: all;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		font-weight: 700;
		line-height: 1;
		color: var(--accent);
		background: var(--surface);
		border: 1.5px solid color-mix(in srgb, var(--accent) 45%, transparent);
		border-radius: 50%;
		cursor: pointer;
		padding: 0;
		opacity: 0.45;
		transition:
			opacity 0.12s ease,
			scale 0.12s ease;
	}
	.hint:hover {
		opacity: 1;
		scale: 1.15;
		background: color-mix(in srgb, var(--accent) 20%, var(--surface));
		border-color: var(--accent);
		box-shadow: var(--shadow);
	}
</style>
