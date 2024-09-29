// TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import sandeep from '../../assets/sandeep.jpg'
import shrawan from '../../assets/shrawan.jpg'
import rajendra from '../../assets/rajendra.jpg'


const testimonialsData = [
    {
        message: "This service is fantastic! It greatly improved our workflow.",
        name: "Sandeep Samip Shrestha",
        position: "MD of Kamala Academic School",
        image: sandeep
    },
    {
        message: "I highly recommend this person to anyone who needs efficiency.",
        name: "Er. Shrawan Thakur",
        position: "CEO of AI Marga Pvt Ltd",
        image: shrawan
    },
    {
        message: "Amazing experience! Customer service is top-notch.",
        name: "Rajendra Thapa",
        position: "Marketing of Eprima Technology",
        image: rajendra
    }
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="testimonial-slider">
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-message">"{testimonial.message}"</p>
                        <div className="testimonial-author">
                            <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                            <div>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
