import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import '../../index.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import React from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../404/404";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";


function App() {

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);
  function handleNavClick() {
    setIsNavPopupOpen(true)
  }
  function closeAllPopups() {
    setIsNavPopupOpen(false)
  }
  return (
    <div className="page">

      <Switch>
        <Route path="/signin" >
          <Login/>
        </Route>
        <Route path="/signup" >
          <Register/>
        </Route>
        <Route path="/movies">
        <Movies handleNavClick={handleNavClick} isNavPopupOpen={isNavPopupOpen} closeAllPopups={closeAllPopups}/>
      </Route>
        <Route path="/saved-movies">
          <SavedMovies  handleNavClick={handleNavClick} isNavPopupOpen={isNavPopupOpen} closeAllPopups={closeAllPopups}/>
        </Route>
        <Route path="/404" >
        <Error404/>
        </Route>
        <Route path="/profile">
        <Profile  handleNavClick={handleNavClick} isNavPopupOpen={isNavPopupOpen} closeAllPopups={closeAllPopups}/>
      </Route>
        <Route path="/" >
          <Main/>
        </Route>
      </Switch>
      <Navigation/>
    </div>
  );
}

export default App;
