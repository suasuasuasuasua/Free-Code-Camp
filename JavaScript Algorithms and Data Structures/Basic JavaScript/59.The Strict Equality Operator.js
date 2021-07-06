/*
  the strict equality operator '===' is also used to compare two operands
  in this case, neither operand is converted, which is why the operator is strict
*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);