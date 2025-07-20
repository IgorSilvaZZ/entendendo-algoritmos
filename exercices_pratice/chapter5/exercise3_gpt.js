/* 
    Dado um array onde todos os elementos aparecem duas vezes, exceto um, encontre o elemento que aparece apenas uma vez.

    Input: [4, 1, 2, 1, 2]
    Output: 4
*/

const findNotRepeatingElement = (elements = []) => {
  const countQtyElements = {};

  for (const element of elements) {
    if (!countQtyElements[element]) {
      countQtyElements[element] = 1;
    } else {
      countQtyElements[element] = countQtyElements[element] + 1;
    }
  }

  const countQtyElementsKeys = Object.keys(countQtyElements);

  for (const key of countQtyElementsKeys) {
    if (countQtyElements[key] === 1) {
      return key;
    }
  }

  return null;
};

const elementsParam = [4, 1, 2, 1, 2];

const resultFindNotRepeatingElement = findNotRepeatingElement(elementsParam);

console.log({ resultFindNotRepeatingElement });
