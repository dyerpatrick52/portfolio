import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import HowIWork from "./components/HowIWork";
import HowIAmLearning from "./components/HowIAmLearning";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="site-nav">
        <a href="#about">About</a>
        <a href="#how-i-work">How I Work</a>
        <a href="#learning">Learning</a>
        <a href="#projects">Projects</a>
        <a href="#case-studies">Case Studies</a>
      </nav>
      <div className="content-wrapper">
        <Header />
        <AboutMe />
        <HowIWork />
        <HowIAmLearning />
        <Projects />
        <CaseStudies />
      </div>
      <Footer />
    </>
  );
}

export default App;
