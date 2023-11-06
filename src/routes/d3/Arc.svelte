<script>
	import * as d3 from 'd3';
	import { degreesToAngle } from './utils';

	export let innerRadius = 40;
	export let outerRadius = 50;
	export let startAngle = 0;
	export let endAngle = 45;

	$: arc = d3.arc()({
		innerRadius: innerRadius,
		outerRadius: outerRadius,
		startAngle: degreesToAngle(startAngle),
		endAngle: degreesToAngle(endAngle)
	});
</script>

<path d={arc} />
