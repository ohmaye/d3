<script>
	import * as Plot from '@observablehq/plot';
	import * as d3 from 'd3';
	import { aapl } from './aapl';

	let div;

	const plot = Plot.plot({
		marks: [
			Plot.ruleY([0]),
			Plot.lineY(aapl, { x: 'Date', y: 'Close', stroke: 'red' }),
			Plot.lineY(aapl, { x: 'Date', y: 'Close', stroke: 'blue' })
		]
	});

	console.log(plot);

	$: {
		div?.firstChild?.remove(); // remove old chart, if any
		div?.append(plot); // add the new chart
	}
</script>

<div bind:this={div} role="img" />
