import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Projects from "../../components/Home/Projects/Projects";
import "./Home.scss";

//TODO: Use <header>, <main>, <footer>, <section>, and <nav> appropriately
function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <main className="main-content">
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;