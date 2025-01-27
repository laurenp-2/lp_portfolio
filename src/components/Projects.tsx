//import { useState } from "react";

function Projects () {
    // const [ssClick, setSSClick] = useState(false); 
    // const [guiClick, setGuiClick] = useState(false); 

    const openSS = () => {
        // setSSClick(true); 
        return (
            <div className="ssPopup">
                
            </div>
        ); 
    }

    return (
    <>
    <div className="headers" id="projectsHeader">
        <h1>projects</h1>
        <p>projects text thing goes here</p>
    </div>
    <div className="projectCard" onClick={openSS()}>
        <p>Savorstats</p>
    </div>
    </>
)
}

export default Projects; 