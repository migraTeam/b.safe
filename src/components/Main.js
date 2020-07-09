import React, { useState } from 'react';
import Arrows from "./Arrows";
import Foto from './Foto';
import Details from './Details';
import ButtonCall from './ButtonCall'
import '../App.css';

function Main() {
const [whichContainer, setwhichContainer] = useState("0");

  const changeStatus = () => {
    if (whichContainer === "0"){
    setwhichContainer("1")}
    else{
setwhichContainer("0")
    }
  }

  return (
<div className="Main">
<ButtonCall />
{whichContainer === "0"? <>
<Arrows onClick={changeStatus} status={whichContainer} />
<Foto />
</>:
<Details onClick={changeStatus} status={whichContainer}/>}

</div>
  );
}
export default Main;