import React from 'react'
import './experience.css'
import { themeContext } from "../../contest";
import { useContext } from "react";

function Experience() {
const darkMode  = useContext(themeContext).state.darkMode;

  return (
    <div style={{background:darkMode?" #2f2f2f":" #c7bebeff"}}   className='experience'>
        <div className='achievement'>
         <div className='circle'>8+</div>
        <span>years</span>
        <span>experience</span></div>
        <div className='achievement'>
         <div className='circle'>20+</div>
        <span>completed</span>
        <span>projects</span></div>
        <div className='achievement'>
         <div className='circle'>5+</div>
        <span>companies</span>
        <span>work</span>
        </div>
        </div>
  )
}

export default Experience