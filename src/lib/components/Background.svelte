<script lang="ts">
	// The constellation field: a soft twilight sky-glow with faint decorative rings
	// echoing the donut motif. Purely cosmetic, non-interactive, and static (the
	// panning star-dots live in Svelte Flow's own Background, giving gentle parallax).
	import { maps } from '$lib/stores/maps.svelte';

	const positions = [
		{ cx: 12, cy: 22, r: 8 },
		{ cx: 82, cy: 12, r: 10 },
		{ cx: 90, cy: 70, r: 14 },
		{ cx: 20, cy: 82, r: 11 },
		{ cx: 55, cy: 45, r: 18 }
	];
	// Tint the decorative rings with the active map's category colors (cycled).
	const rings = $derived(
		positions.map((p, i) => ({
			...p,
			color: maps.categories[i % Math.max(1, maps.categories.length)]?.colorHex ?? '#6E6A86'
		}))
	);
</script>

<div class="sky" aria-hidden="true"></div>

<svg class="rings" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
	{#each rings as ring, i (i)}
		<circle cx={ring.cx} cy={ring.cy} r={ring.r} fill="none" stroke={ring.color} stroke-width="0.5" />
	{/each}
</svg>

<style>
	.sky {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		/* A faint violet moon-glow at the top fading into the darker base at the
		   edges — single hue family, never a two-hue diagonal gradient. */
		background: radial-gradient(
			135% 105% at 50% -12%,
			#2a2740 0%,
			var(--bg) 52%,
			#1c1a2c 100%
		);
	}
	.rings {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		opacity: 0.07;
		pointer-events: none;
	}
</style>
