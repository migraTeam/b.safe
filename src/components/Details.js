import React from 'react';
import '../App.css';

function Details() {

  return (
<div className="MainContainer">
<div className="DetailsContainer">

<form>
<h4>What happened?</h4>
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option1"
        className="form-check-input"
      />
      Robbed
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option2"
        className="form-check-input"
      />
      Attacked
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option3"
        className="form-check-input"
      />
      Insulted
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option4"
        className="form-check-input"
      />
      Drugs
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option5"
        className="form-check-input"
      />
      Something else
    </label>
  </div>

</form>

<form>
<h4>What's missing?</h4>
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option1a"
        className="form-check-input"
      />
      Wallet
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option2a"
        className="form-check-input"
      />
      Backpack
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option3a"
        className="form-check-input"
      />
      Camera
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option4a"
        className="form-check-input"
      />
      Smartphone
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option5a"
        className="form-check-input"
      />
      Something else
    </label>
  </div>
</form>



</div>
  <div className="form-group">
  <form>
<h4>Persons injured?</h4>
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option1b"
        className="form-check-input"
      />
      1 or more persons are injured
    </label>
  </div>


  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option3b"
        className="form-check-input"
      />
      Very severe injuries
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option4b"
        className="form-check-input"
      />
      No person injured
    </label>
  </div>

    <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option5b"
        className="form-check-input"
      />
      Something else
    </label>
  </div>

</form>
    <button className="btn btn-primary mt-2" type="submit">
      Save
    </button>
  </div>
  </div>
  );
}
export default Details;