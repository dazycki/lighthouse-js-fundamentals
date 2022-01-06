// LOOPING AND REPETITION

// example 1

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!"); //prints 10x

//example 2

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!"); //prints 6x