// Projects.tsx
import React from 'react';
import './Projects.scss';
import favicon from '../../../assets/images/portfolio.svg';
import chessImage from '../../../assets/images/chess.svg';
import ProjectItem from './ProjectItem/ProjectItem';

const sideProjects = [
  {
    year: "2024",
    image: favicon,
    title: "Portfolio Website",
    description: "Portfolio website using React for the frontend and Java for the backend. Leveraged Jenkins for continuous integration and Docker for containerization, deploying the application on a custom Linux infrastructure hosted by Hetzner. Configured Nginx as a reverse proxy and implemented Modoboa for secure, private email services at contact@kenrotaris.dev.",
    tags: ["Jenkins", "Docker", "React", "Java", "Linux", "Nginx", "Modoboa", "Gradle"],
    link: "https://kenrotaris.dev"
  },
  {
    year: "2022",
    image: chessImage,
    title: "AI Chess Engine",
    description: "Completed a Bachelor's thesis project on solving Single-Player Chess using AI planning techniques. Compared domain-independent and domain-specific approaches to highlight their strengths and weaknesses. Developed a terminal chess user interface and implemented plan validation in Python and Java.",
    tags: ["AI Planning", "PDDL", "Java", "Python", "Fast Downward", "Bitboards"],
    link: "https://github.com/kenrotaris/Bachelor-Thesis_Single-Player-Chess"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {sideProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
