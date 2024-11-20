'use strict';

// Copy Objects
const product1 = {
  name: 'ball',
  price: 200,
};

const product2 = {
  name: product1.name,
  price: product1.price,
};

console.log(product1 === product2); //  !!!  false   !!!
