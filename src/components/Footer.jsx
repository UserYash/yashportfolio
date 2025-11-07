import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h3>Contact</h3>
      <p>Email: <a href="mailto:yash30gaikwad@gmail.com">yash30gaikwad@gmail.com</a></p>
      <p>Phone: 8010437566</p>
      <p>
        <a href="https://linkedin.com/in/yash-gaikwad" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com/UserYash" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
