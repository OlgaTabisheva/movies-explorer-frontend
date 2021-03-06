import React from 'react';


function Techs() {
  return (
    <div className="technology">
      <div className="technology__head-box">
        <h3 className="technology__head"> Технологии</h3>
        <div className="line technology__line">
        </div>
      </div>
      <h2 className="technology__about">7 технологий</h2>
      <p className="technology__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
        проекте.</p>
      <div className="technology__box">
        <p className="technology__section">HTML</p>
        <p className="technology__section">CSS</p>
        <p className="technology__section">JS</p>
        <p className="technology__section">React</p>
        <p className="technology__section">Git</p>
        <p className="technology__section">Express.js</p>
        <p className="technology__section">mongoDB</p>
      </div>
    </div>
  );
}

export default Techs;

