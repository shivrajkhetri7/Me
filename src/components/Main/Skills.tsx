import './style.skills.css';
import React from 'react'
import { Chip } from '@mui/material'

import JavaScript from "../../assets/JavaScript.svg";
import Typescript from "../../assets/TypeScript.svg";
import ReactJS from '../../assets/React.svg';
import NextJS from '../../assets/Next.js.svg';
import NodeJS from '../../assets/Node.js.svg';
import NestJS from '../../assets/Nest.js.svg';
import Socket from '../../assets/Socket.io.svg';
import Postgress from '../../assets/PostgresSQL.svg';
import AWS from '../../assets/AWS.svg';
import Git from '../../assets/Git.svg';
import MongoDB from '../../assets/MongoDB.svg';
import Mongoose from '../../assets/Mongoose.js.svg';
import Kafka from '../../assets/Apache Kafka.svg';
import SASS from '../../assets/Sass.svg';
import TelwindCss from '../../assets/Tailwind CSS.svg';
import Redux from '../../assets/Redux.svg';
import Figma from '../../assets/Figma.svg';
import GraphQL from '../../assets/GraphQL.svg';
import Docker from '../../assets/Docker.svg';
import Redis from '../../assets/Redis.svg'

const skillsData = [
    {
        name: "Javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        imgSrc: JavaScript,
        alt: "Javascript",
    },
    {
        name: "Typescript",
        url: "https://www.typescriptlang.org/",
        imgSrc: Typescript,
        alt: "Typescript",
    },
    {
        name: "React",
        url: "https://react.dev/",
        imgSrc: ReactJS,
        alt: "React",
    },
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        imgSrc: TelwindCss,
        alt: "Tailwind CSS",
    },
    {
        name: "Sass",
        url: "https://sass-lang.com/",
        imgSrc: SASS,
        alt: "Sass",
    },
    {
        name: "Redux",
        url: "https://redux.js.org/",
        imgSrc: Redux,
        alt: "Redux",
    },
    {
        name: "Next JS",
        url: "https://nextjs.org/",
        imgSrc: NextJS,
        alt: "Next JS",
    },
    {
        name: "Nest JS",
        url: "https://nestjs.com/",
        imgSrc: NestJS,
        alt: "Nest JS",
    },
    {
        name: "Node JS",
        url: "https://nodejs.org/en",
        imgSrc: NodeJS,
        alt: "Node Js",
    },
    {
        name: "Socket",
        url: "https://socket.io/",
        imgSrc: Socket,
        alt: "Socket Io",
    },
    {
        name: "Postgress",
        url: "https://www.postgresql.org/",
        imgSrc: Postgress,
        alt: "Postgress SQL",
    },
    {
        name: "Mongo DB",
        url: "https://www.mongodb.com/",
        imgSrc: MongoDB,
        alt: "Mongo DB",
    },
    {
        name: "Mongoose",
        url: "https://mongoosejs.com/",
        imgSrc: Mongoose,
        alt: "Mongoose",
    },
    {
        name: "Redis",
        url: "https://redis.io/",
        imgSrc: Redis,
        alt: "Redis",
    },
    {
        name: "Kafka",
        url: "https://developer.confluent.io/quickstart/kafka-on-confluent-cloud/",
        imgSrc: Kafka,
        alt: "Kafka",
    },
    {
        name: "Graph QL",
        url: "https://graphql.org/",
        imgSrc: GraphQL,
        alt: "GraphQL",
    },
    {
        name: "Docker",
        url: "https://www.docker.com/",
        imgSrc: Docker,
        alt: "Docker",
    },
    {
        name: "GitHub",
        url: "https://git-scm.com/",
        imgSrc: Git,
        alt: "GitHub",
    },
    {
        name: "Figma",
        url: "https://www.figma.com/",
        imgSrc: Figma,
        alt: "Figma",
    },
    {
        name: "AWS Services",
        url: "https://aws.amazon.com/developer/",
        imgSrc: AWS,
        alt: "AWS",
    }
];

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="header">
                <div className="skills-label">
                    <Chip label="Skills" sx={{ color: '#D1D5DB', width: 200, height: 40, fontSize: 18, p: 2, fontWeight: 550, mt: 2, mb: 2, background: '#374151' }} />
                </div>
                <p className="skills-description">
                    The skills, tools and technologies I am really good at:
                </p>
            </div>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <a target="_blank" rel="noopener noreferrer" href={skill.url}>
                            <img src={skill?.imgSrc} alt={skill.alt} className="skill-icon" />
                        </a>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills