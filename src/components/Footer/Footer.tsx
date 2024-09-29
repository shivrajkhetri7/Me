import React from 'react';
import './style.footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
                    </svg>
                    2024 |&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className="footer-link" href="">Designed</a>&nbsp;and&nbsp;
                    <a target="_blank" rel="noopener noreferrer" className="footer-link" href="https://github.com/shivrajkhetri7">coded</a>&nbsp;with ❤️️ by Shivraj Khetri
                </p>
            </div>
        </footer>
    );
};

export default Footer;
