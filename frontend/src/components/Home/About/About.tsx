import BionicText from "../../common/bionic/BionicText";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="label">
        <span>ABOUT ME</span>
      </div>
      <h1>KEN ROTARIS</h1>
      <p className="job-title">Full-Stack Developer</p>
      <div className="about-content">
        <p>
          <BionicText text="Hello, I'm Ken, a Swiss full-stack engineer who believes in the power of beautiful, clean code and elegant design. My engineering solutions enhance user experience and system efficiency, merging aesthetics with functionality. Join me in creating software that's as pleasing to use as it is to maintain." />
        </p>
        <div className="cta-buttons">
          <a href="https://kenrotaris.dev/projects" className="cta-button">My Projects</a> {/*TODO: proper routing*/}
          <a href="mailto:info@kenrotaris.dev" className="cta-button primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;