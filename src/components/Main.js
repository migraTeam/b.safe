import React from 'react';
import Arrows from "./Arrows";
import Foto from './Foto';
import Details from './Details';
import ButtonCall from './ButtonCall'
import '../App.css';

function Main() {

  return (
<div className="Main">
<ButtonCall />
<Arrows />
<Details />
<Foto />
</div>
  );
}
export default Main;