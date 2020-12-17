'use strict';

// variables
const anchors = document.querySelectorAll('[data-scroll]');
const openPopupBtn = document.querySelector('.actions__btn--email');
const popup = document.querySelector('.popup');
const forms = document.querySelectorAll('form');
const header = document.querySelector('.header');

// functions
const checkPageOffset = () => {
  window.pageYOffset >= 100 ? header.classList.add('header--scrolled') : header.classList.remove('header--scrolled')
};

// event listeners
anchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    const block = document.querySelector(id);

    e.preventDefault();

    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
});

openPopupBtn.addEventListener('click', () => {
  openPopupBtn.classList.toggle('active');
  popup.classList.toggle('active');
});

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelectorAll('input[type="text"').forEach(input => {
      input.value = '';
    });
    alert('Отправлено!');
  });
});

// function calls
checkPageOffset();

// window scroll
window.addEventListener('scroll', e => {
  checkPageOffset();
});