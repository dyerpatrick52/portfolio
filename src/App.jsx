import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import HowIWork from "./components/HowIWork";
import HowIAmLearning from "./components/HowIAmLearning";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const navSections = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "how-i-work", label: "How I Work" },
  { id: "learning", label: "Learning" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
];

function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="site-nav">
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="content-wrapper">
        <Header />
        <AboutMe />
        <Timeline />
        <HowIWork />
        <HowIAmLearning />
        <Skills />
        <Projects />
        <CaseStudies />
      </div>
      <Footer />
    </>
  );
}

export default App;
