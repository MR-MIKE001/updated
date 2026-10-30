import React from "react";
import "./pricing.css";
import { Link } from "react-scroll";
import { UilCheck } from "@iconscout/react-unicons";

const Pricing = ({ services }) => {
  return (
    <div className="pricing-container">
      {services.map((service, index) => (
        <article key={index} className="pricing-card">
          <h3 className="pricing-title">{service.name}</h3>
          <p className="pricing-description">{service.description}</p>
          <p className="pricing-price">{service.price}</p>

          <div className="pricing-section">
            <h4>What you get</h4>
            <ul className="pricing-features">
              {service.features.map((feature, i) => (
                <li key={i}><UilCheck size="18" />{feature}</li>
              ))}
            </ul>
          </div>

          <div className="pricing-section">
            <h4>Best for</h4>
            <ul className="pricing-tags">
              {service.bestFor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <Link to="contact" smooth={true} offset={-60} duration={800} className="pricing-btn-link">
            <button className="button pricing-btn">Get Started</button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Pricing;
