    let profileEditButton = document.querySelector('.profile__edit-button');
    let popup = document.querySelector('.popup');
    let popupTextName = document.querySelector('.popup__input_text_name');
    let popupTextOccupation = document.querySelector('.popup__input_text_occupation');
    let profileName = document.querySelector('.profile__name');
    let profileOccupation = document.querySelector('.profile__occupation');
    let popupCloseButton = document.querySelector('.popup__close-button');
    let popupForm = document.querySelector('.popup__form');
    let popupSubmitButton = document.querySelector('.popup__submit-button')

    function profileEditClick() {
        popup.classList.add('popup_opened');
        popupTextName.value = profileName.textContent;
        popupTextOccupation.value = profileOccupation.textContent;
    }

    profileEditButton.addEventListener('click', profileEditClick);

    function popupClose() {
        popup.classList.remove('popup_opened');
    };

    popupCloseButton.addEventListener('click', popupClose);

    function handleFormSubmit (evt) {
        evt.preventDefault();
        profileName.textContent = popupTextName.value;
        profileOccupation.textContent = popupTextOccupation.value;
        popupClose();
    }

    popupForm.addEventListener('submit', handleFormSubmit); 

