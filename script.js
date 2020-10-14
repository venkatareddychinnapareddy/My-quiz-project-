const quizData = [
    {
        question: "where is statue of unity is located at?",
        a: "Tamilnadu",
        b: "Delhi",
        c: "Gujarat",
        d: "Hyderabad",
        correct: "c",
    },
    {
        question: "Which country is called as automotive country?",
        a: "Newn zealand",
        b: "Germany",
        c: "united states",
        d: "India",
        correct: "b",
    },
    {
        question: "What is the costliest car in the world?",
        a: "ferrari",
        b: "Tesla",
        c: "Rolls Royce",
        d: "Mercedes",
        correct: "c",
    },
    {
        question: "How many capitals does andhra pradesh have?",
        a: "1",
        b: "3",
        c: "5",
        d: "all the above",
        correct: "b",
    },
    {
        question: "What is the full form of IPL?",
        a: "International premiour league",
        b: "Indian premiour league",
        c: "Iconic premiour league",
        d: "all the above",
        correct: "b",
    },
    {
        question: "What is famous for Guntur?",
        a: "biryani",
        b: "forts",
        c: "Mirchi",
        d: "Temples",
        correct: "c",
    },
     {
        question: "Where is parasakthi cements industries is located?",
        a: "Hyderabad",
        b: "Delhi",
        c: "chennai",
        d: "Rentachintala",
        correct: "d",
    },
     {
        question: "What are modern electrical automotives iuntroduced into the market?",
        a: "kia",
        b: "Mercedes",
        c: "hyundai",
        d: "suzuki",
        correct: "a",
    },
     {
        question: "What is the biggest MNC located in Hyderabad?",
        a: "infosys",
        b: "TCS",
        c: "Amazon",
        d: "Delloite",
        correct: "c",
    },
     {
        question: "What is common language used in ui ?",
        a: "java",
        b: "javascript",
        c: "python",
        d: "c",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls =  document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
