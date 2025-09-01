/* 
    Verificar se existe um caminho entre duas pessoas

    Entrada:
        Um grafo representado como lista de adjacência (quem conhece quem).

        Um nó inicial (pessoa de onde começa a busca).

        Um nó alvo (pessoa que queremos verificar se existe um caminho).

    Exemplos:
        Input: inicio = "voce", destino = "thom"

        Output: true

*/

const verifyToTarget = (persons = {}, source = "", target = "") => {
  if (Object.keys(persons).length === 0) {
    return false;
  }

  if (!persons[source]) {
    return false;
  }

  const queue = [...persons[source]];
  const verifiedPersonsNames = [];

  while (queue.length) {
    const personName = queue.shift();

    if (!verifiedPersonsNames.includes(personName)) {
      if (personName === target) {
        console.log(`Existe um caminho entre ${source} e ${target}!`);

        console.log(
          `Caminho percorrido até aqui: ${verifiedPersonsNames.join(" -> ")}`
        );

        return true;
      }

      verifiedPersonsNames.push(personName);
      queue.push(...persons[personName]);
    }
  }

  console.log(`Não há caminho entre ${source} e ${target}`);

  return false;
};

const personsParam = {
  voce: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const sourceParam = "alice";
const targetParam = "jonny";

const result = verifyToTarget(personsParam, sourceParam, targetParam);

console.log({ result });
