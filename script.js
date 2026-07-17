'use strict';

/* ---------- Menu mobile ---------- */
var toggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.classList.toggle('is-active', isOpen);
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Reveal on scroll ---------- */
var revealEls = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && revealEls.length) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add('is-visible');
  });
}

/* ---------- Modal pagamento ---------- */

function abrirModalPagamento() {
  document.getElementById('modalPagamento').style.display = 'flex';
}

function abrirModalConfirmacao() {
  document.getElementById('modalPagamento').style.display = 'none';
  document.getElementById('modalConfirmacao').style.display ='flex';
}

function fecharModal() {
  document.getElementById('modalPagamento').style.display = 'none';
}

function fecharTudo() {
  document.getElementById('modalConfirmacao').style.display = 'none';
}

/* ---------- Header com sombra ao rolar ---------- */

var header = document.getElementById('header');

if (header) {
  var applyShadow = function () {
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 6px 20px var(--color-box-shadow)';
    } else {
      header.style.boxShadow = 'none';
    }
  };

  applyShadow();
  window.addEventListener('scroll', applyShadow, { passive: true });
}