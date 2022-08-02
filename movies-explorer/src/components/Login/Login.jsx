import React, {useCallback, useEffect} from 'react';
import {Link} from "react-router-dom"
import logo from '../../images/logo.svg';


function Login(props) {

  const [formValues, setformValues] = React.useState({
    emailInput: '',
    passwordInput: ''
  });
  const [formValidity, setformValidity] = React.useState({
    emailInputValid: false,
    passwordInputValid: false
  });

  const handleInputChange = useCallback((e) => {
    const {name, value} = e.target;
    setformValues(prevState => ({...prevState, [name]: value}));
  }, [setformValues])


  useEffect(function validateInputs() {
    const re = /\S+@\S+\.\S+/;
    const isEmailInputFilled = formValues.emailInput.length > 4
    const isEmail = re.test(formValues.emailInput)
    const isEmailInputValid = isEmailInputFilled && isEmail

    const isPasswordInputFilled = formValues.passwordInput.length >= 3
    const isPasswordInputValid = isPasswordInputFilled
    setformValidity(prevValidity => ({
      emailInputValid: isEmailInputValid,
      passwordInputValid: isPasswordInputValid
    }))

  }, [formValues, setformValues])

  const {emailInput, passwordInput} = formValues
  const {emailInputValid, passwordInputValid} = formValidity


  const isSubmitDisabled = !emailInputValid || !passwordInputValid;

  function signIn(e) {
    e.preventDefault();
    props.handleLogin(emailInput, passwordInput)
  }

  return (
    <div className="register">
      <form onSubmit={signIn} id="form__input" name="profileInputForm" className="popup__form">
        <Link to='/'>
          <img src={logo} alt="Изображение логотипа в шапке" className="header__logo logo"/>
        </Link>
        <h2 className="popup__title title">Рады видеть!</h2>
        <p className="input-text">E-mail</p>
        {!emailInputValid && <span className="popup__valid">Поле почты некорректно</span>}
        <input value={emailInput} onChange={handleInputChange} id="email"
               name="emailInput" type="text"
               className="popup__input popup__input_type_name input"/>
        <p className="input-text">Пароль</p>
        {!passwordInputValid && <span className="popup__valid">Поле пароля некорректно</span>}
        <input value={passwordInput} onChange={handleInputChange} id="password"
               name="passwordInput" type='password'
               className="popup__input popup__input_type_job input"/>
        <button disabled={isSubmitDisabled} type="submit" className="popup__button-save button">Войти</button>
        <Link className='register__login' to="/signup">Еще не зарегистрированы? Регистрация</Link>
      </form>
    </div>
  );
}

export default Login;
