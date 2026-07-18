<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { completePresetMapping, presets, SWATCHES } from '$lib/beliefTypes';
	import type { Category } from '$lib/types';
	import { countByCategory, countByConfidence } from '$lib/tree/operations';
	import Modal from './Modal.svelte';
	import Icon from './Icon.svelte';
	import IconPicker from './IconPicker.svelte';

	const catCounts = $derived(countByCategory(maps.roots));
	const confCounts = $derived(countByConfidence(maps.roots));

	let iconFor = $state<string | null>(null);
	let colorFor = $state<string | null>(null);

	// Pending remap prompt (deleting an in-use category/level).
	let removing = $state<{
		kind: 'category' | 'level';
		id: string;
		label: string;
		count: number;
		targetId: string;
	} | null>(null);

	// Pending preset application: map each in-use category to one of the new set.
	let presetPending = $state<{
		presetId: string;
		name: string;
		categories: Category[]; // new set (select options)
		rows: { oldId: string; label: string; count: number }[]; // in-use old categories
		mapping: Record<string, string>; // oldId → newId, bound to selects
	} | null>(null);

	function newId() {
		return crypto.randomUUID();
	}

	function addCategory() {
		maps.addCategory({
			id: newId(),
			label: i18n.m.taxo.newCategory,
			colorHex: SWATCHES[maps.categories.length % SWATCHES.length],
			icon: 'star'
		});
	}

	function requestDeleteCategory(id: string, label: string) {
		if (maps.categories.length <= 1) return;
		const count = catCounts[id] ?? 0;
		const firstOther = maps.categories.find((c) => c.id !== id)!.id;
		if (count > 0) {
			removing = { kind: 'category', id, label, count, targetId: firstOther };
		} else {
			maps.deleteCategory(id, firstOther);
		}
	}

	function addLevel() {
		maps.addLevel({ id: newId(), label: i18n.m.taxo.newLevel });
	}

	function requestDeleteLevel(id: string, label: string) {
		if (maps.confidenceLevels.length <= 1) return;
		const count = confCounts[id] ?? 0;
		const firstOther = maps.confidenceLevels.find((l) => l.id !== id)!.id;
		if (count > 0) {
			removing = { kind: 'level', id, label, count, targetId: firstOther };
		} else {
			maps.deleteLevel(id, firstOther);
		}
	}

	function confirmRemove() {
		if (!removing) return;
		if (removing.kind === 'category') maps.deleteCategory(removing.id, removing.targetId);
		else maps.deleteLevel(removing.id, removing.targetId);
		removing = null;
	}

	function choosePreset(presetId: string) {
		const preset = presets(i18n.m).find((p) => p.id === presetId);
		if (!preset) return;
		const inUse = maps.categories.filter((c) => (catCounts[c.id] ?? 0) > 0);
		presetPending = {
			presetId,
			name: preset.name,
			categories: preset.categories,
			rows: inUse.map((c) => ({ oldId: c.id, label: c.label, count: catCounts[c.id] })),
			mapping: completePresetMapping(
				preset,
				inUse.map((c) => c.id)
			)
		};
	}
	function confirmPreset() {
		if (!presetPending) return;
		maps.applyPreset(presetPending.presetId, presetPending.mapping);
		presetPending = null;
	}

	const removeTargets = $derived(
		removing?.kind === 'category'
			? maps.categories.filter((c) => c.id !== removing!.id).map((c) => ({ id: c.id, label: c.label }))
			: maps.confidenceLevels
					.filter((l) => l.id !== removing?.id)
					.map((l) => ({ id: l.id, label: l.label }))
	);
</script>

