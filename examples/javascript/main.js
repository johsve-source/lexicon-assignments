/* console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning"); */

// VAR, LET, CONST. Var is not recommended.
let lAge = 38;
lAge = 39;
console.log(lAge);
console.log("Let - You CAN assign a new value.");

const cAge = 38;
/* cAge = 39; */
console.log(cAge);
console.log("Const - You CAN'T assign a new value.");

// STRINGS, NUMBERS, BOOLEAN, NULL, UNDEFINED, SYMBOL
const name = "John";
const age = 26;

const isCool = true;
const coolRating = 4.5;
const x = null;
const y = undefined;
let z; // Also undefined when empty

console.log("My name is " + name + " : " + typeof name);
console.log("Age: " + typeof age);
console.log("isCool: " + typeof isCool);
console.log("coolRating: " + typeof coolRating);
console.log("x: " + typeof x);
console.log("y: " + typeof y);
console.log("z: " + typeof z);
