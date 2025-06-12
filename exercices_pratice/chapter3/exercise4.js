/* Encontrar o maior número de um array */

const getMaxNumberArray = (array = []) => {
  let maxNumber = array[0];

  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  const number = getMaxNumberArray(array.slice(1));

  if (number > maxNumber) {
    maxNumber = number;
  }

  return maxNumber;
};

const arrayParam = [4, 1, 9, 25];

const getMaxNumberArrayResult = getMaxNumberArray(arrayParam);

console.log({ getMaxNumberArrayResult });
