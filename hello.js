// Declaring and Calling Functions

//example 1
/*
const sayHello = function () {
  console.log("Hello, world");
}

sayHello(); //prints Hello, world
*/

//example 2
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban"); //prints Hello, Caliban
sayHello("Miranda"); //prints Hello, Miranda
sayHello("Ferdinand"); //prints Hello, Ferdinand

// /return & console.log

//example 1 
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); //prints Hello, John to console

//example 2
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John'); // does not print anything

//example 3
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting); //prints Hello, John to console