import React from 'react';
import search from "../../images/search.svg";
import smalltumb from "../../images/smalltumb.svg";

function SearchForm() {
  return (
    <div className="seatch">
<div className="search__input">
  <div className="search__film-box">
    <img src={search} alt="Изображение поиска" className="movies__search-img"/>

    <div className="search__film-name">Фильм</div>
  </div>
    <div className="search__section">
      <div className="search__find">Найти</div>
      <img src={smalltumb} alt="Изображение кнопки" className="search__smalltumb"/>
      <div className="search__long">Короткометражка</div>
    </div>
  </div>
</div>

  );
}

export default SearchForm;

