    let profileEditButton = document.querySelector('.profile__edit-button');
    if (!profileEditButton) {
        throw new Error('no profileEditButton');
    }
    profileEditButton.addEventListener('click', function(){
        let popup = document.querySelector('.popup');
        popup.classList.add('popup_opened');
    })

    let popupCloseButton = document.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', function(){
        let popup = document.querySelector('.popup');
        popup.classList.remove('popup_opened');
    })

     let profileName = 'Жак-Ив Кусто';
     let profileOccupation  = 'Исследователь океана';

     let profileNameElement = document.querySelector('.profile__name');
     profileNameElement.textContent = profileName;

     let profileOccupationElement = document.querySelector('.profile__occupation');
     profileOccupationElement.textContent = profileOccupation;


    let popupTextName = document.querySelector('.popup__text-name');
     popupTextName.value = profileName;

    let popupTextOccupation = document.querySelector('.popup__text-occupation');
     popupTextOccupation.value = profileOccupation;



     popupTextName.addEventListener('input', function (event){
        let value = event.target.value;
         profileNameElement.textContent = value;
     })

     popupTextOccupation.addEventListener('input', function (event){
         let value = event.target.value;
        profileOccupationElement.textContent = value;
     })



    // let popup = document.querySelector('.popup'); 
    // let popupTextName = document.querySelector('.popup__text-name');
    // let popupTextOccupation = document.querySelector('.popup__text-occupation');

    // function popupSubmitButton (evt) {
    // evt.preventDefault();
    // let popupTextName = document.querySelector('.popup__text-name');
    // popupTextName.value = profileName;
    // let popupTextOccupation = document.querySelector('.popup__text-occupation');
    // popupTextOccupation.value = profileOccupation;

    // popupTextName.addEventListener('input', function (event){
    //     let value = event.target.value;
    //      profileNameElement.textContent = value;
    //  })

    //  popupTextOccupation.addEventListener('input', function (event){
    //     let value = event.target.value;
    //      profileOccupationElement.textContent = value;
    // })


    // }

    

    // popup.addEventListener('submit', handlePopupSubmitButton); 


