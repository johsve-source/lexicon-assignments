/* let age = 26;

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

let a = 31;
console.log(a);

a + 5;
console.log(`Reassigned variable a and added 5, ${a}`);

let a = 10;
a = a - 4;
a = 7;
a = a + 2;

console.log(a); */

let uName = prompt('Vad är ditt namn?');
console.log(`Hej ${uName}! `);

let uYear = prompt(`Vilket år är du född, ${uName}?`);
console.log(uYear);

const uDate = new Date().getFullYear();
const uAge = uDate - uYear;

console.log(`${uName} är ${uAge} år gammal.`);

let strNumber = [];
let intNumber = [];

strNumber[0] = prompt(`${uName}, ge mig ett nummer.`);
strNumber[1] = prompt('Ge mig ett andra nummer.');
let uCount = prompt(
  'Vad vill du göra med dessa nummer? (Addition: "+", Subtraktion: "-", Multiplikation: "*" eller Division: "/")'
);

intNumber[0] = parseInt(strNumber[0]);
intNumber[1] = parseInt(strNumber[1]);
let uSum;

switch (uCount) {
  case '+':
    uSum = intNumber[0] + intNumber[1];
    alert(`When you add these two numbers, the sum will be: ${uSum}`);
    break;

  case '-':
    uSum = intNumber[0] - intNumber[1];
    alert(`When you subtract these two numbers, the sum will be: ${uSum}`);
    break;

  case '*':
    uSum = intNumber[0] * intNumber[1];
    alert(`When you multiply these two numbers, the sum will be: ${uSum}`);
    break;

  case '/':
    uSum = intNumber[0] / intNumber[1];
    alert(`When you divide these two numbers, the sum will be: ${uSum}`);
    break;

  default:
    alert(
      'Oriktig operator, använd följande: Addition: "+", Subtraktion: "-", Multiplikation: "*" eller Division: "/"'
    );
    break;
}
