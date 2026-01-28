/* 
    Exercício 3.2 - Contagem Regressiva com Ação
    Crie uma função recursiva que recebe um número N e uma função callback, executando o callback para cada número de N até 1.
*/

function regressive(n) {
	console.log(n);

	if (n <= 1) {
		return;
	}

	regressive(n - 1);
}

regressive(10);
