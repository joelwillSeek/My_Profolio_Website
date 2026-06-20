"use client";
import { useThemeStore } from "../../core/store";
import { skills } from "./data";
import Image from "next/image";

export default function SkillsPage() {
  const isLightTheme = useThemeStore((state) => state.useLightTheme);
  return (
    <section
      id="skills"
      className={`py-20 ${isLightTheme ? "bg-white" : "bg-dark-nav"} `}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-1.5 items-center flex-row">
          <h2 className="mr-1 text-orange-me text-3xl md:text-4xl font-bold text-center mb-4">
            My
          </h2>
          <h2 className="text-blue-me text-3xl md:text-4xl font-bold text-center mb-4">
            Skills
          </h2>
        </div>
        <p
          className={`${
            isLightTheme ? "text-gray-600" : "text-gray-200"
          }  text-center max-w-2xl mx-auto mb-16`}
        >
          I&apos;ve developed expertise in various technologies and tools throughout
          my career. Here&apos;s an overview of my technical skills and proficiency
          levels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Frontend",
            "Backend",
            "Mobile",
            "Cross Platform",
            "DevOps",
            "Design",
            "Database",
          ].map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );
            if (categorySkills.length === 0) return null;
            return (
              <div
                key={category}
                className={`${
                  isLightTheme ? "bg-gray-50" : "bg-button-background"
                } rounded-lg p-6 shadow-md`}
              >
                <h3 className="text-xl font-bold text-[#1C77C3] mb-6 flex items-center">
                  <i
                    className={`fas ${
                      category === "Frontend"
                        ? "fa-code"
                        : category === "Backend"
                        ? "fa-server"
                        : category === "Mobile"
                        ? "fa-mobile-alt"
                        : category === "DevOps"
                        ? "fa-cloud"
                        : "fa-paint-brush"
                    } mr-2 text-[#FF6B35]`}
                  ></i>
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className=" text-blue-me font-bold flex flex-row justify-start items-st  gap-1.5 ">
                          {skill.name}{" "}
                          {skill.image ? (
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={25}
                              height={25}
                            />
                          ) : (
                            <i
                              className={skill.icon}
                              style={{ fontSize: 20 }}
                            ></i>
                          )}
                        </span>
                        <span className="text-sm text-orange-me">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-[#FF6B35] h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
