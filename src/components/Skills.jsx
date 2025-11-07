import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "Java", "OOPs", "JDBC", "Spring", "Spring MVC", "Spring Boot",
    "Web Services", "ReactJS", "MySQL", "HTML", "CSS", "JavaScript",
    "Bootstrap", "Hibernate", "Git", "GitHub", "JSP", "Servlets", "Microservices"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
