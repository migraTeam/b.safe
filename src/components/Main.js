import React, { useState } from 'react';
import Arrows from "./Arrows";
import Foto from './Foto';
import Info from './Info';
import Details from './Details';
import ButtonCall from './ButtonCall'
import '../App.css';

function Main() {
const [whichContainer, setwhichContainer] = useState(0);

  const changeStatus = () => {
    console.log(whichContainer);
    if (whichContainer < 2){
    setwhichContainer(whichContainer + 1)}
    else{
setwhichContainer("0")
    }
  }



  return (
<div className="Main">
<ButtonCall />
      {
        {
          '0': <Info onClick={changeStatus} status={whichContainer} />,
          '1': <Details onClick={changeStatus} status={whichContainer}/>,
          '2': <><Arrows onClick={changeStatus} status={whichContainer} /><Foto /></>

        }[whichContainer]
      }
</div>
  );
}
export default Main;

/*
<Foto />
{whichContainer === "0"? <>
<Arrows onClick={changeStatus} status={whichContainer} />
<Foto />
</>:
<Details onClick={changeStatus} status={whichContainer}/>}
*/