import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Experience from "./components/Experience";
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
      {/* <Experience /> */}
      <Contact />
      <div className="footer">
        <div id="credit">
          <p>Icons by&nbsp;</p>
          <a href="https://icons8.com/" target="_blank">
            Icons8
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/lauren-pothuru/" target="_blank">
            <img src="src/assets/icons/linkedin.png" />
          </a>
          <a href="https://github.com/laurenp-2" target="_blank">
            <img src="src/assets/icons/github.png" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
