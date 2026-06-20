import NormalNavBar from "../features/Navbar/NavBar";
import HeroPage from "../features/HeroPage/HeroPage";
import ProjectsPage from "../features/ProjectsPage/ProjectsPage";
import SkillsPage from "../features/SkillsPage/SkillsPage";
import ContactPage from "../features/ContactPage/ContactPage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NormalNavBar />
      <HeroPage />
      {/* <ProjectsPage />
      <SkillsPage />
      <ContactPage /> */}
    </div>
  );
}
