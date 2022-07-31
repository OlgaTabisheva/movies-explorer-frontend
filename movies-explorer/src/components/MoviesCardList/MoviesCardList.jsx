import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
  let MoviesCardListClassName = (`moviesCardList ${props.isVisible ? ' moviesCardList_active' : ''}`);
  return (
    <div className={MoviesCardListClassName}>
      {props.cardsList.map((element) => (
        <MoviesCard card={element}
                    saved={"false"}
                    key={element.id ? element.id : element.movieId}
                    fromSaved={props.fromSaved}
                    onSaveClick={props.onSaveClick}
                    savedMoviesIds={props.savedMoviesIds}
        > </MoviesCard>
      ))}
    </div>


  );
}

export default MoviesCardList;

