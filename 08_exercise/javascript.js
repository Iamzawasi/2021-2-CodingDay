let questionsArray = [
  {
    question: "What is HTML??",
    answer: "1. Hyperlinks and text Markup Language",
    Possible1: "2. Home tool Markup Language",
    Possible2: "3. HyperText Markup Language",
  },
  {
    question: "Which tag is used to create a link to another page?",
    answer: "1. <a>",
    Possible1: "2. <link>",
    Possible2: "3. <p>",
  },
  {
    question: "What is CSS?",
    answer: "1. Cascading style sheet",
    Possible1: "2. Its Casting Style Sheet ",
    Possible2: "3. Creative style sheet",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answer: "1. <style>",
    Possible1: "2. <script>",
    Possible2: "3. <css>",
  },
  {
    question: "Which is the correct CSS syntax?",
    answer: "1. body { color: black ;}",
    Possible1: "2. body:color=black; ",
    Possible2: "3. {body:color=black}",
  },
];
let randQuestion = randomSelector();
let totalpoints = 0;
let askedQuestions = 1;
let questiontracker = document.getElementById("questTracker");
questiontracker.textContent = askedQuestions + " of 5";
function randomSelector() {
  let RandIndex = Math.floor(Math.random() * 4);
  return RandIndex;
}

//alert(randomSelector());
function FirstExecution() {
  let question = document.getElementById("mainQuestion");
  question.textContent = questionsArray[randQuestion].question;
  let ans1 = document.getElementById("an1");
  ans1.textContent = questionsArray[randQuestion].answer;

  let ans2 = document.getElementById("an2");
  ans2.textContent = questionsArray[randQuestion].Possible1;

  let ans3 = document.getElementById("an3");
  ans3.textContent = questionsArray[randQuestion].Possible2;

  //alert(randQuestion);
}
function CheckAnswer() {
  let ans = document.getElementById("ans1");
  if (ans.checked) {
    askedQuestions == 5
      ? alert(`Your total points are   ${totalpoints}`)
      : alert("Your Answer is correct you got 5 points ");

    totalpoints += 5;
  } else {
    askedQuestions == 5
      ? alert(`Your total points are   ${totalpoints}`)
      : alert("Oops Wrong Answer ");
  }
}

function NextQuestion() {
  CheckAnswer();
  randQuestion == 4 ? (randQuestion = 0) : (randQuestion = randQuestion);
  randQuestion = randQuestion + 1;

  let question = document.getElementById("mainQuestion");
  question.textContent = questionsArray[randQuestion].question;
  let ans1 = document.getElementById("an1");
  ans1.textContent = questionsArray[randQuestion].answer;

  let ans2 = document.getElementById("an2");
  ans2.textContent = questionsArray[randQuestion].Possible1;

  let ans3 = document.getElementById("an3");
  ans3.textContent = questionsArray[randQuestion].Possible2;
  askedQuestions += 1;

  questiontracker.textContent = askedQuestions + " of 5";

  askedQuestions == 6
    ? (askedQuestions = 1)
    : (askedQuestions = askedQuestions);
}
FirstExecution();
