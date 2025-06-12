/* Contar número de itens em um array */

const countNumberElementsToArray = (array = []) => {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return 1;
  }

  return 1 + countNumberElementsToArray(array.slice(1));
};

const arrayParam = [1, 2, 3, 4, 5, 10, 10, 10];

const countNumberElementsResult = countNumberElementsToArray(arrayParam);

console.log({ countNumberElementsResult });
