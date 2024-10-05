import React from 'react';
import './Tag.scss';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => (
  <span className="tag">{text}</span>
);

export default Tag;