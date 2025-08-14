import React, { useState } from "react";
import "./SkillsSection.css";

import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import reactIcon from "./assets/react.png";
import jsIcon from "./assets/java-script.png";
import responsiveIcon from "./assets/responsive-design.png";
import mongodbIcon from "./assets/database-storage.png";
import sqlIcon from "./assets/sql-server.png";
import intelijIcon from "./assets/intelij.png";
import postmanIcon from "./assets/postman.png";
import gitIcon from "./assets/github.png";
import vsIcon from "./assets/visual-studio.png";

const skillsData = {
  frontend: [
    { name: "React", icon: reactIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Responsive Design", icon: responsiveIcon },
  ],
  backend: [
    { name: "SQL", icon: sqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
  ],
  tools: [
    { name: "Git & GitHub", icon: gitIcon },
    { name: "VS Code", icon: vsIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Intelij IDEA", icon: intelijIcon },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="skills-section">
      <h2 className="skills-title">
        Skills & <span className="highlight">Expertise</span>
      </h2>
      <p className="skills-subtitle">
        Here are the technologies and tools I use to create amazing digital experiences.
      </p>

      <div className="skills-tabs">
        {["frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillsData[activeTab].map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
