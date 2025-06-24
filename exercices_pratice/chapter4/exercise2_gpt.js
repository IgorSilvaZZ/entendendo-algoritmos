/* 
    Ordenar um array de objetos por idade
    Descrição: Dado um array de objetos como: 

    [{nome: "João", idade: 30}, {nome: "Ana", idade: 20}]

*/

const quickSortByAgePersons = (persons = []) => {
  if (persons.length < 2) {
    return persons;
  }

  const bigger = [];
  const smaller = [];

  const pivotPerson = persons[0];

  const pivotAge = pivotPerson.age;

  for (const person of persons.slice(1)) {
    if (person.age <= pivotAge) {
      smaller.push(person);
    } else {
      bigger.push(person);
    }
  }

  return [
    ...quickSortByAgePersons(smaller),
    ...[pivotPerson],
    ...quickSortByAgePersons(bigger),
  ];
};

const personsParam = [
  { name: "João", age: 30 },
  { name: "Ana", age: 20 },
];

const resultQuickSortByAgePersons = quickSortByAgePersons(personsParam);

console.log({ resultQuickSortByAgePersons });
