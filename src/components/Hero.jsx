import React from "react";
import "./Hero.css";
import { Link } from "react-scroll"; // for smooth scroll to Projects section

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h1>Yash Gaikwad</h1>
      <h2>Full Stack Developer</h2>
      <p>
        Motivated and detail-oriented Computer Engineering graduate skilled in
        Java, Spring Boot, React, and MySQL. Passionate about building scalable
        full-stack applications.
      </p>

     <div className="hero-buttons">
  <a href="/yash_resume_.pdf" download className="btn secondary">
    Download Resume
  </a>

  <Link
    to="projects"
    smooth={true}
    duration={600}
    className="btn secondary"
  >
    View Projects
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={600}
    className="btn secondary"
  >
    Contact Me
  </Link>
</div>

    </section>
  );
};

export default Hero;
