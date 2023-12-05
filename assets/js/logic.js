// Global variable to store the timer
var timeLeft = 60; // Initialize with the desired time

// Variable to track the current question index
var currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
  console.log("Quiz started!");

  // Hide the start screen
  document.getElementById("start-screen").classList.add("hide");

  // Show the questions section
  document.getElementById("questions").classList.remove("hide");

  // Initialize the timer
  document.getElementById("time").textContent = timeLeft;

  // Create a timer interval to update the timer every second
  var timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    // Check if time reaches 0
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);

  // Display the first question
  displayQuestion(0);
}

// Event listener for the start button
document.getElementById("start").addEventListener("click", startQuiz);

// Function to handle user's answer selection
function handleAnswerClick(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the answer is correct
  if (answer === currentQuestion.correctAnswer) {
    // Update score or perform other actions for a correct answer
    console.log("Correct!");
  } else {
    // Deduct time or perform other actions for an incorrect answer
    console.log("Incorrect!");
    // For example, you might deduct 10 seconds for an incorrect answer
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0; // Ensure time doesn't go negative
    }
    document.getElementById("time").textContent = timeLeft;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    // Display the next question
    displayQuestion(currentQuestionIndex);
  } else {
    // If there are no more questions, end the quiz
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Display the final score and provide the option to save initials
  document.getElementById("final-score").textContent = timeLeft;
  document.getElementById("end-screen").classList.remove("hide");
}

// Function to update the timer (if needed during the quiz)
function updateTimer() {
  // Implement logic to update the timer if needed during the quiz
}

// Function to display a question and its options
function displayQuestion(questionIndex) {
  var question = questions[questionIndex];

  // Update the question title
  document.getElementById("question-title").textContent = question.question;

  // Clear previous choices
  var choicesElement = document.getElementById("choices");
  choicesElement.innerHTML = "";

  // Create buttons for each answer choice
  question.options.forEach(function (option, index) {
    var button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      handleAnswerClick(option);
    });
    choicesElement.appendChild(button);
  });
}