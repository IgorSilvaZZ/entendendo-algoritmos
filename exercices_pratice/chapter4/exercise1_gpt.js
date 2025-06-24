/* 
    Ordenar palavras de uma frase
    Descrição: Dada uma frase como string, ordene suas palavras em ordem alfabética usando QuickSort. 
*/

// Entrada: "banana maçã abacate"
// Saída: ["abacate", "banana", "maçã"]

const quickSortString = (words = []) => {
  if (words.length < 2) {
    return words;
  }

  const pivot = words[0];

  const bigger = [];
  const smaller = [];

  for (const item of words.slice(1)) {
    /* Comparando a palavra inteira que ja considera no localCompare */
    const resultCompareAlphabetic = item.localeCompare(pivot, undefined, {
      sensitivity: "base",
    });

    if (resultCompareAlphabetic < 0) {
      smaller.push(item);
    } else {
      bigger.push(item);
    }
  }

  const resultSort = [
    ...quickSortString(smaller),
    pivot,
    ...quickSortString(bigger),
  ];

  return resultSort;
};

const wordParam = "banana maçã abacate";

const quickSortStringResult = quickSortString(wordParam.split(" "));

console.log({ quickSortStringResult });
