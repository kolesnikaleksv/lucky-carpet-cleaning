'use strict';

const mobileMenuButton = document.querySelector('.menu-button');
const body = document.body;
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.close-btn');
const menuItemsColection = document.querySelectorAll('.menu-item');

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

mobileMenuButton.addEventListener('click', openMobileMenu);

closeBtn.addEventListener('click', closeMobileMenu);

menuItemsColection.forEach((item) =>
  item.addEventListener('click', closeMobileMenu),
);
