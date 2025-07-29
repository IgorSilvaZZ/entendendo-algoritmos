/* 
    Encontrar a pessoa com o nome mais curto

    A partir de um nó, percorra o grafo e retorne a pessoa com o nome mais curto.

    Objetivo:

        A menor string (nome mais curto).

        Retornar e imprimir "Pessoa encontrada: lu"

*/

const getShortNameByPersons = (persons = {}) => {
  if (Object.keys(persons).length === 0) {
    return "";
  }

  const queue = [...persons["voce"]];

  let shortName = persons["voce"][0];

  const verifiedPersonsNames = [];

  while (queue.length) {
    if (queue.length === 0) {
      break;
    }

    const personName = queue.shift();

    if (!verifiedPersonsNames.includes(personName)) {
      if (personName.length < shortName.length) {
        shortName = personName;
      }

      verifiedPersonsNames.push(personName);
      queue.push(...persons[personName]);
    }
  }

  return shortName;
};

const personsParam = {
  voce: ["aline", "bruno", "carla"],
  aline: ["duda"],
  bruno: [],
  carla: ["lu"],
  duda: [],
  lu: [],
};

const resultShortName = getShortNameByPersons(personsParam);

console.log(resultShortName);
