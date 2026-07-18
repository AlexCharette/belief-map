import type { BeliefMapDoc, BeliefNode, Category, ConfidenceLevel, MapMeta } from '../types';
import {
	MAP_VERSION,
	addOrphan as addOrphanOp,
	clearPositions,
	newForest,
	reassignCategories,
	reassignCategory,
	reassignConfidence,
	setPosition
} from '../tree/operations';
import type { BeliefInput } from '../types';
import {
	completePresetMapping,
	defaultCategories,
	defaultConfidenceLevels,
	presets,
	opacityForIndex
} from '../beliefTypes';
import {
	clearAll,
	loadActiveId,
	loadIndex,
	loadMap,
	removeMap,
	saveActiveId,
	saveIndex,
	saveMap
} from '../persistence';
import { i18n } from './i18n.svelte';

/** The locale-appropriate default map name (evaluated at call time, after i18n.init). */
function defaultName(): string {
	return i18n.m.taxo.defaultMapName;
}

const FALLBACK_CATEGORY: Category = {
	id: '__unspecified',
	label: 'Unspecified',
	colorHex: '#6E6A86',
	icon: 'help'
};

function newId(): string {
	return crypto.randomUUID();
}

function defaultDoc(name = defaultName()): BeliefMapDoc {
	return {
		version: MAP_VERSION,
		categories: defaultCategories(i18n.m),
		confidenceLevels: defaultConfidenceLevels(i18n.m),
		roots: newForest(name)
	};
}

/** Multiple named belief maps. Each map owns its taxonomy (categories +
 *  confidence levels); the active map's taxonomy and tree live in memory.
 *  Every change is persisted to localStorage immediately (autosave). */
class MapsStore {
	index = $state<MapMeta[]>([]);
	activeId = $state<string>('');
	roots = $state<BeliefNode[]>(newForest());
	categories = $state<Category[]>(defaultCategories(i18n.m));
	confidenceLevels = $state<ConfidenceLevel[]>(defaultConfidenceLevels(i18n.m));
	ready = $state(false);

	get activeMeta(): MapMeta | null {
		return this.index.find((m) => m.id === this.activeId) ?? null;
	}

	private doc(): BeliefMapDoc {
		return {
			version: MAP_VERSION,
			categories: this.categories,
			confidenceLevels: this.confidenceLevels,
			roots: this.roots
		};
	}

	private loadDoc(d: BeliefMapDoc): void {
		this.categories = d.categories;
		this.confidenceLevels = d.confidenceLevels;
		this.roots = d.roots;
	}

	/** Load persisted state, or seed a first map. Call once in the browser. */
	init(): void {
		if (this.ready) return;
		const index = loadIndex();
		if (index.length === 0) {
			this.seedDefault();
		} else {
			this.index = index;
			const stored = loadActiveId();
			this.activeId = index.some((m) => m.id === stored) ? (stored as string) : index[0].id;
			this.loadDoc(loadMap(this.activeId) ?? defaultDoc());
		}
		this.ready = true;
	}

	private seedDefault(): void {
		const id = newId();
		const name = defaultName();
		this.index = [{ id, name, updatedAt: Date.now() }];
		this.activeId = id;
		this.loadDoc(defaultDoc(name));
		saveMap(id, this.doc());
		saveIndex(this.index);
		saveActiveId(id);
	}

	/** Persist the active map's document + bump its updatedAt. */
	private persist(): void {
		this.index = this.index.map((m) =>
			m.id === this.activeId ? { ...m, updatedAt: Date.now() } : m
		);
		saveMap(this.activeId, this.doc());
		saveIndex(this.index);
	}

	/** Apply a pure forest operation, then persist. */
	applyForestOp(fn: (roots: BeliefNode[]) => BeliefNode[]): void {
		this.roots = fn(this.roots);
		this.persist();
	}

	/** Create a new parentless (orphan) root at `position`. */
	addOrphan(input: BeliefInput, position?: { x: number; y: number }): void {
		this.applyForestOp((r) => addOrphanOp(r, input, position));
	}

	/** Persist a node's dragged position. */
	setNodePosition(id: string, x: number, y: number): void {
		this.applyForestOp((r) => setPosition(r, id, x, y));
	}

	/** Clear all manual positions — revert to auto-layout. */
	tidyLayout(): void {
		this.applyForestOp(clearPositions);
	}

	newMap(name = defaultName()): void {
		const id = newId();
		this.index = [...this.index, { id, name, updatedAt: Date.now() }];
		this.activeId = id;
		this.loadDoc(defaultDoc(name));
		saveMap(id, this.doc());
		saveIndex(this.index);
		saveActiveId(id);
	}

	switchTo(id: string): void {
		if (id === this.activeId || !this.index.some((m) => m.id === id)) return;
		this.activeId = id;
		this.loadDoc(loadMap(id) ?? defaultDoc());
		saveActiveId(id);
	}

