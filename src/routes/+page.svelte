<script lang="ts">
	import { onMount } from 'svelte';
	import { maps } from '$lib/stores/maps.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { i18n } from '$lib/stores/i18n.svelte';
	import { view } from '$lib/stores/view.svelte';
	import AppBar from '$lib/components/AppBar.svelte';
	import Background from '$lib/components/Background.svelte';
	import BeliefTree from '$lib/components/BeliefTree.svelte';
	import BeliefDetails from '$lib/components/BeliefDetails.svelte';
	import BeliefForm from '$lib/components/BeliefForm.svelte';
	import RerouteBelief from '$lib/components/RerouteBelief.svelte';
	import TaxonomyManager from '$lib/components/TaxonomyManager.svelte';
	import HelpButton from '$lib/components/HelpButton.svelte';
	import HelpModal from '$lib/components/HelpModal.svelte';
	import Toast from '$lib/components/Toast.svelte';

	onMount(() => {
		i18n.init(); // before maps.init() so a first-run seed uses the detected locale
		view.init();
		maps.init();
	});
</script>

<Background />
<AppBar />
<HelpButton />

<main>
	{#if maps.ready}
		<BeliefTree />
	{/if}
</main>

{#if ui.showDetails && ui.selectedNode}
	<BeliefDetails />
{/if}

{#if ui.form.open}
	<!-- keyed so the form fully remounts (and re-reads its target) each time it opens -->
	{#key `${ui.form.mode}:${ui.form.targetId}:${ui.form.childId}`}
		<BeliefForm />
	{/key}
{/if}

{#if ui.reroute.open}
	{#key ui.reroute.nodeId}
		<RerouteBelief />
	{/key}
{/if}

{#if ui.taxonomyOpen}
	<TaxonomyManager />
{/if}

{#if ui.helpOpen}
	<HelpModal />
{/if}

<Toast />

<style>
	main {
		position: fixed;
		inset: 0;
	}
</style>
