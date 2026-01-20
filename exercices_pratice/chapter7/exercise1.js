const findLowestPoint = (points, nodesProcessed) => {
	let pointLowest = parseFloat("inf");

	let nodeLowestPoint = null;

	for (const node of Object.keys(points)) {
		const currentPoint = points[node];

		if (currentPoint < pointLowest && !nodesProcessed.has(node)) {
			pointLowest = currentPoint;
			nodeLowestPoint = node;
		}
	}

	return nodeLowestPoint;
};

const graph = {};

graph.inicio = {};
graph.inicio.a = 2;
graph.inicio.b = 2;

graph.a = {};
graph.a.c = 4;
graph.a.d = 2;

graph.b = {};
graph.b.a = 8;
graph.b.d = 7;

graph.c = {};
graph.c.d = 6;
graph.c.fim = 3;

graph.d = {};
graph.d.fim = 1;

graph.fim = {};
