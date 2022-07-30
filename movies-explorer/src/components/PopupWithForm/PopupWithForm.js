import React from 'react';

function PopupWithForm(props) {

  return (

    <div className={`popup_type_${props.name} popup-red popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-red__container">
        {props.children}
        <button className="popup__button popup__button-red"type="submit" onClick={props.onSubmit} >Редактировать</button>
        <button className="popup__button popup__button-exit"  type="button" >Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default PopupWithForm;