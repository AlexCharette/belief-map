import { Source, Confidence } from './types';
import type { Category, ConfidenceLevel } from './types';
import type { IconName } from './icons';
import type { Messages } from './i18n/messages';

/** Structural definition of a default category — everything except the label, which
 *  is resolved from the active locale at build time. `labelKey` names a field under
 *  `Messages['taxo']['source']`. */
type CategorySpec = { id: string; colorHex: string; icon: IconName };

const SOURCE_SPECS: (CategorySpec & { labelKey: keyof Messages['taxo']['source'] })[] = [
	{ id: Source.EmpiricalData, labelKey: 'empiricalData', colorHex: '#9CCFD8', icon: 'database' },
	{ id: Source.DirectObservation, labelKey: 'directObservation', colorHex: '#3E8FB0', icon: 'eye' },
	{ id: Source.ScientificEvidence, labelKey: 'scientificEvidence', colorHex: '#95B1AC', icon: 'flask-conical' },
	{ id: Source.LogicalReasoning, labelKey: 'logicalReasoning', colorHex: '#C4A7E7', icon: 'brain' },
	{ id: Source.ExpertAuthority, labelKey: 'expertAuthority', colorHex: '#EA9A97', icon: 'graduation-cap' },
	{ id: Source.Tradition, labelKey: 'tradition', colorHex: '#F6C177', icon: 'landmark' },
	{ id: Source.Faith, labelKey: 'faith', colorHex: '#EB6F92', icon: 'church' },
	{ id: Source.Intuition, labelKey: 'intuition', colorHex: '#EDA884', icon: 'sparkles' }
];

const EPISTEMIC_SPECS: (CategorySpec & { labelKey: keyof Messages['taxo']['epistemic'] })[] = [
	{ id: 'data', labelKey: 'data', colorHex: '#9CCFD8', icon: 'database' },
	{ id: 'experience', labelKey: 'experience', colorHex: '#3E8FB0', icon: 'eye' },
	{ id: 'testimony', labelKey: 'testimony', colorHex: '#95B1AC', icon: 'users' },
	{ id: 'assumption', labelKey: 'assumption', colorHex: '#F6C177', icon: 'help' },
	{ id: 'belief', labelKey: 'belief', colorHex: '#EDA884', icon: 'heart' },
	{ id: 'reasoning', labelKey: 'reasonedConclusion', colorHex: '#C4A7E7', icon: 'brain' },
	{ id: 'knowledge', labelKey: 'knowledge', colorHex: '#95B1AC', icon: 'lightbulb' },
	{ id: 'faith', labelKey: 'faith', colorHex: '#EB6F92', icon: 'church' },
	{ id: 'openQuestion', labelKey: 'openQuestion', colorHex: '#EA9A97', icon: 'help' }
];

const DIKW_SPECS: (CategorySpec & { labelKey: keyof Messages['taxo']['dikw'] })[] = [
	{ id: 'data', labelKey: 'data', colorHex: '#9CCFD8', icon: 'database' },
	{ id: 'information', labelKey: 'information', colorHex: '#3E8FB0', icon: 'newspaper' },
	{ id: 'knowledge', labelKey: 'knowledge', colorHex: '#95B1AC', icon: 'lightbulb' },
	{ id: 'understanding', labelKey: 'understanding', colorHex: '#C4A7E7', icon: 'atom' },
	{ id: 'wisdom', labelKey: 'wisdom', colorHex: '#F6C177', icon: 'compass' },
	{ id: 'belief', labelKey: 'belief', colorHex: '#EDA884', icon: 'heart' },
	{ id: 'assumption', labelKey: 'assumption', colorHex: '#EA9A97', icon: 'help' },
	{ id: 'speculation', labelKey: 'speculation', colorHex: '#EB6F92', icon: 'sparkles' }
];

const CONFIDENCE_KEYS: { id: string; labelKey: keyof Messages['taxo']['conf'] }[] = [
	{ id: Confidence.Tentative, labelKey: 'tentative' },
	{ id: Confidence.Probable, labelKey: 'probable' },
	{ id: Confidence.Established, labelKey: 'established' }
];

/** Default "source of justification" categories, labels resolved from `m`. Ids equal
 *  the built-in `Source` values so existing maps (which reference these strings) keep
 *  resolving. Colors sit on the Rose Pine (Moon) accent set. */
export function defaultCategories(m: Messages): Category[] {
	return SOURCE_SPECS.map((s) => ({
		id: s.id,
		label: m.taxo.source[s.labelKey],
		colorHex: s.colorHex,
		icon: s.icon
	}));
}

/** Default confidence levels, low → high; labels resolved from `m`. */
export function defaultConfidenceLevels(m: Messages): ConfidenceLevel[] {
	return CONFIDENCE_KEYS.map((c) => ({ id: c.id, label: m.taxo.conf[c.labelKey] }));
}

