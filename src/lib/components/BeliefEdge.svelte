<script lang="ts">
	import {
		BaseEdge,
		EdgeLabel,
		EdgeReconnectAnchor,
		getBezierPath,
		type EdgeProps
	} from '@xyflow/svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { maps } from '$lib/stores/maps.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { detachNode } from '$lib/tree/operations';
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

	// Standard Svelte Flow bezier curve between the two endpoints.
	const bezier = $derived(
		getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition })
	);
	const path = $derived(bezier[0]);
	const labelX = $derived(bezier[1]);
	const labelY = $derived(bezier[2]);

	let reconnecting = $state(false);

	// Detach the child (target) from its parent (source): the edge is removed and
	// the child becomes a standalone root, keeping its subtree.
	function detachEdge() {
		maps.applyForestOp((r) => detachNode(r, target));
		ui.notify(i18n.m.edge.edgeDetached);
	}
</script>

{#if !reconnecting}
	<BaseEdge {path} style="stroke: var(--link-line); stroke-width: 2; cursor: pointer;" />
{/if}

<!-- Drag the parent (source) end onto another belief to re-parent this one. -->
<EdgeReconnectAnchor bind:reconnecting type="source" position={{ x: sourceX, y: sourceY }} />

<!-- Edge tools at the midpoint: "+" inserts a belief on this connection, "−" detaches the child. -->
<EdgeLabel x={labelX} y={labelY} transparent>
	<div class="edge-tools">
		<button class="hint" title={i18n.m.edge.insertHere} onclick={() => ui.openInsertForm(source, target)}>
			<Icon name="plus" size={14} />
		</button>
		<button class="hint danger" title={i18n.m.edge.deleteEdge} onclick={detachEdge}>
			<Icon name="minus" size={14} />
		</button>
	</div>
</EdgeLabel>

<style>
	/* Insert ("+") and detach ("−") controls at the edge midpoint. */
	.edge-tools {
		display: flex;
		gap: 4px;
		pointer-events: none; /* only the buttons themselves are hittable */
	}
	/* Subtle by default, emphasized on its own hover — stable (never remounts),
	   so it never flickers. */
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
	/* The detach control reads as destructive on hover. */
	.hint.danger {
		color: var(--danger);
		border-color: color-mix(in srgb, var(--danger) 45%, transparent);
	}
	.hint.danger:hover {
		background: color-mix(in srgb, var(--danger) 20%, var(--surface));
		border-color: var(--danger);
	}
</style>
