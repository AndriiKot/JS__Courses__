const name = 'Andrii';

console.log(name[0]);        // A
console.log(name[0] = 'D'); // D

// !!! WARNING !!!

console.log(name[0]); // A
console.log(name);    // Andrii

// !!!  END WARNING !!!
