import React, { useState } from "react";
import Logo from "./Logo";
import menu from "../images/menu.png";
import close from "../images/close.png";
import flages from "../images/flages.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";

function Header() {
  const [mobileMenu, setmobileMenu] = useState("0");

  const mobMenuOpen = () => {
    if (mobileMenu === "0") {
      setmobileMenu("1");
    } else {
      setmobileMenu("0");
    }
  };

  return (
    <header>
      <div className="topnav">
        <Logo />
        <div className="mobileMenu" id="mobileMenu">
          {mobileMenu === "0" ? (
            <>
              <img
                onClick={mobMenuOpen}
                src={menu}
                className="flag"
                alt="open mobile menu"
              />
            </>
          ) : null}
          {mobileMenu === "1" ? (
            <>
              <div className="myLinks" onClick={mobMenuOpen}>
                <div className="menupos">
                  <img
                    onClick={mobMenuOpen}
                    src={close}
                    className="flag"
                    alt="close mobile menu"
                  />
                </div>
                <Router>
                  <div className="menupos">
                    <Link to={"/"}>Home</Link>
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
                </Router>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
export default Header;
