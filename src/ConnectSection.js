import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./ConnectSection.css";

const ConnectSection = () => {
  return (
    <section className="connect-section">
      <h2 className="connect-title">
        Connect & <span className="highlight">Contact</span>
      </h2>
      <p className="connect-subtitle">
        Reach out to me through any of the following.
      </p>

      <div className="connect-grid">
        {/* Email */}
        <div className="connect-item">
          <FaEnvelope className="connect-icon" />
          <div className="connect-text">
            <span className="connect-label">Email</span>
            <a href="mailto:shrinivas8377@gmail.com" className="connect-value">
              shrinivas8377@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="connect-item">
          <FaPhone className="connect-icon" />
          <div className="connect-text">
            <span className="connect-label">Phone</span>
            <a href="tel:+919741246969" className="connect-value">
              +91 9741246969
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="connect-item">
          <FaLinkedin className="connect-icon" />
          <div className="connect-text">
            <span className="connect-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/k-karthik-narayan-pai-5a15a6293"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-value"
            >
              linkedin.com/in/k-karthik-narayan-pai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
