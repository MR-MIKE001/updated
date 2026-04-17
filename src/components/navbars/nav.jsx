import React, { useContext, useState } from "react";
import "./nav.css";
import Toggle from "../toggle/toggle";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { themeContext } from "../../contest";

const navData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "About", to: "/about" },
  { id: 4, title: "Experience", to: "/experience" },
  { id: 3, title: "Services", to: "/services" },
];

function Nav() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="n-wrapper"  style={{ color: darkMode ? "white" : "" }}>
        {/* Left */}
        <div className="n-left">
          <div className="n-name">MR_MIKE</div>
          <Toggle />
        </div>

        {/* Desktop right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none", color: darkMode ? "white" : "black" }}>
              {navData.map((item) => (
                <RouterLink key={item.id} to={item.to}>
                  <li style={{color:darkMode?"white":"black"}}>{item.title}</li>
                </RouterLink>
              ))}
            </ul>
          </div>

          <ScrollLink spy={true} to="contact" smooth={true}>
            <button className="button n-button">contact us</button>
          </ScrollLink>
        </div>

        {/* Hamburger */}
        <div
         
          className={`n-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span style={{ background: darkMode ? "white" : "black" }} />
          <span style={{ background: darkMode ? "white" : "black" }} />
          <span style={{ background: darkMode ? "white" : "black" }} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`n-mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul style={{ color: darkMode ? "white" : "black" }}>
          {navData.map((item) => (
            <RouterLink key={item.id} to={item.to} onClick={closeMenu}>
              <li>{item.title}</li>
            </RouterLink>
          ))}
        </ul>

        <div className="n-mobile-button">
          <ScrollLink spy={true} to="contact" smooth={true} onClick={closeMenu}>
            <button className="button">contact us</button>
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default Nav;