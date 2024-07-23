/** @format */

import React from "react";
import NavBar from "./components/NavBar.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import HomeSection from "./components/HomeSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default App;
