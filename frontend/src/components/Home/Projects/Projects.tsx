// Projects.tsx
import React from 'react';
import boldspeed from '../../../assets/images/projects/bold-speed.png';
import portfolio from '../../../assets/images/projects/fullstack-developer-portfolio.png';
import jennkins from '../../../assets/images/projects/jenkins.png';
import chessAi from '../../../assets/images/projects/chess-ai.png';
import aiProject from '../../../assets/images/projects/ai-project.png';
import TimelineCard from '../../common/TimelineCard/TimelineCard';

const projects = [
  {
    year: "2024",
    image: aiProject,
    title: "Next Up: Machine Learning Project",
    description: "Since AI seems to be the future, I plan to make a Machine Learning Project to get my hands dirty. Planned is a project using PyTorch transforming data into actionable insights.",
    tags: ["Python", "Pytorch", "Pandas", "Machine Learning"],
    link: " "
  },
  {
    year: "2024",
    image: boldspeed,
    title: "Speed Reading Chrome Extension",
    description: "Developed a Speed Reading Chrome extension to enhance reading speed and comprehension using text rendering techniques where the first third of the word on the current website is bolded.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome DevTools"],
    link: "https://github.com/kenrotaris/chrome-speed-reading-extension"
  },
  {
    year: "2024",
    image: portfolio,
    title: "Portfolio Website",
    description: "Portfolio website featuring a React front-end and Spring backend, secured with Spring security. Plans for expanding the site include adding developer tools like a self-destruct message feature, linux cli auto completer, and a resource downtime checker to boost productivity.",
    tags: ["Jenkins", "Docker", "React", "Java", "Linux", "Nginx", "Modoboa", "Gradle"],
    link: "https://github.com/kenrotaris/kenrotaris.dev"
  },
  {
    year: "2024",
    image: jennkins,
    title: "Jenkins Pipeline (CI/CD)",
    description: "Custom CI/CD pipeline utilizing Jenkins to automate build, testing and deployment of kenrotaris.dev. This setup uses a custom Linux environment hosted on Hetzner Cloud, with Docker for operational consistency. Nginx is configured as a reverse proxy, with Modoboa handling secure, private email services, facilitating seamless development and deployment workflows.",
    tags: ["Jenkins", "Docker", "Linux", "Gradle", "Hetzner Cloud"],
    link: "https://jenkins.kenrotaris.dev"
  },
  {
    year: "2022",
    image: chessAi,
    title: "AI Chess Engine",
    description: "Completed a Bachelor's thesis project on solving Single-Player Chess using AI planning techniques. Compared domain-independent and domain-specific approaches to highlight their strengths and weaknesses. Developed a terminal chess user interface and implemented plan validation in Python and Java.",
    tags: ["AI Planning", "PDDL", "Java", "Python", "Fast Downward", "Bitboards"],
    link: "https://github.com/kenrotaris/Bachelor-Thesis_Single-Player-Chess"
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <TimelineCard title="Projects" items={projects} />
    </div>
  );
};

export default Projects;

