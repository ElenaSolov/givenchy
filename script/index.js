const page = document.querySelector('.page');

// menu hadling
const headerEl = document.querySelector('.header');
const menuEl = page.querySelector('.header__nav');

headerEl.addEventListener('click', headerClickHandler);

function headerClickHandler(evt) {
  if (evt.target.classList.contains('header__menu-btn')) openMenu();
  if (evt.target.classList.contains('header__close')||evt.target.classList.contains('header__link')) closeMenu();
}
function openMenu() {
  menuEl.classList.add('header__nav_opened');
}
function closeMenu() {
  menuEl.classList.remove('header__nav_opened');
}

// smooth scroll
const navLinks = page.querySelectorAll('.header__link');
for (let link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(evt) {
  evt.preventDefault()

  const blockID = evt.target.getAttribute('href').slice(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}