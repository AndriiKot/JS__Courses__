const products = [
  {
    name: "ball",
    price: 200,
  },
  {
    name: "pen",
    price: 10,
  },
  {
    name: "book",
    price: 300,
  },
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  console.log(`${product.name} ${product.price}`);
}

// ball 200
// pen 10
// book 300
