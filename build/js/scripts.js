let features = document.querySelectorAll('.js-slider__list-item');
let controls = document.querySelectorAll('.js-controls__button');

if ( document.documentElement.clientWidth >= 1200 ) {
  features[0].classList.add('slider__list-item--active');
  features[1].classList.add('slider__list-item--active');
  features[2].classList.remove('slider__list-item--active');
  features[3].classList.remove('slider__list-item--active');

  features[0].classList.remove('visually-hidden');
  features[1].classList.remove('visually-hidden');
  features[2].classList.add('visually-hidden');
  features[3].classList.add('visually-hidden');

  controls[0].classList.add('controls__button--choosed');
  controls[1].classList.add('controls__button--hidden');
  controls[3].classList.add('controls__button--hidden');
}

controls[0].onclick = function() {
  if ( document.documentElement.clientWidth < 1200 ) {

    controls[0].classList.add('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');
  
    features[0].classList.add('slider__list-item--active');
    features[1].classList.remove('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');
  
    features[0].classList.remove('visually-hidden');
    features[1].classList.add('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.add('visually-hidden');
  }

  if ( document.documentElement.clientWidth >= 1200 ) {
    controls[0].classList.add('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');

    features[0].classList.add('slider__list-item--active');
    features[1].classList.add('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');

    features[0].classList.remove('visually-hidden');
    features[1].classList.remove('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.add('visually-hidden');
  }
}

controls[1].onclick = function() {
  if ( document.documentElement.clientWidth < 1200 ) {

    controls[0].classList.remove('controls__button--choosed');
    controls[1].classList.add('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');
  
    features[0].classList.remove('slider__list-item--active');
    features[1].classList.add('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');
  
    features[0].classList.add('visually-hidden');
    features[1].classList.remove('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.add('visually-hidden');
  }
}

controls[2].onclick = function() {
  if ( document.documentElement.clientWidth < 1200 ) {

    controls[0].classList.remove('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.add('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');
  
    features[0].classList.remove('slider__list-item--active');
    features[1].classList.remove('slider__list-item--active');
    features[2].classList.add('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');
  
    features[0].classList.add('visually-hidden');
    features[1].classList.add('visually-hidden');
    features[2].classList.remove('visually-hidden');
    features[3].classList.add('visually-hidden');
  }

  if ( document.documentElement.clientWidth >= 1200 ) {
    controls[0].classList.remove('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.add('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');

    features[0].classList.remove('slider__list-item--active');
    features[1].classList.remove('slider__list-item--active');
    features[2].classList.add('slider__list-item--active');
    features[3].classList.add('slider__list-item--active');

    features[0].classList.add('visually-hidden');
    features[1].classList.add('visually-hidden');
    features[2].classList.remove('visually-hidden');
    features[3].classList.remove('visually-hidden');
  }
}

controls[3].onclick = function() {
  if ( document.documentElement.clientWidth < 1200 ) {

    controls[0].classList.remove('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.add('controls__button--choosed');
  
    features[0].classList.remove('slider__list-item--active');
    features[1].classList.remove('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.add('slider__list-item--active');
  
    features[0].classList.add('visually-hidden');
    features[1].classList.add('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.remove('visually-hidden');
  }
}

window.addEventListener('resize', function(event) {
  if ( document.documentElement.clientWidth >= 1200 ) {
    features[0].classList.add('slider__list-item--active');
    features[1].classList.add('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');
  
    features[0].classList.remove('visually-hidden');
    features[1].classList.remove('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.add('visually-hidden');
  
    controls[0].classList.add('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');

    controls[1].classList.add('controls__button--hidden');
    controls[3].classList.add('controls__button--hidden');
  } 
    else if ( document.documentElement.clientWidth < 1200 ) {

    controls[0].classList.add('controls__button--choosed');
    controls[1].classList.remove('controls__button--choosed');
    controls[2].classList.remove('controls__button--choosed');
    controls[3].classList.remove('controls__button--choosed');

    controls[1].classList.remove('controls__button--hidden');
    controls[3].classList.remove('controls__button--hidden');
  
    features[0].classList.add('slider__list-item--active');
    features[1].classList.remove('slider__list-item--active');
    features[2].classList.remove('slider__list-item--active');
    features[3].classList.remove('slider__list-item--active');
  
    features[0].classList.remove('visually-hidden');
    features[1].classList.add('visually-hidden');
    features[2].classList.add('visually-hidden');
    features[3].classList.add('visually-hidden');
  }
});

let headerMenu = document.querySelector('.js-header-menu');
let headerSubMenuList = document.querySelector('.js-header-menu__submenu-list');
let headerSubMenuButton = document.querySelector('.js-header-menu__submenu');
let buttonOpen = document.querySelector('.js-menu-button--open');
let buttonClose = document.querySelector('.js-menu-button--close');
let windowsWidht = document.documentElement.clientWidth;

window.addEventListener('resize', function(event) {
  windowsWidht = document.documentElement.clientWidth;
});

if ( windowsWidht < 1024 ) {
  buttonOpen.onclick = function() {
    headerMenu.classList.add('header-menu--open');
    buttonOpen.classList.add('header__menu-button--hidden');
    buttonClose.classList.remove('header__menu-button--hidden');
    headerMenu.setAttribute('aria-expanded', true);
  }

  buttonClose.onclick = function() {
    headerMenu.classList.remove('header-menu--open');
    buttonOpen.classList.remove('header__menu-button--hidden');
    buttonClose.classList.add('header__menu-button--hidden');
    headerMenu.setAttribute('aria-expanded', false);
  }

  document.body.onclick = function (e) {
    e = e || event;
    target = e.target || e.srcElement;
  
    if ( (headerMenu.getAttribute('aria-expanded') == 'true') && !(headerMenu.contains(target)) && !(buttonOpen.contains(target)) && !(buttonClose.contains(target)) ) {
  
      headerMenu.classList.remove('header-menu--open');
      buttonOpen.classList.remove('header__menu-button--hidden');
      buttonClose.classList.add('header__menu-button--hidden');
      headerMenu.setAttribute('aria-expanded', false);
    }
  }
}

headerSubMenuButton.onclick = function() {
  headerSubMenuButton.classList.toggle('header-menu__submenu--open');
  headerSubMenuList.classList.toggle('header-menu__submenu-list--open');

  if (headerSubMenuList.getAttribute('aria-expanded') == 'true') {
    headerSubMenuList.setAttribute('aria-expanded', false);
  } else {
    headerSubMenuList.setAttribute('aria-expanded', true);
  }
}