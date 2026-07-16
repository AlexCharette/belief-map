import type { Locale } from './messages';

/** The plural categories a locale may use (CLDR). Russian uses one/few/many;
 *  English/German use one/other; French uses one/many/other. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>>;

const rules = new Map<Locale, Intl.PluralRules>();

function rulesFor(locale: Locale): Intl.PluralRules {
	let r = rules.get(locale);
	if (!r) {
		r = new Intl.PluralRules(locale);
		rules.set(locale, r);
	}
	return r;
}

/** Pick the grammatically correct form for `n` in `locale`, falling back to
 *  `other` (then `one`) when a locale doesn't provide the selected category. */
export function pluralForm(locale: Locale, n: number, forms: PluralForms): string {
	const category = rulesFor(locale).select(n);
	return forms[category] ?? forms.other ?? forms.one ?? '';
}
