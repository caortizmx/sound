import React from 'react';
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
    initial={{opacity: 1}}
    exit={{opacity: 0, duration: 0.5, ease: "easeOut" }}
    transition={{ duration: 1, ease: "easeOut"}}
      className="loader"
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
    </motion.div>
  )
}

export default Loader
