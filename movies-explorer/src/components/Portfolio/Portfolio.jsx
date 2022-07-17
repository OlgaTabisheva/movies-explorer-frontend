import React from 'react';


function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__head">Портфолио</h3>
      <div className="portfolio__box">
      <h2 className="portfolio__describe">Статичный сайт</h2>
     <div className="portfolio__symbol">↗</div>
      </div>
      <div className="portfolio__box">
      <h2 className="portfolio__describe">Адаптивный сайт</h2>
      <div className="portfolio__symbol">↗</div>
    </div>
      <div className="portfolio__box">
      <h2 className="portfolio__describe">Одностраничное приложение</h2>
      <div className="portfolio__symbol">↗</div>
</div>
    </div>
  );
}

export default Portfolio;

