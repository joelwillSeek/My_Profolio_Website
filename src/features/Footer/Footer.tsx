export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
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
  );
}
