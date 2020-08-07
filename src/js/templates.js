const listMarkup = itemCountry(itemsToShow);
console.log(itemsToShow);
console.log(listMarkup);

countriesGalleryRef.insertAdjacentHTML('afterbegin', listMarkup);
