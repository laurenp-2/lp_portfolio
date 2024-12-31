import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Background from "./components/Background";
import LandingPage from "./components/LandingPage";
import "./App.css";
function App() {
  return (
    <>
      <Background />
      <NavBar />
      <LandingPage />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
