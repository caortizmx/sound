import React from 'react';
import bryden from '../bryden.jpeg';
import abraham from '../abraham.jpeg';
import Transition from '../components/Sidebar/Transition';
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [])
  return (
    <div className='home'>
        <AnimatePresence>
        {loaded ? null : <Transition/>}
        </AnimatePresence>
        <div className='bryden-section'>
            <img src={bryden} width="100%" height="auto"></img>
            <div className='home-names'>
                <h1 className='name'>Bryden</h1>
                <h1 className='surname'>Baird</h1>
            </div>
        </div>
        <div className='abraham-section'>
            <div className='home-names'>
                <h1 className='name'>Abraham</h1>
                <h1 className='surname'>Buchanan</h1>
            </div>
            <div className='img-container'>
                <img width="100%" height="auto" src={abraham}></img>
            </div>
        </div>
    </div>
  )
}

export default Home
