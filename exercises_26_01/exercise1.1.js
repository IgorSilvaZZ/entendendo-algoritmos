/* 
    Exercício 1.1 - Busca Binária Personalizada
    Implemente uma busca binária que retorne não apenas se o elemento existe, mas também quantas iterações foram necessárias para encontrá-lo (ou para concluir que não existe).
*/

const binarySearch = (arrayOrdered, searchItem) => {
	let lowPointer = 0;
	let highPointer = arrayOrdered.length - 1;

	const result = {
		totalSteps: 0,
		found: false,
		index: -1,
	};

	while (lowPointer <= highPointer) {
		const middle = Math.floor((lowPointer + highPointer) / 2);
		const valueMaybe = arrayOrdered[middle];

		if (valueMaybe === searchItem) {
			result.found = true;

			result.index = middle;

			break;
		}

		if (valueMaybe > searchItem) {
			highPointer = middle - 1;
		} else {
			lowPointer = middle + 1;
		}

		result.totalSteps += 1;
	}

	return result;
};

const arrayParam = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = binarySearch(arrayParam, 19);

console.log(result);
