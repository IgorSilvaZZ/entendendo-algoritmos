/* 
    Verificar se existe uma pessoa específica
*/

const getPersonByName = (persons = {}, name = "") => {
  if (Object.keys(persons).length === 0) {
    return;
  }

  const queue = [...persons["voce"]];
  const verifiedPersonsNames = [];

  while (queue.length) {
    const personName = queue.shift();

    if (!verifiedPersonsNames.includes(personName)) {
      if (personName === name) {
        console.log(`${name} foi encontrado(a)!`);

        return;
      }

      verifiedPersonsNames.push(personName);
      queue.push(...persons[personName]);
    }
  }
};

const personsParam = {
  voce: ["alice", "bob"],
  alice: ["carol"],
  bob: ["daniel"],
  carol: [],
  daniel: ["erica"],
};

const nameParam = "alice";

getPersonByName(personsParam, nameParam);
