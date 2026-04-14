import React from 'react'
import "./floating.css"

function Floating({image, txt1,txt2}) {
 
  return (
    <div className='floatingDiv' >
        <img src={image} alt='micheal ibrahim senior software engineer'/>
        <span>{txt1}
        <br/>
        {txt2}</span>
    </div>
  )
}

export default Floating