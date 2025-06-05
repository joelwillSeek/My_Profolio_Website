import { useEffect, useState } from "react";
import MobileNavbar from "./componets/MobileNavbar";
import ColorTheme from "../Theme/ColorTheme";
import PrettyButton from "./PrettyButton";

export default function NormalNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("home");

  const sectionIds = ["home", "projects", "skills", "contact"];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minDistance = Infinity;

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top < window.innerHeight) {
            closestSection = id;
            minDistance = distance;
          }
        }
      });

      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (idName: string) => {
    const el = document.getElementById(idName);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-[#FF6B35] flex items-center"
          >
            <i
              style={{ color: ColorTheme.orangeAccentColor }}
              className="fas fa-code mr-2"
            ></i>
            <p style={{ color: ColorTheme.orangeAccentColor }}>
              Eyoel's Portfolio
            </p>
          </a>
          <div className="hidden md:flex space-x-8">
            {/* <a
              href="#home"
              className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
            >
              Home
            </a> */}
            <PrettyButton
              isActive={active == sectionIds[0]}
              label="Home"
              onClick={() => {
                scrollToId("home");
              }}
            />
            <PrettyButton
              isActive={active == sectionIds[1]}
              label="Projects"
              onClick={() => {
                scrollToId("projects");
              }}
            />
            <PrettyButton
              isActive={active == sectionIds[2]}
              label="Skills"
              onClick={() => {
                scrollToId("skills");
              }}
            />
            <PrettyButton
              isActive={active == sectionIds[3]}
              label="Contact"
              onClick={() => {
                scrollToId("contact");
              }}
            />
            {/* <a
              href="#projects"
              className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
            */}
          </div>
          <button
            className="md:hidden text-gray-800 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
      </header>
    </>
  );
}
