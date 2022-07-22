import React from 'react';
import avatar from "../../images/avatar.jpg";


function AboutMe() {
  return (
    <div className="section-me">
      <h3 className="section-me__header">Студент</h3>
      <div className="line">

      </div>
      <div className="section-me__about">
      <div className="section-me__student">
      <h2 className="section-me__name">Ольга</h2>
      <div className="section-me__profession">Фронтенд-разработчик</div>
      <p className="section-me__describe">
        Я родилась и живу в Санкт-Петербурге закончила факультет фотоники и оптоинформатики СПБГУ ИТМО.
        Нравится собирать грибы и кататься на велосипеде, путешествовать. Люблю животных, дома имеется рыжий кот.
      </p>
      <div className="section-me__contacts">
        <p className="section-me__contacts-fb">Facebook</p>
        <p className="section-me__contacts-gh">Github</p>
      </div>
      </div>
      <img src={avatar} alt="Изображение аватара" className="section-me__avatar"/>
    </div>
    </div>
  );
}

export default AboutMe;

