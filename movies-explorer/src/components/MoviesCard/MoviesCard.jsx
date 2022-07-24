import React from 'react';

function MoviesCard(props) {

  return (
        <div className="movies__card">
          <div className="movies__head">
            <div className="movies__name">{props.card.name}</div>
            <div className="movies__time">{props.card.time}</div>
          </div>
          <img src={props.card.image} alt="Изображение аватара" className="movies__img"/>
          <div>{props.card.state==="true" ? "Удалить" : "Сохранить"}</div>
        </div>
  );
}

export default MoviesCard;