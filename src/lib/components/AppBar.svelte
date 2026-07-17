<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { view } from '$lib/stores/view.svelte';
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

<!-- Sliding cluster of controls (map picker, categories, import, export, language). -->
<div class="cluster" class:collapsed={!view.toolbarOpen} inert={!view.toolbarOpen}>
	<MapManager />
	<button class="btn" onclick={() => ui.openTaxonomy()} aria-label={i18n.m.appbar.categories} title={i18n.m.appbar.categories}>
		<Icon name="tags" size={16} /> <span class="label">{i18n.m.appbar.categories}</span>
	</button>
	<button class="btn" onclick={triggerImport} aria-label={i18n.m.appbar.import} title={i18n.m.appbar.import}>
		<Icon name="upload" size={16} /> <span class="label">{i18n.m.appbar.import}</span>
	</button>
	<button class="btn" onclick={exportMap} aria-label={i18n.m.appbar.export} title={i18n.m.appbar.export}>
		<Icon name="download" size={16} /> <span class="label">{i18n.m.appbar.export}</span>
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

<!-- Always-visible chip: collapses the cluster off-screen / brings it back. -->
<button
	class="toggle"
	onclick={() => view.toggleToolbar()}
	aria-expanded={view.toolbarOpen}
	aria-label={view.toolbarOpen ? i18n.m.appbar.hideToolbar : i18n.m.appbar.showToolbar}
>
	<Icon name={view.toolbarOpen ? 'close' : 'menu'} size={20} />
</button>

<style>
	/* Floating cluster, anchored to the right with room for the toggle chip.
	   Wraps (top → down the right) and is width-capped so it never runs off-screen. */
	.cluster {
		position: fixed;
		top: 12px;
		right: 56px;
		z-index: 49;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-content: flex-start;
		align-items: center;
		gap: 0.4rem;
		max-width: calc(100vw - 68px);
		transition:
			transform 0.28s ease,
			opacity 0.2s ease;
	}
	.cluster.collapsed {
		/* Slide fully past the right edge and disable interaction. */
		transform: translateX(calc(100% + 64px));
		opacity: 0;
		pointer-events: none;
	}
	.cluster :global(.trigger),
	.cluster .btn {
		box-shadow: var(--shadow);
	}

	.toggle {
		position: fixed;
		top: 12px;
		right: 12px;
		z-index: 50;
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		color: var(--text-muted);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 50%;
		cursor: pointer;
		box-shadow: var(--shadow);
	}
	.toggle:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	/* Mobile: keep the cluster in a right-hand zone (leaves the top-left palette
	   clear) and drop command labels to a compact icon-only strip. */
	@media (max-width: 640px) {
		.cluster {
			max-width: min(calc(100vw - 68px), 64vw);
		}
		.cluster .btn {
			padding: 0.5rem;
			gap: 0;
		}
		.cluster .btn .label {
			display: none;
		}
	}
</style>
