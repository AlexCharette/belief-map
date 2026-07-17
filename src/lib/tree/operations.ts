import { Source, Confidence } from '../types';
import type {
	BeliefInput,
	BeliefMapDoc,
	BeliefNode,
	BeliefReference,
	Category,
	ConfidenceLevel
} from '../types';
import { defaultCategories, defaultConfidenceLevels } from '../beliefTypes';
import { en } from '../i18n/en';
import { safeUrl } from '../url';

export const MAP_VERSION = 3;

// English defaults used only as an import-normalization fallback for maps that lack a
// taxonomy. Localized seeding of brand-new maps happens in the maps store via i18n.
const FALLBACK_CATEGORIES = defaultCategories(en);
const FALLBACK_CONFIDENCE_LEVELS = defaultConfidenceLevels(en);

/** Legacy single-axis `type` values → the two-axis {source, confidence} pair they
 *  best unbundle into (default-taxonomy ids). Keeps very old maps meaningful. */
const LEGACY_TYPE_MAP: Record<string, { source: Source; confidence: Confidence }> = {
	scientificEvidence: { source: Source.ScientificEvidence, confidence: Confidence.Established },
	observation: { source: Source.DirectObservation, confidence: Confidence.Probable },
	personalObservation: { source: Source.DirectObservation, confidence: Confidence.Probable },
	personalConclusion: { source: Source.LogicalReasoning, confidence: Confidence.Probable },
	personalAssumption: { source: Source.Intuition, confidence: Confidence.Tentative },
	religiousThinking: { source: Source.Faith, confidence: Confidence.Probable },
	statedByAuthority: { source: Source.ExpertAuthority, confidence: Confidence.Probable },
	unableToDisprove: { source: Source.Faith, confidence: Confidence.Tentative }
};

function uuid(): string {
	return crypto.randomUUID();
}

/** Build a fresh belief node from form input. */
export function createBelief(input: BeliefInput, isRoot = false): BeliefNode {
	return {
		id: uuid(),
		description: input.description,
		notes: input.notes,
		source: input.source,
		confidence: input.confidence,
		references: input.references.map((r) => ({ text: r.text, link: r.link })),
		isRoot,
		children: []
	};
}

/** A single seeded root belief. */
export function newTree(description = 'Your Beliefs'): BeliefNode {
	return createBelief(
		{ description, notes: '', source: Source.LogicalReasoning, confidence: Confidence.Established, references: [] },
		true
	);
}

/** A brand-new forest (one seeded root). */
export function newForest(description = 'Your Beliefs'): BeliefNode[] {
	return [newTree(description)];
}

/** Structural clone of a node subtree. */
function clone(node: BeliefNode): BeliefNode {
	return {
		...node,
		references: node.references.map((r) => ({ ...r })),
		children: node.children.map(clone)
	};
}

/** Clone a whole forest (safe to mutate the result). */
function cloneForest(roots: BeliefNode[]): BeliefNode[] {
	return roots.map(clone);
}

// --- Traversal primitives ---------------------------------------------------

/** Depth-first visit of every node in the forest. */
function walkForest(roots: BeliefNode[], visit: (node: BeliefNode) => void): void {
	const go = (n: BeliefNode) => {
		visit(n);
		n.children.forEach(go);
	};
	roots.forEach(go);
}

/** First node in the forest matching `pred` (short-circuits), or null. */
function findAcross(roots: BeliefNode[], pred: (node: BeliefNode) => boolean): BeliefNode | null {
	let hit: BeliefNode | null = null;
	const go = (n: BeliefNode): boolean => {
		if (pred(n)) {
			hit = n;
			return true;
		}
		return n.children.some(go);
	};
	roots.some(go);
	return hit;
}

/** Depth-first search across the forest (read-only; returns a live reference). */
export function findNode(roots: BeliefNode[], id: string): BeliefNode | null {
	return findAcross(roots, (n) => n.id === id);
}

/** The parent of node `id`, or null when `id` is a root (or not found). */
export function findParent(roots: BeliefNode[], id: string): BeliefNode | null {
	return findAcross(roots, (n) => n.children.some((c) => c.id === id));
}

/** Clone the forest, mutate the node with `id` in place, return the new forest
 *  (unchanged if `id` isn't found). */
function mutateNode(roots: BeliefNode[], id: string, fn: (node: BeliefNode) => void): BeliefNode[] {
	const next = cloneForest(roots);
	const node = findNode(next, id);
	if (node) fn(node);
	return next;
}

