// Function Declaration statement

function hello(name) {
  name = name[0].toUpperCase() + name.slice(1); // !!! NO MUTATION !!!
  return `Hello ${name}!`;
}

const name1 = "john";
const name2 = "andrii";

console.log(name1, name2); // john andrii

// !!! NO MUTATION !!!
console.log(hello(name1)); // Hello John!
console.log(hello(name2)); // Hello Andrii!

console.log(name1, name2); // john andrii     !!! NO MUTATION !!!

// !!! NO MUTATION END !!!
