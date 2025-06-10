// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import NormalNavBar from "./features/Navbar/NavBar";
import HeroPage from "./features/HeroPage/HeroPage";
import ProjectsPage from "./features/ProjectsPage/ProjectsPage";
import SkillsPage from "./features/SkillsPage/SkillsPage";
import ContactPage from "./features/ContactPage/ContactPage";
import "./App.css";

// Add these lines to your index.html file in the <head> section:

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <NormalNavBar />
      {/* Hero Section */}
      <HeroPage />
      {/* Projects Section */}
      <ProjectsPage />
      {/* Skills Section */}
      <SkillsPage />
      {/* Contact Section */}
      <ContactPage />
      {/* Footer */}
    </div>
  );
};
export default App;
