/* Escreva uma função recursiva que conte o numero de itens em uma lista (pagina 77) */

const countElements = (array = []) => {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return 1;
  }

  const someCount = 1 + countElements(array.slice(1));

  return someCount;
};

const arrayParams = [2, 4, 6, 5, 10, 7, 9];

const countElementsResult = countElements(arrayParams);

console.log({ countElementsResult });
