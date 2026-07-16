import { loadCardinality, saveCardinality } from '../persistence';

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

	init(): void {
		this.cardinality = loadCardinality() ?? DEFAULT_CARDINALITY;
	}

	set(cardinality: number): void {
		const next = clamp(cardinality);
		if (next === this.cardinality) return;
		this.cardinality = next;
		saveCardinality(next);
	}
}

export const view = new ViewStore();
