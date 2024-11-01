const listCardPrice = document.querySelector(
  '.section-content__card-price-list'
);
const listCardUsers = document.querySelector(
  '.section-users-say__list-user-says'
);

// header-container-text
const itemsHeader = document.querySelectorAll('.header__list-item');
const buttonHeader = document.querySelectorAll('.header-button');

// sectionDescriptionProject
const descriptionProjectTitle = document.querySelector(
  '.section-description-project__title'
);
const descriptionProjectParagraph = document.querySelector(
  '.section-description-project__paragraph'
);

setTimeout(() => {
  // header
  displayTextWithEffect(
    textContentDatabase.header.headerListItemFirst,
    itemsHeader[0],
    100
  );
  displayTextWithEffect(
    textContentDatabase.header.headerListItemSecond,
    itemsHeader[1],
    100
  );
  displayTextWithEffect(
    textContentDatabase.header.headerListItemThird,
    itemsHeader[2],
    100
  );
  displayTextWithEffect(
    textContentDatabase.header.headerListItemFourth,
    itemsHeader[3],
    100
  );
  displayTextWithEffect(
    textContentDatabase.header.buttonLogin,
    buttonHeader[0],
    100
  );
  displayTextWithEffect(
    textContentDatabase.header.buttonFullText,
    buttonHeader[1],
    100
  );

  // section-content
  displayTextWithEffect(
    textContentDatabase.sectionDescriptionProject.title,
    descriptionProjectTitle,
    20
  );
  displayTextWithEffect(
    textContentDatabase.sectionDescriptionProject.paragraph,
    descriptionProjectParagraph,
    3
  );
}, 5500);

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
