let grafo = {};

grafo["inicio"] = {};

grafo["inicio"]["a"] = {};
grafo["inicio"]["a"]["fim"] = 1;

grafo["inicio"]["b"] = {};
grafo["inicio"]["b"]["a"] = 3;
grafo["inicio"]["b"]["fim"] = 5;

grafo["fim"] = {};

let custos = {};
custos["a"] = 6;
custos["b"] = 2;
custos["fim"] = Infinity;

let pais = {};
pais["a"] = "inicio";
pais["b"] = "inicio";
pais["fim"] = undefined;

const processados = [];
