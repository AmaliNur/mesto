const placesList = document.querySelector(".places__list");

//const allPopups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileFormElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const cardCloseButton = document.querySelector(".popup__close");
const imageCloseButton = document.querySelector(".popup__close");

const cardFormElement = document.querySelector(".popup__form")
const closeButtons = document.querySelectorAll(".popup__close");

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

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
} 

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    const profileTitle = document.querySelector(".profile__title");
    const profileDescription  = document.querySelector(".profile__description");

    profileTitle.textContent = nameValue;
    profileDescription.textContent = jobValue;

    closeModal(profilePopup);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault(); 

    const cardNameInput = cardFormElement.querySelector(".popup__input_type_card-name");
    const cardLinkInput = cardFormElement.querySelector(".popup__input_type_url");

    const cardData = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    };

    const newCardELement = createCard(cardData);
    const placesList = document.querySelector('.places__list');
    placesList.prepend(newCardELement);

    closeModal(cardPopup);

}

profileFormElement.addEventListener('submit', handleProfileFormSubmit); 

cardFormElement.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', function() {
    openModal(cardPopup); 
}); 

editButton.addEventListener('click', function() {
    openModal(profilePopup); 
}); 

closeButtons.forEach(button => {
    button.addEventListener("click", function () {
        const popup = button.closest(".popup");
        closeModal(popup);
    });
});
