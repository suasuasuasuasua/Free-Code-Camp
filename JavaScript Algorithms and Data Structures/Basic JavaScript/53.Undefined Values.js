/*
  When a return statement is not specified, the default return value is 'undefined'.
*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
