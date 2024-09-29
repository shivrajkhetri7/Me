import React from 'react';
import './style.testimonialCard.css'; // Assuming you have a separate CSS file for styles
import { Avatar } from '@mui/material';

const TestimonialCard = ({ avatar, quote, name, role, link }: any) => {
    return (
        <div className="testimonial-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Avatar alt={name} src={avatar} className="avatar" sx={{
                    height: 100,
                    width: 100
                }} />
            </a>
            <p className="quote">"{quote}"</p>
            <div className="author-info">
                <p className="author-name">{name}</p>
                <p className="author-role">{role}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
