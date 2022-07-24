import React from 'react';
import search from "../../images/search.svg";
import smalltumb from "../../images/smalltumb.svg";
import line from "../../images/line.svg";
import {Link} from "react-router-dom";

function SearchForm() {
  return (
    <div className="search">
<div className="search__input">

  <div className="search__film-box">
    <img src={search} alt="Изображение поиска" className="movies__search-img"/>
    <input  placeholder="Фильм" id="name"
            name="search__film-name" type="text"
            className="popup__input popup__input_type_name input" minLength={2} maxLength={40} required/>
  </div>
    <div className="search__section">
      <Link className='search__find' to='/404'>Найти</Link>
      <img src={line} alt="Изображение line" className="movies__search-line"/>
      <img src={smalltumb} alt="Изображение кнопки" className="search__smalltumb"/>
      <Link className='search__find' to='/404'>Короткометражка</Link>

    </div>
  </div>
</div>

  );
}

export default SearchForm;

