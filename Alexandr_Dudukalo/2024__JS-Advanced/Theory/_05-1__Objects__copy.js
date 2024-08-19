// Copy Objects
const product1 = {
  name: "ball",
  price: 200,

  size: {
    width: 200,
    height: 300,
    length: 400,
  },
};

const product2 = {
  name: product1.name,
  price: product1.price,
  size: {
    width: product1.size.width,
    height: product1.size.height,
    length: product1.size.length,
  },
};

console.log(product1 === product2); //  !!!  false   !!!
