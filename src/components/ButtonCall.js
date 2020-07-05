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
              <span>This number is a 24 hour service and you should only use it in situations where there is:</span><ul>
<li>danger to life, </li><li>use or immediate threat of use of violence,</li><li> a crime in progress,</li><li> serious injury to a person,</li><li> an offender that has just been disturbed</li></ul>
        </div>

  );
}
export default ButtonCall;