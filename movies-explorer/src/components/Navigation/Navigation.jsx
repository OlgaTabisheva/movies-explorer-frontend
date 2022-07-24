import React from 'react';
import aclogo from "../../images/ac-logo.png";
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div className={`popup popup_type_image-container`}>
      <div className="popup__container-image">

        <button type="button" className="popup__close ">
        </button>
        <div className='popup__film'>
          <Link className='popup__link' to='/'>Главная</Link>
          <Link className='popup__link' to='/movies'>Фильмы</Link>
          <Link className='popup__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>

          <div className='popup__prof'>
            <img src={aclogo} alt="Изображение профиля" className="ac__logo"/>
            <Link className='profile__link' to='/profile'>Аккаунт</Link>

        </div>
      </div>
    </div>
  );
}

export default Navigation;