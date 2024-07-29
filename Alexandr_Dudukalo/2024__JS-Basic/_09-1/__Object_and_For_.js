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
  console.log(products[i]);
}

// { name: 'ball', price: 200 }
// { name: 'pen', price: 10 }
// { name: 'book', price: 300 }

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name, products[i].price);
}

// ball 200
// pen 10
// book 300


