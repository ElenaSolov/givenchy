const page = document.querySelector('.page');

// menu hadling
const headerEl = document.querySelector('.header');
const menuEl = page.querySelector('.header__nav');

headerEl.addEventListener('click', headerClickHandler);

function headerClickHandler(evt) {
  if (evt.target.classList.contains('header__menu-btn')) openMenu();
  if (evt.target.classList.contains('header__close')) closeMenu();
}
function openMenu() {
  menuEl.classList.add('header__nav_opened');
}
function closeMenu() {
  menuEl.classList.remove('header__nav_opened');
}