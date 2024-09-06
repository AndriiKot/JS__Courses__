const name = 'aNDriI';

console.log(name); // 'aNDriI'

function getNormalName(name) {
  name = name[0].toUpperCase() + name.substring(1).toLowerCase();
  return name;
}

console.log(getNormalName(name)); // 'Andrii'

console.log(name); // 'aNDriI'

