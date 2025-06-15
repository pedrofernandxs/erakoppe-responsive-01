  const navbar = document.querySelector('nav');
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
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


const darkToggle = document.getElementById('dark-mode-toggle');
const darkIcon = darkToggle.querySelector('i');

// Ativa o tema escuro se estava salvo
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkIcon.classList.remove('uil-moon');
  darkIcon.classList.add('uil-sun');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const enabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', enabled ? 'enabled' : 'disabled');

  darkIcon.classList.toggle('uil-sun', enabled);
  darkIcon.classList.toggle('uil-moon', !enabled);
});

// carrosel
 const inner = document.getElementById('carrossel-inner');
    const imagens = document.querySelectorAll('.carrossel-img');
    const btnProxima = document.querySelector('.proxima');
    const btnVoltar = document.querySelector('.voltar');
    let indexAtual = 0;

    function atualizarCarrossel() {
        const largura = imagens[0].clientWidth;
        inner.style.transform = `translateX(-${indexAtual * largura}px)`;
    }

    btnProxima.addEventListener('click', () => {
        indexAtual = (indexAtual + 1) % imagens.length;
        atualizarCarrossel();
    });

    btnVoltar.addEventListener('click', () => {
        indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
        atualizarCarrossel();
    });

    // Atualiza se o tamanho da tela mudar (responsivo)
    window.addEventListener('resize', atualizarCarrossel);
