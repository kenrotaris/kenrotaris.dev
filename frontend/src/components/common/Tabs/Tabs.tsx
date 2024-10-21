import React from "react";
import "./Tabs.scss";

type TabId = 'projects' | 'experience' | 'education';

export interface Tab {
  id: TabId;
  title: string;
}

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabClick(tab)}
        >
          <span className="tab-label">{tab}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
