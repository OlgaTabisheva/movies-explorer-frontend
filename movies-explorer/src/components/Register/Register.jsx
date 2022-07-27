import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../images/logo.svg';

function Register() {


  return (
    <div className="register">
      <form id="form__input" name="profileInputForm" className="popup__form">
        <Link to='/'>
          <img src={logo} alt="Изображение логотипа в шапке" className="header__logo logo"/>
        </Link>
        <h2 className="popup__title title">Добро пожаловать!</h2>
        <p className="input-text">Имя</p>
        <input id="name"
               name="input-name" type="text"
               className="popup__input popup__input_type_name input" minLength={2} maxLength={40} required/>
        <span id="error-name" className="error-message error-message_visible"/>
        <p className="input-text">E-mail</p>
        <input id="email"
               name="input-email" type="text"
               className="popup__input popup__input_type_name input" minLength={2} maxLength={40} required/>
        <span id="error-email" className="error-message error-message_visible"/>
        <p className="input-text">Пароль</p>
        <input id="password"
               name="input-password" type='password'
               className="popup__input popup__input_type_job input" minLength={2} maxLength={200} required/>
        <span id="error-password" className="error-message error-message_visible"/>
        <button className="popup__button-save button" type="button">Зарегистрироваться</button>
        <Link className='register__login' to="/signin">Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  );
}

export default Register;
