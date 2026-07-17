/** Built-in id constants for the default "source of justification" categories.
 *  A map's categories are user-editable, but these ids seed the default preset and
 *  keep legacy maps (whose beliefs reference these strings) resolving. */
export enum Source {
	EmpiricalData = 'empiricalData',
	DirectObservation = 'directObservation',
	ScientificEvidence = 'scientificEvidence',
	LogicalReasoning = 'logicalReasoning',
	ExpertAuthority = 'expertAuthority',
	Tradition = 'tradition',
	Faith = 'faith',
	Intuition = 'intuition'
}

/** Built-in id constants for the default confidence levels (low → high). */
export enum Confidence {
	Tentative = 'tentative',
	Probable = 'probable',
	Established = 'established'
}

/** A source-of-justification category. Editable per map; travels in the map JSON. */
export interface Category {
	id: string;
	label: string;
	colorHex: string;
	/** Lucide icon name (see Icon.svelte registry); unknown names fall back. */
	icon: string;
}

/** A confidence level. Ordered low → high by array position; editable per map. */
export interface ConfidenceLevel {
	id: string;
	label: string;
}

export interface BeliefReference {
	text: string;
	link: string;
}

/** A node in the belief tree. `source`/`confidence` reference a Category / a
 *  ConfidenceLevel in the owning map's taxonomy, by id. Recursive via `children`. */
export interface BeliefNode {
	id: string;
	description: string;
	notes: string;
	source: string;
	confidence: string;
	references: BeliefReference[];
	isRoot: boolean;
	/** Manual canvas position; when absent the node is auto-laid-out. Persisted. */
	position?: { x: number; y: number };
	children: BeliefNode[];
}

/** The full persisted / exported map document: taxonomy + forest of belief trees.
 *  `roots` holds one entry per top-level (parentless) belief. */
export interface BeliefMapDoc {
	version: number;
	categories: Category[];
	confidenceLevels: ConfidenceLevel[];
	roots: BeliefNode[];
}

/** The editable payload of a belief (everything a form collects). */
export type BeliefInput = Pick<
	BeliefNode,
	'description' | 'notes' | 'source' | 'confidence' | 'references'
>;

/** Metadata for a saved map, kept in the persistence index. */
export interface MapMeta {
	id: string;
	name: string;
	updatedAt: number;
}

/** A donut-chart arc: one source present among a node's children. Opacity encodes
 *  the average confidence of the children contributing to this arc. */
export interface Segment {
	source: string;
	count: number;
	colorHex: string;
	opacity: number;
}
