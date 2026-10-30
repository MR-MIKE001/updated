import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { UilEnvelope, UilPhone, UilWhatsapp } from "@iconscout/react-unicons";

const channels = [
  { Icon: UilEnvelope, label: "Email", value: "aimrmike5@gmail.com", href: "mailto:aimrmike5@gmail.com" },
  { Icon: UilPhone, label: "Phone", value: "+234 810 943 3307", href: "tel:+2348109433307" },
  { Icon: UilWhatsapp, label: "WhatsApp", value: "Chat with me", href: "https://wa.me/+2348109433307" },
];

function Contact() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    message: "",
  });
  // idle | sending | success | error | invalid
  const [status, setStatus] = useState("idle");

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      user: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.user.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    emailjs
      .sendForm(
        "service_n1uaqvd",
        "template_njdb4ji",
        formRef.current,
        "40FBwbA7TtkG8a-e9"
      )
      .then(() => {
        setStatus("success");
        resetForm();
      })
      .catch(() => {
        // keep what they typed so they can retry
        setStatus("error");
      });
  };

  const messages = {
    invalid: "Please fill in all fields before submitting.",
    success: "Thanks! Your message was sent. I’ll get back to you shortly.",
    error: "Something went wrong sending your message. Please try again or email me directly.",
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <div className="c-left">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let’s build something <span className="accent">great together</span>
          </h2>
          <p className="section-lead">
            Have a project in mind, need a technical partner, or just want to say hello?
            Send a message and I’ll reply within one business day.
          </p>

          <ul className="c-channels">
            {channels.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <span className="c-channel-icon"><Icon size="20" /></span>
                  <span>
                    <small>{label}</small>
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="c-right">
          <form ref={formRef} onSubmit={sendEmail} noValidate>
            <div className="c-field">
              <label htmlFor="c-name">Name</label>
              <input
                id="c-name"
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="user"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="c-field">
              <label htmlFor="c-email">Email</label>
              <input
                id="c-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="user"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="c-field">
              <label htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="user"
                placeholder="Tell me about your project, goals and timeline"
                rows={5}
                required
              />
            </div>

            <button type="submit" className="button ebutton" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Book an Appointment"}
            </button>

            {messages[status] && (
              <p className={`c-status c-status--${status}`} role="status">
                {messages[status]}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
