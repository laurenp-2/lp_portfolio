import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import "./App.css";
import Background from "./components/Background";
function App() {

  
  return (
    <>
    <Background/>
      <NavBar/>
      <div className="landingPage">
        <h2 className="typed">Hello, I'm Lauren Pothuru. </h2>
        <div className="landingPageBtns">
          <button id="resumeBtn">download resume</button>
          <a href="#contactsHeader" id="contactBtn">contact me</a>
        </div>
      </div>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
