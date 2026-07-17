import { describe, it, expect } from 'vitest';
import { Confidence, Source } from '../types';
import {
	addNode,
	addOrphan,
	canReroute,
	clearPositions,
	countByCategory,
	createBelief,
	deleteNode,
	findNode,
	findParent,
	insertBetween,
	moveNode,
	newForest,
	newTree,
	normalizeMap,
	reassignCategory,
	rerouteCandidates,
	setPosition,
	updateNode
} from './operations';

const input = (
	description: string,
	source = Source.DirectObservation,
	confidence = Confidence.Probable
) => ({
	description,
	notes: '',
	source,
	confidence,
	references: []
});

// convenience: the single seeded root's id
const rootId = (roots: ReturnType<typeof newForest>) => roots[0].id;

describe('newForest / newTree / createBelief', () => {
	it('seeds a forest with one root', () => {
		const roots = newForest();
		expect(roots).toHaveLength(1);
		expect(roots[0].isRoot).toBe(true);
		expect(roots[0].description).toBe('Your Beliefs');
		expect(roots[0].children).toEqual([]);
	});

	it('creates non-root beliefs with unique ids', () => {
		const a = createBelief(input('a'));
		const b = createBelief(input('b'));
		expect(a.id).not.toBe(b.id);
		expect(a.isRoot).toBe(false);
	});
});

describe('addNode / addOrphan', () => {
	it('adds under the root and returns a new forest', () => {
		const roots = newForest();
		const next = addNode(roots, rootId(roots), input('child'));
		expect(next).not.toBe(roots);
		expect(roots[0].children).toHaveLength(0); // original untouched
		expect(next[0].children).toHaveLength(1);
		expect(next[0].children[0].description).toBe('child');
	});

	it('addOrphan appends a new parentless root', () => {
		let roots = newForest();
		roots = addOrphan(roots, input('loner'), { x: 10, y: 20 });
		expect(roots).toHaveLength(2);
		const loner = roots[1];
		expect(loner.description).toBe('loner');
		expect(loner.isRoot).toBe(true);
		expect(loner.position).toEqual({ x: 10, y: 20 });
		expect(findParent(roots, loner.id)).toBeNull(); // truly parentless
	});
});

describe('updateNode', () => {
	it('updates fields immutably', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('old'));
		const id = roots[0].children[0].id;
		const next = updateNode(roots, id, {
			description: 'new',
			notes: 'note',
			source: Source.ScientificEvidence,
			confidence: Confidence.Established,
			references: [{ text: 'r', link: 'http://x' }]
		});
		const updated = findNode(next, id)!;
		expect(updated.description).toBe('new');
		expect(updated.source).toBe(Source.ScientificEvidence);
		expect(updated.confidence).toBe(Confidence.Established);
		expect(updated.references[0].link).toBe('http://x');
	});
});

describe('deleteNode', () => {
	it('removes a non-root and absorbs its children into the parent', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('mid'));
		const midId = roots[0].children[0].id;
		roots = addNode(roots, midId, input('leaf1'));
		roots = addNode(roots, midId, input('leaf2'));

		const next = deleteNode(roots, midId);
		expect(next[0].children).toHaveLength(2);
		expect(next[0].children.map((c) => c.description).sort()).toEqual(['leaf1', 'leaf2']);
	});

	it('deleting a root promotes its children to roots', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('a'));
		roots = addNode(roots, rootId(roots), input('b'));
		const next = deleteNode(roots, rootId(roots));
		expect(next.map((r) => r.description).sort()).toEqual(['a', 'b']);
		expect(next.every((r) => r.isRoot)).toBe(true);
	});
});

describe('reroute (moveNode / canReroute) — forest', () => {
	// root ├─ a │ └─ a1 └─ b   (+ orphan)
	function sample() {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('a'));
		const aId = roots[0].children[0].id;
		roots = addNode(roots, aId, input('a1'));
		const a1Id = roots[0].children[0].children[0].id;
		roots = addNode(roots, rootId(roots), input('b'));
		const bId = roots[0].children[1].id;
		roots = addOrphan(roots, input('orphan'));
		const orphanId = roots[1].id;
		return { roots, rid: rootId(roots), aId, a1Id, bId, orphanId };
	}

	it('moves a node with its subtree under a new parent', () => {
		const { roots, aId, bId } = sample();
		const next = moveNode(roots, aId, bId);
		const b = findNode(next, bId)!;
		expect(b.children.map((c) => c.description)).toEqual(['a']);
		expect(b.children[0].children[0].description).toBe('a1'); // subtree came along
	});

	it('re-parents an orphan root under a node (root loses root status)', () => {
		const { roots, aId, orphanId } = sample();
		const next = moveNode(roots, orphanId, aId);
		expect(next).toHaveLength(1); // orphan is no longer a root
		const moved = findNode(next, orphanId)!;
		expect(moved.isRoot).toBe(false);
		expect(findParent(next, orphanId)!.id).toBe(aId);
	});

	it('rejects cycles (under itself or a descendant)', () => {
		const { roots, aId, a1Id } = sample();
		expect(canReroute(roots, aId, aId)).toBe(false);
		expect(canReroute(roots, aId, a1Id)).toBe(false);
		expect(moveNode(roots, aId, a1Id)).toBe(roots); // unchanged
	});

	it('findParent returns null for a root', () => {
		const { roots, rid, aId } = sample();
		expect(findParent(roots, aId)!.id).toBe(rid);
		expect(findParent(roots, rid)).toBeNull();
	});

	it('rerouteCandidates excludes self/descendants/current-parent, includes other trees', () => {
		const { roots, aId, a1Id, bId, orphanId } = sample();
		const ids = rerouteCandidates(roots, aId).map((c) => c.id);
		expect(ids).toContain(bId);
		expect(ids).toContain(orphanId); // a node in another tree is a valid target
		expect(ids).not.toContain(aId);
		expect(ids).not.toContain(a1Id);
	});
});

