import React from 'react';
import {Link} from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__head">Портфолио</h3>
      <Link className="portfolio__box" target="_blank" to={{pathname: "https://olgatabisheva.github.io/how-to-learn"}}>
        <p className="portfolio__describe">Статичный сайт</p>
        <p className="portfolio__symbol">↗</p>
      </Link>
      <div className="line portfolio__line">

      </div>
      <Link className="portfolio__box" target="_blank"
            to={{pathname: "https://olgatabisheva.github.io/russian-travel/"}}>

        <p className="portfolio__describe">Адаптивный сайт</p>
        <p className="portfolio__symbol">↗</p>
      </Link>
      <div className="line portfolio__line">

      </div>
      <Link className="portfolio__box" target="_blank" to={{pathname: "https://iamthebest.front.nomoredomains.xyz/"}}>
        <p className="portfolio__describe">Одностраничное приложение</p>
        <p className="portfolio__symbol">↗</p>
      </Link>
    </div>
  );
}

export default Portfolio;

