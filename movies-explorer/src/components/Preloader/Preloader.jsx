import React from 'react';
import preloader from "../../images/769.gif";


function Preloader() {
  return (
    <div id='preloader' className="preloader">
    {/*  preloader_active*/}
      <img src={preloader} className="preloader__img" alt="preloader"/>
    </div>
  );
}

export default Preloader;



