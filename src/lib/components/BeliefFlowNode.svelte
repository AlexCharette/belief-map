<script lang="ts">
	import { type NodeProps } from '@xyflow/svelte';
	import { view } from '$lib/stores/view.svelte';
	import BeliefDonutNode from './BeliefDonutNode.svelte';
	import BeliefCardNode from './BeliefCardNode.svelte';

	// Dispatch to the active node style. Both renderers take the same Flow payload.
	let props: NodeProps = $props();
</script>

{#if view.nodeStyle === 'card'}
	<BeliefCardNode {...props} />
{:else}
	<BeliefDonutNode {...props} />
{/if}
