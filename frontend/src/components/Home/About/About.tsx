import BionicText from "../../common/bionic/BionicText";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <h1>KEN ROTARIS</h1>
      <p className="job-title">Full-Stack Developer</p>
      <div className="about-content">
        <h2>About</h2>
        <p>
          <BionicText text="Hello, I'm Ken, a Swiss full-stack engineer who believes in the power of beautiful, clean code and elegant design. My engineering solutions enhance user experience and system efficiency, merging aesthetics with functionality. From high-speed chess engines to streamlined enterprise applications, my work not only solves problems but does so with style. Join me in creating software that's as pleasing to use as it is to maintain." />
        </p>
        <div className="cta-buttons">
          <a href="https://github.com/kenrotaris" className="cta-button">My Projects</a>
          <a href="mailto:info@kenrotaris.dev" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;