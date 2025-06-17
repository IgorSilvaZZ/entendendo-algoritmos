/* 
    Escreva uma função recursiva que receba uma string e conte quantas vogais existem nela (a, e, i, o, u).
*/

const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (word = "") => {
  if (word.length === 0) {
    return 0;
  }

  let currentLetter = word[0].toLowerCase();

  const restCount = countVowels(word.slice(1));

  if (vowels.includes(currentLetter)) {
    return 1 + restCount;
  }

  return restCount;
};

const wordParam = "recursao";

const resultCountVowels = countVowels(wordParam);

/* console.log({ resultCountVowels }); */
