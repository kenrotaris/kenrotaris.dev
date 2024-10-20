import React from "react";
import "./TimelineCard.scss";
import ProjectItem from "./Item/Item";
import Label from "../Label/Label";

interface ListedItemProps {
  title: string;
  items: Array<{
    year: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
  }>;
}

const TimelineCard: React.FC<ListedItemProps> = ({ title, items }) => {
  return (
    <section className="listed-items-section">
      <Label text={title} />
      <div className="items-list">
        {items.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TimelineCard;
