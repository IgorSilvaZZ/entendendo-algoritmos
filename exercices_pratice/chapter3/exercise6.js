/* 
    Uma palavra é palíndromo se for igual de trás pra frente (ex: "ana", "radar", "osso").

    Crie uma função recursiva que verifique se uma string é um palíndromo. 
*/

const isPalindrome = (word = "") => {
  if (word.length === 0) {
    return false;
  }

  if (word.length === 1) {
    return true;
  }

  const firstLetter = word[0].toLowerCase();
  const lastLetter = word[word.length - 1].toLowerCase();

  if (firstLetter === lastLetter) {
    return isPalindrome(word.slice(1).slice(0, -1));
  }

  return false;
};

const wordParm = "123";

const isPalindromeResult = isPalindrome(wordParm);

console.log({ isPalindromeResult });
