import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Car Loan Management System</h3>
        <p>
         - Built a full-stack web application using spring Boot(backend) and React.js(frontend).
         <br></br> 
         - Features include EMI calculator with loan application and repayment tracking. 
          <br></br>
         - Integrated MySQL database for storing customer and loan details. 
        </p>
      </div>
      <div className="project-card">
        <h3>Student Management System with Spring Boot</h3>
        <p>
         - Manages information for students and courses, including student profiles, course details, and enrolment.
          <br></br> 
         - The project follows Object-Oriented Programming (OOPS) principles. The Collection Framework is used to handle data structures dynamically.
          <br></br> 
         - Exception Handling is implemented throughout the application to manage runtime errors. 
          <br></br>
         - The backend is developed using Spring Boot , which simplifies the development process by providing built-in tools for REST API creation, dependency management, and easy integration with databases.
        </p>
      </div>
    </section>
  );
};

export default Projects;
