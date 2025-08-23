document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    nav.classList.toggle("show");
  });

// Cerrar menú al hacer clic en enlaces internos
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');
  const hamburgerMenu = document.querySelector(".top-nav");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Cerrar el menú hamburguesa
      hamburgerMenu.classList.remove("show");

      // Obtener el ID del destino
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calcular la posición considerando la altura del navbar fijo
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        // Hacer scroll suave a la sección
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
