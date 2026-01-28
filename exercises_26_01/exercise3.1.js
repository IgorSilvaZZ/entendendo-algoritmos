/* 
    Exercício 3.1 - Recursão: Soma de Array
    Implemente uma função recursiva que soma todos os elementos de um array (sem usar loops!).
*/

function recursiveSome(array) {
	console.log(array);

	if (array.length === 0) {
		return 0;
	}

	if (array.length === 1) {
		return array[0];
	}

	return array[0] + recursiveSome(array.slice(1));
}

console.log(recursiveSome([1, 2, 3, 4, 5]));
