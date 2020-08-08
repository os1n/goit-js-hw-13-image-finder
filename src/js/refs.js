const refs = {
  galleryList: document.querySelector('.gallery-list'),

  loadMoreBtn: document.querySelector('.loadMoreBtn-js'),
  
  inputText: document.querySelector('#search-form'),

  Gallery: document.querySelector('.gallery'),
  url: `https://pixabay.com/api/?image_type=photo&orientation=horizontal`,
  key: '17813199-14e2fb5ae7849e8e0c0c28a8e',
  quantityPP: 12,
};

export default refs;
