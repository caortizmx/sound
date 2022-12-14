import React from 'react'
import bryden from '../bryden.jpeg';
import abraham from '../abraham.jpeg';
import {motion as m} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import brydenM from '../celok_briden.png';
import abrahamM from '../celok_ab.png';

function Us() {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    
    <div className='us'>
      <m.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1, ease: "easeOut"}}
        className='bryden-info'>
          <div className='img-bryden'>
            <div className='us-names'>
              <h4 id='yellow-name' >Bryden</h4>
              <h4 id='white-surname'>Baird</h4>
            </div>
            <img src={bryden} alt="Bryden"></img>
          </div>
          <div className='bryden-text'>
            <p>Bryden recently finished living in Mexico, in the role of <span id='band-leader'>band leader</span>/<span id='trumpet'>trumpet</span> player in cirque du soleil's joya.  He was musical director for both steven page, formerly of the barenaked ladies and indie-pop chanteuse feist. He also has a busy studio career in toronto, canada.  Composition and orchestration credits include art of time ensemble, work on the feature film 'gunless', with greg keelor of blue rodeo, chantal kreviazuk's symphony tour, and the queer songbook orchestra.  He studied jazz trumpet at humber college, university of toronto, banff centre for the arts with kenny wheeler, and privately with laurie frink in nyc. Television appearances have included saturday night live, the tonight show with jay leno, the late show with david letterman, late night with conan o'brien, jimmy kimmel live, late night with jools holland, the hour and bbc and cbc radio.  He has performed with michael buble, the temptations, kris kristofferson, louie bellson, blue rodeo, the toronto symphony, the vancouver symphony, esthero, sean lennon, merl saunders, ron sexsmith, sarah harmer, chantal kreviazuk, raine maida, the band of the ceremonial guard changing of the guard in canada and spoon to name a few.</p>
          </div>
      </m.div>
      <m.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 1, ease: "easeOut"}}
      className='abraham-info'>
        <div className='abraham-text'>
          <ul>
            <li>I am a Drummer Composer, currently working for a Cirque du Soleil show. </li>
            <li>In the last 8 years I have dedicated myself to creating instrumental music for Cirque acts and other type of performance.</li>
            <li>I have collaborated composing music for Cirque du Soleil. </li>
            <li>Also, music creation for different artists around the world. </li>
            <li>I have 2 personal albums , and music singles , in which internationally renowned musicians such as Bryden Baird, Andre Nieri, Anthony Crawford, Ruben Lopez , Mateus Asato have participated.</li>
          </ul>
        </div>
        <div className='img-abraham'>
          <div className='us-abraham'>
            <h5 id='orange-name'>Abraham</h5>
            <h5 id='yellow-surname'>Buchanan</h5>
          </div>
          <img src={abraham} alt="Abraham"></img>
        </div>
      </m.div>

      <div className='mobile-about'>
        <div className='mobile-text'>
          <section>
            <div className="content">
                <div className="space"></div>
                <h5 id='orange-name' >Bryden</h5>
                <h5 id='yellow-surname'>Baird</h5>
                <p>Bryden recently finished living in Mexico, in the role of <span id='band-leader'>band leader</span>/<span id='trumpet'>trumpet</span> player in cirque du soleil's joya.  He was musical director for both steven page, formerly of the barenaked ladies and indie-pop chanteuse feist. He also has a busy studio career in toronto, canada.  Composition and orchestration credits include art of time ensemble, work on the feature film 'gunless', with greg keelor of blue rodeo, chantal kreviazuk's symphony tour, and the queer songbook orchestra.  He studied jazz trumpet at humber college, university of toronto, banff centre for the arts with kenny wheeler, and privately with laurie frink in nyc. Television appearances have included saturday night live, the tonight show with jay leno, the late show with david letterman, late night with conan o'brien, jimmy kimmel live, late night with jools holland, the hour and bbc and cbc radio.  He has performed with michael buble, the temptations, kris kristofferson, louie bellson, blue rodeo, the toronto symphony, the vancouver symphony, esthero, sean lennon, merl saunders, ron sexsmith, sarah harmer, chantal kreviazuk, raine maida, the band of the ceremonial guard changing of the guard in canada and spoon to name a few.</p>
            </div>
          </section>
          <section>
            <div className="content">
              <h5 id='orange-name'>Abraham</h5>
              <h5 id='yellow-surname'>Buchanan</h5>
              <p>
                  I am a Drummer Composer, currently working for a Cirque du Soleil  <br /><br />
                  In the last 8 years I have dedicated myself to creating instrumental music for Cirque acts and other type of performance.<br /><br />
                  I have collaborated composing music for Cirque du Soleil.<br /><br />
                  Also, music creation for different artists around the world.<br /><br />
                  I have 2 personal albums , and music singles , in which internationally renowned musicians such as Bryden Baird, Andre Nieri, Anthony Crawford, Ruben Lopez , Mateus Asato have participated.
              </p>
            </div>
          </section>
        </div>
        <div className='about-bg'>
          <div className='bryden-section'>
            <img src={isMobile ? brydenM : bryden} width="100%" height="auto" alt='Bryden'/>
          </div>
          <div className='abraham-section'>
          { isMobile ? <img src={abrahamM} alt='Abraham'/> :
                <div className='img-container'>
                    <img width="100%" height="auto" src={abraham} alt='Abraham'/>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Us