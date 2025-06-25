/* Crie uma função que ordene uma lista de produtos com base no preço (price), do menor para o maior valor, sem usar .sort(). */

const quickSortProductsByPrice = (products = []) => {
  if (products.length < 2) {
    return products;
  }

  const bigger = [];
  const smaller = [];

  const pivotProduct = products[0];
  const pivotProductPrice = pivotProduct.price;

  for (const product of products.slice(1)) {
    if (product.price <= pivotProductPrice) {
      smaller.push(product);
    } else {
      bigger.push(product);
    }
  }

  return [
    ...quickSortProductsByPrice(smaller),
    ...[pivotProduct],
    ...quickSortProductsByPrice(bigger),
  ];
};

const productsParams = [
  { name: "Notebook", price: 3500 },
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 1200 },
  { name: "Teclado", price: 150 },
];

const resultQuickSortProductsByPrice = quickSortProductsByPrice(productsParams);

console.log({ resultQuickSortProductsByPrice });
