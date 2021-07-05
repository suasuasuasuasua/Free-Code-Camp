/*
  .shift() removes the first element of an array, then returns the element.

  In this assignment, we .shift() the first element of myArray, then assign it to removedFromMyArray.

  Thus, myArray is now ["dog",3] and removedFromMyArray is now ["John", 23]
*/

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

console.log(removedFromMyArray);