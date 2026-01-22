import { Graph } from "./graph.js";

const graph = {};

graph.inicio = {};
graph.inicio.a = 10;

graph.a = {};
graph.a.b = 20;

graph.b = {};
graph.b.c = 1;
graph.b.fim = 30;

graph.c = {};
graph.c.a = 1;

graph.fim = {};

const costs = {};

costs.a = 10;
costs.b = Number.MAX_VALUE;
costs.c = Number.MAX_VALUE;
costs.fim = Number.MAX_VALUE;

const parents = {};

parents.a = "inicio";
parents.b = null;
parents.c = null;
parents.fim = null;

const graphDijkstra = new Graph(graph, costs, parents);

const result = graphDijkstra.executeDijkstra();

console.log("Costs:", result.costs);
console.log("Parents:", result.parents);
