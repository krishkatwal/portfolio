import React from 'react'
import './intro.css'
import introImage from '../../assets/image.png'
import HireBtn from '../../assets/hireme.png'
import { Link } from 'react-scroll'

function Intro() {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I am <span className='introName'>Krish</span> <br></br>Software Developer.</span>
                <p className='introPara'>I am skilled and passionate software developer with experience in creating excellent website.</p>
                <Link>
                    <button className='introBtn'>
                        <img src={HireBtn} alt='' className='hireBtn'/>
                        Hire Me
                    </button>
                </Link>
            </div>

            <img src={introImage} alt='' className='introImage'/>
        </section>
    )
}

export default Intro
