import { useEffect, useState } from "react";
import MobileNavbar from "./componets/MobileNavbar";
import ColorTheme from "../Theme/ColorTheme";
import PrettyButton from "./PrettyButton";
import { useAppDispatch, useAppSelector } from "../../core/redux/store";
import { setLightTheme } from "../../core/redux/themeSlice";

export default function NormalNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("home");

  const sectionIds = ["home", "projects", "skills", "contact"];

  const isLightTheme = useAppSelector(
    (state) => state.themeSlice.useLightTheme
  );

  const dispatch = useAppDispatch();

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
        className={`${
          isLightTheme ? "bg-white" : `bg-button-background`
        }  fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-5 sm:bg-transparent"
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
            <div
              className={`hover:text-[#1C77C3] flex gap-1.5 flex-row justify-center items-center border-b-2 ${
                isLightTheme ? "bg-white" : "bg-dark-nav"
              }  transition-colors duration-600 font-medium cursor-pointer p-2 rounded-md shadow-md ${
                isLightTheme ? "text-black" : "text-white"
              }`}
              onMouseDown={() => {
                dispatch(setLightTheme(!isLightTheme));
              }}
            >
              <i
                className="fa-solid fa-sun "
                style={{ color: isLightTheme ? "black" : "white" }}
              ></i>
              {isLightTheme ? "Light" : "Dark"}
            </div>
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
