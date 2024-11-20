const demoString = "Js is cool language programming. I like Js.";

// !!! WARNING  String No Mutation !!!
demoString.replaceAll("Js", "VanillaJS");
console.log(demoString); // Js is cool language programming. I like Js.
// !!! WARNING  END !!!

const newDemoString = demoString.replaceAll("Js", "VanillaJS");

console.log(newDemoString); // VanillaJS is cool language programming. I like VanillaJS.
