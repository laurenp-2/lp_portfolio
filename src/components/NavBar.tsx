import { useState } from "react";

function NavBar() {
    const [socialsVisible, setSocialsVisible] = useState(false); 
    const [navLinksVisible, setNavLinksVisible] = useState(false); 

   


    return(
        <>
        <div className="navBar">
        <div className="navText">
            <div className="navLinks" onMouseOver= {() => setNavLinksVisible(true)} onMouseOut={() => setNavLinksVisible(false)}>
            <p>
            Navigation
            </p>
            {navLinksVisible && (
            <div className="linkSection">
                <a href="#skillsHeader">Skills</a>
                <br></br>
                <a href="#projectsHeader">Projects</a>
                <br></br>
                <a href="#experienceHeader">Experience</a>
            </div>
            )}
            </div>

            <div className="socialsLinks" onMouseOver= {() => setSocialsVisible(true)} onMouseOut={() => setSocialsVisible(false)}>
            <p>
            Socials
            </p>
            {socialsVisible && (
            <div className="linkSection">
                <a href="https://www.linkedin.com/in/lauren-pothuru/" target="_blank">LinkedIn</a>
                <br></br>
                <a href="https://github.com/laurenp-2" target="_blank">GitHub</a>
            </div>
            )}
            </div>
           
        </div>
        <hr/> 
        </div>
        </>
    )
}

export default NavBar; 
