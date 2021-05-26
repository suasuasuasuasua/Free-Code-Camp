/*
  Variables declared within a function will only be accessible within the function braces. This rule also extends to a function's parameters.

  Attempting to access variables that are not locally defined will cause errors.

  In this problem, myVar is declared inside of myLocalScope(). Therefore, we can print it inside of the function. However, outside of the function, we cannot print myVar because it is not defined.
*/

function myLocalScope() {

  // Only change code below this line
  var myVar = "1";

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
