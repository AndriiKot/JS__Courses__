# JavaScript

## Basic moments (course 2024):

## Primitive Types:

### 1.0 !!! WARNING !!!
```js
let price1 = 200;
let price2 = price;
```

```js
price1 = 300;
console.log(price1); // 300
console.log(price2); // 200
```

### 1.1 !!! WARNING !!!
```js
let price1 = 200;
let price2 = price1;

console.log(price1 === price2); // true

price1 = 300;
console.log(price1 === price2); // !!!!  false   !!!!
```

## Compare Objects:

### 2.0 !!! WARNING !!!

```js
let product1 = {
  name: "ball",
  price: 200,
};

let product2 = product1;

console.log(product1 === product2); // true

product1.price = 300;

console.log(product1 === product2); // !!!!   true   !!!!
```

## Object Mutation:

### 2.1 !!! WARNING !!!

```js
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
  product.price = product.price * 0.8;  // !!! MUTATION !!! 
}

console.log(products);
// [ { name: "ball", price: 200 }, { name: "pen", price: 10 }, { name: "book", price: 300 } ]

discount(products[0]);
console.log(products);
// [ { name: "ball", price: 160 }, { name: "pen", price: 10 }, { name: "book", price: 240 } ]
// !!! WARNING !!!
```

## Array and Array:

### 3.0 !!! WARNING !!!

```js
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

// TEST 1
console.log(array1, array2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
console.log(array1 === array2); // true


// TEST 2
array1.push(6);
console.log(array1, array2); // [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
console.log(array1 === array2); // true

// TEST 3
array2[0] = 0;
console.log(array1, array2); // [ 0, 2, 3, 4, 5, 6 ] [ 0, 2, 3, 4, 5, 6 ]
console.log(array1 === array2); // true
```






