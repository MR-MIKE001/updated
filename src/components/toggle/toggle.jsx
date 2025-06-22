import React from 'react'
import './toggle.css'
import { UilSun, UilMoon } from '@iconscout/react-unicons';

import { themeContext } from '../../contest'
import { useContext } from 'react'
function Toggle() {
    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode
    const handleClick=()=>{
    theme.dispatch({type:"toggle"})
    }
  return (
    <div className='toggle'onClick={handleClick}>
    <UilMoon/>

    <UilSun/>
    <div 
    
    className='t-button' style={darkMode? {left:"2px"}:{right:"2px"}}>

    </div>
    
     </div>
  )
}

export default Toggle