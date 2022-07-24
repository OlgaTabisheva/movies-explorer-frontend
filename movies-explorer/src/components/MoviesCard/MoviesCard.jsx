import React from 'react';

function MoviesCard(props) {

  let cardSaveButtonClassName = (`movies__save ${props.card.state!=="true" ? ' movies__save-active' : ''}`);
  let cardSaveButtonText= (props.card.state==="true" ? "Сохранить" : "✓");
  if (props.saved==="true"){
    cardSaveButtonText=""
    cardSaveButtonClassName = (`movies__save ${props.card.state!=="true" ? ' movies__delete-active' : ''}`);
  }
  return (
        <div className="movies__card">
          <div className="movies__head">
            <div className="movies__name">{props.card.name}</div>
            <div className="movies__time">{props.card.time}</div>
          </div>
          <img src={props.card.image} alt="Изображение аватара" className="movies__img"/>
          <button className={cardSaveButtonClassName} >{cardSaveButtonText} </button>

        </div>
  );
}

export default MoviesCard;