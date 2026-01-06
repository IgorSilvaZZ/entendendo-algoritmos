const pessoaEVendedor = (pessoaNome) => {
	return pessoaNome.endsWith("m");
};

const pesquisaEmGrafo = () => {
	const filaDePesquisa = [];

	const verificadas = [];

	const grafo = {};

	grafo.voce = ["alice", "bob", "claire"];
	grafo.bob = ["anuj", "peggy"];
	grafo.alice = ["peggy"];
	grafo.claire = ["thom", "johnny"];
	grafo.anuj = [];
	grafo.peggy = [];
	grafo.thom = [];
	grafo.jonny = [];

	filaDePesquisa.push(...grafo.voce);

	while (filaDePesquisa.length) {
		const pessoa = filaDePesquisa.shift();

		if (!verificadas.includes(pessoa)) {
			if (pessoaEVendedor(pessoa)) {
				console.log(`Pessoa ${pessoa} é um vendedor de manga!`);

				return true;
			}

			filaDePesquisa.push(...grafo[pessoa]);
			verificadas.push(pessoa);
		}
	}

	return false;
};

pesquisaEmGrafo();
