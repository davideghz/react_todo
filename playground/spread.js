// launch this file with 'node playground/spread.js'

// simple sum

function add (a, b) {
  return a + b;
}
console.log(add(3,1));

// pass array to a function using spread operator
var toAdd = [9,5];
console.log(add(...toAdd));

// merge arrays using spread operator
var groupA = ['pippo', 'tino'];
var groupB = ['Vikram']
var final = [...groupB, 3, ...groupA];
console.log(final);

// pass array to a function using spread operator
var person = ['Dave', 29];
var personTwo = ['Titti', 50];

var greet = function (name, age) {
  console.log('hey ' + name + ', your age is: ' + age);
}
greet(...person);
greet(...personTwo);

// looping on an array built with spread operator
var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
