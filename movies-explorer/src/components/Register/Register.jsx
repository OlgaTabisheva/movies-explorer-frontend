import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../images/logo.svg';

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function signUp(e) {
    e.preventDefault();
    props.handleRegister(name, email, password)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  return (
    <div className="register">
      <form  onSubmit={signUp} id="form__input" name="profileInputForm" className="popup__form">
        <Link to='/'>
          <img src={logo} alt="Изображение логотипа в шапке" className="header__logo logo"/>
        </Link>
        <h2 className="popup__title title">Добро пожаловать!</h2>
        <p className="input-text">Имя</p>
        <input onChange={handleChangeName}id="name"
               name="input-name" type="text"
               className="input popup__input popup__input_type_name" minLength={2} maxLength={40} required/>
        <span id="error-name" className="error-message error-message_visible"/>
        <p className="input-text">E-mail</p>
        <input onChange={handleChangeEmail}  id="email"
               name="input-email" type="text"
               className="input popup__input popup__input_type_email " minLength={2} maxLength={40} required/>
        <span id="error-email" className="error-message error-message_visible"/>
        <p className="input-text">Пароль</p>
        <input onChange={handleChangePassword} id="password"
               name="input-password" type='password'
               className="input popup__input popup__input_type_password" minLength={2} maxLength={200} required/>
        <span id="error-password" className="error-message error-message_visible"/>
        <button className="popup__button-save button" type="submit">Зарегистрироваться</button>
        <Link className='register__login' to="/signin">Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  );
}

export default Register;
