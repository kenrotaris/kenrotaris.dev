import React from 'react';
import './Tags.scss'

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className="tags-container">
    {tags.map((tag, index) => (
      <span key={index} className="tag">{tag}</span>
    ))}
  </div>
);

export default Tags;