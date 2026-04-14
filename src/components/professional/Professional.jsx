import ExperienceCard from "../experienceCard/ExperienceCard"
import professionalData from "./professionalData"
import "./professional.css"
import { useContext } from "react";
import { themeContext } from "../../contest";

function Professional() {
     const darkMode = useContext(themeContext).state.darkMode;
  return (
   <div className="prof" style={{background:darkMode?" #2f2f2f":" #c7bebeff"}} >
    <h1>Professional Experience</h1>
    <div style={{ color: darkMode ? "white" : "" }} className="ecards">
    {
        /* Add your professional experience content here */
        professionalData.map((experience, index) => (
            <div key={index}>
                <ExperienceCard company={experience.company} title={experience.title} description={experience.description} />
                </div>
        ))
    }
    </div>
   </div>
  )
}

export default Professional