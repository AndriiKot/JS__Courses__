﻿# JavaScript Basic (2024)

#### Source:

##### [Полный Курс JavaScript для новичков. Урок 1: Ссылочные типы данных](https://www.youtube.com/watch?v=ap3mLiPF2PE)

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

## Objects

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

## Compare Objects properties:

```js
const product1 = {
  name: "ball",
  price: 20,
};

const product2 = {
  name: "pen",
  price: 20,
};

if (product1.price === product2.price) {
  console.log("true");
} else {
  console.log("false");
}

// true
```

```js
const product1 = {
  name: "ball",
  price: 20,
};

const product2 = {
  name: "ball",
  price: 20,
};

if (product1.price === product2.price && product1.name === product2.name) {
  console.log("true");
} else {
  console.log("false");
}

// true
```

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

<hr>

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
```

#### OR

```js
const size = {
  width: 200,
  height: 300,
  length: 400,
};

const product2 = {
  name: "ball",
  price: 200,
  size: size,
};
```

#### OR

```js
const product3 = {
  name: "ball",
  price: 200,
  size: {
    width: 200,
    height: 300,
    length: 400,
  },
};
```

<hr>

## Objects with Function:

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
  product.price = product.price * 0.8; // !!! MUTATION !!!
}

console.log(products);
// [ { name: "ball", price: 200 }, { name: "pen", price: 10 }, { name: "book", price: 300 } ]

discount(products[0]);
console.log(products);
// [ { name: "ball", price: 160 }, { name: "pen", price: 10 }, { name: "book", price: 240 } ]
// !!! WARNING !!!
```

<hr>

## Objects and For:

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

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// { name: 'ball', price: 200 }
// { name: 'pen', price: 10 }
// { name: 'book', price: 300 }

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  console.log(`${product.name} ${product.price}`);
}

// ball 200
// pen 10
// book 300
```

## Array and Array:

### !!! WARNING !!!

```js
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

// !!! WARNING !!!
// test 1
console.log(array1, array2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
console.log(array1 === array2); // true

// test 2
array1.push(6);
console.log(array1, array2); // [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
console.log(array1 === array2); // true

// test 3
array2[0] = 0;
console.log(array1, array2); // [ 0, 2, 3, 4, 5, 6 ] [ 0, 2, 3, 4, 5, 6 ]
console.log(array1 === array2); // true
// !!! WARNING !!!
```

## Array and For of:

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

for (const product of products) {
  console.log(product.name, product.price);
}
// ball 200
// pen 10
// book 300
```

### !!! WARNING !!!

```js
const menu = ["Menu", "Home", "About", "Contact"];

// !!! WARNING !!!
console.log(menu);
// [ 'Menu', 'Home', 'About', 'Contact' ]

for (let item of menu) {
  item = item + "!!!";
  console.log(item); //
}

// Menu!!!
// Home!!!
// About!!!
// Contact!!!

console.log(menu);
// [ 'Menu', 'Home', 'About', 'Contact' ]
// !!! WARNING !!!
```

## DOM Objects and Arrays:

#### version 1-1

```js
const btn = document.createElement("button");
btn.textContent = "Button 1";
document.body.append(btn);

console.log(btn); // <button>Button 1</button>
```

#### version 1-2

### !!! WARNING !!!

```js
const btn = document.createElement("button");
btn.textContent = "Button 1";
document.body.append(btn);

// !!! WARNING !!!
console.log(btn); // <button>Button 2</button>
btn.textContent = "Button 2";
// !!! WARNING !!!
```

#### version 2-1

```js
const menu = ["Menu", "Home", "About", "Contact"];

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);
}
```

#### version 2-2

### !!! WARNING !!!

```js
const menu = ["Menu", "Home", "About", "Contact"];

// !!! WARNING !!!
for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  console.log(btn); // !!! <button>Menu !!!</button> ... <button>Contact !!!</button> !!!
  document.body.append(btn);

  btn.textContent = item + "!!!";
  console.log(btn); // !!! <button>Menu !!!</button> ... <button>Contact !!!</button> !!!
}
// <button>Menu!!!</button>
// <button>Home!!!</button>
// <button>About!!!</button>
// <button>Contact!!!</button>

// !!! WARNING !!!
```

#### version 3-1

##### add className

## !!! WARNING !!!

```js
const menu = ["Menu", "Home", "About", "Contact"];

// !!! WARNING !!!
let activeBtn;

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.onclick = () => {
    console.log(activeBtn); // undefined  !!!
    btn.classList.add("active");
    activeBtn = btn;
    console.log(activeBtn); // !!! <button class="active">Contact</button> !!!
  };
}
// !!! WARNING !!!
```

#### version 3-2

##### add className

## !!! WARNING !!!

```js
const menu = ["Menu", "Home", "About", "Contact"];

let activeBtn;

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.onclick = () => {
    if (activeBtn) activeBtn.classList.remove("active");
    btn.classList.add("active");
    activeBtn = btn;
  };
}
```

## Fuctions:

```js
function hello(name) {
  console.log(`Hello ${name}!`);
}

hello("Alexandr"); // Hello Alexandr!
hello("Andrii"); // Hello Andrii!
```

## !!! WARNING !!!

```js
// !!! WARNING !!!
function hello(name) {
  console.log(`Hello ${name}!`);
}

const hello2 = hello;

hello("Alexandr"); // Hello Alexandr!
hello2("Alexandr"); // Hello Alexandr!
// !!! WARNING !!!
```
