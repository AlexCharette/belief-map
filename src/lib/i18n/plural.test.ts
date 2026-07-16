import { describe, it, expect } from 'vitest';
import { pluralForm } from './plural';
import { ru } from './ru';
import { en } from './en';

const RU = { one: 'убеждение', few: 'убеждения', many: 'убеждений', other: 'убеждений' };

describe('pluralForm — Russian (one / few / many)', () => {
	it('selects the singular form for 1 and 21', () => {
		expect(pluralForm('ru', 1, RU)).toBe('убеждение');
		expect(pluralForm('ru', 21, RU)).toBe('убеждение');
	});
	it('selects the few form for 2–4, 22–24', () => {
		expect(pluralForm('ru', 2, RU)).toBe('убеждения');
		expect(pluralForm('ru', 3, RU)).toBe('убеждения');
		expect(pluralForm('ru', 22, RU)).toBe('убеждения');
	});
	it('selects the many form for 0, 5–20, 25', () => {
		expect(pluralForm('ru', 0, RU)).toBe('убеждений');
		expect(pluralForm('ru', 5, RU)).toBe('убеждений');
		expect(pluralForm('ru', 11, RU)).toBe('убеждений');
		expect(pluralForm('ru', 25, RU)).toBe('убеждений');
	});
});

describe('pluralForm — English (one / other)', () => {
	it('uses "one" only for 1', () => {
		expect(pluralForm('en', 1, { one: 'belief', other: 'beliefs' })).toBe('belief');
		expect(pluralForm('en', 0, { one: 'belief', other: 'beliefs' })).toBe('beliefs');
		expect(pluralForm('en', 2, { one: 'belief', other: 'beliefs' })).toBe('beliefs');
	});
	it('falls back to "other" when the selected category is missing', () => {
		expect(pluralForm('ru', 3, { other: 'x' })).toBe('x');
	});
});

describe('remapPrompt message renders the correct plural noun', () => {
	it('agrees the noun with the count (ru)', () => {
		expect(ru.taxonomy.remapPrompt({ count: 1, label: 'A' })).toContain('1 убеждение ');
		expect(ru.taxonomy.remapPrompt({ count: 3, label: 'A' })).toContain('3 убеждения ');
		expect(ru.taxonomy.remapPrompt({ count: 5, label: 'A' })).toContain('5 убеждений ');
	});
	it('agrees the noun with the count (en)', () => {
		expect(en.taxonomy.remapPrompt({ count: 1, label: 'A' })).toContain('1 belief ');
		expect(en.taxonomy.remapPrompt({ count: 2, label: 'A' })).toContain('2 beliefs ');
	});
});
