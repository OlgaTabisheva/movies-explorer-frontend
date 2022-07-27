import React from 'react';
import aclogo from "../../images/ac-logo.svg";
import {Link} from "react-router-dom";

function Navigation(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <button type="button" className="popup__close" onClick={props.onClose}>
      </button>
      <div className='popup__film'>
        <Link className='popup__link' to='/'>Главная</Link>
        <Link className='popup__link' to='/movies'>Фильмы</Link>
        <Link className='popup__link' to='/saved-movies'>Сохраненные фильмы</Link>
      </div>

      <div className='popup__prof'>
        <Link className='popup__link' to='/profile'>Аккаунт</Link>
        <div className='popup__logo'>
          <img src={aclogo} alt="Изображение профиля" className="ac__logo"/>
        </div>

      </div>
    </div>
  );
}

export default Navigation;