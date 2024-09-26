import React from 'react'
import Krish from '../../assets/Krish.jpg'
import HireBtn from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import './hero.css'

function Hero() {
  return (
    <div className='hero'>
        
      <img src={Krish}  alt=''  className='krish' />
         
           <span>I'm <span className='heroName'>Krish</span>, Software Developer based in Nepal. </span>
        <p className='introPara'>I am skilled and passionate software developer with experience in creating excellent website.</p>
          <div className='heroaction'>
              <Link>
                  <button className='introBtn'>
                      <img src={HireBtn} alt='' className='hireBtn' />
                      Hire Me
                  </button>
              </Link>
          </div>
    </div>
  )
}

export default Hero
