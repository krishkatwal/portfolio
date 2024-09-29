import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import Sarba from '../../assets/sarba.jpg'
import emailjs from '@emailjs/browser'
import TestimonialSlider from '../Testimonial/testimonial'

function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kp88a6k', 'service_kp88a6k', form.current, {
                publicKey: 'Um8D7P0UuOllknH77DI-F',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email sent')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='contactDesc'>
                    I have had the opportunity to work with diverse people, including some notable individuals.
                </p>
                <TestimonialSlider />
                {/* <div className='clientImgs'>
                    <img src={Walmart} alt='' className='clientImg' />
                    <img src={Adobe} alt='' className='clientImg' />
                    <img src={Microsoft} alt='' className='clientImg' />
                    <img src={Facebook} alt='' className='clientImg' />
                </div> */}
            </div>
            <br/>
            <br />
            <br />
            <br />
            <br />
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss my work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your name' name='your_name' />
                    <input type='email' className='email' placeholder='Your email' name='your_email' />
                    <textarea name='message' rows='5' className='msg' placeholder='Your Message' ></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookIcon} alt="facebook" className="link" />
                        </a>
                        <a href="https://x.com/KatwalKrish" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterIcon} alt="twitter" className="link" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeIcon} alt="youtube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/krishkatwal/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
