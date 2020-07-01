import React from 'react';
import MapContainer from './MapContainer';
import Foto from './Foto';
import Details from './Details';
import '../App.css';

function Main() {

  return (
<div className="Main">
<MapContainer />
<Details />
<Foto />
</div>
  );
}
export default Main;