import React, { useState } from 'react';
import Arrows from "./Arrows";
import Info from './Info';
import Details from './Details';
import Foto from './Foto';
import '../App.css';

function Home() {
const [whichContainer, setwhichContainer] = useState(0);

  const changeStatus = () => {
    console.log(whichContainer);
    if (whichContainer < 3){
    setwhichContainer(whichContainer + 1)}
    else{
setwhichContainer("0")
    }
  }

  return (
<div className="Main">
      {
        {
          '0': <Info onClick={changeStatus} status={whichContainer} />,
          '1': <Details onClick={changeStatus} status={whichContainer}/>,
          '2': <Arrows onClick={changeStatus} status={whichContainer} />,
          '3': <Foto onClick={changeStatus} status={whichContainer} />
        }[whichContainer]
      }
</div>
  );
}
export default Home;
