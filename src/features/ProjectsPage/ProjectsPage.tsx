"use client";

import { useState } from "react";
import Image from "next/image";
import projectsList, { categoryAsArray, type descriptionType } from "./projects/projectsSimplier";
import ScrambleText from "../../components/ScrambleText";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="relative min-h-screen py-24 px-8 overflow-hidden z-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto relative">

        {/* Section Header */}
        <div className="mb-12 flex items-end gap-4 border-b border-primary/30 pb-4 relative">
          <h2 className="font-headline-lg text-4xl text-on-surface uppercase tracking-tighter">
            <ScrambleText text="WORKS_ARCHIVE" trigger="in-view" speed={40} />
          </h2>
          <span className="font-code-snippet text-primary text-sm mb-1">
            [{filteredProjects.length}_ENTRIES_FOUND]
          </span>
          {/* Neon bottom border accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary" style={{ boxShadow: "0 0 15px #93ccff, 0 0 5px #93ccff" }} />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categoryAsArray.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-label-sm text-[12px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${activeFilter === cat
                ? "border-primary text-primary bg-primary/10 shadow-[0_0_10px_rgba(147,204,255,0.2)]"
                : "border-outline-variant text-outline hover:border-primary/50 hover:text-on-surface"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Scrollable Project List */}
        <div className="relative border border-outline-variant bg-surface/40 backdrop-blur-md p-6 lg:p-8">
          {/* Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-primary" style={{ boxShadow: "-2px -2px 10px rgba(147,204,255,0.3)" }} />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-primary" style={{ boxShadow: "2px 2px 10px rgba(147,204,255,0.3)" }} />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-outline-variant" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-outline-variant" />

          <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-12 custom-scrollbar">
            {filteredProjects.map((project, idx) => (
              <ProjectNode key={project.id} project={project} priority={idx === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectNode({ project, priority = false }: { project: descriptionType; priority?: boolean }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-8 items-start border-b border-outline-variant/50 pb-12 last:border-0 last:pb-0">

      {/* Image Container with Cyberpunk Frame */}
      <div className="relative w-full lg:w-1/2 aspect-video flex-shrink-0 overflow-hidden border border-outline-variant group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none mix-blend-overlay" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
          className="object-cover object-center  group-hover:scale-105 transition-transform duration-700"
        />
        {/* Tech tags overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span key={cat} className="bg-surface/80 backdrop-blur text-primary border border-primary/30 text-[10px] uppercase tracking-widest px-2 py-1 font-label-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-grow w-full">
        <h3 className="font-headline-md text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <p className="font-label-sm text-[10px] text-outline uppercase tracking-widest mb-3">
            TECH_STACK
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-on-surface-variant text-xs font-code-snippet">
                {tech.linksAsIconOrImage ? (
                  <Image src={tech.iconName} alt={tech.label} width={16} height={16} className="opacity-80" style={{ width: "auto", height: "20px" }} />
                ) : (
                  <i className={`${tech.iconName} text-primary opacity-80`} />
                )}
                {tech.label}
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-4 mt-auto">
          {project.links.map((link) => (
            <a
              key={link.linkLabel}
              href={link.uriLink || "#"}
              target={link.uriLink ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`font-label-sm text-[12px] uppercase tracking-widest flex items-center gap-2 px-4 py-2 border transition-all ${link.uriLink
                ? "border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(147,204,255,0.2)]"
                : "border-outline-variant text-outline opacity-50 cursor-not-allowed"
                }`}
            >
              <i className={link.icon} />
              {link.uriLink ? link.linkLabel : "OFFLINE"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
