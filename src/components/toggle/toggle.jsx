import React from 'react'
import './toggle.css'
import { UilSun, UilMoon } from '@iconscout/react-unicons';

import { themeContext } from '../../contest'
import { useContext } from 'react'

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    theme.dispatch({ type: "toggle" })
  }
  return (
    <button
      type="button"
      className='toggle'
      onClick={handleClick}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
    >
      {darkMode ? <UilSun size="18" /> : <UilMoon size="18" />}
    </button>
  )
}

export default Toggle
