/*
  An abstract concept in Data Structures is called a queue.

  A queue is where new elements will be appended to an array, and where old elements may be removed from the beginning.

  In this problem, we are asked to append the given 'item', then remove the first element from the array and return it.

  Thus, we append elements to arrays by using the .push() method. We remove elements by using the .shift() method. I assign the value returned from the .shift() to removedItem, then return the removedItem variable.
*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removedItem = arr.shift();
  return removedItem;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
