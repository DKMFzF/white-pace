const list = document.querySelector('.section-content__card-price-list');

function createCard(card) {
    const cardTemplate = document.querySelector('#card-price-template').content;
    const cardElement = cardTemplate.querySelector('.section-content__list-item-card-price').cloneNode(true);

    cardElement.querySelector('.card-price__title').textContent = card.header.title;
    cardElement.querySelector('.card-price__price').textContent = card.header.price;
    cardElement.querySelector('.card-price__description-card').textContent = card.header.description;

    // add-card-item
    const listFragment = document.createDocumentFragment();
    Object.values(card.list).map((item, index) => {
        listFragment.append(createCardListItem(item, index));
    });
    cardElement.querySelector('.card-price__list').append(listFragment);

    return cardElement;
}

// create-card-item
function createCardListItem(item, index) {
    const listItemCard = document.createElement('li');
    listItemCard.className = 'card-price__list-item';
    if (index === 3 || index === 5) listItemCard.classList.add('card-price__list_additional-inset');
    listItemCard.textContent = item;
    return listItemCard;
}

// add in DOM
const fragment = document.createDocumentFragment();
initialCard.forEach(card => {
    const cardElement = createCard(card);   
    fragment.append(cardElement);
});
list.append(fragment);