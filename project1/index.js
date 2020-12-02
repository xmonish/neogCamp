var readlineSync = require('readline-sync');

const chalk = require('chalk');
const log = console.log;

var score = 0

var userName = readlineSync.question("Enter your name: ");
log(chalk.keyword('orange')('Welcome ' + userName + '!'));
log(chalk("Lets test how much do you know ") + chalk.green("Monish"))

function play(question, answer) {
  log(chalk.black('----------------------------------'))
  log(chalk.bgRed.bold(question));
  userAnswer = readlineSync.question()
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    score += 1
    log(chalk.blue("You're Right!"))
  }
  else {
    score -= 1
    log(chalk.yellow("You're Wrong"))
  }
  console.log("Current score: ", score)
}

// The toUpperCase() method converts a string to uppercase letters, but doesn't change the original string.

var questionArray = [{
  question: "How old am I? ",
  answer: "20"
},{
  question: "Where do I live? ",
  answer: "bhilai"
}, {
  question: "Where do I study? ",
  answer: "ssgi"
}, {
  question: "Which game do I used to play the most? ",
  answer: "pubg"
}
]

var i
for (i in questionArray) {
  var currentQuestion = questionArray[i]
  play(currentQuestion.question, currentQuestion.answer)
}

log(chalk.black('----------------------------------'))
log(chalk.red.underline.bold("Your final score is: ", score))
log(chalk.hex('#DEADED').bold('Thanks for visiting!'))
