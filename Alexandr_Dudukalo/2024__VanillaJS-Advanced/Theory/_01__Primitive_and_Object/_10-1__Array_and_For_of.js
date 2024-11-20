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
