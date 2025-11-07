import React from "react";
import "./Tools.css";

const Tools = () => {
  const tools = [
    "IntelliJ IDEA", "Eclipse", "Maven", "MySQL WorkBench", 
    "VS Code", "Git", "GitHub", "Postman"
  ];

  return (
    <section id="tools" className="tools">
      <h2>Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, i) => <span key={i}>{tool}</span>)}
      </div>
    </section>
  );
};

export default Tools;
