import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.svg";
import MoviesCard from "../MoviesCard/MoviesCard";
import Navigation from "../Navigation/Navigation";

function SavedMovies(props) {


  return (
    <div className="movies">
      <div className="profile__head">
        <Link to='/'>
          <img src={logo} alt="Изображение логотипа в шапке" className="header__logo"/>
        </Link>
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
      <main>
        <Navigation isOpen={props.isNavPopupOpen} onClose={props.closeAllPopups}/>
        <SearchForm/>
        <div className="moviesCardList">
          {props.cardsList.map((element) => (
            <MoviesCard card={element} saved={"false"} key={element.id} onSaveClick={props.onSaveClick}></MoviesCard>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default SavedMovies;