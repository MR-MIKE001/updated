import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
function Card({emoji,heading,details}) {
  return (
    <div className='card'>
        <img src={emoji} alt=''/>
        <span style={{marginTop:!emoji?"-4rem":""}}>{heading}</span>
        <span>{details}</span>
      {emoji&& <Link to={"/services"} > <button className='c-button'> learn more</button></Link>}
    </div>
  )
}

export default Card