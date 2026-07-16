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
		// Served from a GitHub Pages *project* URL (…/belief-map) until a custom domain
		// is added. The workflow sets BASE_PATH=/belief-map for the build; a root/custom
		// domain deploy just leaves BASE_PATH unset so base = ''.
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
