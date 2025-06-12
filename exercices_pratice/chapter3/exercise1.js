/* Escreva uma função recursiva para calcular o fatorial de um número n. */

const factorial = (number) => {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
};

const numberParam = 5;

const factorialResult = factorial(numberParam);

console.log({ factorialResult });
