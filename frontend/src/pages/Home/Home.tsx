import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Projects from "../../components/Home/Projects/Projects";
import "./Home.scss";
import Experience from "../../components/Home/Experience/Experience";
import { useState } from "react";
import Tabs from "../../components/common/Tabs/Tabs";
import Education from "../../components/Home/Education/Education";

type TabId = 'projects' | 'experience' | 'education';

function Home() {
  const [activeTab, setActiveTab] = useState<string>('Projects');
  const tabs = ['Projects', 'Experience', 'Education'];

  const tabComponents: Record<string, JSX.Element> = {
    Projects: <Projects />,
    Experience: <Experience />,
    Education: <Education />
  };

  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <About />
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        {tabComponents[activeTab]}
      </main>
      <Footer />
    </div>
  );

}

export default Home;