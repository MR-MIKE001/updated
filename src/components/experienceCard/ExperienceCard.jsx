import "./ExperienceCard.css"

function ExperienceCard({ company, title, description, }) {

  return (
    <div className='experience-card'>
      <h3>{company}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard