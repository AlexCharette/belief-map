<script lang="ts">
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';
</script>

<button class="help-chip" onclick={() => ui.openHelp()} aria-label={i18n.m.help.buttonAria}>
	<Icon name="help" size={20} />
</button>

<style>
	.help-chip {
		position: fixed;
		bottom: 12px;
		right: 12px;
		z-index: 30;
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
	.help-chip:hover {
		color: var(--accent);
		border-color: var(--accent);
	}
</style>
