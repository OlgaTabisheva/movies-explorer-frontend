import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import '../../index.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Promo from "../Promo/Promo";
import React from "react";



function App() {
  return (
    <div className="page">
      <div className="head">
      <Header/>

        </div>

      <Switch>
        <Route path="/signin" >
          <div className="loginContainer">
          </div>
        </Route>
        <Route path="/signup">
          <div className="RegisterContainer">
           000
          </div>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/profile">
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
