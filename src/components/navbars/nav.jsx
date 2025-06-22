import React from "react";
import "./nav.css";
import Toggle from "../toggle/toggle";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name x'>MR_MIKE </div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to='nav' smooth={true}>
              <li>home</li>
            </Link>
            <Link spy={true} to='services' smooth={true}>
              <li>services</li>
            </Link>
            <Link spy={true} to='experience' smooth={true}>
              <li>experience</li>
            </Link>
            <Link spy={true} to='portfolio' smooth={true}>
              <li>portfolio</li>
            </Link>
          </ul>
        </div>

        <Link spy={true} to='contact' smooth={true}>
          <button className='button n-button'>contact us</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
