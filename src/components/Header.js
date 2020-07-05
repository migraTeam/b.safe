import React, { useState } from 'react';

import flages from '../images/flages.png';
import menu from '../images/menu.png';
import close from '../images/close.png';
import '../App.css';

const Header = () => {
    const [mobileMenu, setmobileMenu] = useState("0");

        const mobMenuOpen = () => {
          if(mobileMenu === "0"){
        setmobileMenu("1")
          }
          else{
            setmobileMenu("0")
          }
    };

  return (
<header>
        <div className="topnav">
         <div className="logoContainer"><span className="logo">b.safe</span></div>

           <div className="mobileMenu" id="mobileMenu">
           {mobileMenu === "0" ? <>   
               <img onClick={mobMenuOpen} src={menu} className="flag" alt="open mobile menu" />
               </> : null}
              {mobileMenu === "1" ? <>        
               <div className="myLinks">
                 <div className="menupos"><img onClick={mobMenuOpen} src={close} className="flag" alt="close mobile menu" /></div>
                 <div className="menupos"><a href="Archive.html">Archive</a></div>
                 <div className="menupos"><a href="About.html">About</a></div>
                 <div className="menupos"><img src={flages} className="flag" alt="logo" /></div>
             </div>
             </> : null}
           </div>
        </div>
</header>
  );
}
export default Header;