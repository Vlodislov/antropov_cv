  function setLang(lang) {
    document.querySelectorAll('.lang-opt').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.querySelectorAll('[data-ru][data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    document.documentElement.lang = lang;
  }