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
        <div className="skillBlurb">
          <div id="javaBlurb">
            {java && (
              <>
              <h1>java showing</h1>
              </>
            )}
          </div>
          <div id="reactBlurb">
            {react && (
              <>
              <h1>react showing</h1>
              </>
            )}
          </div>
          <div id="expressBlurb">
          {express && (
              <>
              <h1>express showing</h1>
              </>
            )}
          </div>
          <div id="htmlBlurb">
          {html && (
              <>
              <h1>html showing</h1>
              </>
            )}
          </div>
          <div id="OCamlBlurb">
          {OCaml && (
              <>
              <h1>ocaml showing</h1>
              </>
            )}
          </div>
          <div id="MLBlurb">
          {ml && (
              <>
              <h1>ml showing</h1>
              </>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Skills;
