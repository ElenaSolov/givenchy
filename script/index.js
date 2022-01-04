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

// random photo change
const allPhotoes = page.querySelectorAll('.looks__img');
setInterval(()=> changePhoto(), 2000)
function changePhoto (){
  const photo1 = getRandomPhoto();
  const photo2 = getRandomPhoto();

  photo1.classList.remove('fade-in');
  photo2.classList.remove('fade-in');
  photo1.classList.add('fade-out');
  photo2.classList.add('fade-out');
  setTimeout(() => {
    photo1.classList.remove('fade-out');
    photo2.classList.remove('fade-out');
    photo1.classList.add('fade-in');
    photo2.classList.add('fade-in');
    let temp = photo1.src;
    photo1.src = photo2.src;
    photo2.src = temp;
  }, 300);

}

function getRandomPhoto() {
  return allPhotoes[Math.floor(Math.floor(Math.random() * (allPhotoes.length-1)))];
}