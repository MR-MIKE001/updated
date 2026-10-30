import React from 'react';
import "./skillcard.css";

function SkillCard({ title, description, skills }) {
  // Drop case-insensitive duplicates (e.g. "Postman" and "postman")
  const unique = skills.filter(
    (skill, i) => skills.findIndex((s) => s.toLowerCase() === skill.toLowerCase()) === i
  );

  return (
    <article className='skill-card'>
      <h3 className='skill-card-title'>{title}</h3>
      <p className='skill-card-description'>{description}</p>
      <ul className='skill-card-list'>
        {unique.map((skill) => (
          <li key={skill} className='skill-card-item'>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
