// @todo: Темплейт карточки
const placesList = document.querySelector(".places__list");
// @todo: DOM узлы

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function createCard(cardData) {
    const cardTemplate = document.getElementById("card-template").content;
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
    const cardDescription = cardElement.querySelector(".card__description");
    const cardTitle = cardDescription.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    return cardElement;
}

initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    placesList.appendChild(cardElement);
})