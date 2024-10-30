function createCardPrice(card) {
    const cardTemplate = document.querySelector('#card-price-template').content;
    const cardElement = cardTemplate.querySelector('.section-content__list-item-card-price').cloneNode(true);

    cardElement.querySelector('.card-price__title').textContent = card.header.title;
    cardElement.querySelector('.card-price__price').textContent = card.header.price;
    cardElement.querySelector('.card-price__description-card').textContent = card.header.description;

    // add-card-item
    const listFragment = document.createDocumentFragment();
    Object.values(card.list).map((item, index) => {
        listFragment.append(
            createCardListItemPrice(card, item, index, 
                [...listFragment.querySelectorAll('.card-price__list-item')])
        );
    });
    cardElement.querySelector('.card-price__list').append(listFragment);

    return cardElement;
}

// create-card-item
function createCardListItemPrice(card, item, index, dataListCard) {
    const listItemCard = document.createElement('li');
    const cardname = card.cardName;
    listItemCard.className = 'card-price__list-item';
    
    // add specific-class 
    if (index === 3 || index === 5) listItemCard.classList.add('card-price__list_additional-inset');
    if (cardname == 'free' && dataListCard.length >= 2 || cardname == 'personal' && dataListCard.length >= 4) {
        listItemCard.classList.add('card-price__list-item_not-support');
    }

    listItemCard.textContent = item;
    return listItemCard;
}