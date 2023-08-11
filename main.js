const heartIcon = document.getElementById("heart");
const hiddenContent = document.getElementById("hidden-content");

let isUnlocked = false; // Inicialmente, a área está bloqueada

heartIcon.addEventListener("click", function() {
    if (!isUnlocked) {
        hiddenContent.style.display = "block"; // Torna o conteúdo oculto visível
        isUnlocked = true;
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-unlock"); // Substitua pelo ícone de "desbloqueado"
    }
});



heartIcon.addEventListener("click", function() {
    heartIcon.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Adiciona transições suaves

    // Aplica transformação para crescimento e diminuição gradual da opacidade
    heartIcon.style.transform = "scale(1.6) rotate(-45deg)"; // Aumenta o tamanho do coração
    heartIcon.style.opacity = "0";

    // Espera até que a transição seja concluída antes de ocultar o coração
    setTimeout(function() {
        heartIcon.style.display = "none";
    }, 500); // Ajuste o tempo para coincidir com a duração da transição em milissegundos
});




