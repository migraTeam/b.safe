import React, { useState } from 'react';
import Arrows from "./Arrows";
import Foto from './Foto';
import Details from './Details';
import ButtonCall from './ButtonCall'
import '../App.css';

function Main() {
const [whichContainer, setwhichContainer] = useState("0");

  const increment = () => {
    setwhichContainer("1")
  }

  return (
<div className="Main">
<ButtonCall />
{whichContainer === "0"? <>
<Arrows onClick={increment} status={whichContainer} /></>:
<Details />}
<Foto />
</div>
  );
}
export default Main;