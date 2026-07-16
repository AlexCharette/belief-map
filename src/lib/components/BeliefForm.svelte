<script lang="ts">
	import type { BeliefInput, BeliefReference } from '$lib/types';
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { addNode, findNode, insertBetween, updateNode } from '$lib/tree/operations';
	import Modal from './Modal.svelte';
	import Icon from './Icon.svelte';

	const mode = ui.form.mode;
	const targetId = ui.form.targetId;
	const childId = ui.form.childId;
	const targetNode = mode === 'edit' ? findNode(maps.roots, targetId) : null;

	// Default confidence for a new belief = the middle level of the active taxonomy.
	const midLevel = maps.confidenceLevels[Math.floor((maps.confidenceLevels.length - 1) / 2)];

	let name = $state(targetNode?.name ?? '');
	let notes = $state(targetNode?.notes ?? '');
	let source = $state<string>(targetNode?.source ?? '');
	let confidence = $state<string>(targetNode?.confidence ?? midLevel?.id ?? '');
	let references = $state<BeliefReference[]>(
		targetNode ? targetNode.references.map((r) => ({ ...r })) : []
	);
	let attempted = $state(false);

	const canPaste = $derived(mode === 'add' && ui.copied !== null);
	const nameValid = $derived(name.trim().length > 0);
	const sourceValid = $derived(source.length > 0);

	function addReference() {
		references = [...references, { text: '', link: '' }];
	}
	function removeReference(i: number) {
		references = references.filter((_, idx) => idx !== i);
	}

	function pasteDetails() {
		if (!ui.copied) return;
		name = ui.copied.name;
		notes = ui.copied.notes;
		source = ui.copied.source;
		confidence = ui.copied.confidence;
		references = ui.copied.references.map((r) => ({ ...r }));
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();
		attempted = true;
		if (!nameValid || !sourceValid) return;

		const input: BeliefInput = {
			name: name.trim(),
			notes,
			source,
			confidence,
			references: references.filter((r) => r.text.trim() || r.link.trim())
		};

		if (mode === 'edit') {
			maps.applyForestOp((t) => updateNode(t, targetId, input));
			ui.notify(i18n.m.form.updated);
		} else if (mode === 'insert') {
			maps.applyForestOp((t) => insertBetween(t, targetId, childId, input));
			ui.notify(i18n.m.form.inserted);
		} else if (mode === 'create') {
			maps.addOrphan(input, ui.form.position ?? undefined);
			ui.notify(i18n.m.form.created);
		} else {
			maps.applyForestOp((t) => addNode(t, targetId, input));
			ui.notify(i18n.m.form.premiseAdded);
		}
		ui.closeForm();
	}
</script>

<Modal onclose={() => ui.closeForm()}>
	<form onsubmit={submit}>
		{#if canPaste}
			<button type="button" class="btn paste" onclick={pasteDetails}>
				<Icon name="copy" size={16} /> {i18n.m.form.paste}
			</button>
		{/if}

		<div class="field">
			<label for="belief-name">{i18n.m.form.name}</label>
			<input
				id="belief-name"
				bind:value={name}
				placeholder={i18n.m.form.namePlaceholder}
			/>
			{#if attempted && !nameValid}<span class="error">{i18n.m.form.nameRequired}</span>{/if}
		</div>

		<div class="row">
			<div class="field">
				<label for="belief-source">{i18n.m.form.source}</label>
				<select id="belief-source" bind:value={source}>
					<option value="" disabled>{i18n.m.form.chooseCategory}</option>
					{#each maps.categories as c (c.id)}
						<option value={c.id}>{c.label}</option>
					{/each}
				</select>
				{#if attempted && !sourceValid}<span class="error">{i18n.m.form.sourceRequired}</span>{/if}
			</div>
			<div class="field">
				<label for="belief-confidence">{i18n.m.form.confidence}</label>
				<select id="belief-confidence" bind:value={confidence}>
					{#each maps.confidenceLevels as level (level.id)}
						<option value={level.id}>{level.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="field">
			<label for="belief-notes">{i18n.m.form.notes} <small>{i18n.m.form.optional}</small></label>
			<textarea id="belief-notes" rows="3" bind:value={notes}></textarea>
		</div>

		<div class="references">
			<span class="ref-head">{i18n.m.form.references} <small>{i18n.m.form.optional}</small></span>

			{#each references as ref, i (i)}
				<div class="ref-row">
					<span class="ref-glyph"><Icon name="quote" size={16} /></span>
					<div class="ref-fields">
						<input placeholder={i18n.m.form.refLabelPlaceholder} bind:value={ref.text} />
						<input placeholder="https://…" inputmode="url" bind:value={ref.link} />
					</div>
					<button type="button" class="icon-btn" onclick={() => removeReference(i)} aria-label={i18n.m.form.removeReference}>
						<Icon name="close" size={16} />
					</button>
				</div>
			{/each}

			<button type="button" class="add-ref" onclick={addReference}>
				<Icon name="plus" size={16} /> {i18n.m.form.addReference}
			</button>
		</div>

		<div class="actions">
			<button type="button" class="btn" onclick={() => ui.closeForm()}>{i18n.m.form.cancel}</button>
			<button type="submit" class="btn btn-primary">
				{mode === 'edit' ? i18n.m.form.save : i18n.m.form.addPremise}
			</button>
		</div>
	</form>
</Modal>

<style>
	.paste {
		margin-bottom: 1rem;
	}
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.references {
		margin-top: 0.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.ref-head {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--text-muted);
	}
	.ref-row {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.6rem;
	}
	.ref-glyph {
		display: inline-flex;
		color: var(--text-muted);
	}
	.ref-fields {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
		gap: 0.5rem;
	}
	/* Ghost "add" affordance, matching the app's add-row pattern. */
	.add-ref {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		width: 100%;
		margin-top: 0.15rem;
		padding: 0.55rem;
		border: 1px dashed var(--border);
		border-radius: 8px;
		background: transparent;
		color: var(--accent-strong);
		font-family: inherit;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			border-color 0.15s ease,
			background 0.15s ease;
	}
	.add-ref:hover {
		border-color: var(--accent);
		background: color-mix(in srgb, var(--accent) 8%, transparent);
	}
	@media (max-width: 520px) {
		.ref-fields {
			grid-template-columns: 1fr;
		}
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.6rem;
		margin-top: 1.25rem;
	}
	@media (max-width: 520px) {
		.row {
			grid-template-columns: 1fr;
		}
	}
</style>
