const pesquisaBinaria = (listaOrdenada, itemBuscado) => {
  /* 
        baixo sempre inicializado com primeira posição do array
        alto sempre incializado com a ultima posição do array
    */

  let baixo = 0;
  let alto = listaOrdenada.length - 1;

  while (baixo <= alto) {
    /* 
        meio é representado pelo meio atual da listaOrdenada, baseada nas posições atuais de baixo e alto
        que representam as posições limites de iteração.
            
        chute é basicamente o valor atual da posição atual
    */
    let meio = Math.floor((baixo + alto) / 2);
    let chute = listaOrdenada[meio];

    if (chute === itemBuscado) {
      return meio;
    }

    if (chute > itemBuscado) {
      /* 
            O novo valor de alto vai ser o novo limite que vamos percorrer no array, ou seja,
            se o itemBuscado é menor que o chute atual, então o novo limite maximo de iteração do array
            vai ser um valor abaixo da posição de meio, assim cortando tudo que vem logo apos ele...
        */

      alto = meio - 1;
    } else {
      /* 
        O novo valor de alto vai ser o novo da onde vamos continuar a percorrer o array, ou seja,
        se itemBuscado é maior que o chute atual, então a proxima iteração começará um valor acima da posição de meio atual,
        assim cortando tudo que vem antes dele.
        */

      baixo = meio + 1;
    }
  }

  return null;
};

const listaOrdenadaParam = [1, 3, 5, 7, 9];
const itemBuscadoParam = -3;

const pesquisaResultado = pesquisaBinaria(listaOrdenadaParam, itemBuscadoParam);

console.log({ pesquisaResultado });
