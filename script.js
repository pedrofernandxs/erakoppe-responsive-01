  const navbar = document.querySelector('nav');

  // Exibe a navbar no carregamento
  window.addEventListener('DOMContentLoaded', () => {
    navbar.classList.add('visible');
  });

  // Encolhe a navbar ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  
  // SCROLL REVEALLLLLLLLLLLLLLL

ScrollReveal().reveal('.reveal', {
  duration: 2000,
  distance: '20px',
  easing: 'cubic-bezier(0.5, 0, 0, 1)', // curva suave
  reset: true
});

ScrollReveal().reveal('.revealdois', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true // anima toda vez que aparece (descendo ou subindo!)
});

ScrollReveal().reveal('.reveal3', {
  duration: 2500,
  origin: 'left',
  distance: '100px'
});
