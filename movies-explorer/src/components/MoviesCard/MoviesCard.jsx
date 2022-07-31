import React from 'react';

function MoviesCard(props) {
  let cardSaveButtonClassName = (`movies__save ${props.card.state !== "true" ? ' movies__save-active' : ''}`);
  let cardSaveButtonText = (props.card.state === "true" ? "Сохранить" : "✓");
  if (props.saved === "true") {
    cardSaveButtonText = ""
    cardSaveButtonClassName = (`movies__save ${props.card.state !== "true" ? ' movies__delete-active' : ''}`);
  }

  function ActionButtonHandler(){
    props.onSaveClick(props.card)

  }
  return (
    <div className="movies__card">
      <div className="movies__head">
        <div className="movies__name">{props.card.nameRU}</div>
        <div className="movies__time">{props.card.duration}</div>
      </div>
      <img src={"https://api.nomoreparties.co" + props.card?.image?.formats?.thumbnail?.url} alt="Изображение аватара"
           className="movies__img"/>
      <button className={cardSaveButtonClassName} onClick={ActionButtonHandler}  >{cardSaveButtonText} </button>
    </div>
  );
}

export default MoviesCard;