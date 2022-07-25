import React from "react";
import logo from "../../images/landing-logo.svg";



function Promo() {
  return (
    <main className="promo">
      <div className="promo__box">
      <h1 className="promo__text">Учебный проект студента факультета веб-разработки.</h1>
      <img src={logo} className="landing-logo" alt="logo" />
      </div>
    </main>
  );
}

export default Promo;


