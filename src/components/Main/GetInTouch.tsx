import './style.getintouch.css';
import { Chip } from '@mui/material';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetInTouch() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('shivrajkhetri7@gmail.com');
        toast.success("Email copied to clipboard!");
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+91 8830349316');
        toast.success("Phone number copied to clipboard!");
    };

    const handleRedirect = (url: string | URL | undefined) => {
        window.open(url, '_blank');
    };

    return (
        <section className="get-in-touch-section" id='contact-section'>
            <ToastContainer position="top-center" autoClose={2000} />
            <div className="header">
                <div className="skills-label">
                    <Chip label="Get in touch" sx={{ color: '#D1D5DB', width: 200, height: 40, fontSize: 18, p: 2, fontWeight: 550, mt: 2, mb: 2, background: '#374151' }} />
                </div>
            </div>
            <p className="next-steps-text">What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
            <div className="get-in-touch-details">
                <div className="get-in-touch-item">
                    <div className="get-in-touch-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="get-in-touch-icon-svg">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </div>
                    <h2 className="get-in-touch-text">shivrajkhetri7@gmail.com</h2>
                    <button className="get-in-touch-button" onClick={handleCopyEmail}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="get-in-touch-copy-icon">
                            <rect width="32" height="32" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                    </button>
                </div>

                <div className="get-in-touch-item" style={{ textAlign: 'center' }}>
                    <div className="get-in-touch-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="get-in-touch-icon-svg">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <h2 className="get-in-touch-text">+91 8830349316</h2>
                    <button className="get-in-touch-button" onClick={handleCopyPhone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="get-in-touch-copy-icon">
                            <rect width="32" height="32" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <p className="next-steps-text">You may also find me on these platforms!</p>
            <div className="get-in-touch-buttons" style={{
                justifyContent: 'center',
                display: 'flex',
                gap: '1rem',
                margin: '1rem 0'
            }}>
                <button className="get-in-touch-button" onClick={() => handleRedirect('https://github.com/shivrajkhetri7')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                </button>
                <button className="get-in-touch-button" onClick={() => handleRedirect('https://www.linkedin.com/in/shivraj-khetri-4261071a0/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </button>
                <button className="get-in-touch-button" onClick={() => handleRedirect('https://www.figma.com/files/team/1056228770453531811/recents-and-sharing/recently-viewed?fuid=1056228764585481832')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-figma">
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default GetInTouch;
