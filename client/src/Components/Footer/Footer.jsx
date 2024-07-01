// src/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Contact Us</h3>
          <p>Buddha vihar colony <br />Gorakhpur, State, 12345</p>
          <p>Email: Sumitya@example.com<br />Phone: 123- 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
