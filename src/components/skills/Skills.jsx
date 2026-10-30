import React from 'react';
import skillData from './skillData';
import SkillCard from './skillcard/SkillCard';
import './skills.css';

function Skills() {
  return (
    <section className='section skills'>
      <div className='container'>
        <div className='section-head section-head--center'>
          <span className='eyebrow'>Toolbox</span>
          <h2 className='section-title'>Skills <span className='accent'>&amp;</span> Technologies</h2>
          <p className='section-lead'>The languages, frameworks and practices I use to ship reliable software.</p>
        </div>

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
      </div>
    </section>
  );
}

export default Skills;
