const button = document.getElementById("toggleDark");
const body = document.body;
const icon = document.querySelector(".icon");
const perfilImg = document.querySelector(".img-text img");

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.textContent = "☀️"; 
        // Caminho relativo sem a barra inicial /
        perfilImg.src = "assets/ternobege.png"; 
    } else {
        icon.textContent = "🌙"; 
        perfilImg.src = "assets/ternoazul.png"; 
    }
});

