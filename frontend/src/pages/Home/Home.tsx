import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <main className="main-content">
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;