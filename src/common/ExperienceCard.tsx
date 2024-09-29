import React from 'react';
import './style.experiencecard.css';

interface ExperienceCardProps {
    logo: string;
    title: string;
    date: string;
    responsibilities: string[];
    height?: number;
    width?: number;
    link: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ logo, title, date, responsibilities, height, width, link }) => {
    return (
        <div className="experience-card">
            <div className="logo-container">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        alt={`${title} logo`}
                        loading="lazy"
                        width={width ? `${width}` : "181"}
                        height={height ? `${height}` : "181"}
                        className="logo"
                        src={logo}
                    />
                </a>
            </div>
            <div className="details-container">
                <p className="role">{title}</p>
                <ul className="responsibilities">
                    {responsibilities.map((item, index) => (
                        <li key={index} style={{ lineHeight: "2rem" }}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="date-container">
                <p className="date">{date}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
