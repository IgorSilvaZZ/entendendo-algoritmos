/* Crie uma função recursiva que receba um array de números e retorne a soma apenas dos números pares. */

const sumEvenNumbers = (array = []) => {
  if (array.length === 0) {
    return 0;
  }

  const currentNumber = Number(array[0]);

  const sumEvnNumbers =
    currentNumber % 2 === 0
      ? currentNumber + sumEvenNumbers(array.slice(1))
      : sumEvenNumbers(array.slice(1));

  return sumEvnNumbers;
};

const arrayParam = [7, 11, 13];

const resultSumEvenNumbers = sumEvenNumbers(arrayParam);

console.log({ resultSumEvenNumbers });
