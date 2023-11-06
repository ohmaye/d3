<script>
	import Arc from './Arc.svelte';

	export let arcs = 1;
	export let startAngle = 0;
	export let endAngle = 45;
	export let color = true;
</script>

{#if color}
	<g class="stroke-slate-400 fill-indigo-200 stroke-1">
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
