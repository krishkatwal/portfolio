import React from 'react'
import './skills.css'
import FrontendDesign from '../../assets/react1.png'
import WebDesign from '../../assets/website-design.png'
import Ai from '../../assets/ai2.png'

function Skills() {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I Do</span>
    <span className='skillDecs'>I am a skilled and passionate web designer with experience i creatig visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail. I am proficient in  HTML,css, and Javascript, as well as design software such as Adobe Photoshop and illustrator.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={FrontendDesign} alt='' className='skillBarImg'/>
        <div className='skillBarText'>
                      <h2>Frontend Design</h2>
                      <p>This is the demo text.</p>
            </div>   

        </div>
              <div className='skillBar'>
                  <img src={WebDesign} alt='' className='skillBarImg' />
                  <div className='skillBarText'>
                      <h2>Website Design</h2>
                      <p>This is the demo text.</p>
                  </div>

              </div>
              <div className='skillBar'>
                  <img src={Ai} alt='' className='skillBarImg' />
                  <div className='skillBarText'>
                      <h2>Artificial Intelligence</h2>
                      <p>This is the demo text.</p>
                  </div>

              </div>
    </div>
   </section>
  )
}

export default Skills
