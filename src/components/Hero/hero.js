import React from 'react'
import { useEffect, useState } from 'react'
import Krish from '../../assets/Krish.jpg'
import HireBtn from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import './hero.css'

function Hero() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'AI Engineer', "Data Analyst"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300- Math.random()*100)
  const [index, setIndex] = useState(1);
  const period = 2000
  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    },delta)

    return () =>{clearInterval(ticker)}
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <div className='hero'>
        
      <img src={Krish}  alt=''  className='krish' />
         
           <span>I'm <span className='heroName'>Krish</span>,<span >{text}</span><br/>  based in Nepal. </span>
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
