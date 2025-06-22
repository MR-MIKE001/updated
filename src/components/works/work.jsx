import React from 'react'
import "./work.css"
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import shopify from '../../img/Shopify.png'
import amazon from '../../img/amazon.png'
import facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
function Work() {

  const transition={duration:2, type:"string"}
  return (
    <div className='work'>
      <div className='awesome'>
        <span>work for all these</span>
        <span>brands and clients</span>
        <span className='space'>I’ve had the privilege of collaborating with some 

        incredible clients<br/> across platforms like LinkedIn, Upwork, and Fiverr. From web development<br/>

         to UI/UX design, my work has consistently exceeded expectations,<br/> and I’m grateful for the trust and positive feedback I’ve 

         received. <br/>

Looking to bring your next project to life? Let’s connect<br/>
 I’d love to help you achieve your goals! </span>
<Link spy={true} to='contact' smooth={true}>
        <button className='button s-button'>hire me
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
            <img src={amazon} alt=''/>
        </div>
        <div className='m-mainsecircle'>
            <img src={shopify} alt=''/>
        </div>
        <div className='m-mainsecircle'>
            <img src={facebook} alt=''/>
        </div>






        </motion.div>

   <div className='m-backcircle blueCircle'></div>
   <div className='m-backcircle yellowCircle'></div>

        </div>


    
    </div>
  )
}

export default Work