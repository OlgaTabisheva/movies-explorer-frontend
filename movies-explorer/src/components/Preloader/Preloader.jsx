import React from 'react';
import preloader from "../../images/769.gif";


function Preloader() {
  return (
    <div id='preloader'>
      <img src={preloader} className="preloader" alt="preloader"/>
    </div>
  );
}

export default Preloader;



