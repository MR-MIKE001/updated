import "./ExperienceCard.css"

function ExperienceCard({ company, title, description }) {
  // Descriptions are stored as run-on paragraphs ("...systems.I am"); restore the missing spaces
  const text = description.replace(/\.(?=[A-Z])/g, ". ");

  return (
    <article className='experience-card'>
      <header>
        <h3>{company}</h3>
        <span className='experience-role'>{title}</span>
      </header>
      <p>{text}</p>
    </article>
  )
}

export default ExperienceCard
