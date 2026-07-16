import type { BeliefMapDoc, MapMeta } from './types';
import { normalizeMap } from './tree/operations';
import { isLocale, type Locale } from './i18n/messages';

const INDEX_KEY = 'beliefmap:index';
const ACTIVE_KEY = 'beliefmap:active';
const LOCALE_KEY = 'beliefmap:locale';
const mapKey = (id: string) => `beliefmap:map:${id}`;

function storage(): Storage | null {
	try {
		return typeof localStorage !== 'undefined' ? localStorage : null;
	} catch {
		return null; // e.g. storage disabled
	}
}

export function loadIndex(): MapMeta[] {
	const s = storage();
	if (!s) return [];
	try {
		const raw = s.getItem(INDEX_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed
			.filter((m) => m && typeof m.id === 'string' && typeof m.name === 'string')
			.map((m) => ({ id: m.id, name: m.name, updatedAt: Number(m.updatedAt) || 0 }));
	} catch {
		return [];
	}
}

export function saveIndex(index: MapMeta[]): void {
	storage()?.setItem(INDEX_KEY, JSON.stringify(index));
}

export function loadMap(id: string): BeliefMapDoc | null {
	const s = storage();
	if (!s) return null;
	try {
		const raw = s.getItem(mapKey(id));
		if (!raw) return null;
		return normalizeMap(JSON.parse(raw));
	} catch {
		return null;
	}
}

export function saveMap(id: string, doc: BeliefMapDoc): void {
	storage()?.setItem(mapKey(id), JSON.stringify(doc));
}

export function removeMap(id: string): void {
	storage()?.removeItem(mapKey(id));
}

export function loadActiveId(): string | null {
	return storage()?.getItem(ACTIVE_KEY) ?? null;
}

export function saveActiveId(id: string): void {
	storage()?.setItem(ACTIVE_KEY, id);
}

export function loadLocale(): Locale | null {
	const v = storage()?.getItem(LOCALE_KEY);
	return isLocale(v) ? v : null;
}

export function saveLocale(locale: Locale): void {
	storage()?.setItem(LOCALE_KEY, locale);
}
