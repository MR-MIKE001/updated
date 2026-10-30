import React from 'react'
import "./work.css"
import upwork from '../../img/Upwork.webp'
import fiver from '../../img/fiverr.webp'
import shopify from '../../img/fin.webp'
import amazon from '../../img/vegalogo.webp'
import facebook from '../../img/ahis_logo.webp'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const brands = [
  { logo: amazon, name: 'Vega IT' },
  { logo: facebook, name: 'Africa International Housing Show' },
  { logo: shopify, name: 'Finclusion' },
  { logo: upwork, name: 'Upwork' },
  { logo: fiver, name: 'Fiverr' },
]

function Work() {
  return (
    <section className='section work'>
      <div className='container work-inner'>
        <div id='m-left'>
          <span className='eyebrow'>Worked with great brands</span>
          <h2 className='section-title'>Brands <span className='accent'>&amp;</span> Clients</h2>
          <p className='section-lead'>
            I’ve collaborated with reputable organizations such as Vega IT and Africa International Housing Show, alongside delivering solutions for global clients on Upwork and Fiverr. My work focuses on building scalable, high-performance applications with a strong emphasis on quality, reliability, and user experience.
          </p>
          <p className='section-lead'>
            If you’re looking for a developer who delivers with precision and excellence, let’s create something exceptional.
          </p>
          <Link to='contact' smooth={true} offset={-60}>
            <button className='button s-button'>Hire Me</button>
          </Link>
        </div>

        <div className='m-right'>
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className='m-brand'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className='m-logo'>
                <img src={brand.logo} alt={brand.name} loading="lazy" />
              </div>
              <span>{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
