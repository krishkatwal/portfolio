import React from 'react'
import './skills.css'
import FrontendDesign from '../../assets/react1.png'
import WebDesign from '../../assets/website-design.png'
import Ai from '../../assets/ai2.png'

function Skills() {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDecs'>I’m a Software Engineer and Machine Learning Engineer, skilled in developing scalable software solutions and building machine learning models. I focus on delivering efficient applications and optimizing ML systems for tasks like data analysis, prediction, and automation.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={FrontendDesign} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Frontend Design</h2>
                        <p>I specialize in frontend development using ReactJS to build dynamic interfaces.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>I design responsive websites using Node.js and Express for backend.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={Ai} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Artificial Intelligence</h2>
                        <p>I provide AI services to enhance decision-making and automation.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