/** All ids in the subtree rooted at `node`, including `node` itself. */
export function subtreeIds(node: BeliefNode): Set<string> {
	const ids = new Set<string>();
	walkForest([node], (n) => ids.add(n.id));
	return ids;
}

// --- Structural edits -------------------------------------------------------

/** Add `input` as a child of the node identified by `parentId`. Returns a new forest. */
export function addNode(roots: BeliefNode[], parentId: string, input: BeliefInput): BeliefNode[] {
	return mutateNode(roots, parentId, (parent) => {
		parent.children.push(createBelief(input));
	});
}

/** Append a new parentless root (an "orphan"). Returns a new forest. */
export function addOrphan(
	roots: BeliefNode[],
	input: BeliefInput,
	position?: { x: number; y: number }
): BeliefNode[] {
	const next = cloneForest(roots);
	const node = createBelief(input, true);
	if (position) node.position = { x: position.x, y: position.y };
	next.push(node);
	return next;
}

/** Update the fields of the node identified by `id`. Returns a new forest. */
export function updateNode(roots: BeliefNode[], id: string, patch: BeliefInput): BeliefNode[] {
	return mutateNode(roots, id, (node) => {
		node.description = patch.description;
		node.notes = patch.notes;
		node.source = patch.source;
		node.confidence = patch.confidence;
		node.references = patch.references.map((r) => ({ text: r.text, link: r.link }));
	});
}

/** Delete node `id`. A root's children are **promoted to roots**; a non-root's
 *  children are absorbed into its parent. Returns a new forest. */
export function deleteNode(roots: BeliefNode[], id: string): BeliefNode[] {
	const next = cloneForest(roots);
	const rootIdx = next.findIndex((r) => r.id === id);
	if (rootIdx !== -1) {
		const [removed] = next.splice(rootIdx, 1);
		const promoted = removed.children.map((c) => ({ ...c, isRoot: true }));
		next.splice(rootIdx, 0, ...promoted);
		return next;
	}
	const removeFrom = (parent: BeliefNode): boolean => {
		const idx = parent.children.findIndex((c) => c.id === id);
		if (idx !== -1) {
			const [removed] = parent.children.splice(idx, 1);
			parent.children.splice(idx, 0, ...removed.children);
			return true;
		}
		return parent.children.some(removeFrom);
	};
	next.some(removeFrom);
	return next;
}

/** Whether node `id` may be rerouted under `newParentId`. Invalid when the target
 *  is the node itself or one of its descendants (cycle), the target is missing, or
 *  it's already the node's parent (no-op). Re-parenting a root is allowed. */
export function canReroute(roots: BeliefNode[], id: string, newParentId: string): boolean {
	const node = findNode(roots, id);
	if (!node) return false;
	if (!findNode(roots, newParentId)) return false;
	if (subtreeIds(node).has(newParentId)) return false; // self or descendant -> cycle
	const currentParent = findParent(roots, id);
	if (currentParent && currentParent.id === newParentId) return false; // already there
	return true;
}

/** Move node `id` (with its subtree) to become a child of `newParentId`. A root
 *  loses its root status. Returns a new forest; unchanged if the move is invalid. */
export function moveNode(roots: BeliefNode[], id: string, newParentId: string): BeliefNode[] {
	if (!canReroute(roots, id, newParentId)) return roots;
	const next = cloneForest(roots);
	let moved: BeliefNode;
	const rootIdx = next.findIndex((r) => r.id === id);
	if (rootIdx !== -1) {
		[moved] = next.splice(rootIdx, 1);
	} else {
		const oldParent = findParent(next, id)!;
		const idx = oldParent.children.findIndex((c) => c.id === id);
		[moved] = oldParent.children.splice(idx, 1);
	}
	moved.isRoot = false;
	findNode(next, newParentId)!.children.push(moved);
	return next;
}

/** Detach node `id` from its parent — the edge is removed and the node (with its
 *  whole subtree) becomes a standalone root. No-op if `id` is already a root or
 *  is not found. Returns a new forest. */
export function detachNode(roots: BeliefNode[], id: string): BeliefNode[] {
	const next = cloneForest(roots);
	const parent = findParent(next, id);
	if (!parent) return next; // already a root (or missing) — nothing to detach
	const idx = parent.children.findIndex((c) => c.id === id);
	const [detached] = parent.children.splice(idx, 1);
	detached.isRoot = true;
	next.push(detached);
	return next;
}

/** Valid reroute targets for node `id`, in depth-first order with depth for
 *  indentation. Excludes the node, its descendants, and its current parent. */
