import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {Link, NavLink } from 'react-router-dom';
import logo from './logoOK.png';
import logoMobile from './logo_cel.png';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 601px)' });

  return (
    <nav className='nav-bar'>
      <div id='logo-div'>
        <Link to={"/"}>
          {isMobile ?  <img src={logoMobile} alt='logo' className='mobile-logo'/> :  <img src={logo} alt='logo' className='web-logo'/>}
        </Link>
      </div>
      {isDesktop && 
        <div className='bar'>
          <div className='title'>
            <h1>ALL</h1><h1 className='side-text-red'>WE</h1><h1>DO</h1><h1 className='side-text-yellow'>IS</h1><h1>MUSIC</h1>
          </div>
        </div>
      }
      <ul className='nav-links'>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/us"}>
          <div className='circle'><li>Us</li></div>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/projects"}>
          <div className='circle'><li>Projects</li></div>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/contact"}>
          <div className='circle'><li>Contact</li></div>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
