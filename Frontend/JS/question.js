document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("question-container");
    const nextQuestionBtn = document.getElementById("next-question");
    let currentQuestion = 0;

    const questions = [
        {
            question: "Quelle est la principale conséquence de la surpêche ?",
            answers: [
                { text: "La diminution des populations de poissons", correct: true },
                { text: "Une augmentation du nombre de poissons dans l’océan", correct: false }
            ]
        },
        {
            question: "Quel pourcentage des poissons pêchés dans le monde provient de stocks surexploités ?",
            answers: [
                { text: "10%", correct: false },
                { text: "30%", correct: true },
                { text: "50%", correct: false }
            ]
        },
        {
            question: "Quelle action permettrait de limiter la surpêche ?",
            answers: [
                { text: "Augmenter les quotas de pêche", correct: false },
                { text: "Protéger les zones marines vulnérables", correct: true },
                { text: "INe rien changer aux pratiques actuelles", correct: false }
            ]
        },
        {
            question: "Quelle quantité de lignes de pêche sont posées chaque jour par la pêche à la palangre ?",
            answers: [
                { text: "Assez pour faire 100 fois le tour du monde", correct: false },
                { text: "Assez pour faire 250 fois le tour du monde", correct: false },
                { text: "Assez pour faire 500 fois le tour du monde", correct: true }
            ]
        },
        {
            question: "Quelle est la relation entre la surpêche et le réchauffement climatique ?",
            answers: [
                { text: "La surpêche perturbe les écosystèmes marins, réduisant leur capacité à stocker le carbone.", correct: true },
                { text: "La surpêche aide à absorber plus de CO2 dans les océans.", correct: false },
                { text: "La surpêche réduit les émissions de gaz à effet de serre.", correct: false }
            ]
        }
    ];
   
    function showQuestion(questionIndex) {
        const question = questions[questionIndex];
        quizContainer.innerHTML = `<p>${question.question}</p>`;
        question.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.addEventListener("click", () => checkAnswer(answer.correct));
            quizContainer.appendChild(button);
        });
    }

    function checkAnswer(correct) {
        if (correct) {
            alert("Correct !");
        } else {
            alert("Incorrect. Essayez encore !");
        }
    }

    nextQuestionBtn.addEventListener("click", () => {
        currentQuestion = (currentQuestion + 1) % questions.length;
        showQuestion(currentQuestion);
    });

    showQuestion(currentQuestion);
});