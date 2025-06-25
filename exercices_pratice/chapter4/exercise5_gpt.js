/* Ordenar os nomes em ordem alfabética, ignorando acentos e diferenças de caixa (A e a). */

const normalizedString = (stringValue) => {
  return String(stringValue)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const quickSortNameWithNormalize = (names = []) => {
  if (names.length < 2) {
    return names;
  }

  const bigger = [];
  const smaller = [];

  const pivotName = String(names[0]);
  const pivotNameNormalized = normalizedString(pivotName);

  for (const name of names.slice(1)) {
    const nameNormalized = normalizedString(name);

    const resultCompareAlphabetic = nameNormalized.localeCompare(
      pivotNameNormalized,
      undefined,
      { sensitivity: "base" }
    );

    if (resultCompareAlphabetic < 0) {
      smaller.push(name);
    } else {
      bigger.push(name);
    }
  }

  return [
    ...quickSortNameWithNormalize(smaller),
    ...[pivotName],
    ...quickSortNameWithNormalize(bigger),
  ];
};

const namesParams = ["Érica", "Ana", "álvaro", "arroz"];

const resultQuickSortNameWithNormalize =
  quickSortNameWithNormalize(namesParams);

console.log({ resultQuickSortNameWithNormalize });
