import './styles.css';
import refs from './js/refs';

import fetchCountriesModule from './js/fetchCountries';

import itemCountry from './templates/templateCountry.hbs';
import itemListOfCountries from './templates/templateListOfCountries.hbs';

// External Dependencies
var debounce = require('lodash/debounce');
import toastr from "toastr";
import "toastr/build/toastr.css";


 refs.inputText.addEventListener('input', debounce(handleInput, 500)); // Input Listener

function handleInput(event) {
  event.preventDefault();
  //console.log('Start fetching countries');
  refs.countriesGalleryRef.textContent = '';

  const input = refs.inputText.value;

  if (input) {
    fetchCountriesModule(input).then(data => markupCountries(data));
  }
}

function markupCountries(coutries) {
  //console.log(coutries);
  if (coutries.length > 10) {
    toastr.info('Too many countries, try to specify the search query.');
    return;
  }
  if (coutries.length === 1) {
    refs.countriesGalleryRef.insertAdjacentHTML(
      'afterbegin',
      itemCountry(coutries),
    );
  }

  if (coutries.message === 'Not Found') {
    toastr.info('Error during search. Please check spelling and try again.');
  }

  if (coutries.length >= 2) {
    refs.countriesGalleryRef.insertAdjacentHTML(
      'afterbegin',
      itemListOfCountries(coutries),
    );
  }
}
