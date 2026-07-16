import { LOCALES, isLocale, type Locale, type Messages } from '../i18n/messages';
import { en } from '../i18n/en';
import { fr } from '../i18n/fr';
import { de } from '../i18n/de';
import { ru } from '../i18n/ru';
import { loadLocale, saveLocale } from '../persistence';

const DICTS: Record<Locale, Messages> = { en, fr, de, ru };

const DEFAULT_LOCALE: Locale = 'en';

/** Best-effort locale from the browser's languages, falling back to English. */
function detectLocale(): Locale {
	if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
	const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
	for (const l of langs) {
		const base = l?.slice(0, 2).toLowerCase();
		if (isLocale(base)) return base;
	}
	return DEFAULT_LOCALE;
}

/** Reactive locale + message dictionary. Reading `i18n.m` touches `locale`, so any
 *  template that reads it re-renders when the locale changes. Mirrors the ui/maps
 *  singleton pattern. Call `init()` once in the browser (before maps.init()). */
class I18nStore {
	locale = $state<Locale>(DEFAULT_LOCALE);

	/** The active message dictionary. */
	get m(): Messages {
		return DICTS[this.locale];
	}

	/** Languages for the switcher. */
	get locales() {
		return LOCALES;
	}

	init(): void {
		const stored = loadLocale();
		this.locale = stored ?? detectLocale();
		this.reflectDocumentLang();
	}

	set(locale: Locale): void {
		if (locale === this.locale) return;
		this.locale = locale;
		saveLocale(locale);
		this.reflectDocumentLang();
	}

	private reflectDocumentLang(): void {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = this.locale;
		}
	}
}

export const i18n = new I18nStore();
