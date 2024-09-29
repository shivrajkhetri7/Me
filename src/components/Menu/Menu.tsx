import './style.menu.css';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import RESUME from '../../assets/Shivraj2024.pdf';

const Menu = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setDrawerOpen(false); // Close drawer after selection
        }
    };

    const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => () => {
        setDrawerOpen(open);
    };

    return (
        <div className='nav-menu'>
            <div className='nav-icons'>
                <a target="_self" href="/">&lt;SK /&gt;</a>
            </div>
            <div className='nav-menu-items'>
                <ul className="flex list-none items-center gap-6">
                    <li>
                        <button onClick={() => scrollToSection('about-section')} className="nav-link">
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('work-section')} className="nav-link">
                            Work
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('testimonials-section')} className="nav-link">
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact-section')} className="nav-link">
                            Contact
                        </button>
                    </li>
                    <li>
                        <a href={RESUME} className='btn-download-cv-a' target='_blank'>
                            <button className='btn-download-cv'>Download CV</button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='hamburger-menu'>
                <IconButton onClick={toggleDrawer(true)} color="inherit">
                    <MenuIcon style={{ color: '#fff' }} />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                    sx={{ backgroundColor: '#111827' }}
                >
                    <div className='drawer-list' >
                        <ul className="list-none">
                            <li>
                                <button onClick={() => scrollToSection('about-section')} className="nav-link">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('work-section')} className="nav-link">
                                    Work
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('testimonials-section')} className="nav-link">
                                    Testimonials
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('contact-section')} className="nav-link">
                                    Contact
                                </button>
                            </li>
                            <li>
                                <a href={RESUME} className='btn-download-cv-a' target='_blank'>
                                    <button className='btn-download-cv'>Download CV</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}

export default Menu;
