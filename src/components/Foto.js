import React, { useState } from 'react';
import foto from '../images/foto.jpg';
import '../App.css';

function Foto() {
const [takePicture, settakePicture] = useState("You want to take a picture?");

const unlock = () => {
  if(takePicture === "You want to take a picture?"){
settakePicture("Take now a picture")
  }
  else{
    settakePicture("You want to take a picture?")
  }
};
  return (
<div className="FotoContainer" id="fotoContainer">
<img className="img" src={foto} alt="foto"></img>
 <button className={takePicture} onClick={unlock}>{takePicture}
 {takePicture === "" ? <>
 <a className="takePicture" href="tel:555-555-1212">555-555-1212</a>
              </> : null}
              </button>
</div>
  );
}
export default Foto;