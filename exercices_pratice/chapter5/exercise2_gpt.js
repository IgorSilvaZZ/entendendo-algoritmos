/* 
    Duas strings são anagramas se contêm as mesmas letras com a mesma frequência. Crie uma função que retorne true ou false.

    Input: "listen", "silent"
    Output: true
*/

const countFrequencyWord = (word = "") => {
  let frequencyWord = {};

  let normalizedWord = word.toLowerCase();

  for (const letter of normalizedWord) {
    if (!frequencyWord[letter]) {
      frequencyWord[letter] = 1;
    } else {
      frequencyWord[letter] = frequencyWord[letter] + 1;
    }
  }

  return frequencyWord;
};

const isAnagram = (word1 = "", word2 = "") => {
  const countFrequencyWord1 = countFrequencyWord(word1.replaceAll(" ", ""));
  const countFrequencyWord2 = countFrequencyWord(word2.replaceAll(" ", ""));

  const keysWord1 = Object.keys(countFrequencyWord1);
  const keysWord2 = Object.keys(countFrequencyWord2);

  if (keysWord1.length !== keysWord2.length) {
    return false;
  }

  for (const key of keysWord1) {
    if (countFrequencyWord1[key] !== countFrequencyWord2[key]) {
      return false;
    }
  }

  return true;
};

const word1Param = "hello";
const word2Param = "helloo";

const resultIsAnagram = isAnagram(word1Param, word2Param);

console.log({ resultIsAnagram });
