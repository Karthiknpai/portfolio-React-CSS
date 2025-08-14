import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./projects";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Project not found
      </p>
    );

  const handleBack = () => {
    navigate("/", { replace: false });
    // Scroll to project section after short delay
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="project-detail-container">
      <button onClick={handleBack} className="back-link">
        ← Back to Projects
      </button>

      <h1 className="project-detail-title">{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-detail-image" />

      <div className="project-main">
        <div className="project-overview">
          <h3>Project Overview</h3>
          <p>{project.overview}</p>
        </div>
        <div className="project-tech">
          <h3>Technologies Used</h3>
          <ul>
            {project.tech.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-section">
        <h3>Challenges</h3>
        <ul>
          {project.challenges.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="project-section">
        <h3>Future Scope</h3>
        <ul>
          {project.futureScope.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
