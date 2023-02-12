    let profileEditButton = document.querySelector('.profile__edit-button');
    if (!profileEditButton) {
        throw new Error('no profileEditButton');
    }
    profileEditButton.addEventListener('click', function(){
        let popup = document.querySelector('.popup');
        popup.classList.add('popup_opened');
        let popupTextName = document.querySelector('.popup__text-name');
        let popupTextOccupation = document.querySelector('.popup__text-occupation');
        let profileName = document.querySelector('.profile__name');
        let profileOccupation = document.querySelector('.profile__occupation')
        popupTextName.value = profileName.textContent;
        popupTextOccupation.value = profileOccupation.textContent;
    });

    let popupCloseButton = document.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', function(){
        let popup = document.querySelector('.popup');
        popup.classList.remove('popup_opened');
    });

    function handleFormSubmit (evt) {
        evt.preventDefault();
        let profileName = document.querySelector('.profile__name');
        let popupTextName = document.querySelector('.popup__text-name');
        let popupTextOccupation = document.querySelector('.popup__text-occupation');
        let profileOccupation = document.querySelector('.profile__occupation');
        profileName.textContent = popupTextName.value;
        profileOccupation.textContent = popupTextOccupation.value;
        let popup = document.querySelector('.popup');
        popup.classList.remove('popup_opened');
    }

    let popupForm = document.querySelector('.popup__form');
    popupForm.addEventListener('submit', handleFormSubmit); 
