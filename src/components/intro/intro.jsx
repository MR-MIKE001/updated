import React from 'react'
import "./intro.css"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/avatar (2).jpg"
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
   <span> I am a passionate Full-Stack Software Engineer with strong expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by professional experience in C#, .NET, ASP.NET MVC, and SQL. I specialize in building responsive, user-centric web and mobile applications, as well as designing and integrating robust RESTful APIs. With hands-on experience across both frontend and backend development, I deliver efficient, scalable, and maintainable solutions. My skill set spans intuitive UI design, solid server-side architecture, optimized database interactions, and production-ready deployments. I am committed to continuous learning and enjoy transforming ideas into reliable, high-quality digital products.
   </span>
</div>
<Link spy={true} to='contact' smooth={true}>
<button className='button i-button'>Hire Me</button></Link>

{/* <div className='i-icons'>
    <img src={Github} alt="mike's github"/>
    <img src={linked} alt='linkedin'/>
    <img src={instagram} alt='instagram'/>
</div> */}

    </div>
    <div className='i-right'>
    <img src={vector1} alt=''/>
    <img src={vector2} alt=''/>
    <div className='boy-wrapper'>
      <img src={boy} alt=''
      width={350} className='boy' />
    </div>
   
    <motion.img 
    initial={{left:"-36%"}}
    whileInView={{left:"-25%"}}
    transition={transition}
    src={glasses} alt=''/>
   <motion.div 
   initial={{top:"-4%", left:"84%"}}
   whileInView={{left:"80%"}}
   transition={transition}

   style={{top:'-4%', left:'68%'}}
   className='.floating-div'>
   <FloatingDiv txt1="web" txt2="developer"
    image={crown}/>
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