
const questions = [
  
  {
    question: " What is the accounting standard 1?",
    correctAnswer: "disclosure of accounting policies",
  },
  {
    question:  " What is the accounting standard 2?",
    correctAnswer: "valuation of inventories",
  },
  {
    question: " What is the accounting standard 3?",
    correctAnswer: "cash flow statement",
  },
  {
    question:  " What is the accounting standard 4?",
    correctAnswer: "net profit or loss for the period, prior period items and changes in accounting policies",
  },
  {
    question:  " What is the accounting standard 5?",
    correctAnswer: "contingencies and events occurring after the balance sheet date",
  },
  {
    question:  " What is the accounting standard 7?",
    correctAnswer: "construction contracts",
  },
  {
    question:  " What is the accounting standard 9?",
    correctAnswer: "revenue recognition",
  },
  {
    question:  " What is the accounting standard 10?",
    correctAnswer: "property, plant and equipment",
  },
  {
    question: " What is the accounting standard 11?",
    correctAnswer: "the effects of changes in foreign exchange rates",
  },
  {
    question: " What is the accounting standard 12?",
    correctAnswer: "accounting for government grants",
  },
  {
    question:  " What is the accounting standard 13?",
    correctAnswer: "accounting for investments",
  },
  {
    question:  " What is the accounting standard 14?",
    correctAnswer: "accounting for amalgamations",
  },
  {
    question:  " What is the accounting standard 15?",
    correctAnswer: "employee benefits",
  },
  {
    question:  " What is the accounting standard 16?",
    correctAnswer: "borrowing costs",
  },
  {
    question:  " What is the accounting standard 17?",
    correctAnswer: "segment reporting",
  },
  {
    question:  " What is the accounting standard 18?",
    correctAnswer: "related party disclosures",
  },
  {
    question:  " What is the accounting standard 19?",
    correctAnswer: "leases",
  },
  {
    question:  " What is the accounting standard 20?",
    correctAnswer: "earnings per share",
  },
  {
    question:  " What is the accounting standard 21?",
    correctAnswer: "consolidated financial statements",
  },
  {
    question:  " What is the accounting standard 22?",
    correctAnswer: "accounting for taxes on income",
  },
  {
    question:  " What is the accounting standard 23?",
    correctAnswer: "accounting for investments in associates in consolidated financial statements",
  },
  {
    question:  " What is the accounting standard 24?",
    correctAnswer: "discontinuing operations",
  },
  {
    question:  " What is the accounting standard 25?",
    correctAnswer: "interim financial reporting",
  },
  {
    question:  " What is the accounting standard 26?",
    correctAnswer: "intangible assets",
  },
  {
    question:  " What is the accounting standard 27?",
    correctAnswer: "financial reporting of interests in joint ventures",
  },
  {
    question:  " What is the accounting standard 28?",
    correctAnswer: "impairment of assets",
  },
  {
    question:  " What is the accounting standard 29?",
    correctAnswer: "provisions, contingent liabilities and contingent assets",
  },
];

const questionElement = document.querySelector(".question");
const answerInput = document.querySelector("#answerBox");
const resultElement = document.getElementById("result");
const submitButton = document.querySelector(".ansSubmitButn");
const quizBox = document.querySelector(".quiz-container");

let askedQuestions = [];
let score = 0;
let totalQuestions = 10;

function getRandomQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(index));
  askedQuestions.push(index);
  return questions[index];
}

let currentQuestion;

function showQuestion() {
  currentQuestion = getRandomQuestion();
  questionElement.textContent = currentQuestion.question;
  answerInput.value = "";
  resultElement.textContent = "";
}

submitButton.addEventListener("click", () => {
  const typedAns = answerInput.value.trim().toLowerCase();
  const correctAns = currentQuestion.correctAnswer.trim().toLowerCase();

  if (typedAns === correctAns) {
    score++;
    resultElement.textContent = "Correct hai waah!";
  } else {
    resultElement.innerHTML = `Wrong hai chii! <br> Correct answer was: <strong>${currentQuestion.correctAnswer}</strong>`;
  }

  setTimeout(() => {
    if (askedQuestions.length < totalQuestions) {
      showQuestion();
    } else {
       const quizBox = document.querySelector(".quiz-box");
      quizBox.innerHTML = `<h2>Quiz Completed 🎉</h2><p>Your score: ${score} / ${totalQuestions}</p>`;
    }
  }, 1000);
});

showQuestion();

