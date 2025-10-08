let x = 500;

console.log(x > 5);

console.log(x == 7);

// == Check value only
// === Checks both value and data type

// >, < Larger than, smaller than

// OPERATORS

// COMPARISON OPERATORS

if (x > 5) {
  console.log("X is larger than 5");
} else {
  console.log("X is not larger than 5");
}

if (x > 700) {
  console.log("X is larger than 400");
} else if (x > 400) {
  console.log("X is smaller than 7-00 but larger than 400");
} else {
  console.log("X is smaller than 400");
}

// LOGIC GATES

// && AND gate
// || OR gate
// ! NOT

age = 70;
weight = 100;

if (age > 15 && weight > 50) {
  console.log("Overweight for this age");
} else {
  console.log("Not overweight");
}

let money = false;
let vip = false;

if (money || vip) {
  console.log("Allowed Entry");
} else {
  console.log("Denied Enter");
}



let y = 8

if(y != 5){
    console.log("Y is NOT equals to 5")
}else{
    console.log("Y is equals to 5")
}