// !!! WARNING !!!
function hello(name) {
  console.log(`Hello ${name}!`);
}

const hello2 = hello;

hello("Alexandr"); // Hello Alexandr!
hello2("Alexandr"); // Hello Alexandr!
// !!! WARNING !!!
