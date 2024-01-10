let age = 26;

console.log(`This is my age ${age}`);

var kVar = 'Variable used: var';
let lVar = 'Variable used: let';
const cVar = 'Variable used: const';

console.log(kVar);
console.log(lVar);
console.log(cVar);

const firstName = 'Johan';
console.log(firstName);
firstName = 'David'; // Error, you can't reassign const

if (firstName === 'David') {
  console.log('Const variable successfully reassigned');
} else {
  console.log("Error, you can't reassign const");
}

number1 = 23;
number2 = 22;
console.log(number1 + number2);

let result1 = number1 - number2;
let result2 = number1 * number2;
let result3 = number1 / number2;

console.log(`Subtraction ${result1}`);
console.log(`Multiplication ${result2}`);
console.log(`Division ${result3}`);
