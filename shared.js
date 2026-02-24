// Injetado em todas as páginas
function getNav(active) {
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="CEMU Rede de Ensino" class="nav-logo-img">
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${active==='home'?'class="active"':''}>Início</a></li>
      <li><a href="sobre.html" ${active==='sobre'?'class="active"':''}>Sobre</a></li>
      <li><a href="galeria.html" ${active==='galeria'?'class="active"':''}>Galeria</a></li>
      <li><a href="contato.html" ${active==='contato'?'class="active"':''}>Contato</a></li>
      <li><a href="matricula.html" class="btn-matricula-nav">Matricule-se</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="index.html" onclick="toggleMenu()">Início</a></li>
      <li><a href="sobre.html" onclick="toggleMenu()">Sobre</a></li>
      <li><a href="galeria.html" onclick="toggleMenu()">Galeria</a></li>
      <li><a href="contato.html" onclick="toggleMenu()">Contato</a></li>
      <li><a href="matricula.html" class="btn-mat" onclick="toggleMenu()">Matricule-se</a></li>
    </ul>
  </div>`;
}

function getFooter() {
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="logo.png" alt="CEMU" style="height:64px; margin-bottom:1rem; filter: brightness(0) invert(1);">
        <p>Centro Educacional de Muriqui — formando crianças com amor, dedicação e excelência. Nossa missão é contribuir para um futuro brilhante para cada aluno.</p>
      </div>
      <div class="footer-col">
        <h4>Páginas</h4>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li><a href="sobre.html">Sobre a Escola</a></li>
          <li><a href="galeria.html">Galeria de Fotos</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="matricula.html">Matrícula</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <ul>
          <li><a href="#">📍 Muriqui, Mangaratiba - RJ</a></li>
          <li><a href="#">📞 (21) 99999-9999</a></li>
          <li><a href="#">📧 contato@cemu.com.br</a></li>
          <li><a href="#">🕐 Seg–Sex: 7h30 às 18h</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 CEMU – Centro Educacional de Muriqui. Todos os direitos reservados.</span>
      <span>Feito com ❤️ para a educação</span>
    </div>
  </footer>
  <a href="https://wa.me/5521999999999" target="_blank" class="whatsapp-float" title="WhatsApp">💬</a>`;
}

function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  m.style.display = m.style.display === 'block' ? 'none' : 'block';
}

// Scroll shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.15)' : '0 2px 20px rgba(0,0,0,0.1)';
});

// Intersection observer for fade-up
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
});
