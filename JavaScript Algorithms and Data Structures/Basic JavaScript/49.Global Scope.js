/*
  Scope refers to the visibility of variables.

  Variables that are defined outside of function blocks have a global scope, in which they can be accessed anyhwere in the code.

  Variables declared without the 'var' keyword are automatically created in the global scope, but they may produce unintended consequences. Therefore, it is best practice to include 'var'.
*/

// Declare the myGlobal variable below this line

var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();