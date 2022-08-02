import React, {useCallback, useEffect} from 'react';
import {currentUserContext} from "../../context/CurrentUserContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RedactProfilePopup(props) {
  const [dataChanged, setDataChanged] = React.useState(false);
  const currentUser = React.useContext(currentUserContext)

  const [formValues, setformValues] = React.useState({
    nameInput: currentUser.name,
    emailInput: currentUser.email,

  });
  const [formValidity, setformValidity] = React.useState({
    nameInputValid: false,
    emailInputValid: false,

  });

  const handleInputChange = useCallback((e) => {
    const {name, value} = e.target;
    setformValues(prevState => ({...prevState, [name]: value}));
  }, [setformValues])


  useEffect(function validateInputs() {
    const isNameInputFilled = formValues.nameInput.length > 2
    const isNameInputValid = isNameInputFilled
    const re = /\S+@\S+\.\S+/;
    const isEmailInputFilled = formValues.emailInput.length > 4
    const isEmail = re.test(formValues.emailInput)
    const isEmailInputValid = isEmailInputFilled && isEmail
    setDataChanged(formValues.nameInput !== currentUser.name && formValues.emailInput !== currentUser.email)


    setformValidity(prevValidity => ({
      nameInputValid: isNameInputValid,
      emailInputValid: isEmailInputValid,

    }))

  }, [formValues, setformValues])

  const {nameInput, emailInput} = formValues
  const {nameInputValid, emailInputValid} = formValidity
  const isSubmitDisabled = !nameInputValid || !emailInputValid;

  function handleSubmit(e) {
    props.setRequestOnServer(1)
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: nameInput,
      email: emailInput,
    });
  }

  return (
    <PopupWithForm className="Edit" name='edit' isOpen={props.isOpen}
                   onClose={props.onClose}
                   disableButton={!dataChanged && !isSubmitDisabled}
                   onSubmit={handleSubmit}
                   buttonText="Coxранить">
      <form id="form__input" name="profileInputForm" className="popup__form">
        <h2 className="popup__title">Привет, {currentUser.name}!</h2>
        {!nameInputValid && <span className="popup__valid">Поле имени некорректно</span>}
        <input value={nameInput} onChange={handleInputChange} placeholder="Введите имя пользователя" id="name"
               name="nameInput" type="text"
               className="popup__input popup__input_type_name" minLength={2} maxLength={40} required/>
        {!emailInputValid && <span className="popup__valid">Поле почты некорректно</span>}
        <input value={emailInput} onChange={handleInputChange} placeholder="Введите email" id="email"
               name="emailInput" type="text" className="popup__input popup__input_type_email" minLength={2}
               maxLength={200} required/>

      </form>
    </PopupWithForm>
  );
}

export default RedactProfilePopup;