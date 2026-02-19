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
  if (e.target === modelWindow) modelWindow.style.display = 'none';
};
