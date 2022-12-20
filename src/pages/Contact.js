import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import contactM from '../contact-m.jpg';
import contactW from '../contact-w.jpg';

function Contact() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <div className='contact'>
      <div className='email-container'>
        <img id="contact-img" src={isMobile ? contactM : contactW} alt='turntable'/>
        <div className='link-container'>
          <Link onClick={() => window.location = 'mailto:contact@sounds-likeus.com'} id="email" target="_blank">
          contact@sounds-likeus.com
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
