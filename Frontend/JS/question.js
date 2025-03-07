document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("question-container");
    quizContainer.innerHTML = "<p>Quelle est la conséquence principale de la surpêche ?</p>" +
        "<button onclick=\"checkAnswer('a')\">A) Réduction des stocks</button>" +
        "<button onclick=\"checkAnswer('b')\">B) Augmentation des poissons</button>";
});

function checkAnswer(answer) {
    if (answer === 'a') {
        alert("Correct ! La surpêche réduit les populations de poissons.");
    } else {
        alert("Incorrect. Essayez encore !");
    }
}