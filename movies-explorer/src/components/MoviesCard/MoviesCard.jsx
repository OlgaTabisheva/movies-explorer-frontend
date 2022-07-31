import React from 'react';
import {Link} from "react-router-dom";

function MoviesCard(props) {
  let cardSaved = false
  if (!props.fromSaved)
    cardSaved = !props.savedMoviesIds.includes(props.card.id ? props.card.id : props.card.movieId)
  let cardSaveButtonClassName = (`movies__save ${!cardSaved ? ' movies__save-active' : ''}`);
  let cardSaveButtonText = (cardSaved ? "Сохранить" : "✓");
  if (props.fromSaved) {
    cardSaveButtonText = ""
    cardSaveButtonClassName = (`movies__save ${props.card.state !== "true" ? ' movies__delete-active' : ''}`);
  }


  return (
    <div className="movies__card">
      <div className="movies__head">
        <div className="movies__name">{props.card.nameRU}</div>
        <div className="movies__time">{props.card.duration}</div>
      </div>
      <Link target="_blank" to={{ pathname:props.card.trailerLink}}>
      <img src={props.card.image.url ? props.card.image.url : props.card.image}  alt="Картинка фильма"
           className="movies__img"/>
      </Link>
      <button className={cardSaveButtonClassName} onClick={() => props.onSaveClick(props.card)}  >{cardSaveButtonText} </button>
    </div>
  );
}

export default MoviesCard;