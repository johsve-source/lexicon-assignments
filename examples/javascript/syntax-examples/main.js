// @ts-check
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// VAR, LET, CONST. Var is not recommended.
let lAge = 38; // Initialization of variable
lAge = 39; // Re-assigning variable
console.log(lAge); // Output of the variable above
console.log('Let - You CAN assign a new value.');

// It's not possible to change the value of const at a later stage. Hence the name (Const(ant)
const cAge = 38;
/* cAge = 39; */
console.log(cAge);
console.log("Const - You CAN'T assign a new value.");

// STRINGS, NUMBERS, BOOLEAN, NULL, UNDEFINED, SYMBOL
/* const firstName = 'John'; */
const age = 26;

const isCool = true;
const coolRating = 4.5;
const x = null;
const y = undefined;
let z; // Also undefined when empty

/* console.log('My name is ' + firstName + ' : ' + typeof firstName);
console.log(`My name is ${firstName} : ${typeof firstName}`); */ // Another way to string interpolation
console.log('Age: ' + typeof age);
console.log('isCool: ' + typeof isCool);
console.log('coolRating: ' + typeof coolRating);
console.log('x: ' + typeof x);
console.log('y: ' + typeof y);
console.log('z: ' + typeof z);

// Initilizing a function WITHOUT a variable
function init() {
  return console.log('This is the init function');
}
init(); // Running the created function above

// Initilizing a function WITH a variable
function initMessage(message) {
  return console.log(message);
}
initMessage('This is my message'); // Running the created function with a message variable above

// JSON.Parse is generally faster than the JS Literal variable above.

// Function to generate a larger dataset
const generateLargeData = (size) => {
  const largeData = {};
  for (let i = 0; i < size; i++) {
    largeData[`property${i}`] = i;
  }
  return largeData;
};

// Function to measure average parse speed
function measureAverageParseSpeed(dataJSON, iterations) {
  let totalDuration = 0;

  for (let i = 0; i < iterations; i++) {
    const startTime = performance.now();
    const parsedData = JSON.parse(dataJSON);
    const endTime = performance.now();
    const duration = endTime - startTime;
    totalDuration += duration;
  }

  const averageDuration = totalDuration / iterations;
  console.log(
    `Average parsing time over ${iterations} iterations: ${averageDuration} milliseconds`
  );
}

// Original small dataset
const smallData = { foo: 42, bar: 1337 };
const smallDataJSON = JSON.stringify(smallData);

// Test parse speed with small dataset
measureAverageParseSpeed(smallDataJSON, 1000); // Adjust the number of iterations as needed

// Larger dataset with 100 properties
const size = 100;
const largeData = generateLargeData(size);
const largeDataJSON = JSON.stringify(largeData);

// Test parse speed with larger dataset
measureAverageParseSpeed(largeDataJSON, 1000); // Adjust the number of iterations as needed

/* Arrays */
const fruits = ['apples', 'oranges', 'pears', 10, true];
const objects = [1, 2, 3, 4, 5];
console.log(fruits);
console.log(fruits[3]);

fruits[5] = 'grapes';
console.log(`Grapes has been added: ${fruits[5]}`);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['games', 'music', 'hockey'],
  address: {
    street: '50 Main St.',
    city: 'Boston',
    state: 'MA',
  },
};

console.log(person.address.city);

const { firstName, lastName } = person;

for (let i = 0; i < 10; i++) {
  console.log(i); // Looping from 0 to 9
}

let i = 0;
while (i < 10) {
  console.log(`While loop number : ${i}`);
  i++;
}

const todos = [
  {
    id: 1,
    text: 'ID 1',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'ID 2',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'ID 3',
    isCompleted: false,
  },
];

// Recommended way to loop through array
/* todos.forEach(function (todos) {
  console.log(todos.text);
}); */

/* const todoText = todos.map(function (todo) {
  return todo.text;
}); */

/* const todoText = todos.filter(function (todo) {
  return todo.text;
}); */

/* const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted); */

const p = '10';

if (p === 10) {
  // Error since === operator needs to be a string, since it outputs a string below. You could use == operator to bypass this.
  console.log('x is 10');
} else {
  console.log('x is not 10');
}

/* function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}; */

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('John', 'Doe', '2-27-1997');
const person2 = new Person('Mary', 'Doe', '4-3-1997');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getBirthYear());
console.log(person2.getFullName());

const calculateMean = (...numbers) => {
  if (numbers.length <= 1) {
    return console.log('You need to put in atleast 2 numbers');
  }
  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  const mean = totalSum / numbers.length;
  console.log(`${mean}`);
};

calculateMean(1, 2, 3);

const addNumbers = (...numbers) => {
  if (numbers.length < 10 || numbers.length > 10) {
    return console.log('You can only pass in 10 numbers.');
  }

  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  return console.log(`${totalSum}`);
};

addNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

const persontwo = {
  firstName: 'Johan',
  lastName: 'Svensson',
  age: 26,
  address: {
    street: 'Brunnsgatan 5B',
    city: 'Huskvarna',
    state: 'Jönköping',
    zip: '561 41',
  },
  skills: ['games', 'music', 'hockey', 'Ninja', 'Jump High'],
};

const listSkills = (person) => {
  const skills = person.skills;
  return console.log(skills);
};

listSkills(persontwo);
