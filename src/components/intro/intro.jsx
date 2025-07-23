import React from 'react'
import "./intro.css"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glasses from "../../img/glassesimoji.png"
import FloatingDiv from '../floatingDiv/Floating'
import { themeContext } from '../../contest'
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-scroll'

function Intro() {

  const transition={duration:2, type:"string"}
  const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
   <span style={{color:darkMode? "white":"",
   }}> HI I AM</span>
   <span> MICHEAL IBRAHIM</span>
   <span> I am a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have a strong foundation in building responsive, user-centric web applications and API integrations. With experience in both front-end and back-end development, I deliver efficient, scalable, and maintainable solutions. My expertise includes designing intuitive interfaces, implementing robust server-side logic, and deploying full-stack applications to production. I'm dedicated to continuous learning and thrive on turning ideas into functional, high-quality digital experiences.
</span>

</div>
<Link spy={true} to='contact' smooth={true}>
<button className='button i-button'>hire me</button></Link>

{/* <div className='i-icons'>
    <img src={Github} alt="mike's github"/>
    <img src={linked} alt='linkedin'/>
    <img src={instagram} alt='instagram'/>
</div> */}

    </div>
    <div className='i-right'>
    <img src={vector1} alt=''/>
    <img src={vector2} alt=''/>
    <img src={boy} alt=''/>
    <motion.img 
    initial={{left:"-36%"}}
    whileInView={{left:"-25%"}}
    transition={transition}
    src={glasses} alt=''/>
   <motion.div 
   initial={{top:"-4%", left:"74%"}}
   whileInView={{left:"68%"}}
   transition={transition}
   style={{top:'-4%', left:'68%'}}
   className='.floating-div'>
   <FloatingDiv txt1="web" txt2="developer" image={crown}/>
   </motion.div>
   <motion.div
   initial={{left:"9rem", top:"18rem"}}
   whileInView={{left:"0rem"}}
   transition={transition}
    style={{top:'18rem', left:'0rem'}}
    className='.floating-div'>
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
    
    </div>
  )
}

export default Intro