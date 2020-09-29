const age = 17;
if (age > 18) {
  console.log("You are older than 17");
} else if (age === 17) {
  console.log("You are 17");
} else {
  console.log("You are younger than 17");
}

const user = {
  name: "Crystal",
  age: "17",
  purchases: ["phone", "car", "house"],

  sayName: function () {
    console.log(this.name);
  },
};

user.sayName();

const color = "orange";

switch (color) {
  case "orange":
    console.log("color is orange");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Not orange nor blue");
    break;
}

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = [43, 56, 33, 23, 44, 36, 5];

let val;

val = numbers.length;

val = Array.isArray(numbers);

val = numbers[3];
//insert
numbers[2] = 100;
//find the index of the value
val = numbers.indexOf(36);
//mutating arraays
//add to end
numbers.push(250);
//add to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from beginning
numbers.shift();
//splice values
//starting index to ending index
numbers.splice(1, 1);
//reverse
numbers.reverse();
//concatenate arrays
val = numbers.concat(numbers2);

//sorting arrays
val = numbers.sort();

//use the compare function
val = numbers.sort(function (x, y) {
  return x - y;
});

//Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);
