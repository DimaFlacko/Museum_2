'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const langTopAction = document.querySelector('.top-actives__lang');
  const headerLinks = document.querySelectorAll('[data-link="header"]');

  headerLinks.forEach(item => {
    item.addEventListener('click', () => {
      body.classList.remove('page__body--active');
      menu.classList.remove('menu--active');
      burgerBtn.classList.remove('burger--active');
      body.classList.remove('page__body--with-menu');
    });
  });

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    burgerBtn.classList.toggle('burger--active');
    langTopAction.classList.toggle('top-actives__lang--desktop');
    document.body.classList.toggle('page__body--active');
    body.classList.toggle('page__body--with-menu');
  });

  const lang = document.querySelector('.lang');
  const langShow = lang.querySelector('.lang__show');
  const langInner = lang.querySelector('.lang__items');
  const langs = ['UA', 'EN'];

  langs.forEach(item => {
    langInner.innerHTML += `
      <span class="lang__item">${item}</span>
    `;
  });

  const langItems = langInner.querySelectorAll('.lang__item');

  function activeLang(i = 0) {
    langShow.prepend(langItems[i]);
  }

  function removeLang() {
    langShow.innerHTML = '';
  }

  removeLang();
  activeLang();

  langInner.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('lang__item')) {
      langItems.forEach((item, i) => {
        if (e.target === item) {
          langItems.forEach(itm => langItems[i].replaceWith(itm));
          removeLang();
          activeLang(i);
        }
      });
    }
  });

  const form = document.querySelector('.form__field');
  const inputs = document.querySelectorAll('.form__input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(i => {
      i.value = '';
    });
  });
});
