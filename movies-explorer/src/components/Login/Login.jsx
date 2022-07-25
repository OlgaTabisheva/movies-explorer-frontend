import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../images/logo.svg';

function Login() {


  return (
    <div className="register">
      <form  id="form__input" name="profileInputForm" className="popup__form" >
        <Link to='/'>
        <img src={logo} alt="Изображение логотипа в шапке" className="header__logo logo"/>
        </Link>
        <h2 className="popup__title title">Рады видеть!</h2>
        <p className="input-text">E-mail</p>
        <input  id="email"
                name="input-email" type="text"
                className="popup__input popup__input_type_name input" minLength={2} maxLength={40} required/>
        <span id="error-email" className="error-message error-message_visible"/>
        <p className="input-text">Пароль</p>
        <input  id="password"
                name="input-password" type='password'
                className="popup__input popup__input_type_job input" minLength={2} maxLength={200} required/>
        <span id="error-password" className="error-message error-message_visible"/>
        <button type="button" className="popup__button-save button" >Зарегистрироваться</button>
        <Link className='register__login' to="/signup">Еще не зарегистрированы? Регистрация</Link>
      </form>
    </div>
  );
}

export default Login;
