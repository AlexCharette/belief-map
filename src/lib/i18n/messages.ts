/** Supported UI locales. */
export type Locale = 'en' | 'fr' | 'de' | 'ru';

/** Language switcher metadata — `native` is shown in the switcher itself. */
export const LOCALES: { code: Locale; native: string }[] = [
	{ code: 'en', native: 'English' },
	{ code: 'fr', native: 'Français' },
	{ code: 'de', native: 'Deutsch' },
	{ code: 'ru', native: 'Русский' }
];

export function isLocale(v: unknown): v is Locale {
	return v === 'en' || v === 'fr' || v === 'de' || v === 'ru';
}

/**
 * The full message contract. Every locale dictionary must implement every key,
 * so a missing translation is a compile error. Plain strings for static text;
 * functions for interpolated / plural text (each locale owns its own grammar).
 */
export interface Messages {
	app: {
		title: string;
		metaDescription: string;
	};
	appbar: {
		categories: string;
		import: string;
		export: string;
		exported: string;
		imported: (p: { name: string }) => string;
		invalidFile: string;
		readError: string;
	};
	mapManager: {
		current: string; // fallback trigger label when no active map
		newMap: string; // "New belief map" action
		newMapName: string; // default name for a map created from the picker
		rename: string; // title attr
		deleteMap: string; // title attr
		deleteConfirm: (p: { name: string }) => string;
	};
	details: {
		panelAria: string;
		closeAria: string;
		confidence: (p: { label: string }) => string;
		addPremise: string;
		edit: string;
		move: string;
		copyDetails: string;
		delete: string;
		confirmDelete: string;
		yes: string;
		no: string;
		hintRoot: string;
		hintChild: string;
		copied: string;
		deleted: string;
	};
	form: {
		titleEdit: string;
		titleAdd: (p: { parent: string }) => string;
		titleInsert: (p: { parent: string; child: string }) => string;
		paste: string;
		name: string;
		namePlaceholder: string;
		nameRequired: string;
		source: string;
		chooseCategory: string;
		sourceRequired: string;
		confidence: string;
		notes: string;
		optional: string;
		references: string;
		refLabelPlaceholder: string;
		removeReference: string;
		addReference: string;
		cancel: string;
		save: string;
		addPremise: string;
		updated: string;
		inserted: string;
		created: string;
		premiseAdded: string;
	};
	tree: {
		connectionRedrawn: string;
		wouldLoop: string;
	};
	node: {
		belief: (p: { name: string }) => string;
		editBelief: string;
		expand: string;
		collapse: string;
	};
	reroute: {
		title: (p: { name: string }) => string;
		movedUnder: (p: { name: string; target: string }) => string;
		hintPrefix: string; // before the bold parent name
		hintSuffix: string; // after the bold parent name
		noParent: string; // em-dash fallback for a missing current parent
		searchPlaceholder: string;
		empty: string;
		untitled: string;
	};
	taxonomy: {
		remapPrompt: (p: { count: number; label: string }) => string; // plural
		moveAndDelete: string;
		cancel: string;
		applyPresetPrompt: (p: { name: string }) => string;
		applyPreset: string;
		categories: string;
		loadPreset: string;
		choose: string;
		changeIcon: string;
		changeColor: string;
		addCategory: string;
		confidenceLevels: string;
		lowToHigh: string;
		moveUp: string;
		delete: string;
		addLevel: string;
	};
	nodePalette: {
		belief: string;
		dragHint: string;
		tidy: string;
		tidyHint: string;
		directions: string;
	};
	edge: {
		insertHere: string;
	};
	modal: {
		close: string;
		closeDialog: string;
	};
	iconPicker: {
		choose: string;
	};
	help: {
		buttonAria: string;
		intro: string;
		privacy: string;
		howTo: string;
		/** Eight how-to steps, paired by index with the icon list in HelpModal.svelte. */
		steps: [string, string, string, string, string, string, string, string];
	};
	/** Default taxonomy DATA seeded into new maps (localized per the chosen locale). */
	taxo: {
		defaultMapName: string;
		unspecified: string;
		newCategory: string;
		newLevel: string;
		// Confidence levels (ids: tentative / probable / established)
		conf: {
			tentative: string;
			probable: string;
			established: string;
		};
		// "Source of justification" preset (the defaults) — ids match the Source enum.
		presetSourceName: string;
		source: {
			empiricalData: string;
			directObservation: string;
			scientificEvidence: string;
			logicalReasoning: string;
			expertAuthority: string;
			tradition: string;
			faith: string;
			intuition: string;
		};
		// "Epistemic ladder" preset
		presetEpistemicName: string;
		epistemic: {
			data: string;
			experience: string;
			testimony: string;
			assumption: string;
			belief: string;
			reasonedConclusion: string;
			knowledge: string;
			faith: string;
			openQuestion: string;
		};
		// "DIKW tiers" preset
		presetDikwName: string;
		dikw: {
			data: string;
			information: string;
			knowledge: string;
			understanding: string;
			wisdom: string;
			belief: string;
			assumption: string;
			speculation: string;
		};
	};
}
