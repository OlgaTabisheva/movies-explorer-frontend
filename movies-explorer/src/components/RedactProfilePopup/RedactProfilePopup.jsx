import React from 'react';
import {currentUserContext} from "../../context/CurrentUserContext";
import PopupWithForm from "./../PopupWithForm/PopupWithForm";

function RedactProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const currentUser = React.useContext(currentUserContext)

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);

  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {

    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      email: email,
    });
  }

  return (
    <PopupWithForm className="Edit" name='edit' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
                   buttonText="Coxранить">
      <form id="form__input" name="profileInputForm" className="popup__form">
        <h2 className="popup__title">Привет, {currentUser.name}!</h2>
        <input onChange={handleChangeName} value={name || ''} placeholder="Введите имя пользователя" id="name"
               name="input-name" type="text"
               className="popup__input popup__input_type_name" minLength={2} maxLength={40} required/>
        <span id="error-name" className="error-message error-message_visible"/>
        <input onChange={handleChangeEmail} value={email || ''} placeholder="Введите email" id="email"
               name="input-email" type="text"
               className="popup__input popup__input_type_email" minLength={2} maxLength={200} required/>
        <span id="error-email" className="error-message error-message_visible"/>

      </form>
    </PopupWithForm>
  );
}

export default RedactProfilePopup;