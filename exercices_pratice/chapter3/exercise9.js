/* Crie uma função recursiva que inverta uma string, sem usar .reverse() ou for. */

const reverseString = (word = "") => {
  if (word.length === 0) {
    return "";
  }

  const currentLetter = word[word.length - 1];

  const reversedString = currentLetter + reverseString(word.slice(0, -1));

  return reversedString;
};

const wordParam = "recursao";

const resultReverseString = reverseString(wordParam);

console.log({ resultReverseString });
