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

//parameters and arguments
