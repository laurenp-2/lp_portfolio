function Projects () {

    return (
    <>
    <div className="headers" id="projectsHeader">
        <h1>projects</h1>
        <p>Always committed to delivering high-quality code</p>
    </div>
    
    <div className="guiProject">
    <h2 id="guiTitle">Photo Selector</h2>
        <img src="src/assets/gui-walkthrough.gif"/>
        <div className="projectDescription">
            <p>This photo selector app allows users to crop their images in a variety of ways. Users can upload an image from their computer, and then
                make selections from this image. The app allows for a variety of selections: users can use a point to point selector, a spline selector, or 
                a circle selector to manually crop their image.<br/><br/>Additionally, users may use the 'intelligent scissors' selectors to automatically crop their
                photo based on the contours of the image. This is implemented using Djikstra's shortest paths algorithm, and works for color or grayscale images.
                Users are also able to save their cropped image to a directory of their choosing. 
                <br/><br/>This GUI applet was entirely created with Java; unfortunately, as it was created as a class project, its code is not accessible for public 
                use.
            </p>
            <div className="projectSkills">
                <h4>Java</h4>
                <h4>Data Structures</h4>
                <h4>Raster Graphics</h4>
            </div>
        </div>
        
    </div>
    <div className="ssProject">
    <div className="projectDescription">
            <p>
                SavorStats is a culinary social media web application, where foodies can upload and review their recipes. Users can upload their own food reviews, 
                and view others' reviews on a feed page. Additionally, users can decide to keep their posts visible on the feed page, or private and accesible 
                only on their profile page.<br/><br/>This was developed using React.js and Express.js, and deployed with Firebase.<br/><br/> Check out the source code&nbsp;
                <a href="https://github.com/laurenp-2/savorstats" target="_blank">here!</a>
            </p>
            <div className="projectSkills">
                <h4>React</h4>
                <h4>Typescript</h4>
                <h4>Express.js</h4>
                <h4>Firebase</h4>
            </div>
        </div>
        <div className="ssRight"> 
            <img src="src/assets/savorstats.jpg"/>
            <h2 id="ssTitle">SavorStats</h2>
        </div>
        
    </div>
    </>
)
}

export default Projects; 