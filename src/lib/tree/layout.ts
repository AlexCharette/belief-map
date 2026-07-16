import { hierarchy, tree as d3tree } from 'd3-hierarchy';
import type { BeliefNode } from '../types';

export const NODE_WIDTH = 75;
export const NODE_HEIGHT = 75;
export const HEIGHT_LEVEL = 225;

export interface LaidOutNode {
	data: BeliefNode;
	/** Node center coordinates (d3-hierarchy convention). */
	x: number;
	y: number;
	/** True when this node has children that are currently collapsed/hidden. */
	collapsed: boolean;
}

export interface LaidOutLink {
	source: string;
	target: string;
}

export interface Layout {
	nodes: LaidOutNode[];
	links: LaidOutLink[];
	/** Bounding box of node centers, for centering/sizing the canvas. */
	minX: number;
	maxX: number;
	maxY: number;
}

/** Compute node positions and parent→child links for a forest of belief trees.
 *  The roots are wrapped in a virtual super-root so d3 lays them out side-by-side;
 *  that virtual node is then dropped from the output. Nodes whose id is in
 *  `collapsed` are rendered as leaves (subtree hidden). */
export function computeLayout(roots: BeliefNode[], collapsed: Set<string> = new Set()): Layout {
	// The virtual node has no `id`, so the collapsed check passes through to its
	// children (the real roots); real nodes use the collapsed logic as before.
	const virtual = { children: roots } as unknown as BeliefNode;
	const h = hierarchy<BeliefNode>(virtual, (d) => (collapsed.has(d.id) ? null : d.children));
	const laidOut = d3tree<BeliefNode>().nodeSize([NODE_WIDTH * 2, HEIGHT_LEVEL])(h);

	const nodes: LaidOutNode[] = laidOut
		.descendants()
		.filter((n) => n.data !== virtual)
		.map((n) => ({
			data: n.data,
			x: n.x,
			y: n.y,
			collapsed: collapsed.has(n.data.id) && (n.data.children?.length ?? 0) > 0
		}));

	const links: LaidOutLink[] = laidOut
		.links()
		.filter((l) => l.source.data !== virtual)
		.map((l) => ({ source: l.source.data.id, target: l.target.data.id }));

	let minX = 0;
	let maxX = 0;
	let maxY = 0;
	for (const n of nodes) {
		if (n.x < minX) minX = n.x;
		if (n.x > maxX) maxX = n.x;
		if (n.y > maxY) maxY = n.y;
	}

	return { nodes, links, minX, maxX, maxY };
}
