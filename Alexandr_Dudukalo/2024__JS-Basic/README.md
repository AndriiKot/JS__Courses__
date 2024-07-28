# JavaScript Basic (2024)

## Source:
#### [Полный Курс JavaScript для новичков. Урок 1: Ссылочные типы данных](https://www.youtube.com/watch?v=ap3mLiPF2PE)


## Primitive Types:  

```js
let price1 = 200;  
let price2 = price  
```
### !!! WARNING !!!  

```js
price1 = 300  
console.log(price1, price2);  

 300  
 200 
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
###### OUTPUT: product: { name: "ball", price: 200 }}

#### OR
Version 2  
```js
let product = {
    name: "ball",
    price: 200
};

console.table({ product });
```
###### OUTPUT: product: { name: "ball", price: 200 }}

### Objects get value:
```js
let product = {};

product.name = "ball";
product.price = 200;

console.log(product.name);
console.log(product.price);
```

###### OUTPUT: 
ball   
200







