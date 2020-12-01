var readlineSync = require('readline-sync');
var  score = 0
var userName = readlineSync.question("May I have your name: ");
console.log('Welcome ' + userName + '!');
console.log("Lets test how much you know Monish! ")

function play(question,answer){
  console.log(question)
  userAnswer = readlineSync.question()
  if(userAnswer.toUpperCase() == answer.toUpperCase() ){
    score+=1
    console.log("You're Right!")
  }
  else{
    score-=1
    console.log("You're Wrong")
  }
  console.log("Current score: ",score)
  console.log("----------------")
}

// The toUpperCase() method converts a string to uppercase letters, but doesn't change the original string.

var questionArray = [{
    question:"Where do i live? ",
    answer:"bhilai"
  },{
    question:"Where do i study? ",
    answer:"ssgi"
  },{
    question:"Which game do I used to like the most? ",
    answer:"pubg"
  }
]

var i 
for(i in questionArray){
  var currentQuestion = questionArray[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your final score is: ",score)
console.log("Thanks for visiting!")
