const quickSort = (array = []) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];

  const bigger = [];
  const smaller = [];

  for (const item of array.slice(1)) {
    if (item <= pivot) {
      smaller.push(item);
    } else {
      bigger.push(item);
    }
  }

  const resultSort = [...quickSort(smaller), ...[pivot], ...quickSort(bigger)];

  return resultSort;
};

const arrayParam = [33, 10, 15, 7];
const quickSortResult = quickSort(arrayParam);

console.log({ quickSortResult });
