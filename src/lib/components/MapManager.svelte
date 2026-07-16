<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Icon from './Icon.svelte';

	let open = $state(false);
	let container: HTMLElement;
	let renamingId = $state<string | null>(null);
	let renameValue = $state('');

	const sorted = $derived([...maps.index].sort((a, b) => b.updatedAt - a.updatedAt));

	function toggle() {
		open = !open;
	}

	function choose(id: string) {
		maps.switchTo(id);
		ui.closeDetails();
		open = false;
	}

	function createMap() {
		maps.newMap(i18n.m.mapManager.newMapName);
		ui.closeDetails();
		open = false;
	}

	function startRename(id: string, name: string, e: MouseEvent) {
		e.stopPropagation();
		renamingId = id;
		renameValue = name;
	}
	function commitRename() {
		if (renamingId) maps.rename(renamingId, renameValue);
		renamingId = null;
	}

	function remove(id: string, name: string, e: MouseEvent) {
		e.stopPropagation();
		if (confirm(i18n.m.mapManager.deleteConfirm({ name }))) {
			maps.remove(id);
		}
	}

	function onWindowPointerDown(e: PointerEvent) {
		if (open && container && !container.contains(e.target as Node)) open = false;
	}
</script>

<svelte:window on:pointerdown={onWindowPointerDown} />

<div class="manager" bind:this={container}>
	<button class="trigger" onclick={toggle} aria-haspopup="true" aria-expanded={open}>
		<Icon name="folder" size={18} />
		<span class="current">{maps.activeMeta?.name ?? i18n.m.mapManager.current}</span>
		<Icon name="chevron-down" size={16} />
	</button>

	{#if open}
		<div class="dropdown" role="menu">
			<ul>
				{#each sorted as m (m.id)}
					<li class:active={m.id === maps.activeId}>
						{#if renamingId === m.id}
							<!-- svelte-ignore a11y_autofocus -->
							<input
								class="rename"
								bind:value={renameValue}
								autofocus
								onclick={(e) => e.stopPropagation()}
								onkeydown={(e) => {
									if (e.key === 'Enter') commitRename();
									if (e.key === 'Escape') (renamingId = null);
								}}
								onblur={commitRename}
							/>
						{:else}
							<button class="name" onclick={() => choose(m.id)}>
								{#if m.id === maps.activeId}<Icon name="check" size={16} color="var(--accent)" />{/if}
								<span>{m.name}</span>
							</button>
							<span class="tools">
								<button class="icon-btn" title={i18n.m.mapManager.rename} onclick={(e) => startRename(m.id, m.name, e)}>
									<Icon name="edit" size={16} />
								</button>
								<button class="icon-btn" title={i18n.m.mapManager.deleteMap} onclick={(e) => remove(m.id, m.name, e)}>
									<Icon name="delete" size={16} />
								</button>
							</span>
						{/if}
					</li>
				{/each}
			</ul>
			<button class="new" onclick={createMap}>
				<Icon name="file-plus" size={18} /> {i18n.m.mapManager.newMap}
			</button>
		</div>
	{/if}
</div>

<style>
	.manager {
		position: relative;
	}
	.trigger {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.45rem 0.7rem;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text);
		max-width: 260px;
	}
	.trigger:hover {
		border-color: var(--accent);
	}
	.current {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.dropdown {
		position: absolute;
		top: calc(100% + 6px);
		left: 0;
		min-width: 280px;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 10px;
		box-shadow: var(--shadow);
		padding: 0.35rem;
		z-index: 60;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 320px;
		overflow: auto;
	}
	li {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border-radius: 8px;
		padding: 0.1rem 0.2rem;
	}
	li:hover {
		background: color-mix(in srgb, var(--accent) 8%, transparent);
	}
	li.active {
		background: color-mix(in srgb, var(--accent) 10%, transparent);
	}
	.name {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		background: none;
		border: none;
		text-align: left;
		padding: 0.5rem;
		cursor: pointer;
		font-size: 0.9rem;
		color: var(--text);
		overflow: hidden;
	}
	.name span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.tools {
		display: flex;
		gap: 0.1rem;
	}
	.rename {
		flex: 1;
		font-size: 0.9rem;
		padding: 0.4rem 0.5rem;
		border: 1px solid var(--accent);
		border-radius: 6px;
		margin: 0.15rem;
	}
	.new {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		width: 100%;
		margin-top: 0.35rem;
		padding: 0.6rem 0.5rem;
		border: none;
		border-top: 1px solid var(--border);
		background: none;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent);
		border-radius: 0 0 8px 8px;
	}
	.new:hover {
		background: color-mix(in srgb, var(--accent) 8%, transparent);
	}
</style>
