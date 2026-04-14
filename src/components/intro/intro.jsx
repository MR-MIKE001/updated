import React from 'react'
import "./intro.css"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/mr-mike.jpeg"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glasses from "../../img/glassesimoji.png"
import FloatingDiv from '../floatingDiv/Floating'
import { themeContext } from '../../contest'
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Github from "../../img/github.png"
import linked from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import about from "../../img/about-me.jpg"
import exper from "../../img/experience.jpg"
import service from "../../img/ser.png"

import { Link } from 'react-scroll'

function Intro({title,description}) {

  const transition={duration:2, type:"string"}
  const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode
  return (
    <section className='intro'>
    <div className='i-left'>
    <div className='i-name'>
   <span style={{color:darkMode? "white":"",
   }}> {title==="home"?"HI I AM":""}</span>
   <span style={{color:darkMode? "white":"",
   }}> {title==="home"?"MICHEAL IBRAHIM":title==="about"?"ABOUT ME":title}</span>
   <span style={{color:darkMode? "white":"black",
   }}> {description}</span>
</div>
<Link spy={true} to='contact' smooth={true}>
<button className='button i-button'>Hire Me</button></Link>

 <div className='i-icons'>
   <a href="https://github.com/MR-MIKE001" target="_blank" rel="noopener noreferrer"><img src={Github} alt="mr mike's github"/></a>
    <a href="https://www.linkedin.com/in/micheal-ibrahim-57539937a" target="_blank" rel="noopener noreferrer"><img src={linked} alt='mr mike linkedin'/></a>
    <a href="https://www.instagram.com/aimrmike5" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='mr mike instagram'/></a>
</div> 

    </div>
    <div className='i-right'>
    <img src={vector1} alt=''/>
    <img src={vector2} alt=''/>
    <div className='boy-wrapper'>
      <img src={title==="home"?boy:title==="about"?exper:title==="My Experience"?about:title==="Web And Mobile App Development Services"?service:""} alt='micheal ibrahim senior software engineer'
      width={350} height={350}  className='boy' style={{top:title==="home"?"":"5rem"}}/>
    </div>
   
    <motion.img 
    initial={{left:"-10%"}}
    whileInView={{left:"0%"}}
    transition={transition}
    src={glasses} alt=''/>
   <motion.div 
   initial={{top:"-4%", left:"70%"}}
   whileInView={{left:"60%"}}
   transition={transition}

   style={{top:'-4%'}}
   className='.floating-div'>
   <FloatingDiv txt1="web" txt2="developer"
    image={crown}/>
   </motion.div>
   <motion.div
   initial={{left:"9rem", top:"18rem"}}
   whileInView={{left:"16rem"}}
   transition={transition}
    style={{top:'18rem', left:'0rem'}}
    className='.floating-div' id="floating-div">
   <FloatingDiv txt1="best design" txt2="award" image={thumbup}/>
   </motion.div>

    {/* {blur div}
     */}
    <div className='blur' style={{background:"rgb(238 210 255)" }}>
</div>
<div className='blur' style={{
        background:"#c1f5ff",
        top:"17rem",
        left:'-9rem',
        width:"21rem",
        height:'11rem'
    }}></div>
    
    
    </div>
    
    </section>
  )
}

export default Intro