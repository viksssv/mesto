  const profilePopup = document.querySelector('.profile-popup');
  const cardPopup = document.querySelector('.card-popup');
  const imagePopup = document.querySelector('.image-popup');
  const popupTextName = document.querySelector('.popup__input_text_name');
  const popupTextOccupation = document.querySelector('.popup__input_text_occupation');
  const popupTextPlace = document.querySelector('.popup__input_text_place');
  const popupTextLink = document.querySelector('.popup__input_text_link');
  const popupImage = document.querySelector('.popup__image');
  const popupImageTitle = document.querySelector('.popup__image-title');
  const profileName = document.querySelector('.profile__name');
  const profileOccupation = document.querySelector('.profile__occupation');
  const profileEditButton = document.querySelector('.profile__edit-button');
  const addButton = document.querySelector('.profile__add-button');
  const elements = document.querySelector('.elements');

  function openPopup(popup) {
    popup.classList.add('popup_opened');
  };

  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  };

  //Закрытие popup нажатием на крестик 
  const exitButtons = document.querySelectorAll('.popup__close-button');
  exitButtons.forEach(function(button) {
    button.addEventListener('click', function (evt) {
      closePopup(evt.target.closest('.popup')) 
    });
  });

  //Открытие popup редактирования профиля
  profileEditButton.addEventListener('click', function () {
    openPopup(profilePopup); 
    popupTextName.value = profileName.textContent;
    popupTextOccupation.value = profileOccupation.textContent;
  });

  //Обработчик и слушатель формы редактирования профиля
  function handleProfilePopupFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupTextName.value;
    profileOccupation.textContent = popupTextOccupation.value;
    closePopup(profilePopup);
  }
  document.forms['profilePopupForm'].addEventListener('submit', handleProfilePopupFormSubmit); 

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

  function getCard(name, link) {
    const cardTemplate = document.getElementById('card-template').content;
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);
    const newCardTitle = newCard.querySelector('.element__text');
    newCardTitle.textContent = name;
    const newCardImage = newCard.querySelector('.element__mask');
    newCardImage.setAttribute('src', link);
    newCard.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active')});
    newCard.querySelector('.element__delete-button').addEventListener('click', function () {
        newCard.remove();
    }); 
    newCardImage.addEventListener('click', function() { 
      openPopup(imagePopup); 
      popupImageTitle.textContent = name; 
      popupImage.src = link; 
      popupImage.alt = name; 
    });
    return newCard;
  }
  
  function createCard(name, link) {
    const newCard = getCard(name, link)
    elements.prepend(newCard);
  }

  //Добавление карточек на страницу методом ForEach, где параметр card - текущий элемент массива  
  initialCards.forEach(function (card) {
    createCard(card.name, card.link);
  });

  //Открытие формы добавления карточки нажатием на кнопку с плюсом
  addButton.addEventListener('click', function () {
    openPopup(cardPopup);
  });

  //Обработчик и слушатель формы добавления карточки 
  function handleCardPopupFormSubmit (evt) {
    evt.preventDefault();
    if ((popupTextPlace.value) && (popupTextLink.value))
    createCard(popupTextPlace.value, popupTextLink.value);
    evt.target.reset();
    closePopup(cardPopup);
  };
  document.forms['cardPopupForm'].addEventListener('submit', handleCardPopupFormSubmit); 
 