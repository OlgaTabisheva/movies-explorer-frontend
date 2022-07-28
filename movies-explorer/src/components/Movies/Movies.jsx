import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.svg";
import Navigation from "../Navigation/Navigation";
import {moviesApi} from "../../utils/MoviesApi"
import Preloader from "../Preloader/Preloader";

function Movies(props) {

  const [movies, setMovies] = React.useState([])
  const [searchPressed, setSearchPressed] = React.useState(false)


  useEffect(() => {
    if (!searchPressed){
      return
    }
    Promise.all([moviesApi.getInitialMovies()])
      .then(([newMovies]) => {
        setMovies(newMovies)
      }).catch(err => console.log(err))

  }, [searchPressed]);


function searchCallback(){
  setSearchPressed(true)
}
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
        <SearchForm searchCallback={searchCallback}/>
        <Preloader/>
        <MoviesCardList cardsList={movies} isVisible={searchPressed}/>
        <p className='profile__save'> Ничего не найдено </p>
        <button type="button" className="profile__button">Еще</button>
      </main>
      <Footer/>
    </div>
  )
}

export default Movies;