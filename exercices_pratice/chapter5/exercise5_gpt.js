/* 
    Dado um array de números, retorne true se houver elementos duplicados, ou false caso contrário.

    Input: [1, 2, 3, 4, 1]
    Output: true

*/

const findDuplicatesNumber = (numbers = []) => {
  const countQtyNumbers = {};

  for (const number of numbers) {
    if (countQtyNumbers[number]) {
      return true;
    }

    countQtyNumbers[number] = 1;
  }

  return false;
};

const numbersParam = [1, 2, 3, 4, 1];

const resultFindDuplicatesNumber = findDuplicatesNumber(numbersParam);

console.log({ resultFindDuplicatesNumber });
