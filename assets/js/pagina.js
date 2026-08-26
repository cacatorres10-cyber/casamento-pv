/* Casamento Possível : comportamentos da página */
(function () {
  'use strict';

  /* 1. Slots de foto ainda sem arquivo viram placeholder elegante.
        Basta soltar o arquivo com o nome certo em assets/fotos/ que a foto aparece. */
  function marcarVazia(img) {
    var slot = img.closest('.foto');
    if (slot) slot.classList.add('vazia');
  }
  Array.prototype.forEach.call(document.querySelectorAll('.foto img'), function (img) {
    var slot = img.closest('.foto');
    if (slot && !slot.hasAttribute('data-legenda')) {
      slot.setAttribute('data-legenda', img.getAttribute('alt') || 'Foto');
    }
    img.addEventListener('error', function () { marcarVazia(img); });
    if (img.complete && img.naturalWidth === 0) marcarVazia(img);
  });

  /* 2. Barra fixa de CTA aparece depois do primeiro scroll e some sobre a oferta. */
  var barra = document.getElementById('barraFixa');
  var oferta = document.getElementById('oferta');
  if (barra) {
    var atualizar = function () {
      var passouHero = window.scrollY > window.innerHeight * 0.85;
      var naOferta = false;
      if (oferta) {
        var r = oferta.getBoundingClientRect();
        naOferta = r.top < window.innerHeight && r.bottom > 0;
      }
      barra.classList.toggle('visivel', passouHero && !naOferta);
    };
    window.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    atualizar();
  }

  /* 3. Ano do rodapé. */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* 4. FAQ: abrir uma fecha as outras. */
  var faqs = document.querySelectorAll('.faq details');
  Array.prototype.forEach.call(faqs, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(faqs, function (outro) {
        if (outro !== d) outro.open = false;
      });
    });
  });
})();
