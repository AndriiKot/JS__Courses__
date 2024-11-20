'use strict';

// Function Declaration statement

const names = ['andrii', 'oxi'];

function reverseMutation([...arr]) {
  arr.reverse();
  console.log(arr);
}

// !!!  MUTATION !!!
console.log(names); // [ 'andrii', 'oxi' ]
reverseMutation(names); // [ 'oxi', 'andrii' ]
console.log(names); // [ 'andrii', 'oxi' ]
// !!! MUTATION END !!!
