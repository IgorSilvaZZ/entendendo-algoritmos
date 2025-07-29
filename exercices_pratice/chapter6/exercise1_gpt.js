/* 
  Crie um grafo com algumas pessoas e suas conexões. Escreva uma função que encontra a primeira pessoa cujo nome começa com a letra A.
*/

const getPersonStartsWithA = (persons = {}) => {
  if (Object.keys(persons).length === 0) {
    console.log("Grafo de pessoas vazio!");

    return;
  }

  const queue = [...persons["joao"]];
  const verifyPersons = [];

  while (queue.length) {
    const personName = queue.shift();

    if (!verifyPersons.includes(personName)) {
      if (String(personName).toLowerCase().startsWith("a")) {
        console.log(
          `A pessoa ${personName}, tem o nome que começa com a letra a`
        );

        return;
      }

      verifyPersons.push(personName);
      queue.push(...persons[personName]);
    }
  }
};

const personsParams = {
  joao: ["ana", "beatriz", "carlos"],
  ana: ["diego"],
  beatriz: [],
  carlos: ["aline", "roberto"],
  diego: [],
  aline: [],
  roberto: [],
};

getPersonStartsWithA(personsParams);