describe('insertBetween', () => {
	it('splits an edge: parent → NEW → child', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('child'));
		const childId = roots[0].children[0].id;
		roots = addNode(roots, childId, input('grandchild'));

		const next = insertBetween(roots, rootId(roots), childId, input('bridge'));
		const mid = next[0].children[0];
		expect(mid.description).toBe('bridge');
		expect(mid.children[0].id).toBe(childId);
		expect(mid.children[0].children[0].description).toBe('grandchild');
	});

	it('is a no-op when childId is not a direct child of parentId', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('a'));
		const aId = roots[0].children[0].id;
		roots = addNode(roots, aId, input('a1'));
		const a1Id = roots[0].children[0].children[0].id;
		expect(insertBetween(roots, rootId(roots), a1Id, input('x'))).toBe(roots);
	});
});

describe('positions', () => {
	it('sets and clears manual positions across the forest', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('a'));
		const aId = roots[0].children[0].id;
		roots = setPosition(roots, aId, 120, -40);
		expect(findNode(roots, aId)!.position).toEqual({ x: 120, y: -40 });
		expect(findNode(clearPositions(roots), aId)!.position).toBeUndefined();
	});
});

describe('normalizeMap', () => {
	it('wraps a legacy bare tree with default taxonomy and migrates `type`', () => {
		const doc = normalizeMap({
			id: 'root-1',
			name: 'Your Beliefs',
			type: 'personalConclusion',
			children: [
				{ id: 'a', name: 'sci', type: 'scientificEvidence' },
				{ id: 'b', name: 'cap', type: 'StatedByAuthority' },
				{ id: 'c', name: 'religion', type: 'religiousThinking' }
			]
		});
		expect(doc.version).toBe(3);
		expect(doc.roots).toHaveLength(1);
		const t = doc.roots[0];
		expect(t.source).toBe(Source.LogicalReasoning);
		expect(t.description).toBe('Your Beliefs'); // legacy `name` migrates to `description`
		expect(t.children[0].description).toBe('sci');
		expect(t.children[0]).toMatchObject({ source: Source.ScientificEvidence, confidence: Confidence.Established });
		expect(t.children[1]).toMatchObject({ source: Source.ExpertAuthority, confidence: Confidence.Probable });
		expect(t.children[2]).toMatchObject({ source: Source.Faith, confidence: Confidence.Probable });
	});

	it('accepts the previous single-tree {tree} shape', () => {
		const doc = normalizeMap({ tree: { name: 'r', source: 'faith', confidence: 'probable', children: [] } });
		expect(doc.roots).toHaveLength(1);
		expect(doc.roots[0].source).toBe(Source.Faith);
	});

	it('accepts a forest {roots} and coerces unknown ids + positions', () => {
		const doc = normalizeMap({
			version: 3,
			roots: [
				{ name: 'r1', source: 'faith', confidence: 'probable', position: { x: 5, y: 6 } },
				{ name: 'r2', source: 'nope', confidence: 'nope', children: [{ name: 'bad', position: { x: 'x' } }] }
			]
		});
		expect(doc.roots).toHaveLength(2);
		expect(doc.roots[0].position).toEqual({ x: 5, y: 6 });
		expect(doc.roots[0].isRoot).toBe(true);
		// unknown ids fall back to the first category / level
		expect(doc.roots[1]).toMatchObject({ source: Source.EmpiricalData });
		expect(doc.roots[1].children[0].position).toBeUndefined();
	});

	it('throws on non-object input', () => {
		expect(() => normalizeMap('nope' as unknown)).toThrow();
	});
});

describe('reassignCategory / counts', () => {
	it('remaps every belief from one category to another and counts usage', () => {
		let roots = newForest();
		roots = addNode(roots, rootId(roots), input('a', Source.Faith));
		roots = addNode(roots, rootId(roots), input('b', Source.Faith));
		roots = addOrphan(roots, input('c', Source.Faith));
		expect(countByCategory(roots)[Source.Faith]).toBe(3);

		const next = reassignCategory(roots, Source.Faith, Source.Intuition);
		expect(countByCategory(next)[Source.Faith]).toBeUndefined();
		expect(countByCategory(next)[Source.Intuition]).toBe(3);
	});
});
