<script lang="ts">
	import { i18n } from '$lib/stores/i18n.svelte';
	import type { Locale } from '$lib/i18n/messages';
	import Icon from './Icon.svelte';

	let open = $state(false);
	let container: HTMLElement;

	const active = $derived(i18n.locales.find((l) => l.code === i18n.locale));

	function choose(code: Locale) {
		i18n.set(code);
		open = false;
	}

	function onWindowPointerDown(e: PointerEvent) {
		if (open && container && !container.contains(e.target as Node)) open = false;
	}
</script>

<svelte:window on:pointerdown={onWindowPointerDown} />

<div class="lang" bind:this={container}>
	<button
		class="trigger"
		onclick={() => (open = !open)}
		aria-haspopup="true"
		aria-expanded={open}
		aria-label={active?.native}
		title={active?.native}
	>
		<span class="flag">{active?.flag}</span>
		<Icon name="chevron-down" size={16} />
	</button>

	{#if open}
		<div class="dropdown" role="menu">
			{#each i18n.locales as l (l.code)}
				<button class="option" class:active={l.code === i18n.locale} onclick={() => choose(l.code)}>
					{#if l.code === i18n.locale}<Icon name="check" size={16} color="var(--accent)" />{/if}
					<span class="flag">{l.flag}</span>
					<span>{l.native}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.lang {
		position: relative;
	}
	.trigger {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.45rem 0.6rem;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text);
	}
	.trigger:hover {
		border-color: var(--accent);
	}
	.flag {
		font-size: 1.15rem;
		line-height: 1;
	}
	.dropdown {
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		min-width: 160px;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 10px;
		box-shadow: var(--shadow);
		padding: 0.35rem;
		z-index: 60;
	}
	.option {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		width: 100%;
		background: none;
		border: none;
		text-align: left;
		padding: 0.5rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text);
	}
	.option:hover {
		background: color-mix(in srgb, var(--accent) 8%, transparent);
	}
	.option.active {
		background: color-mix(in srgb, var(--accent) 10%, transparent);
	}
	/* Reserve the check column so the flag+label align whether or not the row is active. */
	.option:not(.active) > .flag {
		margin-left: 1.4rem;
	}
</style>
