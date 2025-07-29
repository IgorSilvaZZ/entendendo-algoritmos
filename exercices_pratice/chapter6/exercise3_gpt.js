/* 
    Encontrar todas as pessoas em até 2 níveis de distância
    A partir de um nó (você), descubra todas as pessoas que estão a até 2 conexões de distância.

    Objetivo:

        A partir de voce, quem está em até 2 níveis?

        Resposta esperada: ["alice", "bob", "carol", "daniel"]

        Não deve incluir níveis mais profundos (3+).

*/

const getPersonsMaxTwoLevels = (persons = {}) => {
  if (Object.keys(persons).length === 0) {
    return [];
  }

  const queue = [{ name: "voce", level: 0 }];

  const verifiedPersonsNames = [];

  while (queue.length) {
    const { name, level } = queue.shift();

    if (level > 2) {
      return verifiedPersonsNames;
    }

    if (!verifiedPersonsNames.includes(name)) {
      verifiedPersonsNames.push(name);

      for (const nameToPerson of persons[name]) {
        queue.push({ name: nameToPerson, level: level + 1 });
      }
    }
  }

  return [];
};

const personsParam = {
  voce: ["alice", "bob"],
  alice: ["carol"],
  bob: ["daniel"],
  carol: [],
  daniel: ["erica"],
};

const resultPersons = getPersonsMaxTwoLevels(personsParam);

console.log(resultPersons);
