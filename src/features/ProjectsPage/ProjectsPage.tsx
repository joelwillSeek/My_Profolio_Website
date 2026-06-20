"use client";
import { useState } from "react";
import projectsSimplier, {
  category,
  categoryAsArray,
  type descriptionType,
} from "./projects/projectsSimplier";
import { useThemeStore } from "../../core/store";
import scrollbar from "./scrollbar.module.css";
import Image from "next/image";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(category.all);

  const isLightTheme = useThemeStore((state) => state.useLightTheme);

  const filteredProjects =
    activeFilter === "All"
      ? projectsSimplier
      : projectsSimplier.filter(
        (project) =>
          project.category.filter((i) => i === activeFilter).length > 0
      );

  return (
    <section
      id="projects"
      className={`py-20  ${isLightTheme ? "bg-gray-50" : "bg-dark-nav"} `}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-1.5 items-center flex-row">
          <h2 className="mr-1 text-orange-me text-3xl md:text-4xl font-bold text-center mb-4">
            My
          </h2>
          <h2 className="text-blue-me text-3xl md:text-4xl font-bold text-center mb-4">
            Projects
          </h2>
        </div>

        <p
          className={` text-center max-w-2xl mx-auto mb-12 ${isLightTheme ? "text-gray-600" : "text-gray-200"
            }`}
        >
          Here&apos;s a selection of my recent work. Each project represents my
          commitment to clean code, intuitive design, and solving real-world
          problems.
          <h3 className="font-bold text-red-600 text-center mt-1">
            !Hover on cards to see more description
          </h3>
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categoryAsArray.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`shadow-lg px-6 py-2 rounded-full transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${activeFilter === category
                  ? "bg-[#1C77C3] text-white"
                  : `${isLightTheme
                    ? "bg-white text-gray-700  "
                    : "bg-button-background text-gray-100 "
                  }    border-orange-me border-2 hover:bg-orange-me hover:text-white `
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div
          className="grid grid-flow-col auto-cols-max gap-8 overflow-x-scroll "
          style={scrollbar}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: descriptionType }) {
  const isLightTheme = useThemeStore((state) => state.useLightTheme);
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
        console.log("hi");
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      key={project.id}
      className={`${isLightTheme ? "bg-white" : "bg-button-background"
        } rounded-lg w-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2`}
    >
      <div className="h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1C77C3] mb-2">
          {project.title}
        </h3>
        <div className="flex flex-row gap-1">
          {project.category.map((i) => (
            <h3 key={i} className="text-sm font-bold text-white bg-orange-me mb-2 rounded-4xl p-1 pr-1.5 pl-1.5">
              {i}
            </h3>
          ))}
        </div>

        <p className="text-gray-600 mb-4">
          {hover
            ? project.description
            : project.description.substring(0, 200) + "..."}
        </p>
        <h4 className="text-blue-me font-bold mb-1 ">Tech Stack</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#FF6B35] bg-opacity-10 text-[#fff] font-bold text-sm px-3 py-1 rounded-full flex flex-row  justify-center items-center gap-2"
            >
              {tech.linksAsIconOrImage ? (
                <Image src={tech.iconName} alt={tech.label} width={20} height={20} />
              ) : (
                <i className={tech.iconName as string}></i>
              )}
              {tech.label}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.links.map((item) => (
            <button
              key={item.linkLabel}
              onClick={() => {
                if (item.uriLink.trim().length <= 0) return;
                window.open(item.uriLink, "_blank", "noopener");
              }}
              className="flex justify-between items-center gap-1 duration-300 ease-in-out transition hover:shadow-xl/30 bg-[#1C77C3] hover:bg-orange-me text-white px-4 py-2 rounded text-sm !rounded-button whitespace-nowrap cursor-pointer hover:-translate-y-1 hover:scale-110"
            >
              <i className={item.icon}></i>
              {item.uriLink.trim().length <= 0
                ? "Not Available"
                : item.linkLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
