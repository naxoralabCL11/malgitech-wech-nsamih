const questions = [
    {
        question: "كي نكونو خارجين ونديرولها عشاء رومانسي، واش هي الحاجة اللي هديل تموت عليها؟",
        answers: [
            { text: "بيتزا ", feedback: "ياهاه! علابالي بلي كرشك هي كلش." },
            { text: "غاراتان ", feedback: "لالا هادي ماشي هديل.. عاودي ركزي تشو!" },
            { text: "تاكوس دوبل فخوماج ", feedback: "لالا هادي ماشي هديل.. عاودي ركزي تشو!" }
        ]
    },
    {
        question: "كي تكون هديل مقلقة وزعفانة، واش هيا الحاجة اللي تفرّحها في دقيقة؟",
        answers: [
            { text: "شيكولا ونوتيلا", feedback: "اي بيا مالا! علابالي بلي دوك راكي تتبسمي ومنعرف." },
            { text: "نخرجو ندورو ونبدلو الهواء", feedback: "امممم، زعمة هكدا؟ هاتي الصح!" },
            { text: "ميساج حلو مني يرجع الضحكة", feedback: "امممم، زعمة هكدا؟ هاتي الصح!" }
        ]
    },
    {
        question: "وين رايحة تكون أول تحويسة لينا مع بعضنا إن شاء الله؟",
        answers: [
            { text: "للبحر والهدوء", feedback: "إن شاء الله يا ربي، ربي يجمعنا في الحلال ونديروها." },
            { text: "لبلاد بعيدة نديرو فيها خرجة مكاش كيفها ومغامرة", feedback: "معليش، المهم نكونو كيف كيف وين ما كانت المهم نكون انا وياك." },
            { text: "نريحو في بلاصة خضراء وطبيعة", feedback: "معليش، المهم نكونو كيف كيف وين ما كان." }
        ]
    },
    {
        question: "شكون اللي يحب الآخر كثر فينا؟",
        answers: [
            { text: "أنا ", feedback: "حتى لوكان تخيري روحك، أنا اللي نحبك كثر بزااااف!" },
            { text: "نتا", feedback: "حتى لوكان تخيري روحك، أنا اللي نحبك كثر بزااااف!" }
        ]
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const finalScreen = document.getElementById('final-screen');

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        optionsElement.appendChild(button);
    });
}

function resetState() {
    resultSection.classList.add('hide');
    optionsElement.innerHTML = '';
}

function selectAnswer(answer) {
    feedbackElement.innerText = answer.feedback;
    quizSection.classList.add('hide');
    resultSection.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        quizSection.classList.remove('hide');
        showQuestion();
    } else {
        resultSection.classList.add('hide');
        quizSection.classList.add('hide');
        finalScreen.classList.remove('hide');
    }
});

startQuiz();
