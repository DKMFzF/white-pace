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
    Object.keys(card.list).map(item => {
        cardElement.querySelector('.card__list').append(createCardListItem(item));
    });

    return cardElement;
};

function createCardListItem(item) {
    const listItemCard = document.createElement('li');
    listItemCard.className = 'card__list-item';
    listItemCard.textContent = item;
    return listItemCard;
}

initialCard.forEach(card => {
    const cardElement = createCard(card);   
    list.append(cardElement);
});