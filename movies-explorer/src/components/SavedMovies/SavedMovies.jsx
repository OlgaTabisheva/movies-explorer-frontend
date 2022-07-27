import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.svg";
import MoviesCard from "../MoviesCard/MoviesCard";
import Navigation from "../Navigation/Navigation";

const cards = [
  {
    _id: "ncekwn2vkwkvw",
    name: "В погоне за Бенгси2",
    time: "27 минут",
    image: "https://static.kinoafisha.info/k/movie_shots/canvas/290x160/upload/movie_shots/4/0/9/8360904/6754de12bc0c02f080dfe209fa554f17.jpg.webp",
    state: "false",
  },

  {
    _id: "ncekwn2vkwkvw",
    name: "В погоне за Бенгси2",
    time: "27 минут",
    image: "https://static.kinoafisha.info/k/movie_shots/canvas/290x160/upload/movie_shots/4/0/9/8360904/6754de12bc0c02f080dfe209fa554f17.jpg.webp",
    state: "false",
  },
  {
    _id: "ncekwnvkwkvw1",
    name: "В погоне за Бенгси",
    time: "27 минут",
    image: "https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/4/0/9/8360904/20dfe7731100094eda4ad9dee204eb2b.jpeg",
    state: "false",
  },
  {
    _id: "ncekwnvkwkvw3",
    name: "В погоне за Бенгси3",
    time: "27 минут",
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state: "false",
  },


]

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
          {cards.map((element) => (
            <MoviesCard card={element} saved={"true"} key={element._id}></MoviesCard>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default SavedMovies;