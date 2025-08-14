import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./projects";
import "./ProjectSection.css";

const ProjectCard = ({ project }) => {
  const maxVisibleTech = 3;
  const visibleTech = project.tech.slice(0, maxVisibleTech);
  const remainingCount = project.tech.length - maxVisibleTech;

  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {visibleTech.map((t, idx) => (
          <span key={idx} className="tech-tag">{t}</span>
        ))}
        {remainingCount > 0 && <span className="tech-tag more-tag">+{remainingCount} more</span>}
      </div>
      <div className="button-container">
        <Link to={`/projects/${project.id}`}>
          <button className="view-details">View Details →</button>
        </Link>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
        </p>
        <div className="projects-grid">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
