let burger = document.querySelector('.header__burger');
burger.classList.add('active');

let menu = document.querySelector('.header__menu');
menu.classList.add('active');

let button = burger;

button.onclick = function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
};
