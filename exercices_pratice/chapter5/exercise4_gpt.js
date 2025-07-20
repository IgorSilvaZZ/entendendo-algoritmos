/* 
    Agrupe as palavras por sua letra inicial, ignorando acentos e caixa alta/baixa.

    Input: ["Banana", "Maçã", "abacate", "laranja"]
    Output: { b: ["Banana"], m: ["Maçã"], a: ["abacate"], l: ["laranja"] }

*/

const groupWords = (words = []) => {
  const wordsGrouped = {};

  for (const word of words) {
    const normalizedWord = word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const firstLetterWord = normalizedWord[0];

    if (!wordsGrouped[firstLetterWord]) {
      wordsGrouped[firstLetterWord] = [word];
    } else {
      wordsGrouped[firstLetterWord].push(word);
    }
  }

  return wordsGrouped;
};

const wordsParam = ["Banana", "Maçã", "abacate", "laranja"];

const resultGroupWords = groupWords(wordsParam);

console.log({ resultGroupWords });
