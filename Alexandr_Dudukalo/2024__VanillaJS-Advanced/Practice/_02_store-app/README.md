﻿
#### ! For the code to work correctly, use 'live server' in Visual Studio Code !

![Store App](https://github.com/AndriiKot/JS__Courses__/blob/main/Alexandr_Dudukalo/2024__VanillaJS-Advanced/Practice/_02_store-app/images/__v1_0_0__.png)

```js
const products = [
  {
    name: "Vasa",
    price: 300,
  },
  {
    name: "Book",
    price: 50,
  },
  {
    name: "Coffee",
    price: 30,
  },
];

const listEl = document.createElement("ul");

const addBoxEl = document.createElement("div");

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Product name";

const priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.placeholder = "Product price";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";

addBoxEl.append(nameInput, priceInput, addBtn);

function getListItem(product) {
  let itemEl = document.createElement("li");
  itemEl.textContent = `${product.name}: ${product.price}$`;

  return itemEl;
}

function renderList(arr) {
  listEl.innerHTML = "";
  for (const item of arr) {
    let newItem = getListItem(item);
    listEl.append(newItem);
  }
}

function addProduct() {
  const name = nameInput.value;
  const price = +priceInput.value;
  products.push({ name, price });
  renderList(products);
  nameInput.value = "";
  priceInput.value = "";
}

addBtn.addEventListener("click", addProduct);

document.body.append(addBoxEl);
document.body.append(listEl);

renderList(products);
}
```