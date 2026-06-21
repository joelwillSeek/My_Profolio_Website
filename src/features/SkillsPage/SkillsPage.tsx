"use client";

import { skills } from "./data";
import Image from "next/image";
import ScrambleText from "../../components/ScrambleText";

export default function SkillsPage() {
  return (
    <section id="skills" className="relative min-h-screen py-24 px-8 overflow-hidden z-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto relative space-y-16">

        {/* Section Header */}
        <div className="flex items-end gap-4 border-b border-primary/30 pb-4 relative">
          <h2 className="font-headline-lg text-4xl text-on-surface uppercase tracking-tighter">
            <ScrambleText text="DEVELOPER_PROFILE" trigger="in-view" speed={40} />
          </h2>
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary" style={{ boxShadow: "0 0 15px #93ccff, 0 0 5px #93ccff" }} />
        </div>

        {/* About Me Segment */}
        <div className="relative border border-outline-variant bg-surface/40 backdrop-blur-md p-8 flex flex-col md:flex-row items-center gap-8">
          {/* Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-primary" style={{ boxShadow: "-2px -2px 10px rgba(147,204,255,0.3)" }} />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-primary" style={{ boxShadow: "2px 2px 10px rgba(147,204,255,0.3)" }} />

          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full border-4 border-primary/50 overflow-hidden flex-shrink-0" style={{ boxShadow: "0 0 20px rgba(147,204,255,0.2)" }}>
            <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 pointer-events-none rounded-full" />
            <Image
              src="/images/profile/me.png"
              alt="Eyoel Seleshi"
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-cover object-top"
            />
          </div>

          {/* Profile Description */}
          <div className="flex flex-col flex-grow text-center md:text-left">
            <h3 className="font-headline-md text-2xl text-on-surface mb-2">EYOEL SELESHI</h3>
            <p className="font-code-snippet text-primary text-sm mb-4 tracking-widest uppercase">Lead_Developer</p>
            <p className="font-body-md text-on-surface-variant leading-relaxed max-w-2xl">
              Hi I&apos;m Eyoel Seleshi! I&apos;m a programmer that has been interested in coding since the 8th grade (13 years old).
              Since then, I have been working with computers and developing various projects ranging from enterprise company solutions
              to my own private passion projects.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2 font-label-sm uppercase tracking-widest hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                Check out my works
              </a>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <div className="mb-8 flex items-end gap-4 border-b border-primary/30 pb-4 relative">
            <h2 className="font-headline-lg text-3xl text-on-surface uppercase tracking-tighter">
              <ScrambleText text="TECHNICAL_ARSENAL" trigger="in-view" speed={40} />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Frontend",
              "Backend",
              "Mobile",
              "Cross Platform",
              "DevOps",
              "Design",
              "Database",
            ].map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className="relative border border-outline-variant/50 bg-surface-container-lowest p-6 hover:border-primary/50 transition-colors group"
                >
                  <h3 className="text-lg font-headline-md text-primary mb-6 flex items-center gap-2 uppercase tracking-wide">
                    <i className={`fas ${category === "Frontend" ? "fa-code" :
                      category === "Backend" ? "fa-server" :
                        category === "Mobile" ? "fa-mobile-alt" :
                          category === "DevOps" ? "fa-cloud" :
                            category === "Database" ? "fa-database" :
                              "fa-paint-brush"
                      }`}></i>
                    {category}
                  </h3>

                  <div className="space-y-5">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-on-surface font-code-snippet text-sm flex items-center gap-2">
                            {skill.image ? (
                              <Image src={skill.icon} alt={skill.name} width={16} height={16} className="opacity-80" style={{ width: "20px", height: "auto" }} />
                            ) : (
                              <i className={`${skill.icon} text-primary`}></i>
                            )}
                            {skill.name}
                          </span>
                          <span className="text-xs text-primary font-code-snippet">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-surface-variant h-1 overflow-hidden relative">
                          <div
                            className="bg-primary h-full absolute left-0 top-0 transition-all duration-1000 ease-out group-hover:shadow-[0_0_8px_#93ccff]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
