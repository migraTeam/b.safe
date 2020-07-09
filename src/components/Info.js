import React, { useState } from 'react';
import cases from './cases.json';
import '../App.css';

function Info({ onClick, status }) {


  return (

        <div className="InfoContainer">
        <h3>IMPORTANT</h3>
        <span className="description">Please read carefully - you should call the police in situations where there is</span> <ul><li>danger to life</li><li> use or immediate threat of use of violence</li> <li>a crime in progress</li><li> serious injury to a person</li><li>or an offender that has been disturbed.</li></ul><br></br>
        <span className="description"> Please notice that you call the police with your own phone, your number is visible. 
An abuse could have legal consequences.</span>
    <button onClick= {onClick} className="btn btn-primary mt-2" type="submit">
      OK
    </button>
        </div>

  );
}

export default Info;