import { describe, it, expect } from 'vitest';
import { Confidence, Source } from '../types';
import { addNode, addOrphan, newForest } from './operations';
import { computeLayout, type LaidOutNode } from './layout';

const belief = (name: string) => ({
	name,
	notes: '',
	source: Source.DirectObservation,
	confidence: Confidence.Probable,
	references: []
});

const byId = (nodes: LaidOutNode[], id: string) => nodes.find((n) => n.data.id === id)!;

function sample() {
	let roots = newForest();
	const rid = roots[0].id;
	roots = addNode(roots, rid, belief('a'));
	const aId = roots[0].children[0].id;
	roots = addNode(roots, aId, belief('a1'));
	roots = addNode(roots, rid, belief('b'));
	return { roots, rid, aId };
}

describe('computeLayout (root spokes)', () => {
	it('cardinality 1 lays out a plain straight-down tree', () => {
		const { roots, rid, aId } = sample();
		const { nodes, links } = computeLayout(roots, new Set(), 1);
		expect(nodes).toHaveLength(4); // root, a, a1, b
		expect(links).toHaveLength(3);
		const root = byId(nodes, rid);
		const a = byId(nodes, aId);
		const b = nodes.find((n) => n.data.name === 'b')!;
		const a1 = nodes.find((n) => n.data.name === 'a1')!;
		// every descendant hangs below its ancestor
		expect(a.y).toBeGreaterThan(root.y);
		expect(b.y).toBeGreaterThan(root.y);
		expect(a1.y).toBeGreaterThan(a.y);
	});

	it('cardinality 4 sends the root’s children south, west, north, east', () => {
		let roots = newForest();
		const rid = roots[0].id;
		for (const n of ['south', 'west', 'north', 'east']) roots = addNode(roots, rid, belief(n));
		const { nodes } = computeLayout(roots, new Set(), 4);
		const root = byId(nodes, rid);
		const dir = (name: string) => nodes.find((n) => n.data.name === name)!;
		const near = (a: number, b: number) => Math.abs(a - b) < 1;

		expect(dir('south').y).toBeGreaterThan(root.y);
		expect(near(dir('south').x, root.x)).toBe(true);

		expect(dir('west').x).toBeLessThan(root.x);
		expect(near(dir('west').y, root.y)).toBe(true);

		expect(dir('north').y).toBeLessThan(root.y);
		expect(near(dir('north').x, root.x)).toBe(true);

		expect(dir('east').x).toBeGreaterThan(root.x);
		expect(near(dir('east').y, root.y)).toBe(true);
	});

	it('only the root branches: a child’s subtree fans within its own spoke', () => {
		let roots = newForest();
		const rid = roots[0].id;
		roots = addNode(roots, rid, belief('a')); // child 0 → south spoke
		const aId = roots[0].children[0].id;
		roots = addNode(roots, aId, belief('a1'));
		roots = addNode(roots, aId, belief('a2'));
		roots = addNode(roots, rid, belief('b')); // child 1 → west spoke

		const { nodes, links } = computeLayout(roots, new Set(), 4);
		expect(links).toHaveLength(4); // root-a, a-a1, a-a2, root-b
		const root = byId(nodes, rid);
		const a = byId(nodes, aId);
		// 'a' went south; its grandchildren continue further south, not re-branched
		expect(a.y).toBeGreaterThan(root.y);
		expect(nodes.find((n) => n.data.name === 'a1')!.y).toBeGreaterThan(a.y);
		expect(nodes.find((n) => n.data.name === 'a2')!.y).toBeGreaterThan(a.y);
		// 'b' went west
		expect(nodes.find((n) => n.data.name === 'b')!.x).toBeLessThan(root.x);
	});

	it('tiles multiple roots into separate, horizontally-offset clusters', () => {
		let { roots, rid } = sample();
		roots = addOrphan(roots, belief('orphan'));
		const orphanId = roots[roots.length - 1].id;
		const { nodes, links } = computeLayout(roots, new Set(), 4);
		expect(nodes).toHaveLength(5); // + orphan
		expect(links).toHaveLength(3); // orphan has no parent link
		// the second cluster sits entirely to the right of the first root
		expect(byId(nodes, orphanId).x).toBeGreaterThan(byId(nodes, rid).x);
	});

	it('every non-root node has exactly one parent link', () => {
		const { roots } = sample();
		const { nodes, links } = computeLayout(roots, new Set(), 4);
		expect(links).toHaveLength(nodes.length - 1); // one tree ⇒ nodes − 1 links
	});

	it('hides the subtree of a collapsed node', () => {
		const { roots, aId } = sample();
		const { nodes } = computeLayout(roots, new Set([aId]), 4);
		const names = nodes.map((n) => n.data.name);
		expect(names).toContain('a');
		expect(names).not.toContain('a1');
		expect(byId(nodes, aId).collapsed).toBe(true);
	});
});
