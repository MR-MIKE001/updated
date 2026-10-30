import React from 'react'
import "./floating.css"

function Floating({ image, txt1, txt2 }) {
  return (
    <div className='floatingDiv'>
      <img src={image} alt='' width={32} height={32} />
      <span>
        <strong>{txt1}</strong>
        {txt2}
      </span>
    </div>
  )
}

export default Floating
