import React from 'react';
import avatar from "../../images/avatar.jpg";
import {Link, Route, Switch} from "react-router-dom";


function Error404() {
  return (
    <div className="error404">
      <h2 className="error__name">404</h2>
     <p className="error__description">Страница не найдена</p>
      <Switch>
        <Route path='/'>
          <Link className='error__link' >Назад</Link>
        </Route>
       </Switch>
    </div>
  );
}

export default Error404;

