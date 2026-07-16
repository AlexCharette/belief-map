import { describe, it, expect } from 'vitest';
import { safeUrl } from './url';

describe('safeUrl', () => {
	it('allows http, https, and mailto', () => {
		expect(safeUrl('https://example.com/x')).toBe('https://example.com/x');
		expect(safeUrl('http://example.com')).toBe('http://example.com');
		expect(safeUrl('mailto:a@b.com')).toBe('mailto:a@b.com');
	});

	it('allows relative links (resolve same-origin, no dangerous scheme possible)', () => {
		expect(safeUrl('example.com/page')).toBe('example.com/page');
		expect(safeUrl('/docs')).toBe('/docs');
	});

	it('blocks javascript: and other executable/dangerous schemes', () => {
		expect(safeUrl('javascript:alert(1)')).toBe('');
		expect(safeUrl('JavaScript:alert(1)')).toBe('');
		expect(safeUrl('  javascript:alert(1)')).toBe('');
		expect(safeUrl('java\tscript:alert(1)')).toBe('');
		expect(safeUrl('data:text/html,<script>alert(1)</script>')).toBe('');
		expect(safeUrl('vbscript:msgbox(1)')).toBe('');
	});

	it('handles empty / nullish input', () => {
		expect(safeUrl('')).toBe('');
		expect(safeUrl('   ')).toBe('');
		expect(safeUrl(null)).toBe('');
		expect(safeUrl(undefined)).toBe('');
	});
});
