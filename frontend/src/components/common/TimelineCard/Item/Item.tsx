import React from "react";
import "./Item.scss";
import Tag from "../../Tag/Tag";

interface ProjectItemProps {
  year: string;
  image?: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  year,
  image,
  title,
  description,
  tags,
  link,
}) => (
  <div className="project-item">
    <div className="project-content">
      {image && <img src={image} alt={title} className="svg-icon" />}
      <div className="project-details">
        <div className="project-year">{year}</div>
        <h3 className="project-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title} <span className="link-arrow">↗</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectItem;
