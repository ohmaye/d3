<script>
	import PieSlice from './PieSlice.svelte';
	import { dimensions } from './data';
	import { colors } from './colors';

	let width = 600;
	let height = 400;

	let slices = dimensions.length;
	$: angleIncrement = 360 / slices;
	let arcs = 7;

	$: dimensionsCopy = dimensions;
</script>

<div class="m-2">
	How many dimensions in your Wheel of Life?<br />
	<input type="range" min="1" max="8" step="1" bind:value={slices} />
	{#if slices >= 8}
		"We recommend no more than 8, otherwise it becomes hard to keep track"
	{/if}
</div>
<div class="flex p-2 gap-2">
	<div>
		According to a Gallup study, 5 critical dimensions determine WellBeing. <br />
		<br />
		<p>How do you score yourself along these dimensions today?</p>
		<p>{Date()}</p>
	</div>
	<svg {width} {height} viewBox="-100 -100 200 200" class="bg-blue-100 p-2">
		{#each Array(slices) as _, index}
			<PieSlice
				arcs={10}
				startAngle={index * angleIncrement}
				endAngle={(index + 1) * angleIncrement}
				colorFlag={false}
				sliceIndex={index}
			/>
			<PieSlice
				arcs={dimensionsCopy[index].rating}
				startAngle={index * angleIncrement}
				endAngle={(index + 1) * angleIncrement}
				sliceIndex={index}
			/>
		{/each}
	</svg>

	<div>
		Rate how you are doing along each dimension:<br />
		{#each Array(slices) as _, index}
			<div class="bg-indigo-100 p-2">
				<div class="h-3 w-full" style="background: {colors[index]}" />
				<input type="range" min="0" max="10" step="1" bind:value={dimensionsCopy[index].rating} />
				{dimensionsCopy[index].title}
				({dimensionsCopy[index].rating})
			</div>{/each}
	</div>
</div>
