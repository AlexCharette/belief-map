import type { BeliefNode, Segment } from '../types';
import { maps } from '../stores/maps.svelte';

/** Aggregate a node's children into donut/mix segments: one per source category
 *  present among the children (in taxonomy order), width driven by count and
 *  opacity by the average confidence of that group. Reads the active map's
 *  taxonomy via the `maps` store, so callers should invoke it inside a
 *  `$derived` to stay reactive. Shared by every node-render style. */
export function computeSegments(node: BeliefNode): Segment[] {
	const children = node.children ?? [];
	if (children.length === 0) return [];

	const agg = new Map<string, { count: number; opacitySum: number }>();
	for (const child of children) {
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
}
