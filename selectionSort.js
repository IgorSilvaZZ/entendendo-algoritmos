const buscaMenor = (array) => {
  let menor = array[0];
  let menorIndice = 0;

  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];

    if (currentValue < menor) {
      menor = currentValue;
      menorIndice = i;
    }
  }

  return menorIndice;
};

const odernacaoPorSelecao = (array) => {
  const novoArray = [];

  while (array.length > 0) {
    const menorIndice = buscaMenor(array);

    const [menorValor] = array.splice(menorIndice, 1);

    novoArray.push(menorValor);
  }

  return novoArray;
};

console.log(odernacaoPorSelecao([5, 3, 6, 2, 10]));
