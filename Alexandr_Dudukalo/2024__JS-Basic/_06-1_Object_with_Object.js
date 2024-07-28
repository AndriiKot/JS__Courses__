const size = {
  width: 200,
  height: 300,
  length: 400,
};

const product1 = {
  name: "ball",
  price: 200,
  size,
};

// or

const product2 = {
  name: "ball",
  price: 200,
  size: size,
};

console.dir(product1);
console.dir(product2);
// product1: { name: "ball", price: 200, size: { width: 200, height: 300, length: 400 } }
// product2: { name: "ball", price: 200, size: { width: 200, height: 300, length: 400 } }
