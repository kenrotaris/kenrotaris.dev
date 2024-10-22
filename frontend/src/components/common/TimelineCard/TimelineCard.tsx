import React from "react";
import "./TimelineCard.scss";
import ProjectItem from "./Item/Item";

interface ListedItemProps {
  items: Array<{
    year: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
    link: string | null;
  }>;
}

const TimelineCard: React.FC<ListedItemProps> = ({ items }) => {
  return (
    <section className="listed-items-section">
      <div className="items-list">
        {items.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TimelineCard;
