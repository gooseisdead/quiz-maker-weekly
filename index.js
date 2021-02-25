    function produceQuiz(){
      const quizBoard = [];

      quizQuestions.map(
        (listQuestion, questionNumber) => {
          const answerArray = [];
          for (letter in listQuestion.answers){

            answerArray.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${listQuestion.answers[letter]}
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
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;

      quizQuestions.forEach( (listQuestion, questionNumber) => {
        const questionCard = document.querySelector('.question-card')
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === listQuestion.correctAnswer){
          numCorrect++;
          questionCard.className = "correct-answer"
        } else {
          questionCard.className = "wrong-answer"
        }
      });

      resultsContainer.innerHTML = `${numCorrect} / ${quizQuestions.length}`;
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
   