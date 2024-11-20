'use strict';

const menu = ['Menu', 'Home', 'About', 'Contact'];

// !!! WARNING !!!
console.log(menu);
// [ 'Menu', 'Home', 'About', 'Contact' ]

for (let item of menu) {
  item += '!!!';
  console.log(item); //
}

// Menu!!!
// Home!!!
// About!!!
// Contact!!!

console.log(menu);
// [ 'Menu', 'Home', 'About', 'Contact' ]
// !!! WARNING !!!
