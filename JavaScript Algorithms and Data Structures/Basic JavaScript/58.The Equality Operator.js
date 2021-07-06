/*
  to test for equality between two objects, we use the equality '==' operator

  since javascript is a dynamically typed language, things may get confusing very quickly, 
  as 15 may be equal to "15" (this is due to how they convert for the comparisons)

  the '==' attempts to convert both operands to a common type before comparing
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);