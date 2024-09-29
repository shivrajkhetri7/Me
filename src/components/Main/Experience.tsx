// import './style.experience.css'
// import { Chip } from '@mui/material'
// import React from 'react'

// const Experience = () => {
//     return (
//         <section className="experience-section" id='experience-section'>
//             <div className="header">
//                 <div className="skills-label">
//                     <Chip label="Experience" sx={{ color: '#fff', width: 150, fontSize: 18, p: 2, fontWeight: 500, mt: 2, mb: 2, background: '#374151' }} />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Experience


// Experience.js
import './style.experience.css';
import { Chip } from '@mui/material';
import React from 'react';
import ExperienceCard from '../../common/ExperienceCard';
import BYJUS from '../../assets/byjusPng/byjus-seeklogo.svg';
import GNAIN from '../../assets/gnani.avif';
import ONPASSIVE from '../../assets/onpassive.jpeg';

const experienceData = [
    {
        logo: BYJUS,
        title: 'Software Engineer',
        date: 'June 2021 - Dec 2022',
        link :'https://byjus.com/',
        responsibilities: [
            'Experience in building Order Management system, Payment Management systems using MERN stack, and managing through AWS.',
            'Worked with integrations of Payment - PhonePay, WhatsAppPay, POS devices, Paytm, PayU, Bajaj, Pine Labs, ICICI, Zest, Avanse, IIFL, RBL. Also have experience working with PAN India APIs, CIBIL APIs through TransUnion CIBIL, and Penny Drop for validating customer bank accounts.'
        ],
    },
    {
        logo: GNAIN,
        title: 'Senior Software Engineer',
        date: 'Dec 2022 - May 2023',
        link :'https://www.gnani.ai/',
        responsibilities: [
            'Experience in building Interactive Dashboard using the MERN stack.',
            'Worked in Salesforce (CMS) to create Agent assist Dashboard using the LWC.',
            'Created Chat Bot using web sockets.'
        ],
    },
    {
        logo: ONPASSIVE,
        title: 'Senior Software Engineer',
        date: 'July 2023 - May 2024',
        link :'https://www.onpassive.com/',
        height: 80,
        width: 181,
        responsibilities: [
            'Developed socket programming for real-time data transmission.',
            'Implemented a robust chat feature for seamless communication.',
            'Integrated video conferencing capabilities to enhance virtual interactions.'
        ],
    }
];

const Experience = () => {
    return (
        <section className="experience-section" id="work-section">
            <div className="header">
                <div className="skills-label">
                    <Chip label="Experience" sx={{ color: '#D1D5DB', width: 200, height: 40, fontSize: 18, p: 2, fontWeight: 550, mt: 2, mb: 2, background: '#374151' }} />
                </div>
            </div>
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    logo={experience.logo}
                    title={experience.title}
                    date={experience.date}
                    responsibilities={experience.responsibilities}
                    height={experience?.height}
                    width={experience?.width}
                    link={experience?.link}
                />
            ))}
        </section>
    );
};

export default Experience;
