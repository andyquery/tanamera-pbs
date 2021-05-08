let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
let button = burger;

button.onclick = function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
};
