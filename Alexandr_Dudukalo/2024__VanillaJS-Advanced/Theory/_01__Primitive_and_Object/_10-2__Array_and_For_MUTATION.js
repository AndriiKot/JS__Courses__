'use strict';

const menu = ['Menu', 'Home', 'About', 'Contact'];

// !!! WARNING !!!
console.log(menu);
// [ 'Menu', 'Home', 'About', 'Contact' ]

// for (let item of menu) {
//   item = item + "!!!";
//   console.log(item); //
// }

for (let i = 0; i < menu.length; i++) {
  menu[i] += '!!!'; // !!! MUTATION !!!
  console.log(menu[i]);
}

// Menu!!!
// Home!!!
// About!!!
// Contact!!!

console.log(menu);
// [ 'Menu!!!', 'Home!!!', 'About!!!', 'Contact!!!' ]
// !!! WARNING !!!
