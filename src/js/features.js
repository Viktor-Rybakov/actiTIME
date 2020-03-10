let features = document.querySelectorAll('.js-slider__list-item');

console.log (features);

if ( document.documentElement.clientWidth >= 1200 ) {
  features[0].classList.add('slider__list-item--active');
  features[1].classList.add('slider__list-item--active');
}