import mainLogo from './logo9.png';
import objHeader from './Header.module.css';

import {NavLink} from 'react-router-dom';
import React from 'react';
import Carousel from './Carousel/Carousel';


const Header = () =>{
    return (
      <div className={objHeader.Header}>

        <div className={objHeader.oneHeader}>
          <NavLink className={objHeader.navLink1} to='/'>
            <img alt='mainLogo' src={mainLogo} />
          
            <h1>World of Arda</h1>
          </NavLink>  
        </div>

        <Carousel  />
 
        <Registration  />
      </div>
    );
  }


  const Registration = ()=>{
    return (
      <div className={objHeader.registration}>
        <div className={objHeader.containerRegistration}>
          <hr  />
          <hr  />
          
                <div className={objHeader.registrationMenu}>
          <NavLink to="/quiz" className={objHeader.btRegistration}>Quiz</NavLink>     
          {/* <hr  />       */}
          <NavLink to="/login" className={objHeader.btLogIn}>Log in</NavLink>
        </div>

        </div>
  
      </div>
    );
  }



export default Header; 