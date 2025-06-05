const skills = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Python", level: 70, category: "Backend" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  { name: "React Native", level: 80, category: "Mobile" },
  { name: "Flutter", level: 65, category: "Mobile" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
];

export default function SkillsPage() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          I've developed expertise in various technologies and tools throughout
          my career. Here's an overview of my technical skills and proficiency
          levels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Frontend", "Backend", "Mobile", "DevOps", "Design"].map(
            (category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category
              );
              if (categorySkills.length === 0) return null;
              return (
                <div
                  key={category}
                  className="bg-gray-50 rounded-lg p-6 shadow-md"
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
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">
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
            }
          )}
        </div>
      </div>
    </section>
  );
}
