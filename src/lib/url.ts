/** URL schemes that are safe to place in an `href`. Everything else — most importantly
 *  `javascript:`, `data:`, `vbscript:` — is rejected to prevent XSS via link clicks. */
const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);

/**
 * Returns `raw` unchanged if it resolves to a safe-scheme URL, otherwise `''`.
 *
 * Reference links come from user-authored / imported map JSON, so a hostile value like
 * `javascript:fetch(...)` must never reach an anchor's `href`. Relative links (no scheme)
 * are allowed — they resolve against the app origin and can't carry a dangerous scheme —
 * by parsing against a base; only an explicit unsafe scheme is stripped.
 */
export function safeUrl(raw: string | null | undefined): string {
	if (!raw) return '';
	const trimmed = raw.trim();
	if (!trimmed) return '';
	try {
		const parsed = new URL(trimmed, 'https://belief-map.invalid/');
		return SAFE_PROTOCOLS.has(parsed.protocol) ? trimmed : '';
	} catch {
		return '';
	}
}