	rename(id: string, name: string): void {
		const trimmed = name.trim();
		if (!trimmed) return;
		this.index = this.index.map((m) => (m.id === id ? { ...m, name: trimmed } : m));
		saveIndex(this.index);
	}

	remove(id: string): void {
		removeMap(id);
		const remaining = this.index.filter((m) => m.id !== id);
		if (this.activeId === id) {
			if (remaining.length === 0) {
				this.seedDefault();
				return;
			}
			this.index = remaining;
			this.activeId = remaining[0].id;
			this.loadDoc(loadMap(this.activeId) ?? defaultDoc());
			saveActiveId(this.activeId);
		} else {
			this.index = remaining;
		}
		saveIndex(this.index);
	}

	/** Wipe ALL persisted app data, then start fresh with a single default map. */
	clearAllData(): void {
		clearAll();
		this.seedDefault();
	}

	/** Create a new map from an (already normalized) imported document. */
	importDoc(name: string, doc: BeliefMapDoc): void {
		const id = newId();
		this.index = [...this.index, { id, name, updatedAt: Date.now() }];
		this.activeId = id;
		this.loadDoc(doc);
		saveMap(id, this.doc());
		saveIndex(this.index);
		saveActiveId(id);
	}

	exportJSON(): string {
		return JSON.stringify(this.doc(), null, 2);
	}

	// --- Taxonomy lookups (reactive; read the active map's taxonomy) ---------

	categoryMeta(id: string): Category {
		return (
			this.categories.find((c) => c.id === id) ?? {
				...FALLBACK_CATEGORY,
				label: i18n.m.taxo.unspecified
			}
		);
	}

	confidenceMeta(id: string): ConfidenceLevel & { order: number } {
		const order = this.confidenceLevels.findIndex((l) => l.id === id);
		if (order === -1) return { id, label: '—', order: 0 };
		return { ...this.confidenceLevels[order], order };
	}

	confidenceOpacity(id: string): number {
		const i = this.confidenceLevels.findIndex((l) => l.id === id);
		if (i === -1) return 1;
		return opacityForIndex(i, this.confidenceLevels.length);
	}

	// --- Taxonomy mutations --------------------------------------------------

	/** Replace the categories with a preset's, remapping beliefs per `mapping`
	 *  (oldId → newId). `completePresetMapping` fills gaps and coerces invalid
	 *  targets, so no belief ends up on a nonexistent category. */
	applyPreset(presetId: string, mapping: Record<string, string> = {}): void {
		const preset = presets(i18n.m).find((p) => p.id === presetId);
		if (!preset) return;
		const effective = completePresetMapping(
			preset,
			this.categories.map((c) => c.id),
			mapping
		);
		this.roots = reassignCategories(this.roots, effective);
		this.categories = preset.categories.map((c) => ({ ...c }));
		this.persist();
	}

	addCategory(cat: Category): void {
		this.categories = [...this.categories, cat];
		this.persist();
	}

	updateCategory(id: string, patch: Partial<Omit<Category, 'id'>>): void {
		this.categories = this.categories.map((c) => (c.id === id ? { ...c, ...patch } : c));
		this.persist();
	}

	/** Delete a category, reassigning its beliefs to `reassignToId`. No-op if it's
	 *  the last category. */
	deleteCategory(id: string, reassignToId: string): void {
		if (this.categories.length <= 1) return;
		this.roots = reassignCategory(this.roots, id, reassignToId);
		this.categories = this.categories.filter((c) => c.id !== id);
		this.persist();
	}

	moveCategory(id: string, delta: number): void {
		this.categories = move(this.categories, id, delta);
		this.persist();
	}

	addLevel(level: ConfidenceLevel): void {
		this.confidenceLevels = [...this.confidenceLevels, level];
		this.persist();
	}

	updateLevel(id: string, label: string): void {
		this.confidenceLevels = this.confidenceLevels.map((l) => (l.id === id ? { ...l, label } : l));
		this.persist();
	}

	deleteLevel(id: string, reassignToId: string): void {
		if (this.confidenceLevels.length <= 1) return;
		this.roots = reassignConfidence(this.roots, id, reassignToId);
		this.confidenceLevels = this.confidenceLevels.filter((l) => l.id !== id);
		this.persist();
	}

	moveLevel(id: string, delta: number): void {
		this.confidenceLevels = move(this.confidenceLevels, id, delta);
		this.persist();
	}
}

/** Reorder an item by id by `delta` (-1 up / +1 down), returning a new array. */
function move<T extends { id: string }>(list: T[], id: string, delta: number): T[] {
	const i = list.findIndex((x) => x.id === id);
	const j = i + delta;
	if (i === -1 || j < 0 || j >= list.length) return list;
	const next = [...list];
	[next[i], next[j]] = [next[j], next[i]];
	return next;
}

export const maps = new MapsStore();
