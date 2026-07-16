<script lang="ts">
	import { ICON_CHOICES } from '$lib/beliefTypes';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';

	let { value, onpick }: { value: string; onpick: (name: string) => void } = $props();
</script>

<div class="grid" aria-label={i18n.m.iconPicker.choose}>
	{#each ICON_CHOICES as name (name)}
		<button
			type="button"
			class="cell"
			class:sel={name === value}
			title={name}
			aria-pressed={name === value}
			onclick={() => onpick(name)}
		>
			<Icon {name} size={20} />
		</button>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 4px;
		max-height: 180px;
		overflow: auto;
		padding: 4px;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
	}
	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1;
		border: 1px solid transparent;
		border-radius: 6px;
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
	}
	.cell:hover {
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		color: var(--text);
	}
	.cell.sel {
		border-color: var(--accent);
		color: var(--accent);
		background: color-mix(in srgb, var(--accent) 14%, transparent);
	}
	@media (max-width: 520px) {
		.grid {
			grid-template-columns: repeat(6, 1fr);
		}
	}
</style>
