import React, { useState } from 'react';
import ButtonCall from './ButtonCall'
import flages from '../images/flages.png';
import menu from '../images/menu.png';
import close from '../images/close.png';
import Logo from '../images/logo.png'
import '../App.css';

const Header = () => {
    const [mobileMenu, setmobileMenu] = useState("0");

        const mobMenuOpen = () => {
          if(mobileMenu == 0){
        setmobileMenu("1")
          }
          else{
            setmobileMenu("0")
          }
    };

  return (
<header>
        <div className="topnav">
         <img src={Logo} className="flag" alt="Logo" />
         <ButtonCall />
           <div id="mobileMenu">
           {mobileMenu == 0 ? <>   
               <img onClick={mobMenuOpen} src={menu} className="flag" alt="open mobile menu" />
               </> : null}
              {mobileMenu == 1 ? <>        
               <div className="myLinks">
                 <img onClick={mobMenuOpen} src={close} className="flag" alt="close mobile menu" />
                 <a href="Archive.html">Archive</a>
                 <a href="About.html">About</a>
                 <img src={flages} className="flag" alt="logo" />
             </div>
             </> : null}
           </div>
        </div>
</header>
  );
}
export default Header;