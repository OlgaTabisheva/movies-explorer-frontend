import React from 'react';


function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__head">Портфолио</h3>
      <div className="portfolio__box">
      <h2 className="portfolio__describe">Статичный сайт</h2>
        <a href="https://olgatabisheva.github.io/how-to-learn/" className="portfolio__symbol" >↗</a>
      </div>
      <div className="line portfolio__line">

      </div>
      <div className="portfolio__box">

      <h2 className="portfolio__describe">Адаптивный сайт</h2>
        <a href="https://olgatabisheva.github.io/russian-travel/" className="portfolio__symbol" >↗</a>
    </div>
      <div className="line portfolio__line">

      </div>
      <div className="portfolio__box">
      <h2 className="portfolio__describe">Одностраничное приложение</h2>
        <a href="https://iamthebest.front.nomoredomains.xyz/" className="portfolio__symbol" >↗</a>
</div>
    </div>
  );
}

export default Portfolio;

