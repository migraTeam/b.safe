import React, {useState} from 'react';
import Logo from "./components/Logo";
import menu from "./images/menu.png";
import close from "./images/close.png";
import flages from "./images/flages.png";
import Home from "./components/Home";
import About from "./components/About";
import Arrows from "./components/Arrows";
import Archive from "./components/Archive";
import ButtonCall from "./components/ButtonCall";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App (){
  const [mobileMenu, setmobileMenu] = useState("0");


  const mobMenuOpen = () => {
    if (mobileMenu === "0") {
      setmobileMenu("1");
    } else {
      setmobileMenu("0");
    }
  };
    return (
<Router>
    <>
    <div className="topnav">
    <Logo />
        <div className="mobileMenu" id="mobileMenu">
      {
        {
          '0':             <>
              <img
                onClick={mobMenuOpen}
                src={menu}
                className="flag"
                alt="open mobile menu"
              />
            </>,
          '1':             <>
              <div className="myLinks" onClick={mobMenuOpen}>
                <div className="menupos">
                  <img
                    onClick={mobMenuOpen}
                    src={close}
                    className="flag"
                    alt="close mobile menu"
                  />
                </div>
                  <div className="menupos">
                    <Link to={"/b.safe"}>Home</Link>
                  </div>
                  <div className="menupos">
                    <Link to={"/b.safe/Map"}>Map</Link>
                  </div>
                  <div className="menupos">
                    <Link to={"/Archive"}>Archive</Link>
                  </div>
                  <div className="menupos">
                    <Link to={"/About"}>About</Link>
                  </div>
                  <div className="menupos">
                    <img src={flages} className="flag" alt="logo" />
                  </div>
                
              </div>
            </>
        }[mobileMenu]
      }
        </div>
        </div>
    <ButtonCall />
    <div className="Main">
        <Route exact path="/b.safe" component={Home} />
        <Route exact path="/b.safe/Map" component={Arrows} />
        <Route path="/About" component={About} />
        <Route path="/Archive" component={Archive} />
    </div>
    
    </>
    
</Router>
    );
}

export default App;


