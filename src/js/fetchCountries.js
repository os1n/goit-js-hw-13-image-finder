import refs from './refs';

function fetchCountries(quiery) {
  //console.log(`Fetch url: ${refs.url}${quiery}`);
  return fetch(`${refs.url}${quiery}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export default fetchCountries;