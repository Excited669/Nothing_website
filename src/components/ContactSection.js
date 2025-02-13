import React from "react";
import "../assets/ContactSection.css";


const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">OR CONTACT US YOUR WAY</h2>

      <div className="contact-boxes">
        {/* Первая карточка */}
        <div className="contact-box">
          <h3>GET DAILY NEWS</h3>
          <button className="contact-button">JOIN TG</button>
        </div>

        {/* Вторая карточка */}
        <div className="contact-box">
          <h3>ENGAGE WITH US</h3>
          <button className="contact-button">FOLLOW ON X</button>
        </div>

        {/* Третья карточка */}
        <div className="contact-box">
          <h3>CHAT WITH US</h3>
          <button className="contact-button">JOIN TG CHAT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
