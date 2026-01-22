export class Graph {
	constructor(graph = {}, costs = {}, parents = {}) {
		this.graph = graph;
		this.costs = costs;
		this.parents = parents;
		this.nodesProcessed = new Set();
	}

	findLowestPoint(costs, nodesProcessed) {
		let pointLowest = Number.MAX_VALUE;

		let nodeLowestPoint = null;

		for (const node of Object.keys(costs)) {
			const currentPoint = costs[node];

			if (currentPoint < pointLowest && !nodesProcessed.has(node)) {
				pointLowest = currentPoint;
				nodeLowestPoint = node;
			}
		}

		return nodeLowestPoint;
	}

	executeDijkstra() {
		let nodeLowest = this.findLowestPoint(this.costs, this.nodesProcessed);

		while (nodeLowest !== null) {
			const costNodeLowest = this.costs[nodeLowest];

			const neighbors = this.graph[nodeLowest];

			for (const item of Object.keys(neighbors)) {
				const newCost = costNodeLowest + neighbors[item];

				if (this.costs[item] > newCost) {
					this.costs[item] = newCost;
					this.parents[item] = nodeLowest;
				}
			}

			this.nodesProcessed.add(nodeLowest);

			nodeLowest = this.findLowestPoint(this.costs, this.nodesProcessed);
		}

		return {
			costs: this.costs,
			parents: this.parents,
		};
	}
}
