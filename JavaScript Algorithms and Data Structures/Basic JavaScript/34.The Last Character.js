/*
  To access the last character in a string, using the .length method is advised because we do not necessarily know how long a string is.

  Therefore, since the .length method returns the length of the string, we can use it to access the last element by subtracting 1. If we do not subtract 1, then we will go out of bounds since strings index starting at 0.
*/

// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