export function rerouteCandidates(
	roots: BeliefNode[],
	id: string
): { id: string; description: string; source: string; depth: number }[] {
	const node = findNode(roots, id);
	if (!node) return [];
	const blocked = subtreeIds(node); // self + descendants
	const currentParent = findParent(roots, id);
	const out: { id: string; description: string; source: string; depth: number }[] = [];
	const walk = (n: BeliefNode, depth: number) => {
		const isBlocked = blocked.has(n.id) || currentParent?.id === n.id;
		if (!isBlocked) out.push({ id: n.id, description: n.description, source: n.source, depth });
		for (const child of n.children) walk(child, depth + 1);
	};
	for (const r of roots) walk(r, 0);
	return out;
}

/** Insert a new belief between `parentId` and its direct child `childId`:
 *  parent → NEW → child (child keeps its subtree). Returns a new forest;
 *  unchanged if `childId` isn't a direct child of `parentId`. */
export function insertBetween(
	roots: BeliefNode[],
	parentId: string,
	childId: string,
	input: BeliefInput,
	position?: { x: number; y: number }
): BeliefNode[] {
	const next = cloneForest(roots);
	const parent = findNode(next, parentId);
	if (!parent) return roots;
	const idx = parent.children.findIndex((c) => c.id === childId);
	if (idx === -1) return roots;
	const child = parent.children[idx];
	const mid = createBelief(input);
	if (position) mid.position = { x: position.x, y: position.y };
	mid.children = [child];
	parent.children[idx] = mid;
	return next;
}

/** Set a node's manual canvas position. Returns a new forest. */
export function setPosition(roots: BeliefNode[], id: string, x: number, y: number): BeliefNode[] {
	return mutateNode(roots, id, (node) => {
		node.position = { x, y };
	});
}

/** Clear all manual positions (revert to auto-layout). Returns a new forest. */
export function clearPositions(roots: BeliefNode[]): BeliefNode[] {
	const next = cloneForest(roots);
	walkForest(next, (n) => delete n.position);
	return next;
}

// --- Taxonomy reassignment (used by delete / preset-switch) -----------------

/** Point every belief whose `key` id is `fromId` at `toId`. Returns a new forest. */
function reassign(
	roots: BeliefNode[],
	key: 'source' | 'confidence',
	fromId: string,
	toId: string
): BeliefNode[] {
	const next = cloneForest(roots);
	walkForest(next, (n) => {
		if (n[key] === fromId) n[key] = toId;
	});
	return next;
}

export function reassignCategory(roots: BeliefNode[], fromId: string, toId: string): BeliefNode[] {
	return reassign(roots, 'source', fromId, toId);
}

export function reassignConfidence(roots: BeliefNode[], fromId: string, toId: string): BeliefNode[] {
	return reassign(roots, 'confidence', fromId, toId);
}

function countBy(roots: BeliefNode[], key: 'source' | 'confidence'): Record<string, number> {
	const counts: Record<string, number> = {};
	walkForest(roots, (n) => {
		counts[n[key]] = (counts[n[key]] ?? 0) + 1;
	});
	return counts;
}

/** How many beliefs reference each category id. */
export function countByCategory(roots: BeliefNode[]): Record<string, number> {
	return countBy(roots, 'source');
}

/** How many beliefs reference each confidence-level id. */
export function countByConfidence(roots: BeliefNode[]): Record<string, number> {
	return countBy(roots, 'confidence');
}

// --- Normalization of untrusted / legacy JSON ------------------------------

function normalizeString(raw: unknown): string {
	return typeof raw === 'string' && raw.length > 0 ? raw : '';
}

/** Legacy single-axis `type` (current or capitalized) → {source, confidence} pair. */
function legacyPair(rawType: string): { source: Source; confidence: Confidence } | null {
	if (!rawType) return null;
	if (LEGACY_TYPE_MAP[rawType]) return LEGACY_TYPE_MAP[rawType];
	const lowerFirst = rawType[0].toLowerCase() + rawType.slice(1);
	return LEGACY_TYPE_MAP[lowerFirst] ?? null;
}

/** Resolve an id to one that exists in `valid`: prefer the raw value, then a legacy
 *  fallback, else the taxonomy's first id. */
function resolveId(raw: unknown, valid: Set<string>, legacy: string | null, fallback: string): string {
	const s = normalizeString(raw);
	if (s && valid.has(s)) return s;
	if (legacy && valid.has(legacy)) return legacy;
	return fallback;
}

