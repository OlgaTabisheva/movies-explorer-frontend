import React, {useEffect} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.svg";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

  useEffect(() => {
    const mov = JSON.parse(localStorage.getItem("movies"))
    if (mov)
      props.setMovies(mov)
    props.setMovieName(JSON.parse(localStorage.getItem("movieName")))
    props.setOnlyShot(JSON.parse(localStorage.getItem("isShot")))
    props.setSavedMoviesIds(JSON.parse(localStorage.getItem("saved")))
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(props.movies))
  }, [props.movies]);
  useEffect(() => {
    localStorage.setItem("movieName", JSON.stringify(props.movieName))
  }, [props.movieName]);
  useEffect(() => {
    localStorage.setItem("isShot", JSON.stringify(props.onlyShot))
  }, [props.onlyShot]);
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(props.savedMoviesIds))
  }, [props.savedMoviesIds]);

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
        <SearchForm searchCallback={props.searchCallback} setMovieName={props.setMovieName} onlyShot={props.onlyShot}
                    setOnlyShot={props.setOnlyShot} moveName={props.movieName}/>
        <Preloader isActive={props.preloaderShown}/>
        <MoviesCardList cardsList={props.movies}
                        isVisible={props.searchPressed}
                        onSaveClick={props.onSaveClick}
                        fromSaved={false}
                        savedMoviesIds={props.savedMoviesIds}
                        handleDeleteClick={props.handleDeleteClick}
        />
        <p className={`profile__none ${props.movies.length === 0 ? 'profile__none_active' : ''}`}> Ничего не найдено</p>
        <button type="button"
                className={`profile__button ${props.searchPressed && (props.moviesCount >= props.movies.length + props.movieNumber) ? 'profile__button_active' : ''}`}
                onClick={props.moreCallback}>Еще
        </button>
      </main>
      <Footer/>
    </div>
  )
}

export default Movies;