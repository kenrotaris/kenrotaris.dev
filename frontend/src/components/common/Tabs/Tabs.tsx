import React from 'react';
import './Tabs.scss';
import Label from '../Label/Label';

interface Tab {
    id: string;
    title: string;
  }
  
  interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: (tabId: string) => void;
  }
  
  const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div 
            key={tab.id} 
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabClick(tab.id)}
          >
            <span className="tab-label">{tab.title}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tabs;