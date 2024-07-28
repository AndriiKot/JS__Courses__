# JavaScript Basic (2024)

## Source:

#### [Полный Курс JavaScript для новичков. Урок 1: Ссылочные типы данных](https://www.youtube.com/watch?v=ap3mLiPF2PE)

## Primitive Types:

```js
let price1 = 200;
let price2 = price;
```

### !!! WARNING !!!

```js
price1 = 300;
console.log(price1, price2);

300;
200;
```

 <hr>

## Objects:

Version 1

```js
let product = {};

product.name = "ball";
product.price = 200;

console.table({ product });
```

###### OUTPUT:

product: { name: "ball", price: 200 }}

#### OR

Version 2

```js
let product = {
  name: "ball",
  price: 200,
};

console.table({ product });
```

###### OUTPUT:

product: { name: "ball", price: 200 }}

### Objects get value:

```js
let product = {
  name: "ball",
  price: 200,
};

console.log(product.name);
console.log(product.price);
```

###### OUTPUT:

ball  
200

#### OR

```js
let product = {
  name: "ball",
  price: 200,
};

console.log(product["name"]);
console.log(product["price"]);
```

###### OUTPUT:

ball  
200

#### OR

```js
let product = {
  name: "ball",
  price: 200,
};

const ball = "name";
const price = "price";

console.log(product[ball]);
console.log(product[price]);
```

###### OUTPUT:

ball  
200
<hr>

## Compare Primitive Types:

### !!! WARNING !!!

```js
let price1 = 200;
let price2 = price1;

console.log(price1 === price2); // true

price1 = 300;
console.log(price1 === price2); // !!!!  false   !!!!
```

## Compare Objects:

### !!! WARNING !!!

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
<hr>

## Copy Objects:

```js
const product1 = {
  name: "ball",
  price: 200,
};

const product2 = {
  name: product1.name,
  price: product1.price,
};

console.log(product1 === product2); //  !!!  false   !!!
```

## Objects with Object: 

```js
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
```

