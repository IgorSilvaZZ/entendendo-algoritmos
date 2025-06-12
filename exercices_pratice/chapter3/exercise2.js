/* Escreva uma função recursiva que receba um array e retorne a soma de todos os seus elementos. */

const someElementsArray = (array) => {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array[0] + someElementsArray(array.slice(1));
};

const arrayParam = [2, 4, 6];

const someElementsArrayResult = someElementsArray(arrayParam);

console.log({ someElementsArrayResult });
