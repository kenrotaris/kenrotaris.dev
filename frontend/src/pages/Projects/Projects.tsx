import Footer from "../../components/Footer/Footer";
import "./Projects.scss";
import Header from "../../components/Header/Header";
import Projects from "../../components/Home/Projects/Projects";

function ProjectsHome() {
  return (
    <div className="home-container">
      {/* TODO: remove code dublication: make structure better */}
      <Header></Header> 
      <main className="main-content">
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default ProjectsHome;