import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
import { UilArrowRight } from '@iconscout/react-unicons'

function Card({ emoji, heading, details, index }) {
  return (
    <article className='card'>
      {emoji ? (
        <div className='card-icon'><img src={emoji} alt='' width={32} height={32} /></div>
      ) : index !== undefined ? (
        <div className='card-index'>{String(index).padStart(2, "0")}</div>
      ) : null}
      <h3 className='card-title'>{heading}</h3>
      <p className='card-details'>{details}</p>
      {emoji && (
        <Link to="/services" className='card-link'>
          Learn more <UilArrowRight size="18" />
        </Link>
      )}
    </article>
  )
}

export default Card
