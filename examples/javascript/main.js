// @ts-check
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

// VAR, LET, CONST. Var is not recommended.
let lAge = 38; // Initialization of variable
lAge = 39; // Re-assigning variable
console.log(lAge); // Output of the variable above
console.log("Let - You CAN assign a new value.");

// It's not possible to change the value of const at a later stage. Hence the name (Const(ant)
const cAge = 38;
/* cAge = 39; */
console.log(cAge);
console.log("Const - You CAN'T assign a new value.");

// STRINGS, NUMBERS, BOOLEAN, NULL, UNDEFINED, SYMBOL
const firstName = "John";
const age = 26;

const isCool = true;
const coolRating = 4.5;
const x = null;
const y = undefined;
let z; // Also undefined when empty

console.log("My name is " + firstName + " : " + typeof firstName);
console.log("Age: " + typeof age);
console.log("isCool: " + typeof isCool);
console.log("coolRating: " + typeof coolRating);
console.log("x: " + typeof x);
console.log("y: " + typeof y);
console.log("z: " + typeof z);

// Initilizing a function WITHOUT a variable
function init() {
  return console.log("This is the init function");
}
init(); // Running the created function above

// Initilizing a function WITH a variable
function initMessage(message) {
  return console.log(message);
}
initMessage("This is my message"); // Running the created function with a message variable above
