import React from 'react';
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


function MoviesCard() {

  return (

      <MoviesCard className="movies">
        <div className="movies__card">
          <div className="movies__head">
            <div className="movies__name">В погоне за Бенгси</div>
            <div className="movies__time">27 минут</div>
          </div>
          <img src={movies1} alt="Изображение аватара" className="movies__img"/>
          <div>Сохранить</div>
        </div>

      </MoviesCard>


  );
}

export default MoviesCard;