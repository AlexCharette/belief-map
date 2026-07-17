<script lang="ts">
	import type { Snippet } from 'svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';

	let {
		onclose,
		maxWidth = 640,
		children
	}: { onclose: () => void; maxWidth?: number; children: Snippet } = $props();

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}
</script>

<svelte:window on:keydown={onKeydown} />

<div
	class="backdrop"
	role="button"
	tabindex="-1"
	aria-label={i18n.m.modal.close}
	onclick={onclose}
	onkeydown={(e) => e.key === 'Enter' && onclose()}
>
	<div
		class="panel"
		style="max-width: {maxWidth}px"
		role="dialog"
		aria-modal="true"
		onclick={(e) => e.stopPropagation()}
		onkeydown={(e) => {
			e.stopPropagation();
			if (e.key === 'Escape') onclose();
		}}
		tabindex="-1"
	>
		<div class="body">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(13, 12, 22, 0.66);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 6vh 1rem 1rem;
		z-index: 100;
		cursor: default;
	}
	.panel {
		background: var(--bg-panel);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		width: 100%;
		max-height: 88vh;
		overflow: auto;
		animation: pop 0.14s ease-out;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 1rem 1.25rem;
		border-bottom: 1px solid var(--border);
		position: sticky;
		top: 0;
		background: var(--bg-panel);
	}
	.body {
		padding: 1.25rem;
	}
	@keyframes pop {
		from {
			transform: translateY(-8px);
			opacity: 0;
		}
	}
</style>
