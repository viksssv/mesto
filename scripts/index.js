    // Элементы .popup
    const profilePopup = document.querySelector('.profile-popup');
    const cardPopup = document.querySelector('.card-popup');
    const imagePopup = document.querySelector('.image-popup');

    // Элементы .profile-popup
    const popupTextName = document.querySelector('.popup__input_text_name');
    const popupTextOccupation = document.querySelector('.popup__input_text_occupation');

    // Элементы .card-popup
    const popupTextPlace = document.querySelector('.popup__input_text_place');
    const popupTextLink = document.querySelector('.popup__input_text_link');

    // Элементы .image-popup
    const popupImage = document.querySelector('.popup__image');
    const popupImageTitle = document.querySelector('.popup__image-title');

    // Элементы на странице профиля
    const profileName = document.querySelector('.profile__name');
    const profileOccupation = document.querySelector('.profile__occupation');
    const profileEditButton = document.querySelector('.profile__edit-button');
    const addButton = document.querySelector('.profile__add-button');

    // Блок Elements для добавления карточек
    const elements = document.querySelector('.elements');

    //Функция открытия popup
    function openPopup(popup) {
      popup.classList.add('popup_opened');
    };

    //Функция закрытия popup
    function closePopup(popup) {
      popup.classList.remove('popup_opened');
    };

    //Закрытие popup нажатием на крестик 
    const exitButton = document.querySelectorAll('.popup__close-button');
    exitButton.forEach(function(button) {
      button.addEventListener('click', function (evt) {
        closePopup(evt.target.closest('.popup')) 
      });
    });

    //Вызов popup-окна редактирования профиля нажатием на кнопку с карандашом
    profileEditButton.addEventListener('click', function () {
      openPopup(profilePopup); 
      popupTextName.value = profileName.textContent;
      popupTextOccupation.value = profileOccupation.textContent;
    });

    //Обработка submit в форме popup-окна редактирования профиля
    function handleProfilePopupFormSubmit (evt) {
      evt.preventDefault();
      profileName.textContent = popupTextName.value;
      profileOccupation.textContent = popupTextOccupation.value;
      closePopup(profilePopup);
  }

    // Слушатель для submit на форме изменения данных профиля
    document.forms["profilePopupForm"].addEventListener('submit', handleProfilePopupFormSubmit); 

    //массив из карточек
    const initialCards = [
  {
    name: 'Чукотские острова',
    link: './images/chukotka.jpg'
  },
  {
    name: 'Домбай',
    link: './images/dombai.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.jpg'
  },
  {
    name: 'Приморье',
    link: './images/primore.jpg'
  },
  {
    name: 'Сибирь',
    link: './images/siberia.jpg'
  },
  {
    name: 'Забайкалье',
    link: './images/zabaikalie.jpg'
  }
];

  //Функция добавления карточки на страницу, ее удаления, реализация лайка
  function createCard(name, link) {
    // работа с template-элементами
    const CardTemplate = document.querySelector('#card-template').content;
    const newCard = CardTemplate.querySelector('.element').cloneNode(true);
    
    const newCardImage = newCard.querySelector('.element__mask');
    newCardImage.src = link;
    newCardImage.alt = name;
    newCard.querySelector('.element__text').textContent = name;
    newCard.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
    newCard.querySelector('.element__delete-button').addEventListener('click', function () {
      newCard.remove();
    });
    newCardImage.addEventListener('click', function() {
      openPopup(imagePopup);
      popupImageTitle.textContent = name;
      popupImage.src = link;
      popupImage.alt = name;
    });
    return(newCard);
  }

// функция, позволяющая ставить на первое место новую карточку
function addCard(card) {
  elements.prepend(card);
}

// добавление карточек на страницу методом ForEach, где параметр card - текущий элемент массива  
initialCards.forEach(function (card) {
  addCard(createCard(card.name, card.link));
});

  //Вызов popup-окна добавления карточки нажатием на кнопку с плюсом
  addButton.addEventListener('click', function () {
  openPopup(cardPopup);
  });

  // обработка submit в форме popup-окна добавления карточки   /////разобрать
  function handleCardPopupFormSubmit (evt) {
    evt.preventDefault();
     if ((popupTextPlace.value) && (popupTextLink.value))
       addCard(createCard(popupTextPlace.value, popupTextLink.value));
     evt.target.reset();
     closePopup(cardPopup);
 }
  // Слушатель для submit на форме добавления карточки
  document.forms["cardPopupForm"].addEventListener('submit', handleCardPopupFormSubmit); 