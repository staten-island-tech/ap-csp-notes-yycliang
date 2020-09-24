//strings
const name = "Crystal";
const age = 17;
//use this baby `
console.log(`My name is ${name}`);
console.log(`hey my name is ${name} and I am ${age} years old`);

//functions
function printer(text) {
  console.log(name); //global
  console.log("string");
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

// const multiply = () => {
//     console.log(num1 * num2);
// }
// another way to create a function ^
printer("ducks");
multiply(3, 4);

//math
val = Math.PI; //pi
val = Math.E; //Euler's number
val = Math.round(3.5); //rounds normally
val = Math.ceil(3.5); //rounds up
val = Math.floor(3.5); //rounds down
val = Math.sqrt(64); //finds square root
val = Math.abs(-3); //absolute value
val = Math.pow(8, 2); //raises first to second number's power
val = Math.min(2, 333, 4, 5, 6); //gives min number
val = Math.max(2, 33, 4, 5, 6); //gives max number
val = Math.random(); //gives random decimals
val = Math.floor(Math.random() * 20 + 1); //rounds a random number

console.log(val);

//parameters and arguments
function calculateBill(totalBill, taxRate = 0.08, tipRate = 0.15) {
  console.log("calculating bill");
  const total = totalBill + totalBill * taxRate + totalBill * tipRate;
  return total;
}

const myTotal = calculateBill(100, undefined, 0.15);
console.log(myTotal);

function greeting(firstName) {
  return `hello ${firstName}`;
}

const sayhi = greeting("Crystal");
console.log(sayhi);
