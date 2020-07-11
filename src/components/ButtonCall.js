import React, { useState } from 'react';
import '../App.css';


function ButtonCall() {
    const [CallPolice, setCallPolice] = useState("Unlock Call Police");

        const unlock = () => {
          if(CallPolice === "Unlock Call Police"){
        setCallPolice("CALL POLICE")
          }
          else{
            setCallPolice("")
          }
    };

  return (

        <div className="buttonContainer">
 <button className={CallPolice} onClick={unlock}>{CallPolice}
 {CallPolice === "" ? <>
 <a className="CallNow" href="tel:555-555-1212">555-555-1212</a>
              </> : null}
              </button>
        </div>

  );
}
export default ButtonCall;