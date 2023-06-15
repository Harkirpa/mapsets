//1
let chars = 'abcadeecfb';
let unique= [...new Set(chars)];
console.log(unique);
//2
const arr = ['a','b','c','a','d','e','e','c','f','b'];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);