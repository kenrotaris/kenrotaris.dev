import React from "react";
import "./Item.scss";
import Tags from "./Tags/Tags";

interface ItemProps {
  year: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
}

const Item: React.FC<ItemProps> = ({
  year,
  image,
  title,
  description,
  tags,
  link,
}) => (
  <div className="item">
    <div className="top-section">
      {image && <img src={image} alt={title} className="image" />}
      <div className="year-and-title">
        <div className="year">{year}</div>
        <h3 className="title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title} <span className="link-arrow">↗</span>
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h3>
      </div>
    </div>
    <div className="bottom-section">
      <div className="desktop-placeholder"></div>
      <div className="description">
        <p>{description}</p>
        <Tags tags={tags} />
      </div>
    </div>
  </div>
);

export default Item;