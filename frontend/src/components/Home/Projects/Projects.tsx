import React from 'react';
import boldspeed from '../../../assets/images/projects/bold-speed.png';
import portfolio from '../../../assets/images/projects/fullstack-developer-portfolio.png';
import jennkins from '../../../assets/images/projects/jenkins.png';
import chessAi from '../../../assets/images/projects/chess-ai.png';
import aiProject from '../../../assets/images/projects/ai-project.png';
import gorillas from '../../../assets/images/projects/gorillas.png';
import bacnet from '../../../assets/images/projects/bacnet.png';
import terminal from '../../../assets/images/projects/terminal.png';
import data from '../../../assets/images/projects/data.png';
import arduino from '../../../assets/images/projects/arduino.png';
import TimelineCard from '../../common/TimelineCard/TimelineCard';

const projects = [
  {
    year: "2024",
    image: aiProject,
    title: "Machine Learning Project",
    description: "Since AI seems to be the future, I plan to make a Machine Learning Project to get my hands dirty. Planned is a project using PyTorch transforming data into actionable insights.",
    tags: ["Python", "Pytorch", "Pandas", "Machine Learning"],
    link: null
  }, {
    year: "2024",
    image: boldspeed,
    title: "Speed Reading Chrome Extension",
    description: "Developed a Speed Reading Chrome extension to enhance reading speed and comprehension using text rendering techniques where the first third of the word on the current website is bolded.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome DevTools"],
    link: "https://github.com/kenrotaris/chrome-speed-reading-extension"
  }, {
    year: "2024",
    image: portfolio,
    title: "Portfolio Website",
    description: "Portfolio website featuring a React front-end and Spring backend, secured with Spring security. Plans for expanding the site include adding developer tools like a self-destruct message feature, linux cli auto completer, and a resource downtime checker to boost productivity.",
    tags: ["Jenkins", "Docker", "React", "Java", "Linux", "Nginx", "Modoboa", "Gradle"],
    link: "https://github.com/kenrotaris/kenrotaris.dev"
  }, {
    year: "2024",
    image: jennkins,
    title: "Jenkins Pipeline",
    description: "Custom CI/CD pipeline utilizing Jenkins to automate build, testing and deployment of kenrotaris.dev. This setup uses a custom Linux environment hosted on Hetzner Cloud, with Docker for operational consistency. Nginx is configured as a reverse proxy, with Modoboa handling secure, private email services, facilitating seamless development and deployment workflows.",
    tags: ["Jenkins", "Docker", "Linux", "Gradle", "Hetzner Cloud"],
    link: "https://jenkins.kenrotaris.dev"
  }, {
    year: "2022",
    image: chessAi,
    title: "AI Chess Engine",
    description: "Completed a Bachelor's thesis project on solving Single-Player Chess using AI planning techniques. Compared domain-independent and domain-specific approaches to highlight their strengths and weaknesses. Developed a terminal chess user interface and implemented plan validation in Python and Java.",
    tags: ["AI Planning", "PDDL", "Java", "Python", "Fast Downward", "Bitboards"],
    link: "https://github.com/kenrotaris/Bachelor-Thesis_Single-Player-Chess"
  }, {
    year: "2021",
    image: data,
    title: "Analyzing National Crime Data",
    description: "Consolidated multiple data sources into a single dataset about Crime rates, death rates and economic data in the United States. Performed data cleaning and validation on 4 GB of data, followed by comprehensive analysis and visualizations to uncover key insights.",
    tags: ["SQL", "Python", "Pandas", "Data Cleaning", "Data Integration", "Data Visualization"],
    link: null
  }, {
    year: "2021",
    image: arduino,
    title: "Arduino Project",
    description: "Constructed an LED-based Tetris game by soldering LEDs to a display screen and multiplexing them using specialized components. Utilized an Arduino for controlling the display and inputs, integrated a joystick for gameplay.",
    tags: ["C++", "Arduino", "Game Development", "Soldering", "Hardware", "Multiplexing"],
    link: null
  }, {
    year: "2020",
    image: terminal,
    title: "Gnome Terminal Emulator",
    description: "Description: A C-based replica of Gnome Terminal featuring over 20 essential commands like cat, mv, ls, and mount.",
    tags: ["C", "Linux", "Command-Line Interface", "Terminal Emulator"],
    link: null
  }, {
    year: "2020",
    image: bacnet,
    title: "Decentralized Messenger",
    description: "Developed using Python and Tkinter, SubjectiveChat offers encrypted private and group messaging. Part of the BACnet project, it ensures reliable communication without centralized servers.",
    tags: ["Python", "Tkinter", "Decentralized Communication", "Secure Chat", "BACnet", "Networking"],
    link: "https://github.com/cn-uofbasel/BACnet/tree/master/20-fs-ias-lec/groups/03-subChat"
  }, {
    year: "2019",
    image: gorillas,
    title: "QBasic Gorillas Clone",
    description: "An online multiplayer version of the traditional 'Gorilla' game, recreated using Java. This project allows players to connect and compete over the internet, maintaining the original gameplay mechanics while introducing modern networking features.",
    tags: ["Java", "Java FX", "Game Development", "Networking"],
    link: null
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      <TimelineCard items={projects} />
    </div>
  );
};

export default Projects;

