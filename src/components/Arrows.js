import React from 'react';
import MapContainer from './MapContainer';
import GreenUp from '../images/Green-Up.svg.png';
import GreenRight from '../images/Green-Right.svg.png';
import GreenDown from '../images/Green-Down.svg.png';
import GreenLeft from '../images/Green-Left.svg.png';
import '../App.css';

function Arrows() {

  return (
<div className="MainContainer">
<div className ="ArrowsContainer">
<div className ="ArrowsContainer"><img src={GreenLeft} className="arrow" alt="arrow left" />
<div className ="ArrowsCenterContainer">
<div className="ArrowDiv"><img src={GreenUp} className="arrow" alt="arrow up" /></div>
<MapContainer />
<div className="ArrowDiv"><img src={GreenDown} className="arrow" alt="arrow down" /></div>
</div>
</div>
<div className ="ArrowsContainer">
<img src={GreenRight} className="arrow" alt="arrow right" />
</div>
</div>
</div>
  );
}
export default Arrows;