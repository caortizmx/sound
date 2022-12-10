import React from 'react'
import turntable from '../turntable.jpg'
import Transition from '../components/Transition'

function Contact() {
  return (
    <div className='contact'>
      <Transition/>
      <div className='email-container'>
        <img id="contact-img" src={turntable}></img>
        <div className='link-container'>
          <a onClick={() => window.location = 'mailto:contact@sounds-likeus.com'} id="email" target="_blank">
          contact@sounds-likeus.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
