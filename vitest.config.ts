import { defineConfig } from 'vitest/config';

// Standalone Vitest config (no SvelteKit plugin) — the unit tests are plain TS
// over the tree logic, so we avoid pulling the Vite plugin's types in here.
export default defineConfig({
	test: {
		environment: 'node',
		include: ['src/**/*.{test,spec}.ts']
	}
});
