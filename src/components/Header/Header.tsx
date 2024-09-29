import React from 'react';
import './style.header.css';
import SHIVRAJ from '../../assets/shivraj1.jpg';

const Header = () => {
    return (
        <div className='portfolio-header'>
            <div className='left-section'>
                <h1 className="header-p">
                    Hi, I'm Shivraj
                    <span className="waving-hand">👋</span>
                </h1>
                <p className='portfolio-p'>
                    I’m Shivraj Khetri, a full stack developer specializing in React.js and Node.js. With 4 years of experience, I create fast, accessible, and responsive digital experiences. I have a solid understanding of system design and enjoy collaborating with others while continuously learning to enhance my skills and impact.
                </p>
                <div className='address'>
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p className="location-text">Pune, India</p>
                    </div>

                </div>
            </div>
            <div className='right-section'>
                <div className="image-container">
                    <img
                        alt="Headshot of Shivraj"
                        loading="lazy"
                        width="1067"
                        height="1067"
                        decoding="async"
                        className="image"
                        src={SHIVRAJ}
                    />
                    <div className="image-background"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
