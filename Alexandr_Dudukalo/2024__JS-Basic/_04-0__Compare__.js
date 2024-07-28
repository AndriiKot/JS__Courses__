// Compare primitive:
let price1 = 200;
let price2 = price1;

console.log(price1 === price2); // true

price1 = 300;
console.log(price1 === price2); // !!!!  false   !!!!


//Compare Objects:
// !!! WARNING !!!$
let product1 = {
  name: "ball",
  price: 200,
};

let product2 = product1;

console.log(product1 === product2); // true

product1.price = 300;

console.log(product1 === product2); // !!!!   true   !!!!

console.table({ product1, product2 });
//  product1: { name: "ball", price: 300 }
//  product2: { name: "ball", price: 300 }
