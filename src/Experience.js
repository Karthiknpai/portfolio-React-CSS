import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company: "Accelerlab Solutions Pvt Ltd",
    period: "Feb 2025 – May 2025",
    logo: "./assets/Accelrlab_logo.png", // path to logo
    description:
      "Developed a Vehicle Rental System with a user-friendly UI and robust backend integration.",
    points: [
      "Built responsive front-end using ReactJS, CSS3, and JavaScript (ES6)",
      "Integrated MongoDB for smooth data flow between users and owners",
      "Collaborated with backend team for feature development and deployment",
    ],
    skills: [
      "ReactJS",
      "JavaScript",
      "MongoDB",
      "NextJS",
      "ExpressJS",
      "Responsive Design",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Cybersecurity Intern – CTF",
    company: "Coding KEYLLP",
    period: "Oct 2023 – Nov 2023",
    logo: "./assets/CodingKEY_logo.jpg", // path to logo
    description:
      "Created a Capture the Flag (CTF) game to teach cybersecurity concepts interactively.",
    points: [
      "Designed cryptography, steganography, and web exploitation challenges",
      "Developed responsive interface with HTML, CSS, and JavaScript",
      "Implemented PHP backend for challenge tracking and scoring",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Steganography",
      "Cryptography",
      "Web Exploitation",
    ],
  },
];
const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Professional Experience</h2>
        <p className="experience-subtitle">My internships and projects</p>
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              {/* <div className="experience-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div> */}
              <div>
                <h3 className="role">{exp.title}</h3>
                <p className="company">
                  {exp.company} | {exp.period}
                </p>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="experience-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
