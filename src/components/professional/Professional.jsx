import ExperienceCard from "../experienceCard/ExperienceCard"
import professionalData from "./professionalData"
import "./professional.css"

function Professional() {
  return (
    <section className="section section--alt prof">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Career</span>
          <h2 className="section-title">Professional <span className="accent">Experience</span></h2>
        </div>
        <ol className="ecards">
          {professionalData.map((experience, index) => (
            <li key={index}>
              <ExperienceCard company={experience.company} title={experience.title} description={experience.description} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Professional
