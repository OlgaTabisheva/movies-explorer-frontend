import React from 'react';


function AboutProject() {
  return (
    <main className="nav">
      <h2 className="nav__about">О проекте</h2>
      <div className="line">

      </div>
      <div className="nav__container">
        <div className="nav__column">
          <h3 className="nav__head">Дипломный проект включал 5 этапов</h3>
          <p className="nav__text"> Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="nav__column">
          <h3 className="nav__head">На выполнение диплома ушло 5 недель</h3>
          <p className="nav__text ">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="nav__limit-container">
        <div className="nav__limit">
          <p className="nav__time-back">1 неделя</p>
          <p className="nav__description">Back-end</p>
        </div>
        <div className="nav__limit">
          <p className="nav__time-front">4 недели</p>
          <p className="nav__description">Front-end</p>
        </div>
      </div>
    </main>
  );
}

export default AboutProject;


