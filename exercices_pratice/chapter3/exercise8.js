/* Faça uma função recursiva que conte quantas consoantes existem em uma palavra (ignore acentuação e considere apenas letras de A–Z). */

const vowels = ["a", "e", "i", "o", "u"];

const countConsonants = (word = "") => {
  if (word.length === 0) {
    return 0;
  }

  const currentLetter = word[0].toLowerCase();

  const restCount = countConsonants(word.slice(1));

  if (!vowels.includes(currentLetter)) {
    return 1 + restCount;
  }

  return restCount;
};

const wordParam = "Recursao";

const resultCountConsonants = countConsonants(wordParam);

console.log({ resultCountConsonants });
