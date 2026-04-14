import React, { useState } from 'react';
import "./skillcard.css";

function SkillCard({ title, description, skills }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='skill-card'>
      <div className='skill-card-header'>
        <h2 className='skill-card-title'>{title}</h2>
        <button
          className='skill-card-toggle'
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Collapse skills' : 'Expand skills'}
        >
          {expanded ? '−' : '+'}
        </button>
      </div>

      <p className='skill-card-description'>{description}</p>

      <ul className={`skill-card-list ${expanded ? 'expanded' : ''}`}>
        {skills.map((skill, index) => (
          <li key={index} className='skill-card-item'>
            <span className='skill-dot' />
            {skill}
          </li>
        ))}
        <li className='skill-card-item '>
          etc...
        </li>
      </ul>
    </div>
  );
}

export default SkillCard;