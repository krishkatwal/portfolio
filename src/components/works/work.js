import React from 'react'
import './work.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'
function Work() {
  return (
    <section id='work'>
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='workDesc'>Passionate Software Engineer with expertise in full-stack development, skilled in JavaScript, Python, and cloud technologies. Experienced in designing scalable applications, solving complex problems, and delivering high-quality code in dynamic environments..  </span>
      <div className='workImgs'>
      <img src={portfolio1} alt='' className='workImg' />
        <img src={portfolio1} alt=''  className='workImg'/>
        <img src={portfolio2} alt='' className='workImg' />
        <img src={portfolio3} alt='' className='workImg' />
        <img src={portfolio4} alt='' className='workImg' />
        <img src={portfolio5} alt='' className='workImg' />
        <img src={portfolio6} alt='' className='workImg' />
      </div>

    </section>
  )
}

export default Work
