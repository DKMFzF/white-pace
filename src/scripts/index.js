const list = document.querySelector('.section-content__card-price-list');

// add card-price in DOM
const fragment = document.createDocumentFragment();
dataCardPrice.forEach(card => {
    const cardElement = createCard(card);
    fragment.append(cardElement);
});
list.append(fragment);