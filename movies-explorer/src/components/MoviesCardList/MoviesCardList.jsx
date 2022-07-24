import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route, Switch} from "react-router-dom";


function MoviesCardList() {

  return (
    <MoviesCardList>
      <Switch>
        <Route>
          <MoviesCard/>
        </Route>
      </Switch>
    </MoviesCardList>

  );
}
export default MoviesCardList;

