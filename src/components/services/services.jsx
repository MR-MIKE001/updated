
import "./services.css";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../cards/card";
import resume from "./MResume.pdf";
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
          I provide end-to-end web solutions, including front-end and back-end
          development,
          <br /> API design and integration, database management (SQL/NoSQL),
          <br /> cloud deployment (render, heroku), UI/UX implementation,
          e-commerce platforms,
          <br /> and security and performance optimization. Let’s bring your
          project to life!
          <br />
        </span>
        <a href={resume} download>
          <button className='button s-button'>Download CV</button>
        </a>

        <div className='blur s-blur' style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className='cards'>
        <motion.div
          whileInView={{ left: "-10rem" }}
          initial={{ left: "20rem" }}
          transition={transition}>
          <Card
            emoji={glasses}
            heading='WEB DEVELOPMENT'
            details='HTML,CSS,Javascript,Nodejs,Mongodb'
          />
        </motion.div>
        <motion.div
          style={{ top: "12rem" }}
          whileInView={{ left: "8rem" }}
          initial={{ left: "0px" }}
          transition={transition}>
          <Card
            emoji={humble}
            heading='MOBILE APP'
            details='React-native, Java'
          />
        </motion.div>
        <motion.div
          style={{ top: "19rem", left: "12rem" }}
          whileInView={{ left: "-12rem" }}
          initial={{ left: "20rem" }}
          transition={transition}>
          <Card
            emoji={glasses}
            heading='UI/UX'
            details='Figma, Adobe XD, Sketch'
          />
        </motion.div>
        <div
          className='blur s-blur2 '
          style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
}

export default Services;
