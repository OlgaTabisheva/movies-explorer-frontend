import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.svg";
import MoviesCard from "../MoviesCard/MoviesCard";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

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
        <SearchForm searchCallback={props.searchCallback} setMovieName={props.setMovieName}/>
        <Preloader className={`preloader ${!props.searchCallback ? 'preloader_active' : ''}`}/>
        <MoviesCardList cardsList={props.movies} isVisible={props.searchPressed} onSaveClick={props.onSaveClick} fromSaved={true}/>
        <p  className={`profile__none ${!props.searchPressed ? 'profile__none_active' : ''}`} > Ничего не найдено</p>
        <button type="button" className={`profile__button ${props.searchPressed ? 'profile__button_active' : ''}`}  onClick={props.moreCallback}>Еще</button>
      </main>
      <Footer/>
    </div>
  )
}

export default SavedMovies;