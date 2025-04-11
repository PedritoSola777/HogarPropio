const mobileMenuBtn = document.getElementById('mobile-menu');
  const navbarMenu = document.getElementById('navbar-menu');

  mobileMenuBtn.addEventListener('click', () => {
    // Alterna la clase "show" para desplegar/ocultar el menú
    navbarMenu.classList.toggle('show');
  });