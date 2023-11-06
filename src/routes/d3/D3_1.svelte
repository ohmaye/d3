<script>
	import * as d3 from 'd3';

	// const arc = d3
	// 	.arc()
	// 	.innerRadius(50)
	// 	.outerRadius(100)
	// 	.startAngle(0)
	// 	.endAngle(Math.PI / 2)({}); // "M0,-100A100,100,0,0,1,100,0L0,0Z"

	const arc = d3.arc()({
		innerRadius: 50,
		outerRadius: 100,
		startAngle: 0,
		endAngle: Math.PI / 2
	});

	console.log(arc);
</script>

<path d={arc} class="stroke-slate-400 fill-slate-200 stroke-2" />
