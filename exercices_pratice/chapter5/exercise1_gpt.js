/* 
    Dado um array de palavras, crie uma função que conte quantas vezes cada palavra aparece.

    Input: ["banana", "maçã", "banana", "laranja", "maçã", "banana"]
    Output: { banana: 3, maçã: 2, laranja: 1 }
*/

const countFrequencyWord = (words = []) => {
  let frequencyWords = {};

  for (const word of words) {
    if (!frequencyWords[word]) {
      frequencyWords[word] = 1;
    } else {
      frequencyWords[word] = frequencyWords[word] + 1;
    }
  }

  return frequencyWords;
};

const wordsParam = ["banana", "maçã", "banana", "laranja", "maçã", "banana"];

const resultCountFrequencyWord = countFrequencyWord(wordsParam);

console.log({ resultCountFrequencyWord });
