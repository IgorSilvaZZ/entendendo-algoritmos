/* 
    Crie um grafo com algumas pessoas e suas conexões. Escreva uma função que encontra a primeira pessoa cujo nome começa com a letra A.
*/

const getPersonStartsWithA = (persons = {}) => {
  if (Object.keys(persons).length) {
    console.log("Grafo de pessoas vazio!");

    return false;
  }

  const queue = [...grafo["joao"]];
  const verifyPersons = [];

  /* while () {

    } */
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
