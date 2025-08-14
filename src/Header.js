import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // close menu on click
  };

  return (
    <header className="header">
      <h1 className="portfolio-name">Karthik's Portfolio</h1>

      <nav>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("hero")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
