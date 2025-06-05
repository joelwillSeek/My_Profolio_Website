export default function MobileNavbar({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="md:hidden bg-white shadow-lg absolute w-full">
      <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
        <a
          href="#home"
          className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#contact"
          className="hover:text-[#1C77C3] transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
