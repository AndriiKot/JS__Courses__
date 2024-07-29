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

// !!! WARNING !!!
function discount(product) {
  product.price = product.price * 0.8;
}

console.log(products);
// [ { name: "ball", price: 200 }, { name: "pen", price: 10 }, { name: "book", price: 300 } ]

discount(products[0]);
console.log(products);
// [ { name: "ball", price: 160 }, { name: "pen", price: 10 }, { name: "book", price: 240 } ]
// !!! WARNING !!!

