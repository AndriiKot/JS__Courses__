let str = ' USER: "Andrii" age: 37';

// !!! WARNING substring(indexStart, 1..) !!!

str = str.substring(1, 15).toLowerCase();

console.log(str);         // 'user: "andrii"'
console.log(str.length); // 14

// !!! WARNING END !!!






