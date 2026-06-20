import React from "react";
import NormalNavBar from "../features/Navbar/NavBar";
import HeroPage from "../features/HeroPage/HeroPage";
import ProjectsPage from "../features/ProjectsPage/ProjectsPage";
import SkillsPage from "../features/SkillsPage/SkillsPage";
import ContactPage from "../features/ContactPage/ContactPage";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <NormalNavBar />
      <HeroPage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </div>
  );
}
