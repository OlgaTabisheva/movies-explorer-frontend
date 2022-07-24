import React from 'react';
import search from "../../images/search.svg";
import smalltumb from "../../images/smalltumb.svg";

function SearchForm() {
  return (
    <div className="seatch">
<div className="search__input">

  <div className="search__film-box">
    <img src={search} alt="Изображение поиска" className="movies__search-img"/>
    <input  placeholder="Фильм" id="name"
            name="search__film-name" type="text"
            className="popup__input popup__input_type_name input" minLength={2} maxLength={40} required/>
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

