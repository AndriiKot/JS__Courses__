const name = "aNDriI";

console.log(name); // 'aNDriI'

function getNormalName(input) {
  input = input.trim();
  input = input[0].toUpperCase() + input.substring(1).toLowerCase();
  return input;
}

console.log(getNormalName(name)); // 'Andrii'

console.log(name); // 'aNDriI'
