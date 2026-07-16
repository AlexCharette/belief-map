import type { Messages } from './messages';
import { pluralForm } from './plural';

export const en: Messages = {
	app: {
		title: 'Filament',
		metaDescription: 'Map your worldview as a tree of beliefs.'
	},
	appbar: {
		categories: 'Categories',
		import: 'Import',
		export: 'Export',
		exported: 'Map exported',
		imported: ({ name }) => `Imported “${name}”`,
		invalidFile: 'That file is not a valid belief map JSON',
		readError: 'Could not read that file'
	},
	mapManager: {
		current: 'Filament',
		newMap: 'New belief map',
		newMapName: 'New map',
		rename: 'Rename',
		deleteMap: 'Delete map',
		deleteConfirm: ({ name }) => `Delete map “${name}”? This cannot be undone.`
	},
	details: {
		panelAria: 'Belief details',
		closeAria: 'Close details',
		confidence: ({ label }) => `Confidence: ${label}`,
		addPremise: 'Add premise',
		edit: 'Edit',
		move: 'Move',
		copyDetails: 'Copy details',
		delete: 'Delete',
		confirmDelete: 'Delete?',
		yes: 'Yes',
		no: 'No',
		hintRoot: 'Deleting keeps this belief’s children — they become standalone roots.',
		hintChild: 'Deleting keeps this belief’s children — they move up to its parent.',
		copied: 'Details copied',
		deleted: 'Belief deleted'
	},
	form: {
		titleEdit: 'Edit belief',
		titleAdd: ({ parent }) => `Add a premise to “${parent}”`,
		titleInsert: ({ parent, child }) => `Insert a belief between “${parent}” and “${child}”`,
		paste: 'Paste copied details',
		name: 'Name',
		namePlaceholder: 'A short name for this belief',
		nameRequired: 'You must enter a name',
		source: 'Source of justification',
		chooseCategory: 'Choose a category…',
		sourceRequired: 'You must choose a source',
		confidence: 'Confidence',
		notes: 'Notes',
		optional: '(optional)',
		references: 'References',
		refLabelPlaceholder: 'Label',
		removeReference: 'Remove reference',
		addReference: 'Add reference',
		cancel: 'Cancel',
		save: 'Save changes',
		addPremise: 'Add premise',
		updated: 'Belief updated',
		inserted: 'Belief inserted',
		created: 'Belief created',
		premiseAdded: 'Premise added'
	},
	tree: {
		connectionRedrawn: 'Connection redrawn',
		wouldLoop: 'That would create a loop'
	},
	node: {
		belief: ({ name }) => `Belief: ${name}`,
		editBelief: 'Edit belief',
		expand: 'Expand',
		collapse: 'Collapse'
	},
	reroute: {
		title: ({ name }) => `Move “${name}”`,
		movedUnder: ({ name, target }) => `Moved “${name}” under “${target}”`,
		hintPrefix: 'Choose a new parent belief. Its current parent is ',
		hintSuffix: '. You can’t move it under itself or one of its own premises.',
		noParent: '—',
		searchPlaceholder: 'Search beliefs…',
		empty: 'No eligible beliefs to move under.',
		untitled: '(untitled)'
	},
	taxonomy: {
		remapPrompt: ({ count, label }) =>
			`Move the ${count} ${pluralForm('en', count, { one: 'belief', other: 'beliefs' })} using “${label}” to:`,
		moveAndDelete: 'Move & delete',
		cancel: 'Cancel',
		applyPresetPrompt: ({ name }) =>
			`Load the ${name} preset? It replaces the current categories. Beliefs whose category disappears move to:`,
		applyPreset: 'Apply preset',
		categories: 'Categories',
		loadPreset: 'Load preset',
		choose: 'Choose…',
		changeIcon: 'Change icon',
		changeColor: 'Change color',
		addCategory: 'Add category',
		confidenceLevels: 'Confidence levels',
		lowToHigh: 'low → high',
		moveUp: 'Move up',
		delete: 'Delete',
		addLevel: 'Add level'
	},
	nodePalette: {
		belief: 'Belief',
		dragHint: 'Drag onto a connection to insert a belief between the two it links',
		tidy: 'Tidy',
		tidyHint: 'Auto-arrange — clear manual positions',
		directions: 'Directions the root branches out (1–9)'
	},
	edge: {
		insertHere: 'Insert a belief here'
	},
	modal: {
		close: 'Close',
		closeDialog: 'Close dialog'
	},
	iconPicker: {
		choose: 'Choose an icon'
	},
	help: {
		buttonAria: 'Help — what is this & how to use it',
		intro:
			'I started working on this years ago when I noticed that my worldview was undergoing radical changes, changes that I found hard to communicate to people. It also became difficult to navigate through my own thoughts, which is why I ultimately chose to start building this tool. After being left in a repository for several years, I finally picked it up again and used AI to cover the last few hurdles. You are also welcome to make it your own, by using it for whatever other purposes and by customizing categories.',
		privacy:
			'Your data is your own, downloadable as a simple JSON file and stored temporarily in the browser. None of it is sent to a server or analyzed.',
		howTo: 'How to use it',
		steps: [
			'Right-click anywhere on the empty canvas to create a new standalone node.',
			'Click a node to open its details — add a premise, edit, move, or delete it.',
			'Hover a node for its edit (✎) and collapse (−) badges.',
			'Click the + on a connection to insert a node between the two it links.',
			'Drag a node to reposition it; drag a connection’s top end onto another node to re-parent it.',
			'Tidy (top-left) auto-arranges everything back into neat trees.',
			'Categories (top bar) lets you rename, recolor, and re-icon your source categories and confidence levels — or load a preset.',
			'Use the map picker to keep several maps; Import / Export save and load them as JSON.'
		]
	},
	taxo: {
		defaultMapName: 'Your Beliefs',
		unspecified: 'Unspecified',
		newCategory: 'New category',
		newLevel: 'New level',
		conf: {
			tentative: 'Tentative',
			probable: 'Probable',
			established: 'Established'
		},
		presetSourceName: 'Source of justification',
		source: {
			empiricalData: 'Empirical data',
			directObservation: 'Direct observation',
			scientificEvidence: 'Scientific evidence',
			logicalReasoning: 'Logical reasoning',
			expertAuthority: 'Expert authority',
			tradition: 'Tradition & culture',
			faith: 'Faith & revelation',
			intuition: 'Intuition'
		},
		presetEpistemicName: 'Epistemic ladder',
		epistemic: {
			data: 'Data',
			experience: 'Experience',
			testimony: 'Testimony',
			assumption: 'Assumption',
			belief: 'Belief',
			reasonedConclusion: 'Reasoned conclusion',
			knowledge: 'Knowledge',
			faith: 'Faith',
			openQuestion: 'Open question'
		},
		presetDikwName: 'DIKW tiers',
		dikw: {
			data: 'Data',
			information: 'Information',
			knowledge: 'Knowledge',
			understanding: 'Understanding',
			wisdom: 'Wisdom',
			belief: 'Belief',
			assumption: 'Assumption',
			speculation: 'Speculation'
		}
	}
};
