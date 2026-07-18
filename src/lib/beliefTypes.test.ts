import { describe, it, expect } from 'vitest';
import { completePresetMapping, presets, PRESET_REMAP_SUGGESTIONS } from './beliefTypes';
import { en } from './i18n/en';

const all = presets(en);
const byId = (id: string) => all.find((p) => p.id === id)!;

describe('PRESET_REMAP_SUGGESTIONS', () => {
	// A typo'd id would silently degrade to the first-category fallback, so pin
	// every key/value to a real preset id.
	it('targets only ids that exist in the named preset', () => {
		for (const [presetId, table] of Object.entries(PRESET_REMAP_SUGGESTIONS)) {
			const target = byId(presetId);
			expect(target).toBeDefined();
			const targetIds = new Set(target.categories.map((c) => c.id));
			for (const to of Object.values(table)) expect(targetIds).toContain(to);
		}
	});

	it('keys are ids from the other presets', () => {
		const allIds = new Set(all.flatMap((p) => p.categories.map((c) => c.id)));
		for (const table of Object.values(PRESET_REMAP_SUGGESTIONS)) {
			for (const from of Object.keys(table)) expect(allIds).toContain(from);
		}
	});
});

describe('completePresetMapping', () => {
	const dikw = byId('dikw');

	it('prefers a valid partial target, then identity, then suggestion, then first', () => {
		const mapping = completePresetMapping(
			dikw,
			['data', 'faith', 'tradition', 'custom-uuid'],
			{ data: 'wisdom', tradition: 'not-a-dikw-id' }
		);
		expect(mapping).toEqual({
			data: 'wisdom', // partial target wins
			faith: 'belief', // no identity in DIKW → suggestion
			tradition: 'belief', // invalid partial target → suggestion
			'custom-uuid': 'data' // unknown id → first category
		});
	});

	it('defaults to identity for overlapping ids when no partial is given', () => {
		expect(completePresetMapping(dikw, ['knowledge'])).toEqual({ knowledge: 'knowledge' });
	});
});
