import React from 'react'
import turntable from '../turntable.jpg'

function Contact() {
  let url="agbuchanan@hotmail.com";
  return (
    <div className='contact'>
      <div className='email-container'>
        <img id="contact-img" src={turntable}></img>
        <p>
        <a id="email" href="mailto=agbuchanan@hotmail.com" target="_blank">
          agbuchanan@hotmail.com
        </a>
        </p>
      </div>
    </div>
    
  )
}

export default Contact
