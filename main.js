const hearth = document.getElementById("heart");
const hiddenContent = document.getElementById("hidden-content");

let isUnlocked = false; // Inicialmente, a área está bloqueada

hearth.addEventListener("click", function() {
    if (!isUnlocked) {
        hiddenContent.style.display = "block"; // unlock the content
        isUnlocked = true;

       
    }
});



hearth.addEventListener("click", function() {
    hearth.style.transition = "transform 2s ease, opacity 1.5s ease"; // Adiciona transições suaves

    // Aplica transformação para crescimento e diminuição gradual da opacidade
    hearth.style.transform = "scale(5) rotate(-45deg)"; // Aumenta o tamanho do coração
    hearth.style.opacity = "0";

    // Espera até que a transição seja concluída antes de ocultar o coração
    setTimeout(function() {
        hearth.style.display = "none";
    }, 500); // Ajuste o tempo para coincidir com a duração da transição em milissegundos
});




