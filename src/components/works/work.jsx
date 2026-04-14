import React from 'react'
import "./work.css"
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import shopify from '../../img/fin.png'
import amazon from '../../img/vegalogo.png'
import facebook from '../../img/ahis_logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { themeContext } from "../../contest";
import { useContext } from "react";

function Work() {
const darkMode = useContext(themeContext).state.darkMode;
  const transition={duration:2, type:"string"}
  return (
    <div  className='work'>
      <div id='m-left' className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>WORKED FOR ALL BRANDS</span>
        <span>BRANDS AND CLIENTS</span>
        <span className='space'>I’ve collaborated with reputable organizations such as Vega IT and Africa International Housing Show, alongside delivering solutions for global clients on Upwork and Fiverr. My work focuses on building scalable, high-performance applications with a strong emphasis on quality, reliability, and user experience.
If you’re looking for a developer who delivers with precision and excellence, let’s create something exceptional. 🚀  </span>
<Link spy={true} to='contact' smooth={true}>
        <button className='button s-button'>Hire Me
        </button></Link>
        
        
        <div className='blur s-blur' style={{background:"#abf1ff94", }}></div>
        </div>
        

        <div className='m-right'>
        <motion.div className='m-maincircle'
         
            whileInView={{transform:"rotate(0deg)"}}
            initial={{transform:"rotate(90deg)"}}
            transition={transition}>
        <div className='m-mainsecircle'>
            <img src={upwork} alt=''/>
        </div>
        <div className='m-mainsecircle'>
            <img src={fiver} alt=''/>
        </div>
        <div className='m-mainsecircle'>
            <img src={amazon} alt='' style={{borderRadius:"50%"}} width={100}/>
        </div>
        <div className='m-mainsecircle'>
            <img src={shopify} alt='' style={{borderRadius:"50%"}} width={100}/>
        </div>
        <div className='m-mainsecircle'>
            <img src={facebook} alt='' style={{borderRadius:"50%"}} width={100}/>
        </div>






        </motion.div>

   <div className='m-backcircle blueCircle'></div>
   <div className='m-backcircle yellowCircle'></div>

        </div>


    
    </div>
  )
}

export default Work