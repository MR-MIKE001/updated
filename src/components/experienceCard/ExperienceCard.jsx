import "./ExperienceCard.css"

function ExperienceCard({ company, title, period, description }) {
  // Descriptions are stored as run-on paragraphs ("...systems.I am"); restore the missing spaces
  const text = description.replace(/\.(?=[A-Z])/g, ". ");

  return (
    <article className='experience-card'>
      <header>
        <div>
          <h3>{company}</h3>
          {period && <span className='experience-period'>{period}</span>}
        </div>
        <span className='experience-role'>{title}</span>
      </header>
      <p>{text}</p>
    </article>
  )
}

export default ExperienceCard
