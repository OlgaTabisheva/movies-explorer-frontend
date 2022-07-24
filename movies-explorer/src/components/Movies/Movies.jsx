import React from 'react';
import {Link,Switch,Route} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";


function Movies() {

  return (
    <Movies className="movies">
    <Switch>
    <Route>
      <Header/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
      </Route>
      </Switch>
    </Movies>
  )
}

export default Movies;