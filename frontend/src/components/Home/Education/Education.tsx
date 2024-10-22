// Experience.tsx
import React from 'react';
import TimelineCard from '../../common/TimelineCard/TimelineCard';
import uniBasel from '../../../assets/images/education/uni-basel.jpeg';
import uniZürich from '../../../assets/images/education/uni-zuerich.jpg';
import baeldung from '../../../assets/images/education/baeldung.jpg';
import google from '../../../assets/images/education/google.png';
import codeingame from '../../../assets/images/education/codingame.svg';
import angular from '../../../assets/images/education/angular.svg';


const education = [
  {
    year: "Completed: Jun 2024",
    image: angular,
    title: "Angular Training",
    description: "Completed a specialized course in Angular and TypeScript, instructed by Jonas Bandi, enhancing my skills in modern web application development.",
    tags: ["Angular", "Typescript"],
    link: "https://www.letsboot.ch/en-gb/course/angular-typescript"
  }, {
    year: "Issued: Mar 2024",
    image: codeingame,
    title: "Codeingame Java Certification",
    description: "Obtained a certification in Java programming from CodingGame, demonstrating proficiency in Java development and problem-solving skills.",
    tags: ["Java", "Problem Solving"],
    link: "https://www.codingame.com/certification/o3JCl4HBV5hY2rXq8_dqsg"
  }, {
    year: "Issued: Feb 2024",
    image: google,
    title: "Generative AI Fundamentals",
    description: "Completed a Google Cloud course on Generative AI Fundamentals, gaining an understanding of AI technologies, large language models, and ethical AI principles.",
    tags: ["Machine Learning", "Python", "Large Language Models"],
    link: "https://www.cloudskillsboost.google/public_profiles/c8878034-0793-4845-a997-aa046b3345eb/"
  }, {
    year: "Issued: Apr 2023",
    image: baeldung,
    title: "Spring Framework: The Certification Class",
    description: "Successfully completed Baeldung's Spring Framework Certification Class, deepening expertise in enterprise application development with Spring.",
    tags: ["Spring Framework", "REST API", "Java"],
    link: "https://courses.baeldung.com/courses/1288580/certificate"
  }, {
    year: "Sep 2018 - Jul 2022",
    image: uniBasel,
    title: "Universität Basel",
    description: "Bachelor Degree in Computer Science",
    tags: ["Java", "Python", "C++", "Machine Learning", "Algorithms & Data Structures", "Linux"],
    link: "https://dmi.unibas.ch/de/studium/computer-science-informatik/"
  }, {
    year: "Aug 2017 - Jul 2018",
    image: uniZürich,
    title: "Universität Zürich",
    description: "Faculty of Psychology",
    tags: ["Psychology", "Neuroscience"],
    link: "https://www.psychologie.uzh.ch/de.html"
  }, {
    year: "Aug 2016 - Jul 2017",
    image: uniBasel,
    title: "Universität Basel",
    description: "Faculty of Law",
    tags: ["Law", "Economics"],
    link: "https://ius.unibas.ch/de/"
  }
];

const Education: React.FC = () => {
  return (
    <div>
      <TimelineCard items={education} />
    </div>
  );
};

export default Education;

