// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import NormalNavBar from "./features/Navbar/NavBar";

// Add these lines to your index.html file in the <head> section:

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description:
        "A full-featured shopping application with payment integration and real-time inventory management.",
      image:
        "https://readdy.ai/api/search-image?query=modern%20e-commerce%20mobile%20app%20interface%20with%20shopping%20cart%20and%20product%20listings%2C%20clean%20UI%20design%20with%20orange%20and%20blue%20accent%20colors%2C%20high%20quality%20professional%20mockup%20on%20a%20simple%20white%20background&width=600&height=400&seq=1&orientation=landscape",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Stripe"],
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "Productivity dashboard with drag-and-drop task management, analytics, and team collaboration features.",
      image:
        "https://readdy.ai/api/search-image?query=task%20management%20dashboard%20interface%20with%20kanban%20board%2C%20productivity%20metrics%2C%20and%20team%20collaboration%20features%2C%20professional%20UI%20with%20blue%20and%20orange%20accent%20colors%20on%20a%20clean%20white%20background%2C%20high%20quality%20mockup&width=600&height=400&seq=2&orientation=landscape",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description:
        "Health and fitness application with workout plans, progress tracking, and social features.",
      image:
        "https://readdy.ai/api/search-image?query=fitness%20tracking%20mobile%20app%20interface%20showing%20workout%20progress%20charts%2C%20activity%20tracking%2C%20and%20health%20metrics%2C%20modern%20UI%20with%20orange%20and%20blue%20accent%20colors%20on%20a%20clean%20white%20background%2C%20professional%20high%20quality%20mockup&width=600&height=400&seq=3&orientation=landscape",
      category: "Mobile",
      technologies: ["Flutter", "Firebase", "HealthKit"],
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description:
        "Property listing and management platform with virtual tours and mortgage calculator.",
      image:
        "https://readdy.ai/api/search-image?query=real%20estate%20website%20interface%20with%20property%20listings%2C%20virtual%20tour%20features%2C%20and%20mortgage%20calculator%2C%20professional%20UI%20design%20with%20blue%20and%20orange%20accent%20colors%20on%20a%20clean%20white%20background%2C%20high%20quality%20mockup&width=600&height=400&seq=4&orientation=landscape",
      category: "Web",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      id: 5,
      title: "AI Content Generator",
      description:
        "Content creation tool powered by AI for generating marketing copy, blog posts, and social media content.",
      image:
        "https://readdy.ai/api/search-image?query=AI%20content%20generation%20web%20application%20interface%20with%20text%20editor%2C%20content%20suggestions%2C%20and%20marketing%20tools%2C%20modern%20UI%20with%20orange%20and%20blue%20accent%20colors%20on%20a%20clean%20white%20background%2C%20professional%20high%20quality%20mockup&width=600&height=400&seq=5&orientation=landscape",
      category: "Web",
      technologies: ["React", "Python", "TensorFlow"],
    },
    {
      id: 6,
      title: "Food Delivery Service",
      description:
        "On-demand food delivery platform with real-time order tracking and restaurant management.",
      image:
        "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20order%20tracking%2C%20and%20payment%20options%2C%20sleek%20UI%20design%20with%20blue%20and%20orange%20accent%20colors%20on%20a%20clean%20white%20background%2C%20professional%20high%20quality%20mockup&width=600&height=400&seq=6&orientation=landscape",
      category: "Mobile",
      technologies: ["React Native", "Node.js", "MongoDB"],
    },
  ];
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
  const categories = ["All", "Web", "Mobile", "Design"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <NormalNavBar />
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=abstract%20geometric%20background%20with%20subtle%20gradient%20using%20light%20shades%20of%20orange%20and%20blue%2C%20modern%20minimalist%20design%20pattern%2C%20professional%20clean%20look%20suitable%20for%20portfolio%20hero%20section%20with%20text%20space%20on%20left%20side&width=1440&height=800&seq=7&orientation=landscape)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-[#FF6B35]">Alex</span>{" "}
                <span className="text-[#1C77C3]">Johnson</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-lg">
                Full-stack developer specializing in creating beautiful,
                functional, and user-centered digital experiences.
              </p>
              <a
                href="#projects"
                className="bg-[#FF6B35] hover:bg-[#e55a29] text-white py-3 px-8 rounded-lg transition-colors duration-300 inline-block font-medium !rounded-button whitespace-nowrap cursor-pointer"
              >
                View My Work
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20male%20developer%20with%20friendly%20expression%2C%20high%20quality%20portrait%20photo%20with%20neutral%20background%2C%20professional%20lighting%2C%20suitable%20for%20portfolio%20website&width=400&height=400&seq=8&orientation=squarish"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Here's a selection of my recent work. Each project represents my
            commitment to clean code, intuitive design, and solving real-world
            problems.
          </p>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === category
                    ? "bg-[#1C77C3] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C77C3] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="bg-[#1C77C3] hover:bg-[#1a6cb0] text-white px-4 py-2 rounded text-sm !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-eye mr-2"></i>Live Demo
                    </a>
                    <a
                      href="#"
                      className="bg-[#FF6B35] hover:bg-[#e55a29] text-white px-4 py-2 rounded text-sm !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            I've developed expertise in various technologies and tools
            throughout my career. Here's an overview of my technical skills and
            proficiency levels.
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
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out. I'm always open to new challenges and
            collaborations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
                Send Me a Message
              </h3>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#FF6B35] hover:bg-[#e55a29] text-white py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-auto !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-between">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-[#1C77C3]"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">alex.johnson@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-[#1C77C3]"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">San Francisco, California</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-[#1C77C3]"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#FF6B35] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-[#1C77C3] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-[#FF6B35] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-[#1C77C3] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a
                href="#"
                className="text-2xl font-bold text-[#FF6B35] flex items-center"
              >
                <i className="fas fa-code mr-2"></i>
                <span>DevPortfolio</span>
              </a>
              <p className="mt-2 text-gray-400">
                Creating digital experiences that make a difference.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a
                href="#home"
                className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
              >
                Home
              </a>
              <a
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
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#FF6B35] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-[#FF6B35] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-[#FF6B35] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-[#FF6B35] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-[#FF6B35] hover:bg-[#e55a29] text-white p-3 rounded-full transition-colors duration-300 !rounded-button cursor-pointer"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
