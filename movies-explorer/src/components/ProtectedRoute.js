import React from "react";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route>
      {() => {
        return props.isLoggedIn ? <Component {...props} /> : <Redirect to="./signin"/>
      }
      }
    </Route>
  );
};

export default ProtectedRoute;