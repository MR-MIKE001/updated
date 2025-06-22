import React from 'react'
import { Link } from 'react-scroll'
import "./card.css"
function card({emoji,heading,details}) {
  return (
    <div className='card'>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{details}</span>
       <Link spy={true} to='contact' smooth={true}> <button className='c-button'> learn more</button></Link>
    </div>
  )
}

export default card