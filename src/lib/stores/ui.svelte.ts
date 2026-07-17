import type { BeliefInput, BeliefNode } from '../types';
import { findNode } from '../tree/operations';
import { maps } from './maps.svelte';

export type FormMode = 'add' | 'edit' | 'insert' | 'create';

interface FormState {
	open: boolean;
	mode: FormMode;
	/** For 'add' the parent id; for 'edit' the node's own id; for 'insert' the parent
	 *  id (with `childId` set to the edge's child); for 'create' unused. */
	targetId: string;
	/** Only for 'insert': the existing child the new belief is inserted above. */
	childId: string;
	/** Only for 'create': where on the canvas the new orphan should be placed. */
	position: { x: number; y: number } | null;
}

class UiStore {
	selectedId = $state<string | null>(null);
	showDetails = $state(false);
	copied = $state<BeliefInput | null>(null);
	collapsed = $state<Set<string>>(new Set());
	form = $state<FormState>({ open: false, mode: 'add', targetId: '', childId: '', position: null });
	reroute = $state<{ open: boolean; nodeId: string }>({ open: false, nodeId: '' });
	taxonomyOpen = $state(false);
	helpOpen = $state(false);
	clearDataOpen = $state(false);
	toast = $state<{ message: string; seq: number } | null>(null);

	private toastSeq = 0;

	/** The currently selected node, resolved live from the active forest. */
	get selectedNode(): BeliefNode | null {
		return this.selectedId ? findNode(maps.roots, this.selectedId) : null;
	}

	select(id: string): void {
		this.selectedId = id;
		this.showDetails = true;
	}

	closeDetails(): void {
		this.showDetails = false;
	}

	copy(input: BeliefInput): void {
		this.copied = { ...input, references: input.references.map((r) => ({ ...r })) };
	}

	private setForm(
		mode: FormMode,
		targetId = '',
		childId = '',
		position: { x: number; y: number } | null = null
	): void {
		this.form = { open: true, mode, targetId, childId, position };
	}

	openAddForm(parentId: string): void {
		this.setForm('add', parentId);
	}

	openEditForm(nodeId: string): void {
		this.setForm('edit', nodeId);
	}

	/** Insert a new belief between `parentId` and its child `childId` (edge split). */
	openInsertForm(parentId: string, childId: string): void {
		this.setForm('insert', parentId, childId);
	}

	/** Create a new parentless (orphan) belief at a canvas position. */
	openCreateForm(position: { x: number; y: number }): void {
		this.setForm('create', '', '', position);
	}

	closeForm(): void {
		this.form = { ...this.form, open: false };
	}

	openReroute(nodeId: string): void {
		this.reroute = { open: true, nodeId };
	}

	closeReroute(): void {
		this.reroute = { ...this.reroute, open: false };
	}

	openTaxonomy(): void {
		this.taxonomyOpen = true;
	}

	closeTaxonomy(): void {
		this.taxonomyOpen = false;
	}

	openHelp(): void {
		this.helpOpen = true;
	}

	closeHelp(): void {
		this.helpOpen = false;
	}

	openClearData(): void {
		this.clearDataOpen = true;
	}

	closeClearData(): void {
		this.clearDataOpen = false;
	}

	toggleCollapse(id: string): void {
		const next = new Set(this.collapsed);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		this.collapsed = next;
	}

	notify(message: string): void {
		this.toast = { message, seq: ++this.toastSeq };
	}
}

export const ui = new UiStore();
