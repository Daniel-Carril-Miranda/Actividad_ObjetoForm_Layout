// Autor: Daniel Carril Miranda
// GitHub: https://github.com/Daniel-Carril-Miranda/Actividad_ObjetoForm_Layout.git

document.addEventListener("DOMContentLoaded", function () {
    const hamburguerBtn = document.querySelector(".hamburguer-btn");
    const navLinks = document.querySelector(".nav-links");
  
    hamburguerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  