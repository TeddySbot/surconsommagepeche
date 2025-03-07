// Animation des émojis poissons
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

// Bouton "En savoir plus"
document.getElementById("learnMore").addEventListener("click", function () {
    alert("La surpêche menace 90% des stocks de poissons dans le monde. Agissons maintenant !");
});

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
    createFloatingIcons();
});