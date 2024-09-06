let str = ' USER: "Andrii" age: 37';

// !!! WARNING substring(indexStart, 1..) !!!

str = str.substring(1, 15);

console.log(str);         // 'USER: "Andrii"'
console.log(str.length); // 14




