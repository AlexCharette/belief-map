<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/stores/i18n.svelte';

	let { children } = $props();

	// Keep <html lang> and the document title in sync with the active locale.
	$effect(() => {
		document.documentElement.lang = i18n.locale;
		document.title = i18n.m.app.title;
	});
</script>

{@render children()}
