<script lang="ts">
	import { ICON_MAP, FALLBACK_ICON, type IconName } from '$lib/icons';

	let {
		name,
		size = 20,
		color = 'currentColor',
		strokeWidth = 2
	}: { name: string; size?: number; color?: string; strokeWidth?: number } = $props();

	const Cmp = $derived(ICON_MAP[name as IconName] ?? ICON_MAP[FALLBACK_ICON]);
</script>

<Cmp {size} {color} {strokeWidth} aria-hidden="true" />
