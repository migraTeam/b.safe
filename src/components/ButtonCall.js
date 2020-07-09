import React, { useState } from 'react';
import cases from './cases.json';
import '../App.css';


const newData= cases.map((data) => {
/*alert(data.id + " cases in archive");*/
}
);


function ButtonCall() {
    const [CallPolice, setCallPolice] = useState("Unlock Call Police");

        const unlock = () => {
          if(CallPolice === "Unlock Call Police"){
            alert("Please read carefully - you should call the police in situations where there is danger to life, use or immediate threat of use of violence, a crime in progress, serious injury to a person or an offender that has just been disturbed");
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