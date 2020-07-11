import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import ButtonCall from "./ButtonCall";
import About from "./About";
import Archive from "./Archive";
import "../App.css";


function Main() {

  return (
    <Router>
    <div className="Main">
      <ButtonCall />
        <Route exact path="/b.safe" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Archive" component={Archive} />

    </div>
    </Router>
  );
}
export default Main;

