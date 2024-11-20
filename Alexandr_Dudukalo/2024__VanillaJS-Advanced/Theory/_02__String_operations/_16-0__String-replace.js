const demoString = "Hello my name is Roma";

demoString.replace("Roma", "Andrii");

// !!! WARNING NO MUTATION string !!!
console.log(demoString); // Hello my name is Roma
// !!! WARNING END !!!

const newUserName = demoString.replace("Roma", "Andrii");

console.log(newUserName); // Hello my name is Andrii
