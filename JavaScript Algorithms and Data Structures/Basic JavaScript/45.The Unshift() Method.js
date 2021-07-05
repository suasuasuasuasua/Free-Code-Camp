/*
  .unshift() adds to the front of an array.

  In this assignment, we .unshift() ["Paul", 35], which means that myArray will be equal to [["Paul", 35], ["dog", 3]]
*/

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray);

// Only change code below this line

myArray.unshift(["Paul", 35]);
console.log(myArray);