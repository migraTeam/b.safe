import React, { useState, useEffect } from 'react';
import map from '../images/map.png';
import '../App.css';

function Map() {

var x = document.getElementById("mapholder");

  useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  });

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
      console.log(latlon)
  var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&sensor=false&key=AIzaSyCGpc8kGF95sQU2Ky8lf3YHl5Y-E8-eRoM`;
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