export interface Preset {
	id: string;
	name: string;
	categories: Category[];
}

/** Built-in category presets the user can load, localized to the active locale. */
export function presets(m: Messages): Preset[] {
	return [
		{ id: 'source-of-justification', name: m.taxo.presetSourceName, categories: defaultCategories(m) },
		{
			id: 'epistemic-ladder',
			name: m.taxo.presetEpistemicName,
			categories: EPISTEMIC_SPECS.map((s) => ({
				id: s.id,
				label: m.taxo.epistemic[s.labelKey],
				colorHex: s.colorHex,
				icon: s.icon
			}))
		},
		{
			id: 'dikw',
			name: m.taxo.presetDikwName,
			categories: DIKW_SPECS.map((s) => ({
				id: s.id,
				label: m.taxo.dikw[s.labelKey],
				colorHex: s.colorHex,
				icon: s.icon
			}))
		}
	];
}

/** Default remap targets when switching presets: targetPresetId → (oldId → newId).
 *  Consulted only when the old category id doesn't already exist in the target set;
 *  unknown ids (e.g. custom categories) fall back to the target set's first category. */
export const PRESET_REMAP_SUGGESTIONS: Record<string, Record<string, string>> = {
	'dikw': {
		empiricalData: 'data',
		directObservation: 'data',
		scientificEvidence: 'knowledge',
		logicalReasoning: 'understanding',
		expertAuthority: 'information',
		tradition: 'belief',
		faith: 'belief',
		intuition: 'speculation',
		experience: 'data',
		testimony: 'information',
		reasoning: 'understanding',
		openQuestion: 'speculation'
	},
	'epistemic-ladder': {
		empiricalData: 'data',
		directObservation: 'experience',
		scientificEvidence: 'knowledge',
		logicalReasoning: 'reasoning',
		expertAuthority: 'testimony',
		tradition: 'testimony',
		intuition: 'belief',
		information: 'data',
		understanding: 'knowledge',
		wisdom: 'knowledge',
		speculation: 'assumption'
	},
	'source-of-justification': {
		data: 'empiricalData',
		experience: 'directObservation',
		testimony: 'expertAuthority',
		reasoning: 'logicalReasoning',
		knowledge: 'scientificEvidence',
		openQuestion: 'intuition',
		information: 'empiricalData',
		understanding: 'logicalReasoning',
		wisdom: 'intuition',
		speculation: 'intuition',
		assumption: 'intuition',
		belief: 'faith'
	}
};

/** Complete a preset-switch mapping: for each old category id, prefer the given
 *  partial target (when it exists in the preset), then the id itself, then the
 *  semantic suggestion, then the preset's first category. Single owner of the
 *  fallback policy — seeds the remap UI and validates the final mapping on apply. */
export function completePresetMapping(
	preset: Preset,
	oldIds: string[],
	partial: Record<string, string> = {}
): Record<string, string> {
	const newIds = new Set(preset.categories.map((c) => c.id));
	const suggest = PRESET_REMAP_SUGGESTIONS[preset.id] ?? {};
	const mapping: Record<string, string> = {};
	for (const id of oldIds) {
		mapping[id] = newIds.has(partial[id])
			? partial[id]
			: newIds.has(id)
				? id
				: newIds.has(suggest[id])
					? suggest[id]
					: preset.categories[0].id;
	}
	return mapping;
}

/** Confidence → fill opacity, derived from the level's order so any count renders
 *  sensibly. 3 levels → 0.4 / 0.7 / 1.0 (matches the prior fixed scale). */
export function opacityForIndex(index: number, count: number): number {
	if (count <= 1) return 1;
	return 0.4 + 0.6 * (index / (count - 1));
}

/** Icons offered in the category icon picker (Lucide names in the Icon registry). */
export const ICON_CHOICES: IconName[] = [
	'database', 'eye', 'flask-conical', 'brain', 'graduation-cap', 'landmark', 'church',
	'sparkles', 'lightbulb', 'scale', 'heart', 'globe', 'atom', 'quote', 'users', 'gavel',
	'compass', 'star', 'flag', 'leaf', 'book-open', 'microscope', 'telescope', 'newspaper',
	'message-circle', 'zap', 'shield', 'target', 'feather', 'scroll-text', 'help'
];

/** Color swatches offered in the category color picker (Rose Pine Moon family). */
export const SWATCHES: string[] = [
	'#9CCFD8', '#3E8FB0', '#95B1AC', '#C4A7E7', '#EA9A97',
	'#F6C177', '#EB6F92', '#EDA884', '#B5BFE2', '#A3BE8C'
];
