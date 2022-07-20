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


function App() {
  return (
    <div className="page">
      <div className="head">
      <Header/>
        </div>
      <Switch>
        <Route path="/signin" >
          <Login/>
        </Route>
        <Route path="/signup" >
          <Register/>
        </Route>
        <Route path="/movies">
          <SearchForm/>
          <Movies/>
        </Route>
        <Route path="/profile">
        </Route>
        <Route path="/404" >
        <Error404/>
        </Route>
        <Route path="/" >
          <Promo/>
          <Main/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
