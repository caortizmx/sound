import React from 'react'
import Transition from '../components/Transition';

function Projects() {
  return (
    <div className='projects' >
      <Transition/>
      <div className='video-container'>
        <iframe src="https://www.youtube.com/embed/-2bPV7lme90?autoplay=0&showinfo=0&controls=0" frameborder="0" ></iframe>
      </div>

      <div className='background'>
        <div className='project-background'>
        <h3 id='current'>Currently</h3>
          <div className='projects-top'>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
          </div>
          <div className='background-divide'></div>
          <div className='projects-bottom'>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <div className='project-lines'></div>
            <h3 id='projects-tl'>Projects</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
