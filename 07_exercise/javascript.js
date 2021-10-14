// Write a function that reverses a number: given a number, reverse its digits.

// Examples: <br>
// Input: 1234 <br>
// Output: 4321 <br> <br>
// Input: 100000000 <br>
// Output: 1 <br> <br>
// Input: -321 <br>
// Output: -123

// Estimated time: 15 minutes <br>
// Total points: 15
function reverse(number) {
  let reverse = "";
  for (i = 1; i <= number.length; i++) {
    reverse += number[number.length - i];
  }
  alert(reverse);
}
reverse("123");
