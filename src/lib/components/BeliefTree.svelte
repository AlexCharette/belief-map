<script lang="ts">
	import {
		SvelteFlow,
		Background,
		BackgroundVariant,
		type Node,
		type Edge,
		type Connection,
		type Viewport
	} from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { view } from '$lib/stores/view.svelte';
	import { computeLayout } from '$lib/tree/layout';
	import { canReroute, moveNode } from '$lib/tree/operations';
	import BeliefFlowNode from './BeliefFlowNode.svelte';
	import BeliefEdge from './BeliefEdge.svelte';
	import NodePalette from './NodePalette.svelte';

	const nodeTypes = { belief: BeliefFlowNode };
	const edgeTypes = { belief: BeliefEdge };

	// d3-hierarchy x/y are node centers; Flow position is the node's top-left.
	// Offset by half the glyph so donut centers land on the layout grid.
	const OFFSET = 45;

	let nodes = $state.raw<Node[]>([]);
	let edges = $state.raw<Edge[]>([]);
	let viewport = $state.raw<Viewport>({ x: 0, y: 0, zoom: 1 });
	let paneEl: HTMLDivElement;

	// Right-click empty canvas → create an orphan belief at that point.
	function onPaneContextMenu({ event }: { event: MouseEvent }) {
		event.preventDefault();
		const rect = paneEl.getBoundingClientRect();
		const x = (event.clientX - rect.left - viewport.x) / viewport.zoom - OFFSET;
		const y = (event.clientY - rect.top - viewport.y) / viewport.zoom - OFFSET;
		ui.openCreateForm({ x, y });
	}

	$effect(() => {
		// Auto positions (d3-hierarchy) are the fallback; a node's saved `position`
		// wins. Positions only change on drag-stop, never mid-drag, so this effect
		// doesn't stomp an in-progress drag.
		const layout = computeLayout(maps.roots, ui.collapsed, view.cardinality);
		nodes = layout.nodes.map((n) => ({
			id: n.data.id,
			type: 'belief',
			position: n.data.position ?? { x: n.x - OFFSET, y: n.y - OFFSET },
			data: { node: n.data, collapsed: n.collapsed },
			draggable: true,
			selectable: true
		}));
		edges = layout.links.map((l) => ({
			id: `${l.source}-${l.target}`,
			source: l.source,
			target: l.target,
			type: 'belief',
			selectable: false
		}));
	});

	function persistDrag({ targetNode }: { targetNode: Node | null }) {
		if (targetNode) maps.setNodePosition(targetNode.id, targetNode.position.x, targetNode.position.y);
	}

	/** Re-parent `childId` under `newParentId` if it wouldn't create a cycle. */
	function reparent(childId: string, newParentId: string) {
		if (!childId || !newParentId || childId === newParentId) return;
		if (canReroute(maps.roots, childId, newParentId)) {
			maps.applyForestOp((t) => moveNode(t, childId, newParentId));
			ui.notify(i18n.m.tree.connectionRedrawn);
		} else {
			ui.notify(i18n.m.tree.wouldLoop);
		}
	}

	// Reconnecting an edge's parent end: the child (oldEdge.target) is fixed; the
	// other endpoint of the new connection becomes the new parent.
	function onReconnect(oldEdge: Edge, conn: Connection) {
		const childId = oldEdge.target;
		const newParentId = conn.source === childId ? conn.target : conn.source;
		reparent(childId, newParentId);
	}

	// A brand-new connection drawn from a handle = make target a child of source.
	function onConnect(conn: Connection) {
		if (conn?.source && conn?.target) reparent(conn.target, conn.source);
	}
</script>

<div class="tree" bind:this={paneEl}>
	<SvelteFlow
		bind:nodes
		bind:edges
		bind:viewport
		{nodeTypes}
		{edgeTypes}
		fitView
		fitViewOptions={{ maxZoom: 1, padding: 0.25 }}
		nodesDraggable
		nodesConnectable
		elementsSelectable
		minZoom={0.3}
		maxZoom={2.5}
		proOptions={{ hideAttribution: true }}
		onnodedragstop={persistDrag}
		onnodeclick={({ node }) => ui.select(node.id)}
		onedgeclick={({ edge }) => ui.openInsertForm(edge.source, edge.target)}
		onpanecontextmenu={onPaneContextMenu}
		onreconnect={onReconnect}
		onconnect={onConnect}
	>
		<Background variant={BackgroundVariant.Dots} gap={26} size={1.4} bgColor="transparent" patternColor="var(--link-line)" />
	</SvelteFlow>
	<NodePalette />
</div>

<style>
	.tree {
		position: absolute;
		inset: 0;
	}
	.tree :global(.svelte-flow) {
		--xy-edge-stroke-default: var(--link-line);
		background: transparent;
	}
</style>
