// Контейнер для карточек
const placesList = document.querySelector(".places__list");

// Попапы
const popups = document.querySelectorAll(".popup");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Формы и их поля ввода
const profileFormElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const cardFormElement = document.querySelector(".popup__form[name='new-place']");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");

// Кнопки
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close");


// Создание карточки
function createCard(cardData) {
    const cardTemplate = document.getElementById("card-template").content;
    const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    // Лайк
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button_is-active")
    });

    // Удаление
    deleteButton.addEventListener("click", () => {
        cardElement.remove();
    });

    // Открытие попапа с картинкой
    cardImage.addEventListener("click", () => {
        popupImage.src = cardData.link;
        popupImage.alt = cardData.name;
        popupCaption.textContent = cardData.name;
        openModal(imagePopup);
    })

    return cardElement;
}

// Отрисовка начальных карточек
initialCards.forEach((cardData) => {
    placesList.appendChild(createCard(cardData));
});

function openModal(popup) {
    popup.classList.add("popup_is-opened");
}

function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
}

// Обработчик формы профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    document.querySelector(".profile__title").textContent = nameInput.value;
    document.querySelector(".profile__description").textContent = jobInput.value;

    closeModal(profilePopup);
}

// Обработчик формы добавления карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const cardData = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    };

    placesList.prepend(createCard(cardData));
    cardFormElement.reset();
    closeModal(cardPopup);
}


profileFormElement.addEventListener("submit", handleProfileFormSubmit);
cardFormElement.addEventListener("submit", handleCardFormSubmit);

addButton.addEventListener("click", () => openModal(cardPopup));
editButton.addEventListener("click", () => openModal(profilePopup));


closeButtons.forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".popup")));
});

// Анимации для попапов
popups.forEach(popup => {
    popup.classList.add("popup_is-animated");
});