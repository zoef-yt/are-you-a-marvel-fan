var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Zoef",
    score: 5,
  },

  {
    name: "Zidan",
    score: 4,
  },
]

var questions = [
  {
    question: "What people called Thanos? ",
    answer: "mad man"
  },
  {
    question: "What's Thor's hammer called? ",
    answer: "mjolnir"
  },
  {
    question: "what is ironman's name? ",
    answer: "tony Stark"
  },
  {
    question: "Who is peter quill? ",
    answer: "star lord"
  },
  {
    question: "Who is natasha romanoff? ",
    answer: "black widow"
  },
  {
    question: "How would you say hello to groot? ",
    answer: "i am groot"
  },
];

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + ", let's see if you can beat me in a quiz of Marvel Cinematic Universe");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { // branching
    console.log("Correct!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores.");

  for(i=0;i<highScores.length;i++){
    console.log(highScores[i].name, " : ", highScores[i].score)
  }
}

game()
showScores()