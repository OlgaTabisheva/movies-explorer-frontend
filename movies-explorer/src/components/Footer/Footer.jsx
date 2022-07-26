import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="line footer__line">

      </div>
      <div className="footer__box">
        <p className="footer__year">© 2020</p>

        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">
            Яндекс.Практикум </a>
          <a href="https://github.com/" className="footer__link" target="_blank">
            Github </a>
          <a href="https://ru-ru.facebook.com/" className="footer__link" target="_blank">
            Facebook </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;