import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom'
import './App.css';
import '../../index.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error404 from "../Error404/Error404";
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
  const [requestOnServer, setRequestOnServer] = React.useState(0);
  const [moviesToLoad, setMoviesToLoad] = React.useState(0);

  const [loggedIn, setIsloggedIn] = React.useState(false)
  const [tokenChecked, setIsTokenChecked] = React.useState(false)
  const [onlyShot, setOnlyShot] = React.useState(false)
  const [onlyShotSaved, setOnlyShotSaved] = React.useState(false)
  const [userData, setUserData] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [movieNameSaved, setMovieNameSaved] = useState("");

  const [movieNumber, setMovieNumber] = useState(0);
  const [searchPressed, setSearchPressed] = React.useState(false)
  const [saveSearchPressed, setSaveSearchPressed] = React.useState(false)
  const [preloaderShown, setPreloaderShown] = React.useState(false);
  const [movies, setMovies] = React.useState([]) // карточки с стороннего сервера
  const [moviesForView, setMoviesForView] = React.useState([]) // отображаемые карточки
  const [moviesForViewSaved, setMoviesForViewSaved] = React.useState([]) // отображаемые карточки
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
    if (moviesToLoad === 0) {
      let moviesToLoadLocal = 3
      if (window.innerWidth < 1280)
        moviesToLoadLocal = 2
      if (window.innerWidth < 768)
        moviesToLoadLocal = 1
      setMoviesToLoad(moviesToLoadLocal)
    }

  }, []);

  function resetMovieNumber() {
    if (window.innerWidth >= 1280)
      setMovieNumber(12)
    else if (window.innerWidth < 1279)
      setMovieNumber(8)
    else if (window.innerWidth < 768)
      setMovieNumber(5)
  }

  useEffect(() => {
    if (foundMovies.length !== 0) {

      showNMovies(foundMovies, setMoviesForView);
      setSearchPressed(true)
    }
    setPreloaderShown(false)
  }, [foundMovies]);

  useEffect(() => {
    if (foundSavedMovies.length !== 0) {

      showNMovies(foundSavedMovies, setMoviesForViewSaved);
      setSaveSearchPressed(true)
    } else
      setPreloaderShown(false)
  }, [foundSavedMovies]);

  useEffect(() => {
    showNMovies(foundMovies, setMoviesForView);
    showNMovies(foundMovies, setMoviesForViewSaved);
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
    Promise.all([mainApi.getMovies()])
      .then(([newMovies]) => {
        setSavedMovies(newMovies)
      }).catch(err => console.log(err))
  }, [location]);

  useEffect(() => {
    const res = savedMovies.map(item => item.movieId)
    setSavedMoviesIds(res)
  }, [savedMovies]);

  useEffect(() => {
    console.log(loggedIn)
  }, [loggedIn]);


  useEffect(() => {
    if (!tokenChecked)
      return;
    if (loggedIn) {
      history.push("/movies");
      return;
    } else
      history.push('/signin');
  }, [loggedIn]);


  useEffect(() => {
    resetMovieNumber()
    searchCallback()
  }, [onlyShot]);

  useEffect(() => {
    resetMovieNumber()
    searchSavedCallback()
  }, [onlyShotSaved]);

  function searchCallback() {
    setPreloaderShown(true)
    setMoviesForView([])
    resetMovieNumber()
    let res = searchMovies(movieName, movies, onlyShot);
    res = res.map((element) => {
      if (!element.image.url.startsWith(baseServerUrl))
        element.image.url = baseServerUrl + element.image.url
      if (!element.image.formats.thumbnail.url.startsWith(baseServerUrl))
        element.image.formats.thumbnail.url = baseServerUrl + element.image.formats.thumbnail.url;
      return element
    })
    setFoundMovies(res)
  }

  function searchSavedCallback() {
    resetMovieNumber()
    setPreloaderShown(true)
    setMoviesForViewSaved([])
    let res = searchMovies(movieNameSaved, savedMovies, onlyShotSaved);
    setFoundSavedMovies(res)
  }


  function showNMovies(srcMovies, callBack) {
    const n = movieNumber >= srcMovies.length ? srcMovies.length : movieNumber
    callBack(srcMovies.slice(0, n));
    setPreloaderShown(false)
  }


  function handleUpdateUser(newInfo) {
    mainApi.editProfile(newInfo.name, newInfo.email).then((newUserInfo) => {
      setСurrentUser(newUserInfo);
      closeAllPopups()
      setRequestOnServer(2)
    }).catch((err) => {
      console.log(err)
      setRequestOnServer(3)
    })
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
      card.nameEN).then((data) => {
      const joined = savedMoviesIds.concat(card.id);
      setSavedMoviesIds(joined)

      const joinedmovies = savedMovies.concat(data);
      setSavedMovies(joinedmovies)
    }).catch(console.log)
  }

  function handleDeleteClick(card) {
    const id = card.movieId ? card.movieId : card.id
    mainApi.deleteMovie(
      id
    ).then((data) => {
      setSavedMovies(savedMovies.filter(item => item.movieId !== id))
      setFoundSavedMovies(foundSavedMovies.filter(item => item.movieId !== id))
      setSavedMoviesIds(savedMoviesIds.filter(item => item !== id))
    }).catch(console.log)
  }


  function loadMovies() {
    let moviesToLoadLocal = 3
    if (window.innerWidth < 1280)
      moviesToLoadLocal = 2
    if (window.innerWidth < 768)
      moviesToLoadLocal = 1
    setMovieNumber(movieNumber + moviesToLoad)
    setMoviesToLoad(moviesToLoadLocal)
  }

  function closeAllPopups() {
    setIsNavPopupOpen(false)
    setIsRedPopupOpen(false)
  }

  const handleRegister = (username, email, password) => {
    return authApi
      .signup(username, email, password)
      .then((res) => {

        if (!res.token) {
          return;
        }
        setUserData({
          name: username,
          email: email
        });
        localStorage.setItem('JWT', res.token);
        mainApi.setToken(res.token);

        setIsloggedIn(true)

        history.push('/movies')

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

        history.push('/movies')
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
          setIsTokenChecked(true);
        }
      }).catch(err => console.log(err));
    }
  }


  function signOut() {
    localStorage.removeItem('JWT');
    setIsloggedIn(false)
    setIsTokenChecked(false);
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/signin">
            <Login handleLogin={handleLogin} tokenCheck={tokenCheck}/>
          </Route>
          <Route exact path="/signup">
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
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
                          setSavedMoviesIds={setSavedMoviesIds}
                          preloaderShown={preloaderShown}
                          setPreloaderShown={setPreloaderShown}
                          onlyShot={onlyShot}
                          setOnlyShot={setOnlyShot}
                          setMovies={setMoviesForView}
                          movieName={movieName}
                          handleDeleteClick={handleDeleteClick}
                          moviesCount={foundMovies.length}
                          movieNumber={moviesToLoad}
          />
          <ProtectedRoute exact path="/saved-movies" isLoggedIn={loggedIn} component={SavedMovies}
                          handleNavClick={handleNavClick}
                          isNavPopupOpen={isNavPopupOpen}
                          closeAllPopups={closeAllPopups}
                          searchPressed={saveSearchPressed}
                          searchCallback={searchSavedCallback}
                          movies={moviesForViewSaved}
                          setMovieName={setMovieNameSaved}
                          moreCallback={loadMovies}
                          onSaveClick={handleDeleteClick}
                          preloaderShown={preloaderShown}
                          setPreloaderShown={setPreloaderShown}
                          onlyShot={onlyShotSaved}
                          setOnlyShot={setOnlyShotSaved}
                          moviesCount={foundSavedMovies.length}
                          movieNumber={moviesToLoad}


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
                          requestOnServer={requestOnServer}
                          setRequestOnServer={setRequestOnServer}

          />
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>
        <Navigation/>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
