import { useState } from "react";

function Skills() {
  const[java, setJava] = useState(false); 
  const[react, setReact] = useState(false); 
  const[express, setExpress] = useState(false); 
  const[html, setHtml] = useState(false); 
  const[OCaml, setOCaml] = useState(false); 
  const[ml, setMl] = useState(false); 

  return (
    <>
      <div id="rectangle"></div>
      <div className="headers" id="skillsHeader">
        <h1>skills</h1>
        <p>skills text thing goes here</p>
      </div>
      <div className="skillsInfo">
        <div className="skillsLeft"> 
          <h3 onMouseOver={() => setJava(true)} onMouseLeave={() => setJava(false)}>Java</h3>
          <h3 onMouseOver={() => setReact(true)} onMouseLeave={() => setReact(false)}>React.js</h3>
          <h3 onMouseOver={() => setExpress(true)} onMouseLeave={() => setExpress(false)}>Express.js</h3>
          <h3 onMouseOver={() => setHtml(true)} onMouseLeave={() => setHtml(false)}>HTML & CSS</h3>
          <h3 onMouseOver={() => setOCaml(true)} onMouseLeave={() => setOCaml(false)}>OCaml</h3>
          <h3 onMouseOver={() => setMl(true)} onMouseLeave={() => setMl(false)}>Machine learning</h3>
        </div>
        <div className="skillsRight">
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
