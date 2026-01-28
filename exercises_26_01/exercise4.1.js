/* 
    Exercício 4.1 - Quicksort Modificado
    Implemente o quicksort que também conte quantas comparações foram feitas durante a ordenação.
*/

const quickSort = (array, steps = 0) => {
	if (array.length < 2) {
		return array;
	}

	const pivot = array[0];

	const bigger = [];
	const smaller = [];

	for (const item of array.slice(1)) {
		if (item <= pivot) {
			smaller.push(item);
		} else {
			bigger.push(item);
		}

		steps += 1;
	}

	const resultSort = [...quickSort(smaller), ...[pivot], ...quickSort(bigger)];

	return resultSort;
};

const executeQuickSortWihCount = (array) => {
	const result = {
		orderedArray: [],
		countComparisons: 0,
	};

	result.orderedArray = quickSort(array, result.countComparisons);

	return result;
};

const arrayParam = [2, 4, 6, 5, 10, 7, 9];

const result = executeQuickSortWihCount(arrayParam);

console.log(result);
