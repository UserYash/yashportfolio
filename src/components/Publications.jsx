import React from "react";
import "./Publications.css";

const Publications = () => {
  const papers = [
    "Traffic Surveillance And Vehicle Detection — ICISC 2023",
    "Detect and Evaluate Visual Pollution on Street Imagery — IJRITCC",
    "Exergame with Deep Learning and Sensors — IEEE ICCUBEA 2023"
  ];

  return (
    <section id="publications" className="publications">
      <h2>Publications</h2>
      <ul>
        {papers.map((paper, i) => <li key={i}>{paper}</li>)}
      </ul>
    </section>
  );
};

export default Publications;
