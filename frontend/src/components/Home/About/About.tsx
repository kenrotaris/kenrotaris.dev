import BionicText from "../../common/bionic/BionicText";
import Label from "../../common/Label/Label";
import "./About.scss";

function About() {
  return (
    <section id = "about" className="about">
      <Label text="About Me" />
      <h1>KEN ROTARIS</h1>
      <p className="job-title">Full-Stack Developer</p>
      <div className="about-content">
        <p>
          <BionicText text="Hello, I'm Ken, a Swiss full-stack engineer who believes in the power of beautiful, clean code and elegant design. My engineering solutions enhance user experience and system efficiency, merging aesthetics with functionality. Join me in creating software that's as pleasing to use as it is to maintain." />
        </p>
        <div className="cta-buttons">
          <a href="https://docs.google.com/document/d/1VBj8NdGKL5xHQkESfxWHW6E-rZwVoWP9QrnUXFfTYXs/edit?usp=sharing" className="cta-button">My Resume</a>
          <a href="mailto:info@kenrotaris.dev" className="cta-button primary">Drop Me an Email</a>
        </div>
      </div>
    </section>
  );
}

export default About;