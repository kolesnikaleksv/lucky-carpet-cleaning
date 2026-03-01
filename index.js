'use strict';
import PhotoSwipeLightbox from '/libraries/photoswipe-lightbox.esm.min.js';

const mobileMenuButton = document.querySelector('.menu-button');
const body = document.body;
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.close-btn');
const menuItemsColection = document.querySelectorAll('.menu-item');
const formOpenBtn = document.querySelectorAll('.form-open');
const modelWindow = document.querySelector('.model-window');
const scrollBtn = document.getElementById('scrollTopBtn');
const contacts = document.getElementById('testimonials');
const form = document.getElementById('contactForm');
const thankYouMessage = document.querySelector('.thankyou-message');
const blockForm = document.querySelector('.form-block');

const closeMobileMenu = () => {
  body.classList.remove('isOpen');
  menuWrapper.classList.remove('wrapper-menu-active');
  mobileMenuButton.classList.remove('fade');
};

const openMobileMenu = () => {
  document.body.classList.add('isOpen');
  menuWrapper.classList.add('wrapper-menu-active');
  mobileMenuButton.classList.add('fade');
};

const openContactForm = () => {
  body.classList.add('isOpen');
  modelWindow.style.display = 'flex';
};

formOpenBtn.forEach((item) => item.addEventListener('click', openContactForm));

mobileMenuButton.addEventListener('click', openMobileMenu);

closeBtn.addEventListener('click', closeMobileMenu);

menuItemsColection.forEach((item) =>
  item.addEventListener('click', closeMobileMenu),
);

document.querySelector('.submit-btn').addEventListener('click', () => {
  modelWindow.style.display = 'flex';
});

window.onclick = (e) => {
  if (e.target === modelWindow) {
    modelWindow.style.display = 'none';
    body.classList.remove('isOpen');
  } else if (e.target === document.querySelector('.ok-btn')) {
    body.classList.remove('isOpen');
    modelWindow.style.display = 'none';
    blockForm.style.display = 'block';
    thankYouMessage.style.display = 'none';
  }
};

const swiper = new Swiper('.testimonials-swiper', {
  speed: 800,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: {
    delay: 3000,
  },
});

const swiperPrices = new Swiper('.prices-swiper', {
  speed: 1200,
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
  },

  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    777: {
      slidesPerView: 2,
      spaceBetween: 20,
      effect: 'slide',
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 40,
      effect: 'slide',
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 30,
      effect: 'slide',
    },
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

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--responsive-images',
  children: 'a',
  pswpModule: () => import('/libraries/photoswipe.esm.js'),
});
lightbox.init();

window.addEventListener('scroll', () => {
  const contactsPosition = contacts.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (contactsPosition <= windowHeight) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch('sendMail.php', { method: 'POST', body: new FormData(form) })
    .then((response) => response.text())
    .then((data) => {
      thankYouMessage.style.display = 'flex';
      blockForm.style.display = 'none';
      form.reset();
    })
    .catch((error) => console.error('Error:', error));
});

function initMap() {
  const centerOfKent = { lat: 51.2014, lng: 0.9195 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: centerOfKent,
    zoom: 9,
    mapId: 'DEMO_MAP_ID', // testing ID — works
    // mapId: '797623e6313ec0a6b5f876cf',
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });
  new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 51.2726, lng: 0.5253 },
    title: 'Maidstone',
  });
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 51.0814, lng: 1.1695 },
    title: 'Folkestone',
  });
  new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 51.1465, lng: 0.875 },
    title: 'Ashford',
  });

  new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 51.1264, lng: 1.3162 },
    title: 'Dover',
  });

  new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 51.28, lng: 1.08 },
    title: 'Canterbury',
  });
}
window.initMap = initMap;
