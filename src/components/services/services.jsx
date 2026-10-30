import "./services.css";
import glasses from "../../img/glasses.webp";
import humble from "../../img/humble.webp";
import Card from "../cards/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    emoji: glasses,
    heading: "Backend Architecture & API Development",
    details: "Designing secure, scalable APIs and system architectures using industry best practices and frameworks like .NET, Node.js, and RESTful API standards.",
  },
  {
    emoji: glasses,
    heading: "Database Design & Optimization",
    details: "Working with SQL and NoSQL databases to ensure efficient data modeling, integrity, and performance, including query optimization and indexing strategies.",
  },
  {
    emoji: humble,
    heading: "Modern Frontend Development",
    details: "Creating responsive, accessible, and user-focused interfaces optimized for performance and scalability using React, TypeScript, and modern frontend tools.",
  },
];

function Services() {
  return (
    <section className='section section--alt services' id='services'>
      <div className='container services-inner'>
        <div className='awesome'>
          <span className='eyebrow'>My awesome</span>
          <h2 className='section-title'>Services</h2>
          <p className='section-lead'>
            I provide end-to-end software development solutions, delivering scalable, secure, and production-ready applications from concept to deployment.
          </p>
          <p className='section-lead'>
            My expertise spans frontend and backend development, where I build high-performance user interfaces using React and TypeScript, and design robust backend systems with .NET, Node.js, and RESTful APIs.
          </p>
          <Link to="/services" className='button s-button'>Explore services</Link>
        </div>

        <div className='cards'>
          {cards.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
