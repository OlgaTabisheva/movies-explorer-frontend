import logo from '../../images/logo.svg';
import React from 'react';
import {Link,Switch,Route} from "react-router-dom";
import movies1 from "../../images/movies1.svg";
import movies2 from "../../images/movies2.svg";
import movies3 from "../../images/movies3.svg";
import movies4 from "../../images/movies4.svg";
import movies5 from "../../images/movies5.svg";
import movies6 from "../../images/movies6.svg";
import movies7 from "../../images/movies7.svg";
import movies8 from "../../images/movies8.svg";
import movies9 from "../../images/movies9.svg";
import movies10 from "../../images/movies10.svg";
import movies11 from "../../images/movies11.svg";
import movies12 from "../../images/movies12.svg";

function Movies(props) {

  return (
    <movies className="movies">
      <div className="movies__card">
        <div className="movies__head">
        <div className="movies__name">В погоне за Бенгси</div>
        <div className="movies__time">27 минут</div>
        </div>
        <img src={movies1} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
        <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies2} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
        </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies3} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies4} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies5} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies6} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies7} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies8} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies9} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies10} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies11} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
      <div className="movies__card">
        <div className="movies__head">
          <div className="movies__name">В погоне за Бенгси</div>
          <div className="movies__time">27 минут</div>
        </div>
        <img src={movies12} alt="Изображение аватара" className="movies__img"/>
        <div>Сохранить</div>
      </div>
    </movies>
  )
}

export default Movies;