import React from 'react'
import "./intro.css"
import boy from "../../img/mr-mike.webp"
import thumbup from "../../img/thumbup.webp"
import crown from "../../img/crown.webp"
import FloatingDiv from '../floatingDiv/Floating'
import { motion } from 'framer-motion';
import { UilGithub, UilLinkedin, UilInstagram, UilArrowDown } from '@iconscout/react-unicons'
import about from "../../img/about-me.webp"
import exper from "../../img/experience.webp"
import service from "../../img/ser.webp"
import resume from "../services/Micheal_Ibrahim_CV.pdf";

import { Link } from 'react-scroll'

// Per-page hero content, keyed by the `title` prop each page passes in
const heroes = {
  home: { eyebrow: "Senior Software Engineer", heading: <>Hi, I'm <span className="accent">Micheal Ibrahim</span></>, image: boy },
  about: { eyebrow: "Get to know me", heading: <>About <span className="accent">Me</span></>, image: exper },
  "My Experience": { eyebrow: "Career & skills", heading: <>My <span className="accent">Experience</span></>, image: about },
  "Web And Mobile App Development Services": { eyebrow: "What I offer", heading: <>Web & Mobile App <span className="accent">Development Services</span></>, image: service },
};

const socials = [
  { href: "https://github.com/MR-MIKE001", label: "GitHub", Icon: UilGithub },
  { href: "https://www.linkedin.com/in/micheal-ibrahim-57539937a", label: "LinkedIn", Icon: UilLinkedin },
  { href: "https://www.instagram.com/aimrmike5", label: "Instagram", Icon: UilInstagram },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

function Intro({ title, description }) {
  const hero = heroes[title] || { eyebrow: "", heading: title, image: boy };
  const paragraphs = description.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <section className='intro'>
      <div className='intro-bg' aria-hidden="true" />
      <div className='container intro-inner'>
        <motion.div className='i-left' initial="hidden" animate="show">
          {hero.eyebrow && (
            <motion.span className='eyebrow' variants={fadeUp} custom={0}>{hero.eyebrow}</motion.span>
          )}
          <motion.h1 className='i-title' variants={fadeUp} custom={1}>{hero.heading}</motion.h1>
          <motion.div className='i-description' variants={fadeUp} custom={2}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>

          <motion.div className='i-actions' variants={fadeUp} custom={3}>
            <Link to='contact' smooth={true} offset={-60}>
              <button className='button'>Hire Me</button>
            </Link>
            <a href={resume} download className='button button--ghost'>
              <UilArrowDown size="18" /> Download CV
            </a>
          </motion.div>

          <motion.div className='i-icons' variants={fadeUp} custom={4}>
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Micheal on ${label}`}>
                <Icon size="20" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className='i-right'
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className='i-photo'>
            <img
              src={hero.image}
              alt='Micheal Ibrahim, senior software engineer'
              width={480}
              height={600}
              className={title === "Web And Mobile App Development Services" ? "top" : ""}
            />
          </div>

          <motion.div
            className='i-badge i-badge--top'
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FloatingDiv txt1="Web" txt2="Developer" image={crown} />
          </motion.div>
          <motion.div
            className='i-badge i-badge--bottom'
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FloatingDiv txt1="Best Design" txt2="Award" image={thumbup} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
