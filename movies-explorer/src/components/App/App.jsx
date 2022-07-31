import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import './App.css';
import '../../index.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../404/404";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import {currentUserContext} from "../../context/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";
import {authApi} from "../../utils/AuthApi";
import ProtectedRoute from "../ProtectedRoute";
import {moviesApi} from "../../utils/MoviesApi";
import {searchMovies} from "../../utils/utils";


function App() {
  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);
  const [isRedPopupOpen, setIsRedPopupOpen] = React.useState(false);
  const [currentUser, setСurrentUser] = React.useState({});
  const [loggedIn, setIsloggedIn] = React.useState(false)
  const [userData, setUserData] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [movieNumber, setMovieNumber] = useState(0);
  const [searchPressed, setSearchPressed] = React.useState(false)
  const [saveSearchPressed, setSaveSearchPressed] = React.useState(false)
  const [preloaderShown, setPreloaderShown ] = React.useState(false);

  const [movies, setMovies] = React.useState([]) // карточки с стороннего сервера
  const [moviesForView, setMoviesForView] = React.useState([]) // отображаемые карточки
  const [foundMovies, setFoundMovies] = React.useState([]) // карточки по условию поиска
  const [savedMovies, setSavedMovies] = React.useState([]) // сохраненные карточки
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]) // сохраненные карточки

  const [savedMoviesIds, setSavedMoviesIds] = React.useState([])


  const baseServerUrl = "https://api.nomoreparties.co";
  const history = useHistory()

  React.useEffect(() => {
    if (!loggedIn)
      return;
    Promise.all([mainApi.getProfile(),])
      .then(([profile]) => {
        setСurrentUser(profile);

      }).catch(err => console.log(err))
  }, [loggedIn])

  useEffect(() => {
    tokenCheck();
    if (movieNumber === 0) {
      if (window.innerWidth >= 1280)
        setMovieNumber(12)
      else if (window.innerWidth < 1279)
        setMovieNumber(8)
      else if (window.innerWidth < 768)
        setMovieNumber(5)
    }

  }, []);


  useEffect(() => {
    if (foundMovies.length !== 0) {

      showNMovies(foundMovies);
      setSearchPressed(true)
    }
    setPreloaderShown(false)
  }, [foundMovies]);

  useEffect(() => {
    if (foundSavedMovies.length !== 0) {

      showNMovies(foundSavedMovies);
      setSaveSearchPressed(true)
    }
    else
      setPreloaderShown(false)
  }, [foundSavedMovies]);

  useEffect(() => {
    showNMovies(foundMovies);
  }, [movieNumber]);

  useEffect(() => {
    if (movies.length !== 0)
      return;
    Promise.all([moviesApi.getInitialMovies()])
      .then(([newMovies]) => {
        setMovies(newMovies)
      }).catch(err => console.log(err))

  }, []);

  const location = useLocation();

  useLayoutEffect(() => {
    setFoundSavedMovies([])
    setMoviesForView([])
    setSaveSearchPressed(false)
    setSearchPressed(false)
    Promise.all([mainApi.getMovies()])
      .then(([newMovies]) => {
        setSavedMovies(newMovies)
      }).catch(err => console.log(err))
  }, [location]);

  useEffect(() => {
    const res = savedMovies.map(item=> item.movieId)
    setSavedMoviesIds(res)
  }, [savedMovies]);


  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
      return;
    }

    history.push('/signin');
  }, [loggedIn]);

  function searchCallback(small) {
    setPreloaderShown(true)

    let res = searchMovies(movieName, movies, small);
    res = res.map((element)=> {
      if (!element.image.url.startsWith(baseServerUrl))
        element.image.url=baseServerUrl + element.image.url
      if (!element.image.formats.thumbnail.url.startsWith(baseServerUrl))
        element.image.formats.thumbnail.url = baseServerUrl + element.image.formats.thumbnail.url;
      return element
    })
    setFoundMovies(res)
  }

  function searchSavedCallback(small) {
    setPreloaderShown(true)

    let res = searchMovies(movieName, savedMovies, small);
    setFoundSavedMovies(res)
  }


  function showNMovies(srcMovies) {
    const n = movieNumber >= srcMovies.length ? srcMovies.length : movieNumber
    setMoviesForView(srcMovies.slice(0, n));
    setPreloaderShown(false)
  }

  function handleUpdateUser(newInfo) {
    const handleLogin = (username, password) => {
      return authApi
        .signin(username, password)
        .then((data) => {
          if (!data.token) {
            return;
          }

          localStorage.setItem('JWT', data.token);
          mainApi.setToken(data.token);

          setIsloggedIn(true)

        }).catch(console.log)
    }


    mainApi.editProfile(newInfo.name, newInfo.email).then((newUserInfo) => {
      setСurrentUser(newUserInfo)
      closeAllPopups()
    }).catch(console.log)
  }

  function handleRedClick() {
    setIsRedPopupOpen(true)
  }

  function handleNavClick() {
    setIsNavPopupOpen(true)
  }
  function handleSaveClick(card) {
    mainApi.saveMovie(
      card.country,
      card.director,
      card.duration,
      card.year,
      card.description,
      card.image.url,
      card.trailerLink,
      card.image.formats.thumbnail.url,
      card.id,
      card.nameRU,
      card.nameEN).then((data)=>{
      const joined = savedMoviesIds.concat(card.id);
      setSavedMoviesIds(joined)
    }).catch(console.log)
  }

  function handleDeleteClick(card) {
    mainApi.deleteMovie(
      card.movieId
    ).then((data) => {
      setSavedMovies(savedMovies.filter(item => item.movieId !== card.movieId))
      setFoundSavedMovies(foundSavedMovies.filter(item => item.movieId !== card.movieId))
    }).catch(console.log)
  }


  function loadMovies() {

    let moviesToLoad=3
    if (window.innerWidth<1280)
      moviesToLoad=2
    if (window.innerWidth<768)
      moviesToLoad=1
    setMovieNumber(movieNumber + moviesToLoad)
  }

  function closeAllPopups() {
    setIsNavPopupOpen(false)
    setIsRedPopupOpen(false)
  }

  const handleRegister = (username, email, password) => {
    return authApi
      .signup(username, email, password)
      .then((res) => {
        if (res.data) {
          history.push('/signin')
        }
      }).catch(console.log)
  }

  const handleLogin = (username, password) => {
    return authApi
      .signin(username, password)
      .then((res) => {
        if (!res.token) {
          return;
        }
        setUserData({
          name: "",
          email: username
        });
        localStorage.setItem('JWT', res.token);
        mainApi.setToken(res.token);

        setIsloggedIn(true)
      }).catch(console.log)
  }
  const tokenCheck = () => {
    let jwt = localStorage.getItem('JWT');
    if (jwt) {
      authApi.isTokenValid(jwt).then((res) => {
        if (res) {
          setUserData({
            name: res.name,
            email: res.email
          });
          setIsloggedIn(true);
        }
      }).catch(err => console.log(err));
    }
  }

  function signOut() {
    localStorage.removeItem('JWT');
    setIsloggedIn(false)
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="page">

        <Switch>
          <ProtectedRoute exact path="/movies" isLoggedIn={loggedIn} component={Movies}
                          handleNavClick={handleNavClick}
                          isNavPopupOpen={isNavPopupOpen}
                          closeAllPopups={closeAllPopups}
                          searchPressed={searchPressed}
                          searchCallback={searchCallback}
                          movies={moviesForView}
                          setMovieName={setMovieName}
                          moreCallback={loadMovies}
                          onSaveClick={handleSaveClick}
                          savedMoviesIds={savedMoviesIds}
                          preloaderShown={preloaderShown}
                          setPreloaderShown={setPreloaderShown}
          />
          <ProtectedRoute exact path="/saved-movies" isLoggedIn={loggedIn} component={SavedMovies}
                          handleNavClick={handleNavClick}
                          isNavPopupOpen={isNavPopupOpen}
                          closeAllPopups={closeAllPopups}
                          searchPressed={saveSearchPressed}
                          searchCallback={searchSavedCallback}
                          movies={foundSavedMovies}
                          setMovieName={setMovieName}
                          moreCallback={loadMovies}
                          onSaveClick={handleDeleteClick}
                          preloaderShown={preloaderShown}
                          setPreloaderShown={setPreloaderShown}

          />

          <ProtectedRoute exact path="/profile" isLoggedIn={loggedIn} component={Profile}
                          handleNavClick={handleNavClick}
                          isNavPopupOpen={isNavPopupOpen}
                          handleRedClick={handleRedClick}
                          isRedPopupOpen={isRedPopupOpen}
                          closeAllPopups={closeAllPopups}
                          handleUpdateUser={handleUpdateUser}
                          userData={userData}
                          signOut={signOut}

          />
          <Route path="/signin">
            <Login handleLogin={handleLogin} tokenCheck={tokenCheck}/>
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path="/404">
            <Error404/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
          <Route path="*">
            {loggedIn ? <Redirect to="/movies"/> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
        <Navigation/>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
