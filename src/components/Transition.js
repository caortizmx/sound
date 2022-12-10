import React from 'react'
import {motion as m, useIsPresent} from 'framer-motion';
import logo from './logoOK.png';

function Transition() {
  const isPresent = useIsPresent();
  return (
    <m.div 
    initial={{ opacity: 1, duration: 2}}
    animate={{ opacity: 0, transition: { duration: 2, ease: "linear" } }}
    style={{ originX: isPresent ? 0 : 1 }}
    className="transition"
    >
      
      <div className='music-loader'>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
        <div className='loader-line'></div>
      </div>

      <div className='logo-transition'>
        <img src={logo} width="150px" height="150px"></img>
      </div>
      

    </m.div>
  )
}

export default Transition
