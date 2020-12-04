var readlineSync = require('readline-sync');

const chalk = require('chalk');
const log = console.log;

var score = 0

var userName = readlineSync.question("Enter your name: ");
log(chalk.keyword('orange')('Welcome ' + userName + '!'));
log(chalk("Lets test how much do you know about") + chalk.green(" Cars"))

function play(question, answer) {
  log(chalk.black('----------------------------------'))
  log(chalk.bgRed.bold(question));
  userAnswer = readlineSync.question()
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    score += 1
    log(chalk.green("You're Right!"))
  }
  else {
    log(chalk.yellow("You're Wrong"))
  }
  console.log("Current score: ", score)
}


var questionArray = [{
  question: "What is generally considered to be the first pony car? ",
  answer: "ford mustang"
},{
  question: "What was the first car to break the sound barrier? ",
  answer: "thrust ssc"
}, {
  question: "What was the first car launched into space? ",
  answer: "tesla roadster"
}, {
  question: "What animal is on the Porsche logo? ",
  answer: "horse"
}, {
  question: "What color were all Ferraris originally? ",
  answer: "red"
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