<Modal onclose={() => ui.closeTaxonomy()} maxWidth={620}>
	{#if removing}
		<div class="remap">
			<p>{i18n.m.taxonomy.remapPrompt({ count: removing.count, label: removing.label })}</p>
			<select bind:value={removing.targetId}>
				{#each removeTargets as t (t.id)}
					<option value={t.id}>{t.label}</option>
				{/each}
			</select>
			<div class="actions">
				<button class="btn" onclick={() => (removing = null)}>{i18n.m.taxonomy.cancel}</button>
				<button class="btn btn-danger" onclick={confirmRemove}>{i18n.m.taxonomy.moveAndDelete}</button>
			</div>
		</div>
	{:else if presetPending}
		<div class="remap">
			{#if presetPending.rows.length > 0}
				<p>{i18n.m.taxonomy.applyPresetMapPrompt({ name: presetPending.name })}</p>
				<ul class="rows map-rows">
					{#each presetPending.rows as row (row.oldId)}
						<li>
							<span class="map-old">{row.label}</span>
							<span class="count">{row.count}</span>
							<span class="map-arrow">→</span>
							<select bind:value={presetPending.mapping[row.oldId]}>
								{#each presetPending.categories as c (c.id)}
									<option value={c.id}>{c.label}</option>
								{/each}
							</select>
						</li>
					{/each}
				</ul>
			{:else}
				<p>{i18n.m.taxonomy.applyPresetEmptyPrompt({ name: presetPending.name })}</p>
			{/if}
			<div class="actions">
				<button class="btn" onclick={() => (presetPending = null)}>{i18n.m.taxonomy.cancel}</button>
				<button class="btn btn-primary" onclick={confirmPreset}>{i18n.m.taxonomy.applyPreset}</button>
			</div>
		</div>
	{:else}
		<section>
			<div class="sec-head">
				<h4>{i18n.m.taxonomy.categories}</h4>
				<div class="preset">
					<label for="preset-sel">{i18n.m.taxonomy.loadPreset}</label>
					<select id="preset-sel" value="" onchange={(e) => choosePreset(e.currentTarget.value)}>
						<option value="" disabled selected>{i18n.m.taxonomy.choose}</option>
						{#each presets(i18n.m) as p (p.id)}
							<option value={p.id}>{p.name}</option>
						{/each}
					</select>
				</div>
			</div>

			<ul class="rows">
				{#each maps.categories as cat, i (cat.id)}
					<li>
						<button
							class="chip-btn"
							style="--c: {cat.colorHex}"
							title={i18n.m.taxonomy.changeIcon}
							onclick={() => (iconFor = iconFor === cat.id ? null : cat.id)}
						>
							<Icon name={cat.icon} size={18} color={cat.colorHex} />
						</button>
						<button
							class="color-dot"
							style="background: {cat.colorHex}"
							title={i18n.m.taxonomy.changeColor}
							aria-label={i18n.m.taxonomy.changeColor}
							onclick={() => (colorFor = colorFor === cat.id ? null : cat.id)}
						></button>
						<input
							class="label-in"
							value={cat.label}
							oninput={(e) => maps.updateCategory(cat.id, { label: e.currentTarget.value })}
						/>
						<span class="tools">
							<button class="icon-btn" title={i18n.m.taxonomy.moveUp} disabled={i === 0} onclick={() => maps.moveCategory(cat.id, -1)}>
								<Icon name="chevron-up" size={15} color="var(--text-muted)" />
							</button>
							<button
								class="icon-btn"
								title={i18n.m.taxonomy.delete}
								disabled={maps.categories.length <= 1}
								onclick={() => requestDeleteCategory(cat.id, cat.label)}
							>
								<Icon name="delete" size={15} />
							</button>
						</span>
						{#if colorFor === cat.id}
							<div class="popover colors">
								{#each SWATCHES as sw (sw)}
									<button
										class="swatch"
										style="background: {sw}"
										aria-label={sw}
										onclick={() => { maps.updateCategory(cat.id, { colorHex: sw }); colorFor = null; }}
									></button>
								{/each}
								<input
									type="color"
									value={cat.colorHex}
									oninput={(e) => maps.updateCategory(cat.id, { colorHex: e.currentTarget.value })}
								/>
							</div>
						{/if}
						{#if iconFor === cat.id}
							<div class="popover">
								<IconPicker
									value={cat.icon}
									onpick={(name) => { maps.updateCategory(cat.id, { icon: name }); iconFor = null; }}
								/>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
			<button class="add" onclick={addCategory}><Icon name="plus" size={16} /> {i18n.m.taxonomy.addCategory}</button>
		</section>

		<section>
			<div class="sec-head"><h4>{i18n.m.taxonomy.confidenceLevels}</h4><span class="hint">{i18n.m.taxonomy.lowToHigh}</span></div>
			<ul class="rows">
				{#each maps.confidenceLevels as level, i (level.id)}
					<li>
						<span class="rank">{i + 1}</span>
						<input
							class="label-in"
							value={level.label}
							oninput={(e) => maps.updateLevel(level.id, e.currentTarget.value)}
						/>
						<span class="tools">
							<button class="icon-btn" title={i18n.m.taxonomy.moveUp} disabled={i === 0} onclick={() => maps.moveLevel(level.id, -1)}>
								<Icon name="chevron-up" size={15} color="var(--text-muted)" />
							</button>
							<button
								class="icon-btn"
								title={i18n.m.taxonomy.delete}
								disabled={maps.confidenceLevels.length <= 1}
								onclick={() => requestDeleteLevel(level.id, level.label)}
							>
								<Icon name="delete" size={15} />
							</button>
						</span>
					</li>
				{/each}
			</ul>
			<button class="add" onclick={addLevel}><Icon name="plus" size={16} /> {i18n.m.taxonomy.addLevel}</button>
		</section>
	{/if}
</Modal>

<style>
	section {
		margin-bottom: 1.5rem;
	}
	.sec-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.6rem;
	}
	.sec-head h4 {
		margin: 0;
		font-size: 0.95rem;
	}
	.hint {
		font-size: 0.75rem;
		color: var(--text-muted);
	}
	.preset {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.8rem;
		color: var(--text-muted);
	}
	.preset select {
		font-size: 0.85rem;
		padding: 0.3rem 0.4rem;
		border: 1px solid var(--border);
		border-radius: 6px;
		background: var(--surface);
		color: var(--text);
	}
	.rows {
		list-style: none;
		margin: 0 0 0.6rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	.rows li {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.chip-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		border: 1px solid color-mix(in srgb, var(--c) 40%, var(--border));
		background: color-mix(in srgb, var(--c) 14%, transparent);
		border-radius: 8px;
		cursor: pointer;
		flex: none;
	}
	.color-dot {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid var(--border);
		cursor: pointer;
		flex: none;
	}
	.rank {
		width: 22px;
		height: 22px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--text-muted);
		background: color-mix(in srgb, var(--text-muted) 15%, transparent);
		border-radius: 50%;
		flex: none;
	}
	.label-in {
		flex: 1;
		font-size: 0.9rem;
		padding: 0.45rem 0.55rem;
		border: 1px solid var(--border);
		border-radius: 7px;
		background: var(--surface);
		color: var(--text);
		min-width: 0;
	}
	.count {
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--text-muted);
		background: color-mix(in srgb, var(--text-muted) 15%, transparent);
		padding: 0.1rem 0.45rem;
		border-radius: 999px;
	}
	.tools {
		display: flex;
		gap: 0.1rem;
		flex: none;
	}
	.add {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		background: none;
		border: 1px dashed var(--border);
		border-radius: 8px;
		padding: 0.5rem 0.8rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--accent);
		cursor: pointer;
	}
	.add:hover {
		background: color-mix(in srgb, var(--accent) 8%, transparent);
	}
	.popover {
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
		right: 0;
		z-index: 5;
		background: var(--bg-panel);
		border: 1px solid var(--border);
		border-radius: 8px;
		box-shadow: var(--shadow);
		padding: 6px;
	}
	.popover.colors {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		align-items: center;
	}
	.swatch {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1px solid var(--border);
		cursor: pointer;
	}
	.remap p {
		margin: 0 0 0.8rem;
		line-height: 1.45;
	}
	.remap select {
		width: 100%;
		font-size: 0.9rem;
		padding: 0.5rem;
		border: 1px solid var(--border);
		border-radius: 7px;
		background: var(--surface);
		color: var(--text);
	}
	.map-rows {
		max-height: 320px;
		overflow-y: auto;
	}
	.map-old {
		flex: 1;
		min-width: 0;
		font-size: 0.9rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.map-arrow {
		color: var(--text-muted);
		flex: none;
	}
	.map-rows select {
		width: auto;
		flex: 1;
		min-width: 0;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
