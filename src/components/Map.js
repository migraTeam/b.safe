import React from 'react';
import map from '../images/map.png';
import '../App.css';

function Map() {
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyB27IflEAH4CLf825AvmiMbXE7NTK9obeA`;

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

  return (
<div>
  <div className="MainContainer" id=""><img src={map} className="MainImage" alt="map" /></div>
  <div className="MainContainer" id="mapholder"></div>
</div>
  );
}
export default Map;