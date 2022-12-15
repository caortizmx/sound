import React from 'react'
import { Link } from 'react-router-dom'
import turntable from '../turntable.jpg'

function Contact() {
  return (
    <div className='contact'>
      <div className='email-container'>
        <img id="contact-img" src={turntable} alt='turntable'></img>
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
