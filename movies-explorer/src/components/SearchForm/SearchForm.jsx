import React from 'react';
import search from "../../images/search.svg";
import smalltumb from "../../images/smalltumb.svg";
import line from "../../images/line.svg";
import {Link} from "react-router-dom";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__input">

        <div className="search__film-box">
          <img src={search} alt="Изображение поиска" className="movies__search-img"/>
          <input placeholder="Фильм" id="name"
                 name="search__film-name" type="text"
                 className="popup__input popup__input_type_name input search__input-form" minLength={2} maxLength={40} required/>
          <div className='search__blue'>
            <Link className='search__find1' to='/404'>Найти</Link>
          </div>
        </div>
        <div className="search__section">
            <div className='search__blue2'>
              <Link className='search__find3' to='/404'>Найти</Link>
            </div>
          <img src={line} alt="Изображение line" className="movies__search-line"/>
          <img src={smalltumb} alt="Изображение кнопки" className="search__smalltumb"/>
          <button type="button" className='search__find2' to='/404'>Короткометражка</button>

        </div>
      </form>

    </div>

  );
}

export default SearchForm;

