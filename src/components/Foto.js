import React from 'react';
import foto from '../images/foto.jpg';
import '../App.css';

function Foto() {

  return (
<div className="MainContainer">
<img src={foto} className="MainImage" alt="foto" />
</div>
  );
}
export default Foto;