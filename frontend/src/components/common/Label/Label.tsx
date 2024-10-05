import React from 'react';
import './Label.scss';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <div className="label">
    <span>{text}</span>
  </div>
);

export default Label;