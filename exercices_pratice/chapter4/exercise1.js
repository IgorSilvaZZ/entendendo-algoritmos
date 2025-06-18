/* Escre o codigo para a função soma, vista anteriomente (pagina 77) */

const someElementsArray = (array = []) => {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  const some = array[0] + someElementsArray(array.slice(1));

  return some;
};

const arrayParam = [2, 4, 6];

const someElementsArrayResult = someElementsArray(arrayParam);

console.log({ someElementsArrayResult });
