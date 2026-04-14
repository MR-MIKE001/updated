import React, { useContext } from 'react';
import skillData from './skillData';
import SkillCard from './skillcard/SkillCard';
import { themeContext } from '../../contest';
import './skills.css';

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`skills ${darkMode ? 'skills-dark' : ''}`}>

      {/* Section heading */}
      <div className='skills-heading'>
        <span>Skills &</span>
        <span>Technologies</span>
      </div>

      {/* Cards grid */}
      <div className='skills-container'>
        {skillData.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            skills={skill.skills}
          />
        ))}
      </div>

      {/* Ambient blurs */}
      <div className='skills-blur skills-blur--purple' />
      <div className='skills-blur skills-blur--blue' />
    </div>
  );
}

export default Skills;