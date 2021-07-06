/*
  the strict inequality operator functions in the same way as the normal inequality operator, expect that 
  there is not type conversion done
*/
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);