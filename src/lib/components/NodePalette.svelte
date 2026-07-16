<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';
</script>

<div class="palette">
	<button class="tidy" onclick={() => maps.tidyLayout()} title={i18n.m.nodePalette.tidyHint}>
		<Icon name="sparkles" size={15} /> {i18n.m.nodePalette.tidy}
	</button>
</div>

<style>
	.palette {
		position: absolute;
		top: 12px;
		left: 12px;
		z-index: 5;
		display: flex;
		gap: 0.4rem;
		align-items: center;
	}
	.tidy {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.4rem 0.7rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-muted);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999px;
		cursor: pointer;
		box-shadow: var(--shadow);
	}
	.tidy:hover {
		color: var(--accent);
		border-color: var(--accent);
	}
</style>
