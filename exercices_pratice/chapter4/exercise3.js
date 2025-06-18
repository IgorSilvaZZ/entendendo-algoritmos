/* Encontre o valor mais alto em uma lista (pagina 77) */

const maxValueInArray = (array = []) => {
  let maxNumber = array[0];

  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  const maxValue = maxValueInArray(array.slice(1));

  if (maxValue > maxNumber) {
    maxNumber = maxValue;
  }

  return maxNumber;
};

const arrayParam = [105, 60, 86];

const maxValueInArrayResult = maxValueInArray(arrayParam);

console.log({ maxValueInArrayResult });
