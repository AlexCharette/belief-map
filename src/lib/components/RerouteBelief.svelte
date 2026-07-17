<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { findNode, findParent, moveNode, rerouteCandidates } from '$lib/tree/operations';
	import Modal from './Modal.svelte';
	import Icon from './Icon.svelte';

	const nodeId = ui.reroute.nodeId;
	const node = findNode(maps.roots, nodeId);
	const currentParent = findParent(maps.roots, nodeId);
	const candidates = rerouteCandidates(maps.roots, nodeId);

	let query = $state('');
	const filtered = $derived(
		query.trim()
			? candidates.filter((c) => c.description.toLowerCase().includes(query.trim().toLowerCase()))
			: candidates
	);

	function choose(newParentId: string) {
		maps.applyForestOp((t) => moveNode(t, nodeId, newParentId));
		const target = findNode(maps.roots, newParentId);
		ui.notify(
			i18n.m.reroute.movedUnder({
				description: node?.description ?? '',
				target: target?.description ?? ''
			})
		);
		ui.closeReroute();
	}
</script>

<Modal onclose={() => ui.closeReroute()}>
	<h3 class="reroute-title">{i18n.m.reroute.title({ description: node?.description ?? '' })}</h3>
	<p class="hint">
		{i18n.m.reroute.hintPrefix}
		<strong>{currentParent?.description ?? i18n.m.reroute.noParent}</strong>{i18n.m.reroute.hintSuffix}
	</p>

	{#if candidates.length > 8}
		<div class="field">
			<!-- svelte-ignore a11y_autofocus -->
			<input placeholder={i18n.m.reroute.searchPlaceholder} bind:value={query} autofocus />
		</div>
	{/if}

	{#if filtered.length === 0}
		<p class="empty">{i18n.m.reroute.empty}</p>
	{:else}
		<ul class="targets">
			{#each filtered as c (c.id)}
				{@const meta = maps.categoryMeta(c.source)}
				<li>
					<button class="target" style="padding-left: {0.6 + c.depth * 0.9}rem" onclick={() => choose(c.id)}>
						<span class="dot" style="background: {meta.colorHex}"></span>
						<span class="description">{c.description || i18n.m.reroute.untitled}</span>
						<Icon name="chevron-right" size={16} color="var(--text-muted)" />
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</Modal>

<style>
	.hint {
		font-size: 0.85rem;
		color: var(--text-muted);
		margin: 0 0 1rem;
		line-height: 1.4;
	}
	.hint strong {
		color: var(--text);
	}
	.targets {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 46vh;
		overflow: auto;
		border: 1px solid var(--border);
		border-radius: 10px;
	}
	.targets li + li {
		border-top: 1px solid var(--border);
	}
	.target {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		background: none;
		border: none;
		padding: 0.6rem 0.7rem;
		cursor: pointer;
		font-size: 0.92rem;
		color: var(--text);
		text-align: left;
	}
	.target:hover {
		background: color-mix(in srgb, var(--accent) 9%, transparent);
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex: none;
	}
	.description {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.empty {
		font-size: 0.9rem;
		color: var(--text-muted);
		text-align: center;
		padding: 1rem 0;
	}
</style>
