function Projects () {

    return (
    <>
    <div className="headers" id="projectsHeader">
        <h1>projects</h1>
        <p>projects text thing goes here</p>
    </div>
    <h2 id="guiTitle">Photo Cropping App</h2>
    <div className="guiProject">
       
        <img src="src/assets/gui-walkthrough.gif"/>
        <p>This photo selector app allows users to crop their images in a variety of ways. Users can upload an image from their computer, and then
            make selections from this image. The app allows for a variety of selections: users can use a point to point selector, a spline selector, or 
            a circle selector to manually crop their image.<br/>Additionally, users may use the 'intelligent scissors' selectors to automatically crop their
            photo based on the contours of the image. This is implemented using Djikstra's shortest paths algorithm, and works for color or grayscale images.
            Users are also able to save their cropped image to a directory of their choosing. 
            <br/>This GUI applet was entirely created with Java; unfortunately, as it was created as a class project, its code is not accessible for public 
            use. However, you may try it out here!
        </p>
    </div>
    <div className="ssProject">
        <h2 id="ssTitle">SavorStats</h2>
    </div>
    </>
)
}

export default Projects; 