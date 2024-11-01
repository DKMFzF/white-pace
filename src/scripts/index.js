const listCardPrice = document.querySelector(
  '.section-content__card-price-list'
);
const listCardUsers = document.querySelector(
  '.section-users-say__list-user-says'
);

// add card-price in DOM
const fragmentCardPrice = document.createDocumentFragment();
dataCardPrice.forEach((card) => {
  const cardElement = createCardPrice(card);
  fragmentCardPrice.append(cardElement);
});
listCardPrice.append(fragmentCardPrice);

// add card-users-says in DOM
const fragmentCardUsersSays = document.createDocumentFragment();
dataCardUserSays.forEach((card) => {
  const cardElement = createCardUserSays(card);
  fragmentCardUsersSays.append(cardElement);
});
listCardUsers.append(fragmentCardUsersSays);
