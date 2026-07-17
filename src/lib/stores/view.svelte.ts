import {
	loadCardinality,
	saveCardinality,
	loadToolbarOpen,
	saveToolbarOpen,
	loadNodeStyle,
	saveNodeStyle,
	type NodeStyle
} from '../persistence';

export const MIN_CARDINALITY = 1;
export const MAX_CARDINALITY = 9;
const DEFAULT_CARDINALITY = 4;

const clamp = (n: number) =>
	Math.min(MAX_CARDINALITY, Math.max(MIN_CARDINALITY, Math.round(n)));

/** Global, persisted view preferences. `cardinality` = how many evenly-spaced
 *  directions each root's children fan out along (see `computeLayout`). Mirrors the
 *  i18n singleton pattern; call `init()` once in the browser. */
class ViewStore {
	cardinality = $state(DEFAULT_CARDINALITY);
	/** Whether the top-right toolbar cluster is expanded (visible). */
	toolbarOpen = $state(true);
	/** Which canvas node render style is active. Defaults to 'card'; the in-UI
	 *  switcher is currently hidden, but the persisted value still applies. */
	nodeStyle = $state<NodeStyle>('card');

	init(): void {
		this.cardinality = loadCardinality() ?? DEFAULT_CARDINALITY;
		this.toolbarOpen = loadToolbarOpen() ?? true;
		this.nodeStyle = loadNodeStyle() ?? 'card';
	}

	set(cardinality: number): void {
		const next = clamp(cardinality);
		if (next === this.cardinality) return;
		this.cardinality = next;
		saveCardinality(next);
	}

	toggleToolbar(): void {
		this.toolbarOpen = !this.toolbarOpen;
		saveToolbarOpen(this.toolbarOpen);
	}

	setNodeStyle(style: NodeStyle): void {
		if (style === this.nodeStyle) return;
		this.nodeStyle = style;
		saveNodeStyle(style);
	}
}

export const view = new ViewStore();
