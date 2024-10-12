const list = document.querySelector('.section-content__card-list');

function createCard(card) {
    // init
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.section-content__list-item-card').cloneNode(true);

    // card-header
    cardElement.querySelector('.card__title').textContent = card.header.title;
    cardElement.querySelector('.card__price').textContent = card.header.price;
    cardElement.querySelector('.card__description-card').textContent = card.header.description;

    // card-list
    const listFragment = document.createDocumentFragment();
    Object.values(card.list).map(item => {
        listFragment.append(createCardListItem(item));
    });
    cardElement.querySelector('.card__list').append(listFragment);

    return cardElement;
}

function createCardListItem(item) {
    const listItemCard = document.createElement('li');
    listItemCard.className = 'card__list-item';
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