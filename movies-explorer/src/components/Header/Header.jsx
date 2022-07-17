import logo from '../../images/logo.svg';
import React from 'react';
import {Link,Switch,Route} from "react-router-dom";

function Header(props) {

  /*function logOut() {
    if (!props.link)
      if (props.onClick)
        props.onClick()
  }*/
  return (
    <header className="header">
      <img src={logo} alt="Изображение логотипа в шапке" className="header__logo"/>
      <nav className='header__nav'>
        <Switch>
          <Route path='/signin'>
            <Link className='header__link' to='/signin'>Войти</Link>
          </Route>
          <Route path='/signup'>
            <Link className='header__link' to='/signup'>Регистрация</Link>
          </Route>
          <Route path='*'>
            <Link className='header__link' to='/signup'>Регистрация</Link>
            <Link className='header__link' >Войти</Link>
          </Route>
        </Switch>
      </nav>
    </header>
  )
}

export default Header;