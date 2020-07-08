import React, { useState } from "react";
import MapContainer from "./MapContainer";
import GreenUp from "../images/Green-Up.svg.png";
import GreenRight from "../images/Green-Right.svg.png";
import GreenDown from "../images/Green-Down.svg.png";
import GreenLeft from "../images/Green-Left.svg.png";
import RedLeft from "../images/Red-Left.svg.png";
import RedUp from "../images/Red-Up.svg.png";
import RedDown from "../images/Red-Down.svg.png";
import RedRight from "../images/Red-Right.svg.png";
import "../App.css";

function Arrows(props) {
  const [ArrowColor, setArrowColor] = useState("Green");
  const timestamp = Date.now();
  const ChangeArrowColor = (e) => {
    if (ArrowColor === "Green") {
      setArrowColor("Red");
      alert(
        "A new case get created! You indicated the direction: " +
          e.target.name +
          " at time: " +
          new Intl.DateTimeFormat("de-DE", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(timestamp)
      );
    } else {
      setArrowColor("Green");
    }
  };

  return (
    <div className="MainContainer" id="mapContainer">
      <div className="ArrowsContainer">
        <div className="ArrowsContainer">
          {ArrowColor === "Green" ? (
            <>
              <img
                onClick={ChangeArrowColor}
                src={GreenLeft}
                name="left"
                className="arrow"
                alt="green arrow left"
              />
            </>
          ) : (
            <img
              onClick={ChangeArrowColor}
              src={RedLeft}
              className="arrow"
              alt="red arrow left"
            />
          )}
          <div className="ArrowsCenterContainer">
            <div className="ArrowDiv">
              {ArrowColor === "Green" ? (
                <>
                  <img
                    onClick={ChangeArrowColor}
                    src={GreenUp}
                    name="up"
                    className="arrow"
                    alt="green arrow up"
                  />
                </>
              ) : (
                <img
                  onClick={ChangeArrowColor}
                  src={RedUp}
                  className="arrow"
                  alt="red arrow up"
                />
              )}
            </div>
            <MapContainer />
            <div className="ArrowDiv">
              {ArrowColor === "Green" ? (
                <>
                  <img
                    onClick={ChangeArrowColor}
                    src={GreenDown}
                    name="down"
                    className="arrow"
                    alt="green arrow down"
                  />
                </>
              ) : (
                <img
                  onClick={ChangeArrowColor}
                  src={RedDown}
                  className="arrow"
                  alt="red arrow down"
                />
              )}
            </div>
          </div>
        </div>
        <div className="ArrowsContainer">
          {ArrowColor === "Green" ? (
            <>
              <img
                onClick={ChangeArrowColor}
                src={GreenRight}
                name="right"
                className="arrow"
                alt="green arrow right"
              />
            </>
          ) : (
            <img
              onClick={ChangeArrowColor}
              src={RedRight}
              className="arrow"
              alt="red arrow right"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Arrows;
