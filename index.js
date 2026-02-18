'use strict';

const mobileMenuButton = document.querySelector('.menu-button');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.close-btn');
const menuItemsColection = document.querySelectorAll('.menu-item');
console.log(menuItemsColection);

mobileMenuButton.addEventListener('click', () => {
  openMobileMenu();
});

closeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('isOpen')) {
    closeMobileMenu();
  }
});

menuItemsColection.forEach((item) => {
  item.addEventListener('click', () => {
    closeMobileMenu();
  });
});

const closeMobileMenu = () => {
  document.body.classList.remove('isOpen');
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
