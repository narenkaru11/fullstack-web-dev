// Loops basically mean you keep doing something similar/same until a condition tell you to stop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

let x = 0;

// while (x < 6) {
//   console.log(x);
//   x = x + 2
// }

do {
  console.log(x);
  x += 2;
} while (x < 6);

// FOR EACH loop

let arrayofNumbers = [5, 6, 3, 1, 2, 6, 7];

arrayofNumbers.forEach(function (currentValue, index, array) {
  console.log(currentValue);
  // console.log(index);
});


