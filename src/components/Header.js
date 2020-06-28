import React from 'react';
import ButtonCall from './ButtonCall'
import flages from '../images/flages.png';
import hicon from '../images/hicon.png';
import close from '../images/close.png';
import Logo from '../images/logo.png'
import '../App.css';

function Header() {

  return (
<header>
        <div className="topnav">
         <img src={Logo} className="flag" alt="Logo" />
         <ButtonCall />
           <div id="centermobmenu">
               <img src={hicon} className="flag" alt="hicon" />
               <div className="myLinks">
                 <img src={close} className="flag" alt="close" />
                 <a href="Archive.html">Archive</a>
                 <a href="About.html">About</a>
                 <img src={flages} className="flag" alt="logo" />
             </div>
           </div>
        </div>
</header>
  );
}
export default Header;