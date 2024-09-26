import React from 'react'
import './project.css'
import portfolio1 from '../../assets/movie.png'
import portfolio2 from '../../assets/tesla.jpg'
import portfolio3 from '../../assets/autism.jpg'
import portfolio4 from '../../assets/BigData.png'
import portfolio5 from '../../assets/search.jpeg'
import portfolio6 from '../../assets/netflix.jpg'
import github from '../../assets/github2.png'
function Project() {
    return (
        <section id='work'>
            <h2 className='workTitle'>My Portfolio</h2>
            <span className='workDesc'>Passionate Software Engineer with expertise in full-stack development, skilled in JavaScript, Python, and cloud technologies. Experienced in designing scalable applications, solving complex problems, and delivering high-quality code in dynamic environments..  </span>
         
                <div className='projects'>
                    <div className='project'>
                        <img src={portfolio1} alt='' className='workImg' />
                        <h3>Movie Recommendation</h3>
                        <p>NLP project.</p>
                    <a>
                        <div onclick="location.href='https://github.com/krishkatwal/movie_recommender_machine_learning'" className='viewProject'>
                            <span>View in github</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                           
                    </div>
                    </a>
                    </div>
                        <div className='project'>
                    <img src={portfolio2} alt='' className='workImg' />
                            <h3>Tesla Stock Prediction</h3>
                            <p>Neural Network project using LSTM </p>
                            <div className='viewProject'>
                        <span>View in github</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                            </div>
                        </div>
                   
                        <div className='project'>
                            <img src={portfolio3} alt='' className='workImg' />
                            <h3>Autism Prediction</h3>
                            <p>Machine Learning classification project.</p>
                            <div className='viewProject'>
                        <span>View in github</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                            </div>

                        </div>

                <div className='project'>
                    <img src={portfolio4} alt='' className='workImg' />
                    <h3>Big Data Project</h3>
                    <p>Big data using pyspark and tableau</p>
                    <div className='viewProject'>
                        <span>View in github</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                </div>
                <div className='project'>
                    <img src={portfolio5} alt='' className='workImg' />
                    <h3>Search Engine </h3>
                    <p>Information Retrieval Project</p>
                    <div className='viewProject'>
                        <span>View in github</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                </div>
                <div className='project'>
                    <img src={portfolio6} alt='' className='workImg' />
                    <h3>Netflix Clone</h3>
                    <p>Netflix using Reactjs</p>
                    <div className='viewProject'>
                        <span>View in Github</span>
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                </div>

                    

                </div>
                
                
            

        </section>
    )
}

export default Project
