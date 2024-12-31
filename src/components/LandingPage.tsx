function LandingPage() {
  const downloadFile = () => {
    window.open("src/assets/Lauren Pothuru Resume.pdf", "_blank");
  };

  return (
    <div className="landingPage">
      <div id="title">
        <h2 className="typed">Hello, I'm Lauren Pothuru. </h2>
        <h2 id="cursor">|</h2>
      </div>

      <div className="landingPageBtns">
        <button id="resumeBtn" onClick={downloadFile}>
          download resume
        </button>
        <a href="#contactsHeader" id="contactBtn">
          contact me
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
