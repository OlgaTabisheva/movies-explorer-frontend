import React from 'react';
import preloader from "../../images/preloader.gif";


function Preloader() {
  return (
    <div id='preloader'>
      <img src={preloader} className="preloader" alt="preloader" />
    </div>
  );
}

export default Preloader;



