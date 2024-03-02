document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
  
    // Agregar evento de mouseover para animación de aumento
    cards.forEach(card => {
      card.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
      });
  
      // Agregar evento de mouseout para animación de retorno al tamaño original
      card.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
      });
    });
  });
  