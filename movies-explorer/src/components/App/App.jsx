import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
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
  const [movieNumber, setMovieNumber] = useState(7);
  const [movies, setMovies] = React.useState([]) // карточки с стороннего сервера
  const [searchPressed, setSearchPressed] = React.useState(false)
  const [moviesForView, setMoviesForView] = React.useState([]) // отображаемые карточки
  const [foundMovies, setFoundMovies] = React.useState([]) // карточки по условию поиска
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
  }, []);


  useEffect(() => {
    if (foundMovies.length !== 0) {
      showNMovies();
      setSearchPressed(true)
    }
  }, [foundMovies]);

  useEffect(() => {
    showNMovies();
  }, [movieNumber]);

  useEffect(() => {
    if (movies.length != 0)
      return;
    Promise.all([moviesApi.getInitialMovies()])
      .then(([newMovies]) => {
        setMovies(newMovies)
      }).catch(err => console.log(err))

  }, []);


  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
      return;
    }

    history.push('/signin');
  }, [loggedIn]);

  function searchCallback() {
    setFoundMovies(searchMovies(movieName, movies));
  }

  function showNMovies() {
    const n = movieNumber >= foundMovies.length ? foundMovies.length : movieNumber
    setMoviesForView(foundMovies.slice(0, n));
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

  function loadMovies() {
    setMovieNumber(movieNumber + 3)
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
          />
          <ProtectedRoute exact path="/saved-movies" isLoggedIn={loggedIn} component={SavedMovies}
                          handleNavClick={handleNavClick}
                          isNavPopupOpen={isNavPopupOpen}
                          closeAllPopups={closeAllPopups}
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
            {loggedIn ? <Redirect to="/profile"/> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
        <Navigation/>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
