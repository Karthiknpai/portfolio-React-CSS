import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import profilePic from "./assets/Karthiknpai_Professional_Photo.jpg";
import resumePDF from "./assets/K_Karthik_Narayan_Pai_Resume.pdf";

const HeroSection = () => {
  const roles = ["Software Developer", "Web Developer", "Frontend Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]); // ✅ Added dependency

  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Left Side */}
        <div className="intro-left">
          <h1 className="intro-name">
            <span>K KARTHIK</span>{" "}
            <span className="last-name">NARAYAN PAI</span>
          </h1>

          <h2 className="intro-role">
            Aspiring{" "}
            <span key={currentRoleIndex} className="role-animated">
              {roles[currentRoleIndex]}
            </span>
          </h2>

          <p className="intro-description">
            Versatile and fast-learning web developer with experience in
            ReactJS, JavaScript, and responsive UI design. Skilled in creating
            intuitive, user-friendly front-end solutions and integrating them
            with robust backend systems to deliver seamless digital experiences.
          </p>

          <div className="contact-buttons">
            <a href="mailto:shrinivas8377@gmail.com" className="contact-btn">
              <FaEnvelope /> shrinivas8377@gmail.com
            </a>
            <a href="tel:+919741246969" className="contact-btn">
              <FaPhoneAlt /> +91 97412 46969
            </a>
            <a
              href="https://www.linkedin.com/in/k-karthik-narayan-pai-5a15a6293"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <a href={resumePDF} download className="resume-button">
            Download Resume
          </a>
        </div>

        {/* Right Side */}
        <div className="intro-right">
          <img src={profilePic} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
