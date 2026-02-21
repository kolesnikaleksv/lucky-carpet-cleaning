'use strict';

const mobileMenuButton = document.querySelector('.menu-button');
const body = document.body;
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.close-btn');
const menuItemsColection = document.querySelectorAll('.menu-item');
const formOpenBtn = document.querySelector('.form-open');
const modelWindow = document.querySelector('.model-window');

const closeMobileMenu = () => {
  body.classList.remove('isOpen');
  menuWrapper.classList.remove('wrapper-menu-active');
  menu.classList.remove('mobile-menu-active');
  mobileMenuButton.classList.remove('hidden');
};

const openMobileMenu = () => {
  document.body.classList.add('isOpen');
  menuWrapper.classList.add('wrapper-menu-active');
  menu.classList.add('mobile-menu-active');
  mobileMenuButton.classList.add('hidden');
};

const openContactForm = () => {
  body.classList.add('isOpen');
  modelWindow.style.display = 'flex';
};

formOpenBtn.addEventListener('click', openContactForm);

mobileMenuButton.addEventListener('click', openMobileMenu);

closeBtn.addEventListener('click', closeMobileMenu);

menuItemsColection.forEach((item) =>
  item.addEventListener('click', closeMobileMenu),
);

document.querySelector('.submit-btn').addEventListener('click', () => {
  body.classList.remove('isOpen');
  modelWindow.style.display = 'none';
});

window.onclick = (e) => {
  if (e.target === modelWindow) {
    modelWindow.style.display = 'none';
    body.classList.remove('isOpen');
    f;
  }
};

const swiper = new Swiper('.swiper', {
  speed: 800,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: {
    delay: 3000,
  },
});

const smoothScrollTo = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * percent);
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
};

menu.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScrollTo(e.target.id.slice(5));
});
