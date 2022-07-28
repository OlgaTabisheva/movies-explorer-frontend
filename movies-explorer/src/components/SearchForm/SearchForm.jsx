import React from 'react';
import searchImg from "../../images/search.svg";
import smalltumb from "../../images/smalltumb.svg";
import line from "../../images/line.svg";
import {Link} from "react-router-dom";

function SearchForm(props) {
  function search(){
    props.searchCallback()
  }
  return (
    <div className="search">
      <form className="search__input">

        <div className="search__film-box">
          <img src={searchImg} alt="Изображение поиска" className="movies__search-img"/>
          <input placeholder="Фильм" id="name"
                 name="search__film-name" type="text"
                 className="popup__input popup__input_type_name input search__input-form" minLength={2} maxLength={40} required/>
            <button className='search__findMobile' onClick={search}>Найти</button>
        </div>
        <div className="search__section">
              <button className='search__findDeck' onClick={search} >Найти</button>
          <img src={line} alt="Изображение line" className="movies__search-line"/>
          <img src={smalltumb} alt="Изображение кнопки" className="search__smalltumb"/>
          <button type="button" className='search__find' to='/404'>Короткометражка</button>

        </div>
      </form>

    </div>

  );
}

export default SearchForm;

