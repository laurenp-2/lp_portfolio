import { useState } from "react";

function Skills() {
  const[java, setJava] = useState(false); 
  const[react, setReact] = useState(false); 
  const[express, setExpress] = useState(false); 
  const[html, setHtml] = useState(false); 
  const[OCaml, setOCaml] = useState(false); 
  const[ml, setMl] = useState(false); 
  const[none, setNone] = useState(true); 

  const showJava = () => {
    setJava(true); 
    setNone(false); 
  }
  const hideJava = () => {
    setJava(false); 
    setNone(true); 
  }

  const showReact = () => {
    setReact(true); 
    setNone(false); 
  }
  const hideReact = () => {
    setReact(false); 
    setNone(true); 
  }

  const showExpress = () => {
    setExpress(true); 
    setNone(false); 
  }
  const hideExpress = () => {
    setExpress(false); 
    setNone(true); 
  }

  const showHtml = () => {
    setHtml(true); 
    setNone(false); 
  }
  const hideHtml = () => {
    setHtml(false); 
    setNone(true); 
  }

  const showOCaml = () => {
    setOCaml(true); 
    setNone(false); 
  }
  const hideOCaml = () => {
    setOCaml(false); 
    setNone(true); 
  }

  const showMl = () => {
    setMl(true); 
    setNone(false); 
  }
  const hideMl = () => {
    setMl(false); 
    setNone(true); 
  }


  return (
    <>
      <div id="rectangle"></div>
      <div className="headers" id="skillsHeader">
        <h1>skills</h1>
        <p>Turning knowledge into innovative solutions</p>
      </div>
      <div className="skillsInfo">
        <div className="skillsLeft"> 
          <h3 onMouseOver={showJava} onMouseLeave={hideJava}>Java</h3>
          <h3 onMouseOver={showReact} onMouseLeave={hideReact}>React.js</h3>
          <h3 onMouseOver={showExpress} onMouseLeave={hideExpress}>Express.js</h3>
          <h3 onMouseOver={showHtml} onMouseLeave={hideHtml}>HTML & CSS</h3>
          <h3 onMouseOver={showOCaml} onMouseLeave={hideOCaml}>OCaml</h3>
          <h3 onMouseOver={showMl} onMouseLeave={hideMl}>Machine learning</h3>
        </div>
        <div className="skillsRight">
          <div id="defaultBlurb">
            {none && (
              <>
              <img src="src/assets/icons/default.png"/>
              <p>I am always striving to develop and expand my skill set. Through classes, projects, and even just supplementary learning, I 
                am always learning more technical skills. Hover over any of the languages to the left to read about my experience with this skill, and 
                how I apply it!
              </p>
              </>
            )}
          </div>
          <div id="javaBlurb">
            {java && (
              <>
              <img src="src/assets/icons/java.png"/>
              <p>I have been programming in Java for four years. </p>
              </>
            )}
          </div>
          <div id="reactBlurb">
            {react && (
              <>
              <img src="src/assets/icons/react.svg"/>
              <p>I have been creating in React.js for the past year—this has become my preferred framework 
                for front-end development due to its flexibility and versatility. Some projects I have used
                React in are SavorStats, _____, and this website!  </p>
              </>
            )}
          </div>
          <div id="expressBlurb">
          {express && (
              <>
              <img src="src/assets/icons/express.png"/>
              <p>express showing</p>
              </>
            )}
          </div>
          <div id="htmlBlurb">
          {html && (
              <>
              <img src="src/assets/icons/web.png"/>
              <p>html showing</p>
              </>
            )}
          </div>
          <div id="OCamlBlurb">
          {OCaml && (
              <>
              <img src="src/assets/icons/ocaml.png"/>
              <p>ocaml showing</p>
              </>
            )}
          </div>
          <div id="MLBlurb">
          {ml && (
              <>
              <img src="src/assets/icons/ml.png"/>
              <p>ml showing</p>
              </>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Skills;
