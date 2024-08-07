const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
                "True or false: 5 kilometer == 5000 meters? ",
                "(5 + 3)/2 * 10 = ? ",
                "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. ")
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer   
  /*candidateAnswer = input.question(question).toLowerCase()                                // Task 1 Code - Converting to Lowercase
  return candidateAnswer;  */ 

  for(let i = 0; i < questions.length; i++){                                                // Task 2 Code - Multiple Questions
    candidateAnswers.push(input.question(questions[i]))
  }

return candidateAnswers;

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  /* correctAnswer = correctAnswer.toLowerCase()                                 // Task 1 Code - Single Question
  candidateAnswer = candidateAnswer.toLowerCase()
         
  if(candidateAnswer === correctAnswer){                                        // Task 1 Code - Single Question
          console.log("That's correct!")
  }
  else{
          console.log("Sorry, that's incorrect! Please try again.")
  } */

          

   // Task 2 Code - Multiple Questions
    
    console.log(`\n                     ----------- RESULTS of the QUIZ -----------\n 
                Question 1: ${questions[0]} 
                Your Answer:  ${candidateAnswers[0]} 
                Correct Answer: ${correctAnswers[0]}\n
                Question 2: ${questions[1]}  
                Your Answer:  ${candidateAnswers[1]} 
                Correct Answer: ${correctAnswers[1]}\n
                Question 3: ${questions[2]}  
                Your Answer:  ${candidateAnswers[2]} 
                Correct Answer: ${correctAnswers[2]}\n
                Question 4: ${questions[3]}  
                Your Answer:  ${candidateAnswers[3]} 
                Correct Answer: ${correctAnswers[3]}\n
                Question 5: ${questions[4]}  
                Your Answer:  ${candidateAnswers[4]} 
                Correct Answer: ${correctAnswers[4]}
                    ----------- ----------- -----------`);

      
                 
    let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
    let numCorrectAnswers = 0;

    for (let i = 0; i < correctAnswers.length; i++){
        let strCorrect = correctAnswers[i]
        let strCandidate = candidateAnswers[i]

        if(strCorrect.toLowerCase() === strCandidate.toLowerCase()){                    // Task 3 Code - Converting to Lowercase
            numCorrectAnswers++;    
        }
    }

    // (Number of Correct Answers) / (Number of Quiz Questions) * 100
    grade = (numCorrectAnswers / questions.length) * 100
   
  return grade;                                                                        // returning 'grade' to runProgram()
}

function runProgram() {
  let userName = askForName();
  
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hola!", userName);
  
  askQuestion();
  //gradeQuiz(this.candidateAnswers);                                   // Task 1 Code

  let score = gradeQuiz(this.candidateAnswers);                         // Conveying to user if they passed or failed based on grade received.
        if(score >= 80){
            console.log(`\nCongratulations! You scored ${score} %. You have passed the test.\n`)
            console.log(`>>> Overall Grade: ${score * 0.05}  out of 5 responses correct <<<`)
            console.log(`>>> Status: PASSED <<<`)

        }
        else{
            console.log(`\nSorry! You scored ${score} %. Please try again.\n`)
            console.log(`>>> Overall Grade: ${score * 0.05}  out of 5 responses correct <<<`)
            console.log(`>>> Status: FAILED <<<\n`)

        }
           
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