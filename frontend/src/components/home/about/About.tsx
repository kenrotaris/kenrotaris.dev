import BionicText from "../../bionic/BionicText";
import "./About.scss";

function About() {
  return (
    <div className="container">
      <header>
        <h1>KEN ROTARIS</h1>
        <p>Full-Stack Developer</p>
      </header>
      <section className="about-me">
        <h2>About</h2>
        <p>
          <BionicText text="Hello, I'm Ken, a Swiss full-stack engineer who believes in the power of beautiful, clean code and elegant design. My engineering solutions enhance user experience and system efficiency, merging aesthetics with functionality. From high-speed chess engines to streamlined enterprise applications, my work not only solves problems but does so with style. Join me in creating software that's as pleasing to use as it is to maintain." />
        </p>
        <a href="mailto:info@kenrotaris.dev">Write me a Message</a>
        <a href="http://kenrotaris.dev/projects">My Projects</a>
      </section>
    </div>
  );
}

export default About;