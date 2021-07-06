/*
  the inequality operator != is true when the boolean expression is false ; vice versa
  note that this will do type conversion before the operands are compared
*/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);