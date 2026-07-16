import { hierarchy, tree as d3tree } from 'd3-hierarchy';
import type { BeliefNode } from '../types';

export const NODE_WIDTH = 75;
export const NODE_HEIGHT = 75;
export const HEIGHT_LEVEL = 225;
/** Horizontal gap between adjacent root clusters when tiling a forest. */
export const CLUSTER_GAP = 160;

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
 *
 *  Each root sends its children out along `cardinality` evenly-spaced **spokes** — the
 *  first pointing straight down, the rest rotating (down → west → north → east → …).
 *  Children are handed to spokes round-robin, and each spoke grows an ordinary top-down
 *  tree rotated to point outward, so deeper nodes fan the usual way inside their branch.
 *  `cardinality = 1` reduces to a plain straight-down tree. Multiple roots are tiled
 *  left-to-right. Nodes whose id is in `collapsed` render as leaves (subtree hidden). */
export function computeLayout(
	roots: BeliefNode[],
	collapsed: Set<string> = new Set(),
	cardinality = 4
): Layout {
	const C = Math.min(9, Math.max(1, Math.round(cardinality)));
	const childrenOf = (d: BeliefNode) => (collapsed.has(d.id) ? null : (d.children ?? null));
	const hasHiddenChildren = (d: BeliefNode) =>
		collapsed.has(d.id) && (d.children?.length ?? 0) > 0;

	const nodes: LaidOutNode[] = [];
	const links: LaidOutLink[] = [];
	let offsetX = 0; // running x-origin for the next cluster

	for (const root of roots) {
		// Placements for this cluster, in a local frame with the root at (0,0).
		const placed: LaidOutNode[] = [];

		// Root's visible children, handed out round-robin across C evenly-spaced spokes.
		const rootChildren = collapsed.has(root.id) ? [] : (root.children ?? []);
		const spokes: BeliefNode[][] = Array.from({ length: C }, () => []);
		rootChildren.forEach((c, i) => spokes[i % C].push(c));

		for (let s = 0; s < C; s++) {
			if (spokes[s].length === 0) continue;

			// A synthetic root carrying only this spoke's children, laid out top-down.
			const synthetic: BeliefNode = { ...root, children: spokes[s] };
			const h = d3tree<BeliefNode>().nodeSize([NODE_WIDTH * 1.8, HEIGHT_LEVEL])(
				hierarchy<BeliefNode>(synthetic, childrenOf)
			);

			// Rotate "down" (spoke 0) to this spoke's direction about the root origin.
			const phi = s * ((2 * Math.PI) / C);
			const cos = Math.cos(phi);
			const sin = Math.sin(phi);
			const ox = h.x; // synthetic root's x; its y is 0 at depth 0

			for (const n of h.descendants()) {
				if (n === h) continue; // the synthetic root == the real root, added once below
				const lx = n.x - ox; // translate so the root sits at the origin
				const ly = n.y;
				placed.push({
					data: n.data,
					x: lx * cos - ly * sin,
					y: lx * sin + ly * cos,
					collapsed: hasHiddenChildren(n.data)
				});
			}
			for (const l of h.links()) {
				links.push({ source: l.source.data.id, target: l.target.data.id });
			}
		}

		// The root itself, once, at its cluster center.
		placed.push({ data: root, x: 0, y: 0, collapsed: hasHiddenChildren(root) });

		// Tile: shift this cluster so its leftmost node sits at the running offsetX.
		let cMinX = Infinity;
		let cMaxX = -Infinity;
		for (const p of placed) {
			if (p.x < cMinX) cMinX = p.x;
			if (p.x > cMaxX) cMaxX = p.x;
		}
		const shift = offsetX - cMinX;
		for (const p of placed) {
			nodes.push({ data: p.data, x: p.x + shift, y: p.y, collapsed: p.collapsed });
		}
		offsetX += cMaxX - cMinX + CLUSTER_GAP; // advance past this cluster
	}

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
