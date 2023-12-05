// Array of questions with their options and correct answers
const questions = [
    {
      question: "What is JavaScript?",
      options: ["A programming language", "A type of coffee", "A vegetable", "An Ancient Artifact"],
      correctAnswer: "A programming language"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "High Ticket Marketing Logistics"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which of the following is a CSS framework?",
      options: ["React", "Angular", "Bootstrap", "Massive"],
      correctAnswer: "Bootstrap"
    },
    {
      question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
      options: ["Alternate text for browsers", "Alignment", "Altitude of the image", "photosynthesis"],
      correctAnswer: "Alternate text for browsers"
    },
    {
      question: "what color is the ocean?",
      options: ["Blue", "hexagon", "£1,000,000", "snare drum"],
      correctAnswer: "Blue"
    }
  ];
  
  // Function to display a question and its options
  function displayQuestion(questionIndex) {
    // Get the current question from the questions array
    const currentQuestion = questions[questionIndex];
  
    // Update the question title
    document.getElementById("question-title").textContent = currentQuestion.question;
  
    // Clear previous choices
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
  
    // Create buttons for each answer choice
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        handleAnswerClick(option);
      });
      choicesElement.appendChild(button);
    });
  }
  
  // Example usage:
  displayQuestion(0); // Display the first question