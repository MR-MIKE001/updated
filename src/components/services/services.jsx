
import "./services.css";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../cards/card";
import resume from "./Micheal_Ibrahim_Premium_Resume.pdf";
import { themeContext } from "../../contest";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 5, type: "string" };
  return (
    <div style={{background:darkMode?" #2f2f2f":" #c7bebeff"}}  className='services' id='services'>
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>MY AWESOME</span>
        <span>SERVICES</span>
        <span>
         I provide end-to-end software development solutions, delivering scalable, secure, and production-ready applications from concept to deployment.

My expertise spans frontend and backend development, where I build high-performance user interfaces using React and TypeScript, and design robust backend systems with .NET, Node.js, and RESTful APIs.
          <br />
        </span>
        <a href={resume} download>
          <button className='button s-button'>Download CV</button>
        </a>

        <div className='blur s-blur' style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className='cards'>
        <motion.div
        style={{ left: "-5rem" }}
          initial={{ top: "2rem" }}
          whileInView={{ top: "0rem"  }}
          transition={transition}>
        
          <Card
            emoji={glasses}
            heading='Backend Architecture & API Development'
            details='Designing secure, scalable APIs and system architectures using industry best practices and frameworks like .NET, Node.js, and RESTful API standards.'
          />
        </motion.div>
         <motion.div
         style={{left: "16rem" }}
           initial={{ top: "2rem" }}
          whileInView={{ top: "0rem"  }}
          transition={transition}>
          <Card
            emoji={glasses}
            heading='Database Design & Optimization'
            details='Working with SQL and NoSQL databases to ensure efficient data modeling, integrity, and performance, including query optimization and indexing strategies.'
          />
        </motion.div>
        <motion.div
      
          style={{left: "5.5rem" }}
           initial={{ top: "-2rem" }}
          whileInView={{ top: "0rem"  }}
          transition={transition}>
          <Card
            emoji={humble}
            heading='Modern Frontend Development'
            details='Creating responsive, accessible, and user-focused interfaces optimized for performance and scalability using React, TypeScript, and modern frontend tools.'
          />
        </motion.div>
       
        
      </div>
    </div>
  );
}

export default Services;
