import React, { useState } from 'react';
import foto from '../images/foto.jpg';
import '../App.css';

function Foto({ onClick }) {
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
<img className="img" src={foto} alt="foto" onClick={ onClick }></img>
 <button className="btn" onClick={unlock}>{takePicture}
              </button>
</div>
  );
}
export default Foto;