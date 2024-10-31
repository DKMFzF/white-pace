function createCardUserSays(card) {
  const cardTemplate = document.querySelector(
    '#card-user-says-template'
  ).content;
  const cardItem = cardTemplate
    .querySelector('.section-content__list-item-card-user-says')
    .cloneNode(true);

  const imgAvatar = cardItem.querySelector('#cardUserSaysAvatar');
  imgAvatar.src = card.imgVideo.src;
  imgAvatar.alt = card.imgVideo.alt;

  const cardContent = cardItem.querySelector('.card-user-says__comment');
  cardContent.textContent = card.content;

  const cardNameUser = cardItem.querySelector(
    '.card-user-says__title-user-name'
  );
  cardNameUser.textContent = card.footer.name;

  addClassInCardUserSays(card, cardItem);

  return cardItem;
}

function addClassInCardUserSays(card, cardItem) {
  const cardUserPlaceWork = cardItem.querySelector(
    '.card-user-says__container-user-place-work'
  );
  switch (card.name) {
    case 'avatar-1':
      cardItem
        .querySelector('.card-user-says__img')
        .classList.add('card-user-says__img_avatar-inset-first');
      addClassCompanyInCardUsers(
        card,
        cardUserPlaceWork,
        'card-user-says__user-place-work_x-letter-first-card',
        'card-user-says__user-place-work_y-letter-first-card',
        'card-user-says__user-place-work_z-letter-first-card'
      );
      break;
    case 'avatar-2':
      cardItem
        .querySelector('.card-user-says__img')
        .classList.add('card-user-says__img_avatar-inset-second');
      addClassCompanyInCardUsers(
        card,
        cardUserPlaceWork,
        'card-user-says__user-place-work_g-letter-second-card',
        'card-user-says__user-place-work_o-letter-second-card',
        'card-user-says__user-place-work_o-double-letter-second-card',
        'card-user-says__user-place-work_g-double-letter-second-card',
        'card-user-says__user-place-work_l-letter-second-card',
        'card-user-says__user-place-work_e-letter-second-card'
      );
      break;
    case 'avatar-3':
      cardItem
        .querySelector('.card-user-says__img')
        .classList.add('card-user-says__img_avatar-inset-third');
      addClassCompanyInCardUsers(
        card,
        cardUserPlaceWork,
        'card-user-says__user-place-work_y-letter-third-card',
        'card-user-says__user-place-work_a-letter-third-card',
        'card-user-says__user-place-work_n-letter-third-card',
        'card-user-says__user-place-work_d-letter-third-card',
        'card-user-says__user-place-work_e-letter-third-card',
        'card-user-says__user-place-work_x-letter-third-card'
      );
      break;
  }
}

function addClassCompanyInCardUsers(card, cardUserPlaceWork, ...className) {
  const textLine = card.footer.company.split('');
  if (textLine.length !== className.length)
    return console.log('ERROR: NONE CARD');
  textLine.forEach((element, index) => {
    const newElement = document.createElement('span');
    newElement.classList.add(className[index]);
    newElement.textContent = element;
    cardUserPlaceWork.append(newElement);
  });
}
