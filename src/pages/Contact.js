import React from 'react';
import { useMediaQuery } from 'react-responsive';
import contactM from '../contact-m.jpg';
import contactW from '../contact-w.jpg';

function Contact() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <div className='contact' style={{ 
    backgroundImage: `url(${isMobile ? contactM : contactW})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <span onClick={() => window.location = 'mailto:contact@sounds-likeus.com'} id="email" target="_blank">
      contact@sounds-likeus.com
      </span>
    </div>
  )
}

export default Contact
