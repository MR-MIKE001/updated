import React from "react";
import "./pricing.css";
import { Link } from "react-scroll";


const Pricing = ({ services }) => {
  return (
    <div className="pricing-container">
      {services.map((service, index) => (
        <div key={index} className="pricing-card">
          <h2 className="pricing-title">{service.name}</h2>
          <p className="pricing-price">{service.price}</p>
          <p className="pricing-description">{service.description}</p>

          <div className="pricing-section">
            <h4>What you get:</h4>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="pricing-section">
            <h4>Best for:</h4>
            <ul>
              {service.bestFor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
                <Link to="contact" smooth={true} duration={1000} className="pricing-btn-link">
          <button className="pricing-btn">Get Started</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pricing;