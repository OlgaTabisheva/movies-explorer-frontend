import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import burger from "../../images/burger.svg";
import aclogo from "../../images/ac-logo.png";

const cards = [
  {
    _id:"ncekwnvkwkvw",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw1",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/4/0/9/8360904/20dfe7731100094eda4ad9dee204eb2b.jpeg",
    state:"true",
  },
  {
    _id:"ncekwn2vkwkvw",
    name: "В погоне за Бенгси2",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/canvas/290x160/upload/movie_shots/4/0/9/8360904/6754de12bc0c02f080dfe209fa554f17.jpg.webp",
    state:"false",
  },
  {
    _id:"ncekwnvkwkvw3",
    name: "В погоне за Бенгси3",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw1",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/4/0/9/8360904/20dfe7731100094eda4ad9dee204eb2b.jpeg",
    state:"true",
  },
  {
    _id:"ncekwn2vkwkvw",
    name: "В погоне за Бенгси2",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/canvas/290x160/upload/movie_shots/4/0/9/8360904/6754de12bc0c02f080dfe209fa554f17.jpg.webp",
    state:"false",
  },
  {
    _id:"ncekwnvkwkvw3",
    name: "В погоне за Бенгси3",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw1",
    name: "В погоне за Бенгси",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/4/0/9/8360904/20dfe7731100094eda4ad9dee204eb2b.jpeg",
    state:"false",
  },
  {
    _id:"ncekwn2vkwkvw",
    name: "В погоне за Бенгси2",
    time:"27 минут",
    image:"https://static.kinoafisha.info/k/movie_shots/canvas/290x160/upload/movie_shots/4/0/9/8360904/6754de12bc0c02f080dfe209fa554f17.jpg.webp",
    state:"true",
  },
  {
    _id:"ncekwnvkwkvw3",
    name: "В погоне за Бенгси3",
    time:"27 минут",
    image:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/1e28d109-7de8-4c23-abb6-d5056e690898/300x450",
    state:"false",
  },


]

function Movies() {

  return (
    <div className="movies">
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
      <SearchForm/>
      <MoviesCardList cardsList={cards} />
      <Footer/>
    </div>
  )
}

export default Movies;