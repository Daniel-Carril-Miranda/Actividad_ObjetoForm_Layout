document.addEventListener("DOMContentLoaded", function () {
    const hamburguerBtn = document.querySelector(".hamburguer-btn");
    const navLinks = document.querySelector(".nav-links");
  
    hamburguerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  