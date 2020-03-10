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

  controls[0].onclick = function() {
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

  controls[2].onclick = function() {
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

if ( document.documentElement.clientWidth < 1200 ) {
  controls[0].onclick = function() {
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

  controls[1].onclick = function() {
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

  controls[2].onclick = function() {
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

  controls[3].onclick = function() {
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


