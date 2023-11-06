<script>
	import Arc from './Arc.svelte';
	import { colors } from './colors';

	export let arcs = 1;
	export let startAngle = 0;
	export let endAngle = 45;
	export let colorFlag = true;
	export let sliceIndex = 0;

	const color = colors[sliceIndex];
</script>

{#if colorFlag}
	<g class="stroke-slate-500 stroke-1" fill={color}>
		{#each Array(arcs) as _, index}
			<Arc innerRadius={index * 10} outerRadius={index * 10 + 10} {startAngle} {endAngle} />
		{/each}</g
	>
{:else}
	<g class="stroke-white fill-none stroke-1">
		{#each Array(arcs) as _, index}
			<Arc innerRadius={index * 10} outerRadius={index * 10 + 10} {startAngle} {endAngle} />
		{/each}</g
	>
{/if}
