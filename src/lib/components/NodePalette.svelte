<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { view, MIN_CARDINALITY, MAX_CARDINALITY } from '$lib/stores/view.svelte';
	import Icon from './Icon.svelte';
</script>

<div class="palette">
	<button class="tidy" onclick={() => maps.tidyLayout()} title={i18n.m.nodePalette.tidyHint}>
		<Icon name="sparkles" size={15} /> {i18n.m.nodePalette.tidy}
	</button>

	<div class="stepper" title={i18n.m.nodePalette.directions}>
		<Icon name="compass" size={15} />
		<button
			class="step"
			onclick={() => view.set(view.cardinality - 1)}
			disabled={view.cardinality <= MIN_CARDINALITY}
			aria-label="−"
		>
			<Icon name="minus" size={13} />
		</button>
		<span class="count">{view.cardinality}</span>
		<button
			class="step"
			onclick={() => view.set(view.cardinality + 1)}
			disabled={view.cardinality >= MAX_CARDINALITY}
			aria-label="+"
		>
			<Icon name="plus" size={13} />
		</button>
	</div>
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
	.stepper {
		display: inline-flex;
		align-items: center;
		gap: 0.15rem;
		padding: 0.25rem 0.5rem;
		color: var(--text-muted);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999px;
		box-shadow: var(--shadow);
	}
	.step {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		color: var(--text-muted);
		background: transparent;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}
	.step:hover:not(:disabled) {
		color: var(--accent);
		background: color-mix(in srgb, var(--accent) 14%, transparent);
	}
	.step:disabled {
		opacity: 0.35;
		cursor: default;
	}
	.count {
		min-width: 1ch;
		text-align: center;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--text);
	}
</style>
