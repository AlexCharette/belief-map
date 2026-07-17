<script lang="ts">
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import Modal from './Modal.svelte';
	import Icon from './Icon.svelte';

	function confirmClear() {
		maps.clearAllData();
		ui.closeDetails(); // drop any open belief-details panel referencing a now-gone node
		ui.closeClearData();
		ui.notify(i18n.m.clearData.cleared);
	}
</script>

<Modal onclose={() => ui.closeClearData()} maxWidth={440}>
	<div class="clear">
		<h2>{i18n.m.clearData.title}</h2>
		<p>{i18n.m.clearData.body}</p>
		<div class="actions">
			<button class="btn" onclick={() => ui.closeClearData()}>{i18n.m.clearData.cancel}</button>
			<button class="btn btn-danger" onclick={confirmClear}>
				<Icon name="delete" size={16} /> <span>{i18n.m.clearData.confirm}</span>
			</button>
		</div>
	</div>
</Modal>

<style>
	.clear h2 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
	}
	.clear p {
		margin: 0 0 1.25rem;
		line-height: 1.5;
		color: var(--text-muted);
	}
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
