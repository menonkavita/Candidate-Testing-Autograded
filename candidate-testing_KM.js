const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "What is the name of the Space Shuttle that astronauts Neil Armstrong and Edwin (Buzz) Aldrin, Jr. took to go to the Moon on July 20, 1969?";;
let correctAnswer = "Apollo 11";
let candidateAnswer;

candidateName = input.question("Please enter your name: ");
console.log("Hola", candidateName,"!")

console.log("Please answer the Question below")
candidateAnswer = input.question(question).toLowerCase() // Converting to Lower Case

correctAnswer = correctAnswer.toLowerCase() // Converting to Lower Case


if (candidateAnswer === correctAnswer){
    console.log("Your answer is correct!")
} 
else{
    console.log("Sorry! You got it wrong!")
}



//TODO: Variables for Part 2
/*
let questions;
let correctAnswers;
let candidateAnswers;

let questions1, questions2, questions3, questions4;
let correctAnswers1, correctAnswers2, correctAnswers3, correctAnswers4;
let candidateAnswers1, candidateAnswers2, candidateAnswers3, candidateAnswers4;

questions ="How many stars are on the American flag? Write your answer as a number."
questions1 ="Are Avocados fruit? Answer in Yes or No."
questions2 ="Name the ocean that borders the state of South Carolina? Inout just the ocean name."
questions3 ="Who was the First President of the United States of America?"
questions4 ="Which state borders the state of Missouri in the South?"

correctAnswers = "50"
correctAnswers1 = "Yes"
correctAnswers2 = "Atlantic"
correctAnswers3 = "George Washington"
correctAnswers4 = "Arkansas"



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name again for the 2nd part of the Quiz : ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    candidateAnswers  = input.question(questions)
    candidateAnswers1 = input.question(questions1)
    candidateAnswers2 = input.question(questions2)
    candidateAnswers3 = input.question(questions3)
    candidateAnswers4 = input.question(questions4)
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  
  if (candidateAnswers.toLowerCase() === correctAnswers.toLowerCase()){ //Stars
    console.log("Your answer is correct! There are ", correctAnswers, "stars in the flag of the United States of America.")
    grade +=1;
} 
else{
    console.log("Sorry! You got it wrong! There are ", correctAnswers, "stars in the flag of the United States of America.")
}

if (candidateAnswers1.toLowerCase() === correctAnswers1.toLowerCase()){ // Avocadas are fruit
    console.log("Your answer is correct!", correctAnswers1, "are a type of fruit.")
    grade +=1;
} 
else{
    console.log("Sorry! You got it wrong! The correct answer is Yes!", correctAnswers1, "are a type of fruit.")
}

if (candidateAnswers2.toLowerCase() === correctAnswers2.toLowerCase()){ // Atlantic Ocean
    console.log("Your answer is correct! The ", correctAnswers[2], "Ocean borders South Carolina.")
    grade +=1;
} 
else{
    console.log("Sorry! You got it wrong! The correct answer is ", correctAnswers[2], "Ocean borders South Carolina.")
}

if (candidateAnswers3.toLowerCase() === correctAnswers3.toLowerCase()){ // George Washington
    console.log("Your answer is correct! The first President of United States of America was ", correctAnswers3,".")
    grade +=1;
} 
else{
    console.log("Sorry! You got it wrong! The correct answer is ", "The first President of United States of America was ", correctAnswers[3],".")
}

if (candidateAnswers4.toLowerCase() === correctAnswers4.toLowerCase()){  // Arkansas
    console.log("Your answer is correct!", correctAnswers[4], "borders the state of Missouri in the South.")
    grade +=1;
} 
else{
    console.log("Sorry! You got it wrong! The correct answer is ", correctAnswers4,".", correctAnswers4, "borders the state of Missouri in the South.")
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};


*/