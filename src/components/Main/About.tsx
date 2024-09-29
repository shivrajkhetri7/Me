import './style.about.css';
import React from 'react';
import { Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faFutbol, faLaptopCode, faPlane } from '@fortawesome/free-solid-svg-icons';

import SHIVRAJ from '../../assets/shivraj.jpg';

const About = () => {
    return (
        <section className="about-section" id='about-section'>
            <div className="header">
                <div className="skills-label">
                    <Chip label="About Me" sx={{ color: '#D1D5DB', width: 200, height: 40, fontSize: 18, p: 2, fontWeight: 550, mt: 2, mb: 2, background: '#374151' }} />
                </div>
            </div>
            <div className='section-details'>
                <div className='about-left-section'>
                    <div className="flex justify-center md:order-first md:justify-end">
                        <div className="about-image-container">
                            <img
                                alt="Full pose of Sagar"
                                loading="lazy"
                                decoding="async"
                                className="about-image"
                                src={SHIVRAJ}
                            />
                            <div className="about-image-background"></div>
                        </div>
                    </div>
                </div>
                <div className='about-right-section'>
                    <div className="flex-container">
                        <h3 className="about-title">Curious about me? Here you have it:</h3>
                        <p className="about-text">I'm a passionate,
                            <a target="_blank" rel="noopener noreferrer" className="about-link" href="https://github.com/shivrajkhetri7" style={{ margin: '0 0.5rem' }} >self-proclaimed developer</a>
                            who specializes in full stack development (React.js &amp; Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, and writing clear, readable, highly performant code matters to me.
                            I began my journey as a web developer in 2019, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 4 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, NestJS, Tailwind CSS, Supabase, and much more.
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                            When I'm not in full-on developer mode, you can find me traveling 🌍,or sharing moments on Instagram. You can follow me on
                            <a target="_blank" rel="noopener noreferrer" className="about-link" href="https://github.com/shivrajkhetri7" style={{ margin: '0 0.5rem' }} >GitHub</a>
                            where I share tech-related bites and build in public.
                        </p>
                        <p className="about-text">Finally, some quick bits about me.</p>
                        <p className="about-text">Finally, some quick bits about me.</p>
                        <div className="responsive-list">
                            <ul className="custom-list">
                                <li className="about-text">
                                    <FontAwesomeIcon icon={faGraduationCap} /> B.E. in Computer Engineering
                                </li>
                                <li className="about-text">
                                    <FontAwesomeIcon icon={faBriefcase} /> Part-time freelancer
                                </li>
                            </ul>
                            <ul className="custom-list">
                                <li className="about-text">
                                    <FontAwesomeIcon icon={faFutbol} /> Love sports
                                </li>
                                <li className="about-text">
                                    <FontAwesomeIcon icon={faLaptopCode} /> Eager to explore new tech
                                </li>
                                <li className="about-text">
                                    <FontAwesomeIcon icon={faPlane} /> Traveler
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
