import { describe, it, expect } from 'vitest';
import { Confidence, Source } from '../types';
import { addNode, addOrphan, newForest } from './operations';
import { computeLayout } from './layout';

const belief = (name: string) => ({
	name,
	notes: '',
	source: Source.DirectObservation,
	confidence: Confidence.Probable,
	references: []
});

function sample() {
	let roots = newForest();
	const rid = roots[0].id;
	roots = addNode(roots, rid, belief('a'));
	const aId = roots[0].children[0].id;
	roots = addNode(roots, aId, belief('a1'));
	roots = addNode(roots, rid, belief('b'));
	return { roots, rid, aId };
}

describe('computeLayout', () => {
	it('lays out every node; links stay within trees (excludes the virtual super-root)', () => {
		const { roots, rid } = sample();
		const { nodes, links } = computeLayout(roots);
		expect(nodes).toHaveLength(4); // root, a, a1, b
		expect(links).toHaveLength(3); // root-a, a-a1, root-b — no virtual-root links
		const ids = new Set(nodes.map((n) => n.data.id));
		expect(links.every((l) => ids.has(l.source) && ids.has(l.target))).toBe(true);
		expect(links.some((l) => l.source === rid)).toBe(true);
	});

	it('lays out a forest of multiple roots side by side (no cross-root links)', () => {
		let { roots } = sample();
		roots = addOrphan(roots, belief('orphan'));
		const { nodes, links } = computeLayout(roots);
		expect(nodes).toHaveLength(5); // + orphan
		// still only the 3 within-tree links; the orphan has no parent link
		expect(links).toHaveLength(3);
		expect(nodes.some((n) => n.data.name === 'orphan')).toBe(true);
	});

	it('hides the subtree of a collapsed node', () => {
		const { roots, aId } = sample();
		const { nodes } = computeLayout(roots, new Set([aId]));
		const names = nodes.map((n) => n.data.name);
		expect(names).toContain('a');
		expect(names).not.toContain('a1');
		expect(nodes.find((n) => n.data.id === aId)!.collapsed).toBe(true);
	});
});
