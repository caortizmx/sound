import React from 'react';
import { useMediaQuery } from 'react-responsive';
import bryden from '../bryden.jpeg';
import abraham from '../abraham.jpeg';
import abrahamM from '../celok_ab.png';
import brydenM from '../celok_briden.png';
import Transition from '../components/Transition';
import { useEffect, useState } from "react";
import {AnimatePresence} from 'framer-motion';

function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    
  return (
    <div className='home'>
        <AnimatePresence>
        {loaded ? null : <Transition/>}
        </AnimatePresence>
        <div className='bryden-section'>
            <img src={isMobile ? brydenM : bryden} width="100%" height="auto"/>
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
            { isMobile ? <img src={abrahamM}/> :
                <div className='img-container'>
                    <img width="100%" height="auto" src={abraham}/>
                </div>
            }
        </div>
    </div>
  )
}

export default Home
