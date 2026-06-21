import NormalNavBar from "../features/Navbar/NavBar";
import HeroPage from "../features/HeroPage/HeroPage";
import ProjectsPage from "../features/ProjectsPage/ProjectsPage";
import SkillsPage from "../features/SkillsPage/SkillsPage";
import ContactPage from "../features/ContactPage/ContactPage";
import BootScreen from "../components/BootScreen";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BootScreen />
      <NormalNavBar />
      <HeroPage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </div>
  );
}
