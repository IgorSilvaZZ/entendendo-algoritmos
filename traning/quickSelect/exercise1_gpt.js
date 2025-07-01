/* 
    Encontre o k-ésimo menor elemento de um array desordenado

    Input: nums = [7, 10, 4, 3, 20, 15], k = 3
    Output: 7
*/

const quickSelect = (nums = [], k = 1) => {
  if (nums.length === 1) {
    return nums[0];
  }

  const pivot = nums[0];

  const smaller = [];
  const bigger = [];
  const equals = [];

  for (let number of nums) {
    if (number === pivot) {
      equals.push(number);
    } else if (number > pivot) {
      bigger.push(number);
    } else {
      smaller.push(number);
    }
  }

  // Verificando em qual array ele está

  /* Se o k-esimo numero for menor que o numero de elementos menores que o pivo, iremos procurar dentro da subslista com os menores */
  if (k <= smaller.length) {
    return quickSelect(smaller, k);
  } else if (k > smaller.length + equals.length) {
    /* Agora se k-esimo numero for maior que o numero dos menores elementos, mais, o numero de elementos iguais (sempre vai ter pelo menos um) */
    return quickSelect(bigger, k - smaller.length - equals.length);
  }

  return pivot;
};

const numsParams = [7, 10, 4, 3, 20, 15];
const kParam = 3;

const resultQuickSelect = quickSelect(numsParams, kParam);

console.log({ resultQuickSelect });
