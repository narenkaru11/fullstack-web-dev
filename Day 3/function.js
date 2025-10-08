// A function is a reusable block of code that tou can represent with a name

x = 1;

function addOne() {
  x += 1;
}

addOne();
addOne();
addOne();
addOne();
addOne();

function addTwo() {
  x += 2;
}

addTwo();
addTwo();

function converXToPounds() {
  x = x * 2.2;
}

converXToPounds();

console.log(x);

// Arguments

let myHeight = 167;
let friendHeight = 175;

function cmToFeet(height) {
  return height * 0.0328;
}

// console.log(cmToFeet(myHeight));
// console.log(cmToFeet(friendHeight));

myHeightiInFeet = cmToFeet(myHeight);

console.log(myHeightiInFeet);
