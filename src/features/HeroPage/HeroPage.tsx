import meImage from "../../assets/me.jpg";
import ColorTheme from "../Theme/ColorTheme";

export default function HeroPage() {
  const scrollToId = (idName: string) => {
    const el = document.getElementById(idName);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
              Hi, I'm <span className="text-[#FF6B35]">Eyoel</span>{" "}
              <span className="text-[#1C77C3]">Seleshi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-lg">
              Full-stack developer specializing in creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <a
              onClick={() => {
                scrollToId("projects");
              }}
              className={`shadow-2xl bg-orange-me  hover:bg-blue-me text-white py-3 px-8 rounded-lg transition-colors duration-300 inline-block font-medium !rounded-button whitespace-nowrap cursor-pointer`}
            >
              View My Work
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={meImage}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
