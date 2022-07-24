import React from 'react';
import {Link} from "react-router-dom"
import logo from "../../images/logo.svg";
import aclogo from "../../images/ac-logo.png";
import burger from "../../images/burger.svg"

function Profile() {


  return (
    <nav className="profile">
      <div className="profile__head">
        <img src={logo} alt="Изображение логотипа в шапке" className="header__logo"/>
        <div className='profile__film'>
          <Link className='profile__link' to='/movies'>Фильмы</Link>
          <Link className='profile__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <div className='profile__prof-mobi'>
          <Link className='profile__menu' to='/'><img src={burger} alt="Изображение профиля" className="burger"/></Link>
        </div>
        <div className='profile__prof'>
          <img src={aclogo} alt="Изображение профиля" className="ac__logo"/>
          <Link className='profile__link' to='/profile'>Аккаунт</Link>
        </div>
      </div>
      <div className="profile__hello">Привет, Ольга!</div>
      <div className="profile__name-box">
        <div className="profile__name-nav">Имя</div>
        <div className="profile__name">Ольга</div>
      </div>
      <div className="line profile__line">
      </div>
      <div className="profile__email-box">
        <div className="profile__email-nav">E-mail</div>
        <div className="profile__email">pochta@ya.ru</div>
      </div>
      <Link className='profile__redact profile__link' to='/profile'>Редактировать</Link>
      <Link className='profile__exit' to='/'>Выйти из аккаунта</Link>
    </nav>
  );
}

export default Profile;