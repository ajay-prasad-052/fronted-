import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Foodie</h2>
          <p>Your favorite food delivered fast.</p>
        </div>

        <div className="footer-content-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h3>Contact</h3>
          <p>+91 9876543210</p>
          <p>support@foodie.com</p>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © 2026 Foodie.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
