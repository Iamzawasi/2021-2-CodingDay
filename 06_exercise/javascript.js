// Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.

// Example: <br>
// Input: [1,4,6,3,2] <br>
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

// Estimated time: 30 minutes <br>
// Total points: 30

function weekNumbersToWords(Number) {
  switch (Number) {
    case 1:
      alert("Sunday");
      break;
    case 2:
      alert("Monday");
      break;
    case 3:
      alert("Tuesday");
      break;
    case 4:
      alert("Wednesday");
      break;
    case 5:
      alert("Thursday");
      break;
    case 6:
      alert("Friday");
      break;
    case 7:
      alert("Saturday");
      break;
  }
}

weekNumbersToWords(1);
