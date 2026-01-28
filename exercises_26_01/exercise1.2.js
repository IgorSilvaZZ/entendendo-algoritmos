/* 
    Exercício 1.2 - Análise de Complexidade
    Crie uma função que recebe um array e retorna um objeto com:

    O menor elemento (usando busca linear)
    Todos os elementos duplicados (se houver)
    Calcule: qual a complexidade Big O dessa sua função?
*/

const analysisComplexity = (array) => {
	let minimumValue = Number.MAX_VALUE;

	const viewers = new Set();
	const duplicated = new Set();

	for (const value of array) {
		if (value < minimumValue) {
			minimumValue = value;
		}

		if (viewers.has(value)) {
			duplicated.add(value);
		} else {
			viewers.add(value);
		}
	}

	return {
		minimumValue,
		duplicated,
	};
};

const arrayParam = [1, 1, 5, 7, 9, 11, 13, 15, 17, 19];

const result = analysisComplexity(arrayParam);

console.log(result);
