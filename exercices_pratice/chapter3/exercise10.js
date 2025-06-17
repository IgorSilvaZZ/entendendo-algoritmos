/* 
    Crie uma função recursiva que verifica se uma determinada palavra está contida dentro de uma string (frase).
    📌 Sem usar .includes(), .indexOf(), .match() ou loops!
 */

const isWordInPhrase = (phrase = "", word = "") => {
  if (phrase.length === 0) {
    return false;
  }

  const currentLetter = phrase.slice(0, word.length);
  const nextLetter = phrase[word.length];

  const isFullMatch =
    currentLetter === word && (nextLetter === " " || nextLetter === undefined);

  if (isFullMatch) {
    return true;
  }

  return isWordInPhrase(phrase.slice(1), word);
};

const phraseParam = "meu cachorro é fofo";
const wordParam = "cachorro";

const isWordInPhraseResult = isWordInPhrase(phraseParam, wordParam);

/* console.log({ isWordInPhraseResult }); */
