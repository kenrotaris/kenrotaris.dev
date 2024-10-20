import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Projects from "../../components/Home/Projects/Projects";
import "./Home.scss";
import Experience from "../../components/Home/Experience/Experience";
import { useState } from "react";
import Label from "../../components/common/Label/Label";
import Tabs from "../../components/common/Tabs/Tabs";

//TODO: Use <header>, <main>, <footer>, <section>, and <nav> appropriately
function Home() {
  const [activeTab, setActiveTab] = useState<string>('projects');
  const tabs = [
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' }
  ];

  return (
    <div className="home-container">
      <Header></Header>
      <main className="main-content">
        <About></About>
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabClick={setActiveTab} 
        />
        {activeTab === 'projects' ? <Projects /> : <Experience />}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;