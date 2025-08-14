import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import ProjectSection from "./ProjectSection";
import ProjectDetail from "./ProjectDetails";
import SkillsSection from "./SkillsSection";
import ConnectSection from "./ConnectSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

function HomePage() {
  return (
    <div className="app-container">
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutMe /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="contact"><ConnectSection /></section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures page always starts at top */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
