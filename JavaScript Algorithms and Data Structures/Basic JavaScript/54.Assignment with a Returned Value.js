/*
  Assignment operators will resolve everything on the right hand side before assigning anything.

  Therefore, we may evoke a function, then assign its return value to a variable.
*/

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg( 7 );
