import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea 
            placeholder="Your Message" 
            className="input-field message-field"
          ></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
        
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <p>thejan1010@gmal.com</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📱</span>
            <p>(+94) 71-8860959</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <p>Badulla , Srilanka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;