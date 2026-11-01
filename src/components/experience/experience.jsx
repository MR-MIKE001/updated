import React from 'react'
import './experience.css'

const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "47+", label: "Completed projects" },
  { value: "12+", label: "Companies worked with" },
]

function Experience() {
  return (
    <section className='experience-wrap'>
      <div className='container'>
        <div className='experience'>
          {stats.map((stat) => (
            <div className='achievement' key={stat.label}>
              <div className='circle'>{stat.value}</div>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
