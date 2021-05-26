/*
  We can think of multi-dimensional arrays as arrays within arrays.

  To access subsequent arrays, we continue adding brackets until we reach the data that we want.

  In this problem, we are told to set myData equal to 8.

  Thus, I need to access myArray at the 3rd element, and inside of the 3rd element, I need to access the 2nd element. Therefore myArray[2][1] is equal to 8.
*/

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0];

myData = myArray[2][1];
