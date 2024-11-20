'use strict';

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
