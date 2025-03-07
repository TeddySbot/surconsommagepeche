document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Documentation chargée.");

    // Gérer les boutons "Voir plus d'informations"
    document.querySelectorAll(".open-menu").forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target"); // Récupérer l'ID du grand menu
            const smallMenu = this.closest(".small-menu");
            const largeMenu = document.getElementById(targetId);

            // Masquer le petit menu et afficher le grand menu
            smallMenu.style.display = "none";
            largeMenu.style.display = "block";
        });
    });

    // Gérer les boutons "Revenir au menu principal"
    document.querySelectorAll(".back-to-small-menu").forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target"); // Récupérer l'ID du petit menu
            const largeMenu = this.closest(".large-menu");
            const smallMenu = document.getElementById(targetId);

            // Masquer le grand menu et afficher le petit menu
            largeMenu.style.display = "none";
            smallMenu.style.display = "block";
        });
    });
});

// Fonction pour créer des émojis animés
function createFloatingIcons() {
    const floatingContainer = document.getElementById("floating-icons");
    for (let i = 0; i < 20; i++) { // Nombre d'émojis à générer
        let fish = document.createElement("div");
        fish.classList.add("fish");
        fish.innerHTML = "🌊"; // Émoji de poisson
        fish.style.left = Math.random() * 100 + "vw"; // Position horizontale aléatoire
        fish.style.animationDuration = (5 + Math.random() * 5) + "s"; // Durée d'animation aléatoire
        floatingContainer.appendChild(fish);
    }
}

// Appeler la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    createFloatingIcons();
});