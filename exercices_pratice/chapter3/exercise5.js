/* Implemente a busca binária de forma recursiva. */

const searchBinaryWithRecursive = (
  array,
  numberSearch,
  startIndex,
  endIndex
) => {
  let lowIndex = startIndex;
  let highIndex = endIndex;

  if (lowIndex > highIndex) {
    return null;
  }

  let possibleIndex = Math.floor((lowIndex + highIndex) / 2);
  let possibleValue = array[possibleIndex];

  if (possibleValue === numberSearch) {
    return possibleIndex;
  }

  if (possibleValue > numberSearch) {
    highIndex = possibleIndex - 1;
  } else {
    lowIndex = possibleIndex + 1;
  }

  return searchBinaryWithRecursive(array, numberSearch, lowIndex, highIndex);
};

const arrayParam = [1, 3, 5, 7, 9];
const numberSearchParam = 5;

const searchBinaryWithRecursiveResult = searchBinaryWithRecursive(
  arrayParam,
  numberSearchParam,
  0,
  arrayParam.length - 1
);

console.log({ searchBinaryWithRecursiveResult });
