function createCardUserSays(card) {
    const cardTemplate = document.querySelector('#card-user-says-template').content;
    const cardItem = cardTemplate.querySelector('.section-content__list-item-card-user-says').cloneNode(true);

    const videoAvif = cardItem.querySelector('#CardUserSaysVideoAvif');
    const videoWebm = cardItem.querySelector('#CardUserSaysVideoWebm');
    const videoMp4 = cardItem.querySelector('#CardUserSaysVideoMp4');
    videoAvif.src = card.headerVideo.avif;
    videoWebm.src = card.headerVideo.webm;
    videoMp4.src = card.headerVideo.mp4;

    const cardContent = cardItem.querySelector('.card-user-says__comment');
    cardContent.textContent = card.content;

    const cardNameUser = cardItem.querySelector('.card-user-says__title-user-name');
    const cardUserPlaceWork = cardItem.querySelector('.card-user-says__user-place-work');
    // const cardEstimationUser = cardItem.querySelector('.card-user-says__user-estimation');
    cardNameUser.textContent = card.footer.name;
    cardUserPlaceWork.textContent = card.footer.company;
    
    return cardItem;
}