'use strict';

let price1 = 200;
const price2 = price1;

//!!! WARNING !!!

price1 = 300;
console.log(price1, price2);

// 300
// 200