function coerceReferences(raw: unknown): BeliefReference[] {
	if (!Array.isArray(raw)) return [];
	return raw
		.filter((r) => r && typeof r === 'object')
		.map((r) => ({
			text: typeof r.text === 'string' ? r.text : '',
			// Strip unsafe schemes (javascript:, data:, …) on import so a hostile map
			// can't smuggle an XSS payload into a reference link.
			link: typeof r.link === 'string' ? safeUrl(r.link) : ''
		}));
}

/** Build a deduped-by-id list from untrusted input, falling back to `fallback` when
 *  the input isn't a usable array. Each surviving item is projected by `mapItem`. */
function coerceById<T extends { id: string }>(
	raw: unknown,
	fallback: T[],
	mapItem: (o: Record<string, unknown>, id: string) => T
): T[] {
	if (!Array.isArray(raw)) return fallback.map((x) => ({ ...x }));
	const seen = new Set<string>();
	const out: T[] = [];
	for (const item of raw) {
		if (!item || typeof item !== 'object') continue;
		const o = item as Record<string, unknown>;
		const id = normalizeString(o.id);
		if (!id || seen.has(id)) continue;
		seen.add(id);
		out.push(mapItem(o, id));
	}
	return out.length > 0 ? out : fallback.map((x) => ({ ...x }));
}

function coerceCategories(raw: unknown): Category[] {
	return coerceById(raw, FALLBACK_CATEGORIES, (o, id) => ({
		id,
		label: typeof o.label === 'string' && o.label ? o.label : id,
		colorHex: typeof o.colorHex === 'string' && o.colorHex ? o.colorHex : '#9CCFD8',
		icon: (typeof o.icon === 'string' ? o.icon : 'help') as Category['icon']
	}));
}

function coerceLevels(raw: unknown): ConfidenceLevel[] {
	return coerceById(raw, FALLBACK_CONFIDENCE_LEVELS, (o, id) => ({
		id,
		label: typeof o.label === 'string' && o.label ? o.label : id
	}));
}

function normalizeNode(
	raw: unknown,
	isRoot: boolean,
	catIds: Set<string>,
	levelIds: Set<string>,
	fallbackCat: string,
	fallbackLevel: string
): BeliefNode {
	const obj = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
	const children = Array.isArray(obj.children) ? obj.children : [];
	const legacy = legacyPair(normalizeString(obj.type));
	const p = obj.position as { x?: unknown; y?: unknown } | undefined;
	const position =
		p && typeof p.x === 'number' && typeof p.y === 'number' ? { x: p.x, y: p.y } : undefined;
	return {
		id: typeof obj.id === 'string' && obj.id ? obj.id : uuid(),
		// Read `description`, falling back to the legacy `name` field for old JSON.
		description:
			typeof obj.description === 'string'
				? obj.description
				: typeof obj.name === 'string'
					? obj.name
					: '',
		notes: typeof obj.notes === 'string' ? obj.notes : '',
		source: resolveId(obj.source, catIds, legacy?.source ?? null, fallbackCat),
		confidence: resolveId(obj.confidence, levelIds, legacy?.confidence ?? null, fallbackLevel),
		references: coerceReferences(obj.references),
		isRoot,
		...(position ? { position } : {}),
		children: children.map((c) => normalizeNode(c, false, catIds, levelIds, fallbackCat, fallbackLevel))
	};
}

/** Coerce arbitrary parsed JSON into a valid map document. Accepts the new
 *  `{categories, confidenceLevels, roots}` form, the previous single-`{…, tree}`
 *  form, or a legacy bare tree. Throws only if the input isn't an object. */
export function normalizeMap(raw: unknown): BeliefMapDoc {
	if (!raw || typeof raw !== 'object') {
		throw new Error('Not a belief map: expected a JSON object.');
	}
	const obj = raw as Record<string, unknown>;
	const isBareTree = Array.isArray(obj.children);
	const categories = coerceCategories(isBareTree ? undefined : obj.categories);
	const confidenceLevels = coerceLevels(isBareTree ? undefined : obj.confidenceLevels);
	const catIds = new Set(categories.map((c) => c.id));
	const levelIds = new Set(confidenceLevels.map((l) => l.id));

	// Determine the raw list of roots across supported shapes.
	let rootsRaw: unknown[];
	if (isBareTree) rootsRaw = [obj];
	else if (Array.isArray(obj.roots)) rootsRaw = obj.roots;
	else if (obj.tree) rootsRaw = [obj.tree];
	else rootsRaw = [newTree()]; // garbage/empty input → seed one root

	const roots = rootsRaw.map((r) =>
		normalizeNode(r, true, catIds, levelIds, categories[0].id, confidenceLevels[0].id)
	);
	return { version: MAP_VERSION, categories, confidenceLevels, roots };
}
