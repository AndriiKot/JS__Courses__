const product1 = {
  name: "ball",
  price: 200,
};

const product2 = {
  name: "pen",
  price: 10,
};

const product3 = {
  name: "book",
  price: 300,
};

const products = [product1, product2, product3];

console.log(products);
// [ { name: "ball", price: 200 }, { name: "pen", price: 10 }, { name: "book", price: 300 } ]


// !!! WARNING !!!
products[0].price = 300;
console.log(products);
// [ { name: "ball", price: 300 }, { name: "pen", price: 10 }, { name: "book", price: 300 } ]
// !!! WARNING !!!