<script lang="ts">
	import { ui } from '$lib/stores/ui.svelte';
	import { fly } from 'svelte/transition';

	let current = $state<string | null>(null);
	let timer: ReturnType<typeof setTimeout>;

	$effect(() => {
		const toast = ui.toast;
		if (!toast) return;
		current = toast.message;
		clearTimeout(timer);
		timer = setTimeout(() => (current = null), 2200);
	});
</script>

{#if current}
	<div class="toast" role="status" transition:fly={{ y: 20, duration: 180 }}>
		{current}
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		bottom: 1.25rem;
		left: 50%;
		transform: translateX(-50%);
		background: var(--surface-raised);
		color: var(--text);
		border: 1px solid var(--border);
		padding: 0.65rem 1.1rem;
		border-radius: 999px;
		font-size: 0.9rem;
		box-shadow: var(--shadow);
		z-index: 200;
		max-width: 90vw;
	}
</style>
