import React from 'react';
import searchImg from "../../images/search.svg";

import line from "../../images/line.svg";

function SearchForm(props) {

  function search(e) {
    e.preventDefault()
    props.searchCallback()
  }

  function handleChangeName(e) {
    props.setMovieName(e.target.value);
  }


  return (
    <div className="search">
      <form className="search__input">

        <div className="search__film-box">
          <img src={searchImg} alt="Изображение поиска" className="movies__search-img"/>
          <input placeholder={`${props.moveName ? props.moveName : 'Фильм'}`} id="name" onChange={handleChangeName}
                 name="search__film-name" type="text"
                 className="popup__input popup__input_type_name input search__input-form" minLength={2} maxLength={40}
                 required/>
          <button className='search__findMobile' onClick={search}>Найти</button>
        </div>
        <div className="search__section">
          <button className='search__findDeck' type="submit" onClick={search}>Найти</button>
          <img src={line} alt="Изображение line" className="movies__search-line"/>
          <button type="button" onClick={() => {
            props.setOnlyShot(!props.onlyShot)
          }} className={`search__smalltumb ${props.onlyShot ? 'search__smalltumb_active' : ''}`}>
          </button>
          <p className='search__find'>Короткометражка</p>

        </div>
      </form>

    </div>

  );
}

export default SearchForm;

