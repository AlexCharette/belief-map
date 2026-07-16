<script lang="ts">
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Modal from './Modal.svelte';
	import Icon from './Icon.svelte';
	import type { IconName } from '$lib/icons';

</script>

<Modal onclose={() => ui.closeHelp()} maxWidth={560}>
	<div class="help">
		<h2>{i18n.m.app.title}</h2>
		<p>{i18n.m.help.intro}</p>
		<p class="muted">{i18n.m.help.privacy}</p>
	</div>
</Modal>

<style>
	.help h2 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
	}
	.help h3 {
		font-size: 0.95rem;
		margin: 1.25rem 0 0.6rem;
	}
	.help p {
		margin: 0 0 0.6rem;
		line-height: 1.5;
	}
	.help p.muted {
		color: var(--text-muted);
		font-size: 0.9rem;
	}
	.help ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.help li {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		font-size: 0.9rem;
		line-height: 1.4;
	}
	.glyph {
		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 8px;
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		margin-top: 1px;
	}
</style>
