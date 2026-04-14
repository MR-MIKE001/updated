import React, { useState, useRef, useContext } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../contest";

function Contact() {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  const [formData, setFormData] = useState({
    user: "",
    email: "",
    message: "",
  });

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
if (!formData.user || !formData.email || !formData.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    emailjs
      .sendForm(
        "service_n1uaqvd",
        "template_njdb4ji",
        formRef.current,
        "40FBwbA7TtkG8a-e9"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        resetForm();
      })
      .catch(() => {
        alert("Failed to send message ❌");
        resetForm();
      });
  };

  return (
    <div className={`contact ${darkMode ? "dark" : ""}`} id="contact">
      <div className="c-left">
        <div className="contact-title">
          <span>GET IN TOUCH</span>
          <span>CONTACT US</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
            className="user"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="user"
            placeholder="Email"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="user"
            placeholder="Message"
          />

          <button type="submit" className="ebutton">
            Book an Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;