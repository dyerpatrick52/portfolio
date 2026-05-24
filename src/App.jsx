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

function App() {
  return (
    <>
      <nav className="site-nav">
        <a href="#about">About</a>
        <a href="#timeline">Timeline</a>
        <a href="#how-i-work">How I Work</a>
        <a href="#learning">Learning</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#case-studies">Case Studies</a>
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
