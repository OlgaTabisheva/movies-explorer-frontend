import React from 'react';
import {Link} from "react-router-dom"
import logo from "../../images/logo.svg";
import aclogo from "../../images/ac-logo.svg";
import burger from "../../images/burger.svg"
import Navigation from "../Navigation/Navigation";
import RedactProfilePopup from "../RedactProfilePopup/RedactProfilePopup";
import {currentUserContext} from "../../context/CurrentUserContext";

function Profile(props) {

  const currentUser = React.useContext(currentUserContext)

  return (
    <nav className="profile">
      <div className="profile__head">
        <img src={logo} alt="Изображение логотипа в шапке" className="header__logo header__logo-profile"/>
        <div className='profile__film'>
          <Link className='profile__link' to='/movies'>Фильмы</Link>
          <Link className='profile__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <div className='profile__prof'>
          <img className='profile__prof-mobi' src={burger} alt="Изображение профиля" onClick={props.handleNavClick}/>
          <Link className='profile__link' to='/profile'>Аккаунт</Link>
          <div className='profile__logo'>
            <img src={aclogo} alt="Изображение профиля" className="ac__logo"/>
          </div>
        </div>
      </div>
      <div className="profile__hello">Привет, {currentUser.name}!</div>
      <div className="profile__name-box">
        <div className="profile__name-nav">Имя</div>
        <div className="profile__name">{currentUser.name}</div>
      </div>
      <div className="line profile__line">
      </div>
      <div className="profile__email-box">
        <div className="profile__email-nav">E-mail</div>
        <div className="profile__email">{currentUser.email}</div>
      </div>
      <Link className='profile__redact profile__link' to='/profile' onClick={props.handleRedClick}>Редактировать</Link>
      <Link className='profile__exit' to='/'>Выйти из аккаунта</Link>
      <Navigation isOpen={props.isNavPopupOpen} onClose={props.closeAllPopups}/>
      <RedactProfilePopup isOpen={props.isRedPopupOpen} onClose={props.closeAllPopups}  onUpdateUser={props.handleUpdateUser}/>
    </nav>
  );
}

export default Profile;