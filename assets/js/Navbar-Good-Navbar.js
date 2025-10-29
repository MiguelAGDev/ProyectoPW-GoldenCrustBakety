// Cambia el navbar con el scroll
(function () {
  const navbar = document.getElementById('navbar');
  const threshold = 10; // px de scroll antes de activar

  function onScroll() {
    if (window.scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // inicial por si la página carga ya scrolleada
  onScroll();

  window.addEventListener('scroll', onScroll);
})();