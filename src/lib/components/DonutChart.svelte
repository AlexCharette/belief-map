<script lang="ts">
	import type { Segment } from '$lib/types';

	let {
		segments,
		ownColorHex,
		ownOpacity = 1,
		radius
	}: { segments: Segment[]; ownColorHex: string; ownOpacity?: number; radius: number } = $props();

	const BASE_STROKE = 10;

	function polar(r: number, angleDeg: number) {
		const a = ((angleDeg - 90) * Math.PI) / 180;
		return { x: r * Math.cos(a), y: r * Math.sin(a) };
	}

	// Arc centered on the origin (0,0). Ported from the original describeArc.
	function describeArc(r: number, startAngle: number, endAngle: number): string {
		const start = polar(r, endAngle);
		const end = polar(r, startAngle);
		const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
		return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
	}

	const arcs = $derived.by(() => {
		const size = 360 / segments.length;
		return segments.map((seg, i) => ({
			d: describeArc(radius, i * size, (i + 1) * size),
			color: seg.colorHex,
			opacity: seg.opacity,
			width: BASE_STROKE + seg.count * 3
		}));
	});
</script>

{#if segments.length > 1}
	<circle r={radius} fill="white" stroke={segments[0].colorHex} stroke-width="1" stroke-opacity="0.35" />
	{#each arcs as arc, i (i)}
		<path d={arc.d} fill="none" stroke={arc.color} stroke-opacity={arc.opacity} stroke-width={arc.width} />
	{/each}
	<circle r={radius / 3} fill="white" stroke={ownColorHex} stroke-opacity={ownOpacity} stroke-width="2.5" />
{:else if segments.length === 1}
	<circle
		r={radius}
		fill="white"
		stroke={segments[0].colorHex}
		stroke-opacity={segments[0].opacity}
		stroke-width={BASE_STROKE}
	/>
	<circle r={radius / 3} fill="white" stroke={ownColorHex} stroke-opacity={ownOpacity} stroke-width="2.5" />
{:else}
	<circle r={radius} fill="white" stroke={ownColorHex} stroke-opacity={ownOpacity} stroke-width={BASE_STROKE} />
{/if}
