<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { normalizeMap } from '$lib/tree/operations';
	import Icon from './Icon.svelte';
	import MapManager from './MapManager.svelte';
	import LanguageMenu from './LanguageMenu.svelte';

	let fileInput: HTMLInputElement;

	function slugName(): string {
		const name = maps.activeMeta?.name ?? 'filament';
		const base = name.trim().replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '') || 'filament';
		return `${base}.json`;
	}

	function exportMap() {
		const blob = new Blob([maps.exportJSON()], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = slugName();
		a.click();
		URL.revokeObjectURL(url);
		ui.notify(i18n.m.appbar.exported);
	}

	function triggerImport() {
		fileInput.click();
	}

	function onFile(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		input.value = ''; // allow re-importing the same file
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const doc = normalizeMap(JSON.parse(String(reader.result)));
				const name = file.name.replace(/\.json$/i, '') || 'Imported map';
				maps.importDoc(name, doc);
				ui.closeDetails();
				ui.notify(i18n.m.appbar.imported({ name }));
			} catch {
				ui.notify(i18n.m.appbar.invalidFile);
			}
		};
		reader.onerror = () => ui.notify(i18n.m.appbar.readError);
		reader.readAsText(file);
	}
</script>

<div class="appbar">
	<MapManager />
	<button class="btn" onclick={() => ui.openTaxonomy()}>
		<Icon name="tags" size={16} /> {i18n.m.appbar.categories}
	</button>
	<button class="btn" onclick={triggerImport}>
		<Icon name="upload" size={16} /> {i18n.m.appbar.import}
	</button>
	<button class="btn" onclick={exportMap}>
		<Icon name="download" size={16} /> {i18n.m.appbar.export}
	</button>
	<LanguageMenu />

	<input
		bind:this={fileInput}
		type="file"
		accept=".json,application/json"
		onchange={onFile}
		hidden
	/>
</div>

<style>
	/* Floating cluster of four controls (map picker, categories, import, export). */
	.appbar {
		position: fixed;
		top: 12px;
		right: 12px;
		z-index: 50;
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}
	.appbar :global(.trigger),
	.appbar .btn {
		box-shadow: var(--shadow);
	}
</style>
