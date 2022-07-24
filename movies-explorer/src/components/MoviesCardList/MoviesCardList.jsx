import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route, Switch} from "react-router-dom";


function MoviesCardList(props) {

  return (
    <div className="moviesCardList">
      {props.cardsList.map((element) => (
        <MoviesCard card={element}  key={element._id}></MoviesCard>
      ))}
    </div>


  );
}
export default MoviesCardList;

