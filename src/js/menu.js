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

document.body.onclick = function (e) {
  e = e || event;
  target = e.target || e.srcElement;

  if ( (headerMenu.getAttribute('aria-expanded') == 'true') && !(headerMenu.contains(target)) && !(buttonOpen.contains(target)) && !(buttonClose.contains(target)) ) {
    console.log(target);

    headerMenu.classList.remove('header-menu--open');
    buttonOpen.classList.remove('header__menu-button--hidden');
    buttonClose.classList.add('header__menu-button--hidden');
    headerMenu.setAttribute('aria-expanded', false);
  }
}