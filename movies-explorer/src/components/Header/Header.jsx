import logo from '../../images/logo.svg';
import React from 'react';
import {Link} from "react-router-dom";

function Header() {


  return (
    <header className="header">
      <img src={logo} alt="Изображение логотипа в шапке" className="header__logo"/>
      <nav className='header__nav'>
        <Link className='header__link' to='/signup'>Регистрация</Link>
        <div className="header__link-box">
          <Link className='header__link' to='/signin'>Войти</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;