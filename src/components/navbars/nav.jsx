import React, { useEffect, useState } from "react";
import "./nav.css";
import Toggle from "../toggle/toggle";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "About", to: "/about" },
  { id: 4, title: "Experience", to: "/experience" },
  { id: 3, title: "Services", to: "/services" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(closeMenu, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`n-wrapper ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container n-inner">
        <RouterLink to="/" className="n-name" aria-label="Mr Mike — home">
          MR<span>_</span>MIKE
        </RouterLink>

        <nav className="n-list" aria-label="Main">
          <ul>
            {navData.map((item) => (
              <li key={item.id}>
                <NavLink to={item.to} end className="n-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="n-actions">
          <Toggle />
          <ScrollLink to="contact" smooth={true} offset={-60} className="n-cta">
            <button className="button button--sm">Contact me</button>
          </ScrollLink>
          <button
            type="button"
            className={`n-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`n-mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navData.map((item) => (
            <li key={item.id}>
              <NavLink to={item.to} end className="n-link" onClick={closeMenu}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ScrollLink to="contact" smooth={true} offset={-60} onClick={closeMenu}>
          <button className="button n-mobile-button">Contact me</button>
        </ScrollLink>
      </div>
    </header>
  );
}

export default Nav;
