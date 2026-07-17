import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Pure client-side SPA hosted on GitHub Pages: prerender the shell (index.html)
		// and emit a 404.html SPA fallback. Pages serves 404.html for any unknown path,
		// so deep links / hard refreshes boot the client router instead of hard-404ing.
		adapter: adapter({
			fallback: '404.html'
		}),
		// Served at the custom domain filament.littlecarts.dev from the root, so base = ''.
		// BASE_PATH is left available for a project-URL (…/belief-map) fallback build.
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
