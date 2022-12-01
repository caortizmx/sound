import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import logo from './logoOK.png'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <div id='logo-div'>
        <Link to={"/"}>
          <img width="120px" height="120px" src={logo}></img>
        </Link>
      </div>
      <div className='bar'>
        <div className='title'>
          <h1>ALL</h1><h1 className='side-text-red'>WE</h1><h1>DO</h1><h1 className='side-text-yellow'>IS</h1><h1>MUSIC</h1>
        </div>
      </div>
      <ul className='nav-links'>
        <NavLink exact className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/us"}>
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
