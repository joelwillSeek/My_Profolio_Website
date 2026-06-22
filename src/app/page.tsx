import NormalNavBar from "../features/Navbar/NavBar";
import HeroPage from "../features/HeroPage/HeroPage";
import ProjectsPage from "../features/ProjectsPage/ProjectsPage";
import SkillsPage from "../features/SkillsPage/SkillsPage";
import ContactPage from "../features/ContactPage/ContactPage";
import BootScreen from "../components/BootScreen";
import BlogPage from "../features/BlogPage/BlogPage";
import BackgroundVideo from "../components/BackgroundVideo";

export default function Home() {
  return (
    <div className="min-h-screen relative z-0">
      <BackgroundVideo />
      <BootScreen />
      <NormalNavBar />
      <HeroPage />
      <ProjectsPage />
      <SkillsPage />
      <BlogPage />
      <ContactPage />
    </div>
  );
}
