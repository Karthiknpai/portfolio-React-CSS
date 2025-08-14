import React from "react";
import {
  FaUserGraduate,

  FaPaintBrush, // Creative / design
  FaSearch, // Attention to detail
  FaRocket, // Quick learner / fast progress
  FaSmile, // User-focused / enjoyable
} from "react-icons/fa";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      {/* Section Title */}
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        A passionate developer with skills in ReactJS, JavaScript, and
        responsive web design.
      </p>

      {/* Summary + Education */}
      <div className="summary-education">
        {/* Summary */}
        <div className="summary">
          <h3 className="summary-heading">Professional Summary</h3>
          <p>
            As an aspiring developer, I enjoy turning ideas into interactive,
            user-friendly web experiences. With skills in ReactJS, JavaScript,
            and responsive design, I focus on building clean, functional
            interfaces that work seamlessly across devices. I’m a quick learner,
            detail-oriented, and always eager to explore new tools and
            techniques to make websites both visually appealing and easy to use.
          </p>
          <p>
            I thrive in collaborative settings, working closely with designers
            and backend teams to create smooth, cohesive solutions. Constantly
            exploring new trends in UI/UX, I aim to deliver web experiences that
            not only meet requirements but also leave a lasting impression on
            users.
          </p>
        </div>

        {/* Education */}
        <div className="education-wrapper">
          <h4 className="education-title">Education</h4>
          <div className="education-card">
            <FaUserGraduate className="edu-icon" />
            <div className="education-text">
              <h5>Bachelor of Engineering</h5>
              <p>Information Science & Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Boxes */}
      <div className="skills-grid">
        <div className="skill-box">
          <FaPaintBrush className="skill-icon" />
          <h5>Creative Builder</h5>
          <p>
            Enjoys making clean and attractive web pages that work well on any
            device.
          </p>
        </div>
        <div className="skill-box">
          <FaSearch className="skill-icon" />
          <h5>Attention to Detail</h5>
          <p>
            Keeps designs consistent and code neat for a smooth user experience.
          </p>
        </div>
        <div className="skill-box">
          <FaRocket className="skill-icon" />
          <h5>Quick Learner</h5>
          <p>Picks up new tools and techniques fast to improve work quality.</p>
        </div>
        <div className="skill-box">
          <FaSmile className="skill-icon" />
          <h5>User Focused</h5>
          <p>Creates websites that are easy and enjoyable for people to use.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
