const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2,
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Gold", "Silver", "Hydrogen"],
        correct: 0,
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
        correct: 2,
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        correct: 2,
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: 1,
    },
    {
        question: "What is the currency of Japan?",
        answers: ["Yen", "Dollar", "Euro", "Won"],
        correct: 0,
    },
    {
        question: "What is the boiling point of water?",
        answers: ["50°C", "100°C", "150°C", "200°C"],
        correct: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;
const selectedAnswers = [];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const correctAnswersList = document.getElementById("correct-answers-list");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("option");
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });
    prevBtn.classList.toggle("hidden", currentQuestionIndex === 0);
    nextBtn.classList.toggle("hidden", currentQuestionIndex === questions.length - 1);
    submitBtn.classList.toggle("hidden", currentQuestionIndex < questions.length - 1);
}

function selectAnswer(index, button) {
    // Clear previously selected answer styles
    const options = optionsContainer.querySelectorAll("button");
    options.forEach(option => option.classList.remove("selected"));
    
    // Highlight selected answer
    button.classList.add("selected");
    selectedAnswers[currentQuestionIndex] = index; // Store the selected answer index
}

prevBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    loadQuestion();
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

submitBtn.addEventListener("click", () => {
    resultContainer.classList.remove("hidden");
    scoreElement.innerText = `${score} out of ${questions.length}`;
    displayCorrectAnswers();
    document.getElementById("quiz-container").classList.add("hidden");

    // Calculate score
    selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });
});

function displayCorrectAnswers() {
    correctAnswersList.innerHTML = "";
    questions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `Q${index + 1}: ${question.question} - Correct Answer: ${question.answers[question.correct]}`;
        correctAnswersList.appendChild(listItem);
    });
}

// Load the first question
loadQuestion();
