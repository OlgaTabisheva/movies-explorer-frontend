import React from 'react';
import preloader from "../../images/769.gif";


function Preloader(props) {
  const classname = "preloader" + (props.isActive ? "preloader_active" : '');
  return (
    <div id='preloader' className={classname}>
      <img src={preloader} className="preloader__img" alt="preloader"/>
    </div>
  );
}

export default Preloader;



