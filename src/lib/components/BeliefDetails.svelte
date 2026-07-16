<script lang="ts">
	import { ui } from '$lib/stores/ui.svelte';
	import { maps } from '$lib/stores/maps.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { deleteNode } from '$lib/tree/operations';
	import { safeUrl } from '$lib/url';
	import Icon from './Icon.svelte';

	// Rendered only when a node is selected (guarded by the parent).
	const node = $derived(ui.selectedNode!);
	const meta = $derived(maps.categoryMeta(node.source));
	const conf = $derived(maps.confidenceMeta(node.confidence));

	let confirmingDelete = $state(false);

	function addPremise() {
		ui.openAddForm(node.id);
	}
	function edit() {
		ui.openEditForm(node.id);
	}
	function reroute() {
		ui.openReroute(node.id);
	}
	function copy() {
		ui.copy({
			name: node.name,
			notes: node.notes,
			source: node.source,
			confidence: node.confidence,
			references: node.references
		});
		ui.notify(i18n.m.details.copied);
	}
	function doDelete() {
		const id = node.id;
		ui.closeDetails();
		maps.applyForestOp((t) => deleteNode(t, id));
		ui.notify(i18n.m.details.deleted);
	}
</script>

<aside class="details" aria-label={i18n.m.details.panelAria}>
	<header>
		<span class="chip" style="--chip: {meta.colorHex}">
			<Icon name={meta.icon} size={18} color={meta.colorHex} />
			{meta.label}
		</span>
		<button class="icon-btn" onclick={() => ui.closeDetails()} aria-label={i18n.m.details.closeAria}>
			<Icon name="close" />
		</button>
	</header>

	<div class="confidence" title={i18n.m.details.confidence({ label: conf.label })}>
		<span class="gauge" aria-hidden="true" style="--chip: {meta.colorHex}">
			{#each maps.confidenceLevels as level, i (level.id)}
				<span class="pip" class:on={i <= conf.order}></span>
			{/each}
		</span>
		<span class="conf-label">{conf.label}</span>
	</div>

	<h2>{node.name}</h2>

	{#if node.notes}
		<p class="notes">{node.notes}</p>
	{/if}

	{#if node.references.length > 0}
		<ul class="refs">
			{#each node.references as ref, i (i)}
				{@const href = safeUrl(ref.link)}
				<li>
					{#if href}
						<a {href} target="_blank" rel="noreferrer noopener">{ref.text || ref.link}</a>
					{:else}
						<span>{ref.text || ref.link}</span>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	<div class="actions">
		<button class="btn btn-primary" onclick={addPremise}>
			<Icon name="plus" size={16} /> {i18n.m.details.addPremise}
		</button>
		<button class="btn" onclick={edit}>
			<Icon name="edit" size={16} /> {i18n.m.details.edit}
		</button>
	</div>

	<div class="actions secondary">
		<button class="btn" onclick={reroute}>
			<Icon name="move" size={16} /> {i18n.m.details.move}
		</button>
		<!--button class="btn" onclick={copy}>
			<Icon name="copy" size={16} /> Copy details
		</button-->
		{#if confirmingDelete}
			<div class="confirm">
				<span>{i18n.m.details.confirmDelete}</span>
				<button class="btn btn-danger" onclick={doDelete}>{i18n.m.details.yes}</button>
				<button class="btn" onclick={() => (confirmingDelete = false)}>{i18n.m.details.no}</button>
			</div>
		{:else}
			<button class="btn btn-danger" onclick={() => (confirmingDelete = true)}>
				<Icon name="delete" size={16} /> {i18n.m.details.delete}
			</button>
		{/if}
	</div>
	<p class="hint">
		{#if node.isRoot}
			{i18n.m.details.hintRoot}
		{:else}
			{i18n.m.details.hintChild}
		{/if}
	</p>
</aside>

<style>
	.details {
		position: fixed;
		top: 76px;
		right: 1rem;
		width: 320px;
		max-width: calc(100vw - 2rem);
		max-height: calc(100vh - 96px);
		overflow: auto;
		background: var(--bg-panel);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		padding: 1rem 1.1rem 1.2rem;
		z-index: 40;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.8rem;
		font-weight: 600;
		/* Label sits in ink (AAA); the icon + pill tint carry the type's hue. */
		color: var(--text);
		background: color-mix(in srgb, var(--chip) 14%, transparent);
		border: 1px solid color-mix(in srgb, var(--chip) 32%, transparent);
		padding: 0.3rem 0.6rem;
		border-radius: 999px;
	}
	.confidence {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}
	.gauge {
		display: inline-flex;
		gap: 3px;
	}
	.pip {
		width: 16px;
		height: 6px;
		border-radius: 3px;
		background: color-mix(in srgb, var(--text-muted) 22%, transparent);
	}
	.pip.on {
		background: var(--chip);
	}
	.conf-label {
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--text-muted);
	}
	h2 {
		font-size: 1.15rem;
		margin: 0 0 0.5rem;
		word-break: break-word;
	}
	.notes {
		color: var(--text);
		margin: 0 0 0.75rem;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.refs {
		list-style: none;
		padding: 0;
		margin: 0 0 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}
	.refs a {
		word-break: break-all;
	}
	.actions {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-top: 0.75rem;
	}
	.actions.secondary {
		border-top: 1px solid var(--border);
		padding-top: 0.75rem;
	}
	.confirm {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
	}
	.hint {
		font-size: 0.72rem;
		color: var(--text-muted);
		margin: 0.6rem 0 0;
	}
</style>
