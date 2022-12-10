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
          <a onClick={() => window.location = 'mailto:agbuchanan@hotmail.com'} id="email" target="_blank">
            agbuchanan@hotmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
