import './style.testimonials.css';
import { Chip } from '@mui/material';
import React from 'react';
import TestimonialCard from '../../common/TestimonialCard';
import ASHA from '../../assets/Asha.jpeg';
import PAVAN from '../../assets/pavan.jpeg';
import AWAIZ from '../../assets/awaiz.jpeg';

const testimonialsData = [
    {
        name: "Asha Ramesh",
        quote: "I have had the pleasure of working with Shivraj and I can confidently say that he is a valuable asset to any team. He is super committed and punctual in all his works which have consistently impressed me. I have seen him approaching every task with enthusiasm and delivers high-quality results. I am confident in his ability to excel in any role.",
        role: "Project Manager",
        link: "https://www.linkedin.com/in/asha-ramesh-9808121a4/",
        avatar: ASHA,
    },
    {
        name: "Pavan Choudhari",
        quote: "Shivraj is a dedicated professional with exceptional skills in software development, consistently delivering outstanding results. His positive attitude and strong work ethics make him a valuable asset to any team.",
        role: "Senior Associate Software Developer",
        link: "https://www.linkedin.com/in/pavan-choudhari-b6a257196/",
        avatar: PAVAN,
    },
    {
        name: "Md Awaiz",
        quote: "Shivraj is a dedicated and hardworking employee. He is also a great leader and a mentor. He gives his best to everything he does, which makes him stand out always. I have seen him grow from an individual contributor to a great leader in a span of 1 year, which is commendable.",
        role: "Senior Associate Software Developer",
        link: "https://www.linkedin.com/in/md-awaiz/",
        avatar: AWAIZ,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials-section">
            <div className="header">
                <div className="skills-label">
                    <Chip label="Testimonials" sx={{ color: '#D1D5DB', width: 200, height: 40, fontSize: 18, p: 2, fontWeight: 550, mt: 2, mb: 2, background: '#374151' }} />
                </div>
            </div>
            <p className="testimonials-intro">Nice things people have said about me:</p>
            <div className="testimonial-cards-container">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        avatar={testimonial.avatar}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        role={testimonial.role}
                        link={testimonial.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
