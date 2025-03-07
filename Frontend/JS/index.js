document.getElementById("learnMore").addEventListener("click", function() {
    alert("La surpêche réduit drastiquement les populations de poissons !");
});

document.addEventListener("DOMContentLoaded", function () {
    const learnMoreBtn = document.getElementById("learnMore");
    learnMoreBtn.addEventListener("click", function () {
        alert("La surpêche menace 90% des stocks de poissons dans le monde.");
    });

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

// Génération d'éléments flottants
function createFloatingIcons() {
    const floatingContainer = document.getElementById("floating-icons");
    for (let i = 0; i < 20; i++) {
        let fish = document.createElement("div");
        fish.classList.add("fish");
        fish.innerHTML = "🐟";
        fish.style.left = Math.random() * 100 + "vw";
        fish.style.animationDuration = (5 + Math.random() * 5) + "s";
        floatingContainer.appendChild(fish);
    }
}
createFloatingIcons();