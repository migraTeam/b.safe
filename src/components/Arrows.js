import React, { useState }  from 'react';
import MapContainer from './MapContainer';
import GreenUp from '../images/Green-Up.svg.png';
import GreenRight from '../images/Green-Right.svg.png';
import GreenDown from '../images/Green-Down.svg.png';
import GreenLeft from '../images/Green-Left.svg.png';
import RedLeft from '../images/Red-Left.svg.png';
import '../App.css';

function Arrows() {
    const [ArrowColor, setArrowColor] = useState("Green");


        const ChangeArrowColor = () => {
          if(ArrowColor === "Green"){
        setArrowColor("Red");
        console.log(ArrowColor);

          }
          else{
            setArrowColor("Green");
            console.log(ArrowColor);
          }
    };
  return (
<div className="MainContainer">
<div className ="ArrowsContainer">
<div className ="ArrowsContainer"><img onClick={ChangeArrowColor} src={GreenLeft} className="arrow" alt="arrow left" />
<div className ="ArrowsCenterContainer">
<div className="ArrowDiv"><img onClick={ChangeArrowColor} src={GreenUp} className="arrow" alt="arrow up" /></div>
<MapContainer />
<div className="ArrowDiv"><img onClick={ChangeArrowColor} src={GreenDown} className="arrow" alt="arrow down" /></div>
</div>
</div>
<div className ="ArrowsContainer">
<img onClick={ChangeArrowColor} src={GreenRight} className="arrow" alt="arrow right" />
</div>
</div>
</div>
  );
}
export default Arrows;