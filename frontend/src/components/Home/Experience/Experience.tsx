// Experience.tsx
import React from 'react';
import TimelineCard from '../../common/TimelineCard/TimelineCard';
import webmo from '../../../assets/images/companies/webmo.png';
import elca from '../../../assets/images/companies/elca.png';
import mountVantage from '../../../assets/images/companies/mount-vantage.png';
import zeusSupplements from '../../../assets/images/companies/zeus-supplements.png';


const projects = [
  {
    year: "2022 - 2024",
    image: elca,
    title: "ELCA Informatik",
    description: "Full-stack development with a focus on Java and Angular, leading the engineering of key tools including a migration tool and license management solution. Enhanced application performance and client service delivery.",
    tags: ["Java", "Angular", "Typescript", "SQL", "Spring Framework", "Hibernate", "JPA", "Lombok", "Node.js", "Vaadin", "QueryDsl", "OpenApi", "JUnit", "Mockito", "MapStruct", "HTML", "CSS"],
    link: "https://www.elca.ch/"
  }, {
    year: "Jan 2020 - Aug 2023",
    image: webmo,
    title: "webmo",
    description: "Developed and hosted custom WordPress solutions for more than 20 clients. Managed all aspects of service delivery and client interactions.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome DevTools", "Nginx", "Linux", "Hetzner Cloud", "Wordpress", "Sales", "Management"],
    link: "https://webmo.ch/"
  }, {
    year: "Jun 2015 - Jul 2016",
    image: zeusSupplements,
    title: "Zeus Supplements GmbH",
    description: "Developed a Shopware e-commerce platform and and executed successful online marketing campaigns on Google-Ads and Meta-Ads for a Fitness Supplements Company.",
    tags: ["Shopware", "HTML", "CSS", "PHP", "Javascript", "Meta Ads", "Google Ads", "Adobe Illustrator", "Adobe Photoshop"],
    link: "http://zeus-supplements.ch/"
  }, {
    year: "Dec 2014 - Jan 2021",
    image: mountVantage,
    title: "Mount Vantage GmbH",
    description: "Managed operations and marketing, significantly growing a YouTube channel to a peak of 4 million subscribers and generating substantial revenue through strategic content initiatives.",
    tags: ["Communication", "Marketing", "Management", "Adobe After Effects", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe Photoshop", "Camtasia"],
    link: "https://github.com/kenrotaris/kenrotaris.dev"
  }
];

const Experience: React.FC = () => {
  return (
    <div>
      <TimelineCard items={projects} />
    </div>
  );
};

export default Experience;
