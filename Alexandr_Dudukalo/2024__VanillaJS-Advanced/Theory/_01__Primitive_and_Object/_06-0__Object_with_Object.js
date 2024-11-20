// Object with Object
const size = {
  width: 200,
  height: 300,
  length: 400,
};

const product = {
  name: "ball",
  price: 200,
  size: size,
};

console.dir(product);
// product1: { name: "ball", price: 200, size: { width: 200, height: 300, length: 400 } }
