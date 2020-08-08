//  с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API

import refs from './refs';

let pageNumber = 1;

let oprions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
}

function fetchData(query) {
    return fetch(`${refs.url}&q=${query}&page=${pageNumber}&per_page=${refs.quantityPP}&key=${refs.key}`, oprions)
    .then(response => response.json())
    .catch(error => console(error));
};

export default fetchData;