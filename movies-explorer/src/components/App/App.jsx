import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import '../../index.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Promo from "../Promo/Promo";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../404/404";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";


function App() {
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

          <Movies/>
          <Footer/>
        </Route>
        <Route path="/404" >
        <Error404/>
        </Route>
        <Route path="/profile">
        <Profile/>
      </Route>
        <Route path="/" >
          <div className="head">
            <Header/>
          </div>
          <Promo/>
          <Main/>
          <Footer/>
        </Route>
      </Switch>
      <Navigation/>
    </div>
  );
}

export default App;
