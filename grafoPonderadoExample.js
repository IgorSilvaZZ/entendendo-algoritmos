const grafo = {};

/* Tabelas hashs que serao atualizados conforme o algoritmo for executado */
const custos = {};
const pais = {};

/* Lista com todos as verticies ja verificadas/processados */
const processados = [];

const encontrarCustoMaisBaixo = (custosHash) => {
	let custoMaisBaixo = Infinity;
	let nodeCustoMaisBaixo = null;

	for (const item of Object.keys(custosHash)) {
		const custo = custosHash[item];

		if (!processados.includes(item)) {
			if (custo < minimum) {
				custoMaisBaixo = custo;
				nodeCustoMaisBaixo = item;
			}
		}
	}

	return nodeCustoMaisBaixo;
};

/* Pelo exemplo implementado no livro, o grafo se inicia pelo "inicio" */
grafo.inicio = {};

/* Vizinhos do "inicio" */
grafo.inicio.a = 6;
grafo.inicio.b = 2;

/* Listando todos os vizinhos de "inicio" */
const initialNeighbors = Object.keys(grafo.inicio);

for (const item of initialNeighbors) {
	console.log(item);
}

console.log("\n");

/* Pesos de cada vizinho "inicio" */
console.log(grafo.inicio.a);
console.log(grafo.inicio.b);

/* Adicionando os vizinhos dos vizinhos de "inicio" */
/* Para cada vizinho encontrado é criado um hash novo e adicionar seus respectivos vizinhos e valores */
/* Até o ultimo vizinho se cria um hash novo, para conseguir inserir seus respectivos vizinhos também */
grafo.a = {};
grafo.a.fim = 1;

grafo.b = {};
grafo.b.a = 3;
grafo.b.fim = 5;

/* Vertice final não tem vizinhos */
grafo.fim = {};

/* Agora é preciso criar um hash para armazenar os custos de cada vertice */
/* Como nao sabemos qual sera o custo para chegar até o fim sendo assim inicialmente é colocado com o valor de infinito */
custos.a = 6;
custos.b = 2;
custos.fim = Infinity;

/* Criação do hash pais */
pais.a = "inicio";
pais.b = "inicio";
pais.fim = null;

/* Encontrar o custo mais baixo que ainda nao foi processado */
let node = encontrarCustoMaisBaixo(custos);

/* Rodará enquanto tiver vertice a serem processados */
while (node !== null) {
	/* Custo da vertice com menor custo */
	const custo = custos[node];

	/* Vizinhos da vertice com menor custo */
	const vizinhos = grafo[node];

	/* Percorrendo todos os vizinhos dessa vertice */
	for (const item of Object.keys(vizinhos)) {
		/* Criando um novo custo com base nos vizinhos */
		const novoCusto = custo + vizinhos[item];

		/* Caseo seja mais barato chegar a um vizingo a partir dessa vertice */
		if (custo[item] > novoCusto) {
			/* Atualizando o seu cuisto */
			custos[item] = novoCusto;

			/* Essa vertice se torna o novo pai para o vizinho */
			pais[item] = node;
		}
	}

	/* Marca a vertice como processado */
	processados.push(node);

	/* Encontra o proximo vertice a ser processado */
	node = encontrarCustoMaisBaixo(custos);
}
