import './styles.css';
import refs from './js/refs';

// External dependancies
//import 'bootstrap';

// Modules
import itemsDOM from './templates/templateCards.hbs';
import fetchData from './js/apiService';

// Global variables
let pageNumber = 1;

// fetchData('cat').then(data => {
//   console.log('Data:', data);
// });

function markupCards(cards) {
  refs.Gallery.insertAdjacentHTML('beforeend', itemsDOM(cards));
}

console.log('Input', refs.inputText);

refs.inputText.addEventListener('submit', event => handleSubmit(event));

function handleSubmit(event) {
  event.preventDefault();
  refs.Gallery.textContent = '';
  let input = event.currentTarget.elements.query.value;
  //console.log('Input:',input);
  fetchData(input, pageNumber).then(data => {
    console.log(data.hits);
    markupCards(data.hits);
  });
}

refs.loadMoreBtn.addEventListener('click', loadMoreHandler(event));

function loadMoreHandler(event) {
    event.preventDefault();
    page += 1;
    console.log('Load more pressed');
    // fetchData(input, pageNumber).then(data => {
    //     console.log(data.hits);
    //     markupCards(data.hits);
    //   });
}
