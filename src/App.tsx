import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import FeaturedProject from "./components/FeaturedProject";
import FeaturedExp from "./components/FeaturedExp";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionIds = ["about", "projects", "experience", "contact"];
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden scroll-smooth">
      {/* Fixed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-contain object-center z-[-1] bg-black"
      >
        <source
          src="/FilmSpektakel-tenerife-time-lapses-132677-filmsupply.mp4"
          type="video/mp4"
        />
      </video>

      {/* Scroll progress bar */}
      <div className="fixed right-2 top-0 bottom-0 w-1 bg-gray-700 z-30">
        <div
          className="w-full bg-blue-400"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      <header className="fixed top-0 left-0 w-full flex flex-col items-center px-6 py-4 z-20 bg-black/30 backdrop-blur-md">
        {/* Top Row */}
        <div className="w-full relative flex items-center justify-between">
          <DarkModeToggle />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-[Audiowide] tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              NIKHIL MUKHERJEE
            </h1>
          </div>
          <div className="flex space-x-6 items-center text-base">
            <a
              href="mailto:nikhilmukher@umass.edu"
              className="hover:text-blue-400 flex items-center gap-1"
            >
              <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
              nikhilmukher@umass.edu
            </a>
          </div>
        </div>

        {/* Navigation Index */}
        <nav className="w-full mt-4 flex justify-center space-x-8 text-lg uppercase tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === item.id ? "text-blue-400 font-bold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-32 p-6 space-y-6 z-10 relative">
        <section id="about" className="scroll-mt-32">
          <AboutMe />
        </section>
        <section id="projects" className="scroll-mt-32">
          <FeaturedProject />
        </section>
        <section id="experience" className="scroll-mt-32">
          <FeaturedExp />
        </section>
        <section id="contact" className="scroll-mt-32">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
