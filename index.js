function produceQuiz(){
  const quizBoard = [];

  quizQuestions.map(
    (listQuestion, questionNumber) => {
      const answerArray = [];
      for (letter in listQuestion.answers){
        answerArray.push(
          `<label class="answer-container">
              <input type="radio" class="radio" name="question${questionNumber}" value="${letter}">
              <span class="checkmark"></span>${listQuestion.answers[letter]}
          </label>`
        );
      }
        quizBoard.push(
          `<div class="question-card">
              <div class="category"> ${listQuestion.category} </div>
              <div class="question"> ${listQuestion.question} </div>
              <div class="answers"> ${answerArray.join('')} </div>
          </div>`
        );
    }
  );
  quizContainer.innerHTML = quizBoard.join('');
}

function refreshScreen() {
  location.reload()
}

function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  quizQuestions.forEach( (listQuestion, questionNumber) => {
    const questionCard = document.querySelector('.question-card')
    const answersAfter = document.querySelector('.answers')
    const categoryAfter = document.querySelector('.category')
    const answerContainer = answerContainers[questionNumber]
    const selector = `input[name=question${questionNumber}]:checked`
    const userAnswer = (answerContainer.querySelector(selector) || {}).value

    if (userAnswer === listQuestion.correctAnswer) {
      numCorrect++;
      questionCard.className = "correct-answer"
      answersAfter.className = "answers-after"
      categoryAfter.className = "category-after"
    } else {
      questionCard.className = "wrong-answer"
      answersAfter.className = "answers-after"
      categoryAfter.className = "category-after"
    }
  });

  const quizHead = document.querySelector('.quiz-head')

  if (numCorrect === 0) {
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">You've had too much to drink</p>`;
  } else if (numCorrect === 1) {
    resultsContainer.id = "results1"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">I know who to ask if I need to know that one thing.</p>`;
  } else if (numCorrect === 2) {
    resultsContainer.id = "results2"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">How many fingers am I holding up? Two...</p>`;
  } else if (numCorrect === 3) {
    resultsContainer.id = "results3"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">50/50...You're either halfway too drunk, or halfway too sober.</p>`;
  } else if (numCorrect === 4) {
    resultsContainer.id = "results4"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">You're an above-average pubster.</p>`;
  } else if (numCorrect === 5) {
    resultsContainer.id = "results5"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">There are many ingredients in the cocktail of your brain.</p>`;
  } else {
    resultsContainer.id = "results6"
    quizHead.textContent = "Click Here to try again."
    quizHead.addEventListener('click', refreshScreen);
    resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}
                                  <p class="comeback">Didn't spill a drop! Get this pubster another!</p>`;
  } 
}

  const quizContainer = document.getElementById('quiz-card');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const quizQuestions = [
    {
      category: "History",
      question: "How long was the Hundred Years' War?",
      answers: {
        a: "100 years",
        b: "89 years",
        c: "101 years",
        d: "116 years"
      },
      correctAnswer: "d"
    },
    {
      category: "Science",
      question: "Brass is an alloy of which two metallic elements?",
      answers: {
        a: "Nickel + Manganese",
        b: "Copper + Zinc",
        c: "Cobalt + Tin",
        d: "Bismuth + Iron"
      },
      correctAnswer: "b"
    },
    {
      category: "Sports",
      question: "Who won the first World Cup in 1930?",
      answers: {
        a: "Argentina",
        b: "Uruguay",
        c: "Germany",
        d: "Brazil"
      },
      correctAnswer: "b"
    },
    {
      category: "Food & Drink",
      question: "Which country produces the most sugar cane?",
      answers: {
        a: "Brazil",
        b: "China",
        c: "India",
        d: "Thailand"
      },
      correctAnswer: "a"
    },
    {
      category: "Arts & Entertainment",
      question: "Who is the best-selling author of the 21st Century?",
      answers: {
        a: "George R. R. Martin",
        b: "J.K. Rowling",
        c: "Dan Brown",
        d: "Stephen King"
      },
      correctAnswer: "b"
    },
    {
      category: "Animals",
      question: "Why does some bat guano sparkle?",
      answers: {
        a: "Bioluminescent Oil Glands",
        b: "Mica",
        c: "Bug Exoskeletons",
        d: "Mineral Oxidation"
      },
      correctAnswer: "c"
    }
  ];


produceQuiz();
submitButton.addEventListener('click', showResults);
  