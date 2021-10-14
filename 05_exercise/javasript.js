// Write a function called *getLastValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

// Example: <br>
// Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
// Output: Wednesday

// Estimated time: 15 minutes <br>
// Total points: 15
let arrayofString = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];
function getLastValue(array) {
  array.sort();
  return array[array.length - 1];
}
getLastValue(arrayofString);
