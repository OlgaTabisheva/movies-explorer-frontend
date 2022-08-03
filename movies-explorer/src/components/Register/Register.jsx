import React, {useCallback, useEffect} from "react";
import {Link} from "react-router-dom"
import logo from '../../images/logo.svg';


function Register(props) {

  const [formValues, setformValues] = React.useState({
    nameInput: "",
    emailInput: '',
    passwordInput: ''
  });
  const [formValidity, setformValidity] = React.useState({
    nameInputValid: false,
    emailInputValid: false,
    passwordInputValid: false
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

    const isPasswordInputFilled = formValues.passwordInput.length >= 3
    const isPasswordInputValid = isPasswordInputFilled
    setformValidity(prevValidity => ({
      nameInputValid: isNameInputValid,
      emailInputValid: isEmailInputValid,
      passwordInputValid: isPasswordInputValid
    }))

  }, [formValues, setformValues])

  const {nameInput, emailInput, passwordInput} = formValues
  const {nameInputValid, emailInputValid, passwordInputValid} = formValidity


  function signUp(e) {
    e.preventDefault();
    props.handleRegister(nameInput, emailInput, passwordInput)
  }

  const isSubmitDisabled = !nameInputValid || !emailInputValid || !passwordInputValid;

  return (
    <div className="register">
      <form onSubmit={signUp} id="form__input" name="profileInputForm" className="popup__form">
        <Link to='/'>
          <img src={logo} alt="Изображение логотипа в шапке" className="header__logo logo"/>
        </Link>
        <h2 className="popup__title title">Добро пожаловать!</h2>
        <p className="input-text">Имя</p>
        {!nameInputValid && <span className="popup__valid">Поле имени некорректно</span>}
        <input value={nameInput} onChange={handleInputChange} id="name"
               name="nameInput" type="text"
               className="input popup__input popup__input_type_name"/>
        <p className="input-text">E-mail</p>
        {!emailInputValid && <span className="popup__valid">Поле почты некорректно</span>}
        <input value={emailInput} onChange={handleInputChange} id="email"
               name="emailInput" type="text"
               className="input popup__input popup__input_type_email "/>
        <p className="input-text">Пароль</p>
        {!passwordInputValid && <span className="popup__valid">Поле пароля некорректно</span>}
        <input value={passwordInput} onChange={handleInputChange} id="password"
               name="passwordInput" type='password'
               className="input popup__input popup__input_type_password"/>
        <button disabled={isSubmitDisabled} className="popup__button-save button" type="submit">Зарегистрироваться
        </button>
        <Link className='register__login' to="/signin">Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  );
}

export default Register;
